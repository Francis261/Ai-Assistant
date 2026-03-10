#!/usr/bin/env node

import fs from "fs"
import os from "os"
import path from "path"
import express from "express"
import { globSync } from "glob"
import pLimit from "p-limit"
import simpleGit from "simple-git"
import fetch from "node-fetch"
import pg from "pg"

const { Pool } = pg

function loadEnvFile(filePath){
  if(!fs.existsSync(filePath)){ return }
  const lines = fs.readFileSync(filePath,"utf8").split(/\r?\n/)
  for(const line of lines){
    const trimmed = line.trim()
    if(!trimmed || trimmed.startsWith("#")){ continue }
    const idx = trimmed.indexOf("=")
    if(idx<=0){ continue }
    const key = trimmed.slice(0,idx).trim()
    const val = trimmed.slice(idx+1).trim()
    if(!(key in process.env)){
      process.env[key] = val
    }
  }
}

loadEnvFile(path.resolve(".env.engine"))

const PORT = Number(process.env.ENGINE_PORT || 3001)
const OLLAMA = process.env.OLLAMA_URL || "http://127.0.0.1:11434/api"
const EMBED_MODEL = process.env.EMBED_MODEL || "nomic-embed-text"
const POSTGRES_URL = process.env.POSTGRES_URL || "postgresql://postgres:postgres@127.0.0.1:5432/postgres"
const DBS_DIR = path.resolve("./dbs")

const DEFAULT_CHUNK_SIZE = 900
const DEFAULT_CHUNK_OVERLAP = 150
const DEFAULT_TOP_K = 8
const DEFAULT_CANDIDATE_MULTIPLIER = 6
const RERANK_MODEL = process.env.RERANK_MODEL || "bge-reranker-base"
const ENABLE_RERANK_DEFAULT = process.env.ENABLE_RERANK_DEFAULT !== "false"

function parseBool(value,defaultValue){
  if(value === undefined || value === null){ return defaultValue }
  if(typeof value === "boolean"){ return value }
  if(typeof value === "string"){
    const v = value.trim().toLowerCase()
    if(v === "true") return true
    if(v === "false") return false
  }
  return defaultValue
}

const pool = new Pool({ connectionString: POSTGRES_URL })
const app = express()
const limit = pLimit(8)

app.use(express.json({ limit: "20mb" }))
if(!fs.existsSync(DBS_DIR)){ fs.mkdirSync(DBS_DIR,{ recursive:true }) }

function assert(condition,msg){ if(!condition) throw new Error(msg) }

function sanitizeStorage(storage){
  assert(typeof storage === "string" && storage.length>0,"storage is required")
  assert(/^[a-zA-Z0-9_-]+$/.test(storage),"storage allows only letters, numbers, _ and -")
  return storage.toLowerCase().replace(/-/g,"_")
}

function tableName(storage){
  return `vectors_${sanitizeStorage(storage)}`
}

function storageConfigPath(storage){
  return path.join(DBS_DIR,`${sanitizeStorage(storage)}.json`)
}

function chunkText(text,size=DEFAULT_CHUNK_SIZE,overlap=DEFAULT_CHUNK_OVERLAP){
  const chunks=[]
  let i=0
  const step = Math.max(1,size-overlap)
  while(i<text.length){
    chunks.push(text.slice(i,i+size))
    i+=step
  }
  return chunks.filter(c=>c.trim().length>0)
}

const allowedExt = [".md", ".txt", ".js", ".ts", ".py", ".json", ".html", ".css", ".yaml", ".yml", ".sql", ".go", ".java", ".cpp", ".c", ".rs"]

function listFilesFromPath(target){
  const stat = fs.statSync(target)
  if(stat.isFile()) return [target]

  const files = globSync(`${target}/**/*`,{ nodir:true })
  return files.filter(f=>allowedExt.includes(path.extname(f).toLowerCase()))
}

async function postJSON(url,body){
  const res = await fetch(url,{ method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(body) })
  if(!res.ok){
    const text = await res.text()
    throw new Error(`${res.status} ${text}`)
  }
  return res.json()
}

async function embed(text){
  try{
    const legacy = await postJSON(`${OLLAMA}/embeddings`,{ model: EMBED_MODEL, prompt: text })
    if(Array.isArray(legacy.embedding)) return legacy.embedding
  }
  catch{}

  const modern = await postJSON(`${OLLAMA}/embed`,{ model: EMBED_MODEL, input: text })
  if(Array.isArray(modern.embeddings) && Array.isArray(modern.embeddings[0])) return modern.embeddings[0]
  throw new Error("Embedding response missing vector")
}

async function rerank(query,candidates,topN){
  if(candidates.length===0){ return [] }

  const docs = candidates.map(c=>c.chunk_text)
  const payload = {
    model: RERANK_MODEL,
    query,
    documents: docs,
    top_n: Math.min(topN,candidates.length)
  }

  const out = await postJSON(`${OLLAMA}/rerank`,payload)
  if(!Array.isArray(out.results)){
    throw new Error("Rerank response missing results")
  }

  const ranked = []
  for(const item of out.results){
    if(typeof item.index !== "number"){ continue }
    const base = candidates[item.index]
    if(!base){ continue }
    ranked.push({
      ...base,
      rerank_score: Number(item.relevance_score ?? item.score ?? 0),
      retrieval_method: "vector_hnsw+rerank"
    })
  }

  return ranked
}

function vectorLiteral(arr){
  return `[${arr.join(",")}]`
}

async function ensureCoreTables(){
  await pool.query("CREATE EXTENSION IF NOT EXISTS vector")
  await pool.query(`
    CREATE TABLE IF NOT EXISTS vector_storages(
      storage TEXT PRIMARY KEY,
      table_name TEXT NOT NULL,
      dimensions INTEGER NOT NULL,
      created_at TIMESTAMPTZ DEFAULT now(),
      updated_at TIMESTAMPTZ DEFAULT now()
    )
  `)
}

async function ensureStorage(storage,dimensions){
  const tName = tableName(storage)
  await pool.query(`
    CREATE TABLE IF NOT EXISTS ${tName}(
      id BIGSERIAL PRIMARY KEY,
      source TEXT NOT NULL,
      chunk_text TEXT NOT NULL,
      chunk_index INTEGER NOT NULL,
      metadata JSONB DEFAULT '{}'::jsonb,
      embedding vector(${dimensions}) NOT NULL,
      created_at TIMESTAMPTZ DEFAULT now()
    )
  `)

  await pool.query(`
    CREATE INDEX IF NOT EXISTS ${tName}_embedding_hnsw
    ON ${tName}
    USING hnsw (embedding vector_cosine_ops)
  `)

  await pool.query(`
    INSERT INTO vector_storages(storage,table_name,dimensions)
    VALUES($1,$2,$3)
    ON CONFLICT(storage) DO UPDATE
    SET table_name=EXCLUDED.table_name,
        dimensions=EXCLUDED.dimensions,
        updated_at=now()
  `,[sanitizeStorage(storage),tName,dimensions])

  fs.writeFileSync(storageConfigPath(storage),JSON.stringify({ storage:sanitizeStorage(storage), table:tName, dimensions, updatedAt:new Date().toISOString() },null,2))
  return tName
}

async function resolveSource(ingestFrom){
  assert(typeof ingestFrom === "string" && ingestFrom.trim().length>0,"ingest_from must be non-empty string")
  const input = ingestFrom.trim()

  if(input.startsWith("github:") || (input.includes("github.com") && input.endsWith(".git"))){
    const repo = input.replace(/^github:/,"")
    const temp = fs.mkdtempSync(path.join(os.tmpdir(),"rag-repo-"))
    await simpleGit().clone(repo,temp)
    const files = listFilesFromPath(temp)
    return { type:"github", value:repo, files, cleanup:()=>fs.rmSync(temp,{ recursive:true, force:true }) }
  }

  if(fs.existsSync(input)){
    const files = listFilesFromPath(input)
    return { type:"path", value:path.resolve(input), files, cleanup:()=>{} }
  }

  return { type:"text", value:input, files:[], cleanup:()=>{} }
}

async function ingestPayload(payload){
  const storage = sanitizeStorage(payload.storage)
  const { ingest_from: ingestFrom } = payload
  assert(ingestFrom,"ingest_from is required")

  const chunkSize = Number(payload.chunk_size || DEFAULT_CHUNK_SIZE)
  const chunkOverlap = Number(payload.chunk_overlap || DEFAULT_CHUNK_OVERLAP)

  const source = await resolveSource(ingestFrom)
  const chunks = []

  if(source.type === "text"){
    chunkText(source.value,chunkSize,chunkOverlap).forEach((chunk,idx)=>{
      chunks.push({ source:"direct_text", chunk, chunkIndex:idx, metadata:{ sourceType:"text" } })
    })
  }
  else{
    for(const file of source.files){
      let text
      try{ text = fs.readFileSync(file,"utf8") }
      catch{ continue }
      chunkText(text,chunkSize,chunkOverlap).forEach((chunk,idx)=>{
        chunks.push({ source:file, chunk, chunkIndex:idx, metadata:{ sourceType:source.type } })
      })
    }
  }

  assert(chunks.length>0,"No ingestible text chunks found")

  const firstEmbedding = await embed(chunks[0].chunk)
  const dimensions = firstEmbedding.length
  const tName = await ensureStorage(storage,dimensions)

  let inserted = 0
  const embeddedChunks = []

  await Promise.all(chunks.map(c=>limit(async()=>{
    const embedding = c.chunkIndex===0 && c.source===chunks[0].source && c.chunk===chunks[0].chunk
      ? firstEmbedding
      : await embed(c.chunk)
    embeddedChunks.push({ ...c, embedding })
  })))

  for(let offset=0; offset<embeddedChunks.length; offset+=64){
    const slice = embeddedChunks.slice(offset,offset+64)
    const values = []
    const params = []
    let i=1
    for(const item of slice){
      values.push(`($${i++},$${i++},$${i++},$${i++},$${i++}::vector)`)
      params.push(item.source,item.chunk,item.chunkIndex,JSON.stringify(item.metadata),vectorLiteral(item.embedding))
    }
    await pool.query(`INSERT INTO ${tName}(source,chunk_text,chunk_index,metadata,embedding) VALUES ${values.join(",")}` , params)
    inserted += slice.length
  }

  source.cleanup()

  return { storage, table:tName, dimensions, inserted, chunk_size:chunkSize, chunk_overlap:chunkOverlap }
}

async function queryPayload(payload){
  const storage = sanitizeStorage(payload.storage)
  const query = payload.query
  assert(typeof query === "string" && query.trim().length>0,"query is required")

  const topK = Math.max(1,Math.min(Number(payload.top_k || DEFAULT_TOP_K),100))
  const candidateK = Math.max(topK, Math.min(1000, Number(payload.candidate_k || (topK * DEFAULT_CANDIDATE_MULTIPLIER))))
  const rerankEnabled = parseBool(payload.enable_rerank, ENABLE_RERANK_DEFAULT)

  const tName = tableName(storage)
  const emb = await embed(query)
  const rows = await pool.query(
    `SELECT id,source,chunk_text,chunk_index,metadata, 1 - (embedding <=> $1::vector) AS score
     FROM ${tName}
     ORDER BY embedding <=> $1::vector
     LIMIT $2`,
    [vectorLiteral(emb), candidateK]
  )

  let results = rows.rows.slice(0,topK).map(r=>({
    ...r,
    rerank_score: null,
    retrieval_method: "vector_hnsw"
  }))
  let rerankApplied = false
  let rerankError = null

  if(rerankEnabled && rows.rowCount>1){
    try{
      const reranked = await rerank(query,rows.rows,topK)
      if(reranked.length>0){
        results = reranked
        rerankApplied = true
      }
    }
    catch(err){
      rerankError = err.message
    }
  }

  return {
    storage,
    top_k: topK,
    candidate_k: candidateK,
    rerank_model: RERANK_MODEL,
    rerank_enabled: rerankEnabled,
    rerank_applied: rerankApplied,
    rerank_error: rerankError,
    count: results.length,
    results
  }
}

app.get("/health", async(_req,res)=>{
  try{
    await ensureCoreTables()
    await pool.query("SELECT 1")
    res.json({ status:"ok" })
  }
  catch(err){
    res.status(500).json({ status:"error", error:err.message })
  }
})

app.get("/storages", async(_req,res,next)=>{
  try{
    await ensureCoreTables()
    const rows = await pool.query("SELECT storage,table_name,dimensions,created_at,updated_at FROM vector_storages ORDER BY updated_at DESC")
    res.json({ storages: rows.rows })
  }
  catch(err){ next(err) }
})

app.post("/ingest", async(req,res,next)=>{
  try{
    await ensureCoreTables()
    const result = await ingestPayload(req.body || {})
    res.json({ ok:true, ...result })
  }
  catch(err){ next(err) }
})

app.post("/query", async(req,res,next)=>{
  try{
    await ensureCoreTables()
    const result = await queryPayload(req.body || {})
    res.json({ ok:true, ...result })
  }
  catch(err){ next(err) }
})

app.use((err,_req,res,_next)=>{
  const msg = err?.message || "Unknown error"
  const status = msg.includes("password authentication failed") ? 503 : 400
  res.status(status).json({ ok:false, error: msg })
})

app.listen(PORT,()=>{
  console.log(`Vector engine listening on http://localhost:${PORT}`)
})
