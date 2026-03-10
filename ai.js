#!/usr/bin/env node

import fs from "fs"
import path from "path"
import readline from "readline"
import Database from "better-sqlite3"
import { globSync } from "glob"
import chalk from "chalk"
import pLimit from "p-limit"
import simpleGit from "simple-git"
import fetch from "node-fetch"

const MODEL = "granite3.1-dense:8b"
const EMBED_MODEL = "nomic-embed-text"
const OLLAMA = "http://localhost:11434/api"
const DATA_DIR = "./datas"
const CHUNK_SIZE = 800
const TOP_K = 6
const CHAT_HISTORY_LIMIT = 6

const limit = pLimit(5)
const db = new Database("vectors.db")

// Create table
db.exec(`
CREATE TABLE IF NOT EXISTS vectors(
  id INTEGER PRIMARY KEY,
  file TEXT,
  chunk TEXT,
  embedding TEXT
)
`)

/* -------------------------
 OLLAMA API HELPERS
------------------------- */
async function postJSON(url, body){
  const res = await fetch(url,{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify(body)
  })

  if(!res.ok){
    const text = await res.text()
    throw new Error(`${res.status} ${text}`)
  }

  return res.json()
}

/* -------------------------
 OLLAMA EMBEDDING
------------------------- */
async function embed(text){
  try{
    const legacy = await postJSON(`${OLLAMA}/embeddings`,{ model: EMBED_MODEL, prompt: text })
    if(Array.isArray(legacy.embedding)){
      return legacy.embedding
    }
  }
  catch{}

  const modern = await postJSON(`${OLLAMA}/embed`,{ model: EMBED_MODEL, input: text })
  if(Array.isArray(modern.embeddings) && Array.isArray(modern.embeddings[0])){
    return modern.embeddings[0]
  }

  throw new Error("Embedding response missing vector")
}

/* -------------------------
 OLLAMA GENERATE
------------------------- */
async function generate(prompt){
  const data = await postJSON(`${OLLAMA}/generate`,{
    model: MODEL,
    prompt,
    stream:false
  })

  if(typeof data.response !== "string"){
    throw new Error("Generate response missing text")
  }

  return data.response
}

/* -------------------------
 SIMILARITY
------------------------- */
function similarity(a,b){
  if(!Array.isArray(a) || !Array.isArray(b) || a.length===0 || b.length===0){
    return -1
  }

  const size = Math.min(a.length,b.length)
  let dot=0, magA=0, magB=0
  for(let i=0;i<size;i++){
    dot+=a[i]*b[i]
    magA+=a[i]*a[i]
    magB+=b[i]*b[i]
  }

  magA=Math.sqrt(magA)
  magB=Math.sqrt(magB)
  if(magA===0 || magB===0){
    return -1
  }

  return dot/(magA*magB)
}

function keywordScore(query,text){
  const qTokens = query.toLowerCase().split(/\W+/).filter(t=>t.length>2)
  if(qTokens.length===0){ return 0 }

  const lower = text.toLowerCase()
  let hits = 0
  for(const token of qTokens){
    if(lower.includes(token)){ hits++ }
  }
  return hits / qTokens.length
}

/* -------------------------
 CHUNK TEXT
------------------------- */
function chunkText(text,size=CHUNK_SIZE){
  const chunks=[]
  let i=0
  while(i<text.length){
    chunks.push(text.slice(i,i+size))
    i+=size
  }
  return chunks
}

/* -------------------------
 FILE FILTER
------------------------- */
const allowedExt = [".md",".txt",".js",".ts",".py",".json",".html",".css",".yaml",".yml"]

function validFile(file){
  return allowedExt.includes(path.extname(file).toLowerCase())
}

/* -------------------------
 SCAN FILES (source-only)
------------------------- */
function scanFiles(folder){
  const full = path.join(DATA_DIR, folder)
  let files = globSync(`${full}/**/*`, { nodir:true })

  files = files.filter(file => {
    const extOk = validFile(file)
    const pathLower = file.toLowerCase()

    const junkFolder = pathLower.includes("/test/") ||
                       pathLower.includes("/deps/") ||
                       pathLower.includes("/benchmark/") ||
                       pathLower.includes("/tools/") ||
                       pathLower.includes("/docsify") ||
                       pathLower.includes("/doc/notes")

    const includeFolder = pathLower.includes("/src/") ||
                          pathLower.includes("/lib/") ||
                          pathLower.includes("/doc/") ||
                          pathLower.includes("/datas/") ||
                          extOk

    return extOk && !junkFolder && includeFolder
  })

  console.log(chalk.green(`Found ${files.length} relevant files for ingestion.`))
  return files
}

/* -------------------------
 INGEST
------------------------- */
async function ingest(folder,{reset=false}={}){
  if(reset){
    db.exec(`DELETE FROM vectors`)
    console.log(chalk.yellow("Existing vectors cleared"))
  }

  const files = scanFiles(folder)

  for(const file of files){
    console.log(chalk.yellow("Reading:"),file)
    const text = fs.readFileSync(file,"utf8")
    const chunks = chunkText(text)

    await Promise.all(
      chunks.map(chunk =>
        limit(async()=>{
          try{
            const emb = await embed(chunk)
            db.prepare(`
              INSERT INTO vectors(file,chunk,embedding)
              VALUES(?,?,?)
            `).run(file,chunk,JSON.stringify(emb))
          }
          catch(err){
            console.log(chalk.red(`Embedding failed for ${file}: ${err.message}`))
          }
        })
      )
    )
  }

  console.log(chalk.green("Ingestion finished"))
}

async function ingestAll({reset=false}={}){
  if(reset){
    db.exec(`DELETE FROM vectors`)
    console.log(chalk.yellow("Existing vectors cleared"))
  }

  const f = folders()
  if(f.length===0){
    console.log("No folders inside datas")
    return
  }

  for(const folder of f){
    console.log(chalk.cyan(`\nIngesting folder: ${folder}`))
    await ingest(folder)
  }
}

/* -------------------------
 SEARCH
------------------------- */
function keywordSearch(query,k=4){
  const rows = db.prepare(`SELECT file,chunk FROM vectors`).all()
  const scored = rows.map(r=>({
    file:r.file,
    chunk:r.chunk,
    score: keywordScore(query,r.chunk)
  }))
  .filter(r=>r.score>0)
  .sort((a,b)=>b.score-a.score)
  return scored.slice(0,k)
}

async function search(query,k=4){
  const rows = db.prepare(`SELECT file,chunk,embedding FROM vectors`).all()
  if(rows.length===0){
    return []
  }

  try{
    const qEmb = await embed(query)
    const scored = rows.map(r=>{
      let emb
      try{
        emb = JSON.parse(r.embedding)
      }
      catch{
        return null
      }

      const score = similarity(qEmb,emb)
      if(score<0){
        return null
      }

      return { file: r.file, chunk: r.chunk, score }
    }).filter(Boolean)

    scored.sort((a,b)=>b.score - a.score)
    const top = scored.slice(0,k)

    if(top.length===0){
      console.log(chalk.yellow("Vector search returned no matches. Falling back to keyword search."))
      return keywordSearch(query,k)
    }

    return top
  }
  catch(err){
    console.log(chalk.yellow(`Vector search unavailable (${err.message}). Falling back to keyword search.`))
    return keywordSearch(query,k)
  }
}

/* -------------------------
 RAG
------------------------- */
function formatHistory(history){
  if(history.length===0){ return "(none)" }
  return history.map(h=>`${h.role.toUpperCase()}: ${h.content}`).join("\n")
}

function buildPrompt({question,docs,history}){
  const context = docs.length>0
    ? docs.map((d,i)=>`[${i+1}] File: ${d.file}\n${d.chunk}`).join("\n\n")
    : "(no matching context found)"

  return `You are a precise coding assistant. Use the context snippets first.
Rules:
- If answer is in context, cite snippet numbers like [1], [2].
- If uncertain, say what is missing.
- Keep answer concise but complete.

Conversation so far:
${formatHistory(history.slice(-CHAT_HISTORY_LIMIT))}

Context snippets:
${context}

User question:
${question}

Answer:`
}

async function prepareRAG(question,history=[]){
  const docs = await search(question,TOP_K)
  const prompt = buildPrompt({question,docs,history})
  return { prompt, docs }
}

async function askRAG(question,history=[]){
  const payload = await prepareRAG(question,history)
  const answer = await generate(payload.prompt)
  return { answer, prompt: payload.prompt, docs: payload.docs }
}

/* -------------------------
 CHAT
------------------------- */
function chat(){
  const rl = readline.createInterface({ input:process.stdin, output:process.stdout })
  const history = []
  let active = true
  rl.on("close",()=>{ active=false })
  console.log(chalk.cyan("\nAI Chat Mode (type exit)\n"))

  function ask(){
    if(!active){ return }
    rl.question("> ",async(q)=>{
      if(q==="exit"){ rl.close(); return }

      try{
        const prepared = await prepareRAG(q,history)

        console.log(chalk.magenta("\n--- Prompt sent to model ---\n"))
        console.log(chalk.gray(prepared.prompt))

        console.log(chalk.magenta("\n--- Retrieved context ---\n"))
        if(prepared.docs.length===0){
          console.log(chalk.yellow("No context found."))
        }
        else{
          prepared.docs.forEach((d,i)=>{
            console.log(chalk.yellow(`[${i+1}] ${d.file} (score=${d.score.toFixed(4)})`))
            console.log(d.chunk.slice(0,220).replace(/\n/g," ")+"...")
          })
        }

        const answer = await generate(prepared.prompt)

        console.log(chalk.green("\n--- Model answer ---\n"))
        console.log(chalk.green(answer+"\n"))

        history.push({ role:"user", content:q })
        history.push({ role:"assistant", content:answer })
      }
      catch(err){
        console.log(chalk.red(`Chat failed: ${err.message}`))
      }

      if(active){
        ask()
      }
    })
  }

  ask()
}

/* -------------------------
 SEARCH CLI
------------------------- */
async function searchCLI(q){
  if(!q){
    console.log(chalk.red("Please provide a query: node ai.js search \"your query\""))
    return
  }

  const res = await search(q)
  if(res.length===0){
    console.log(chalk.yellow("No matching chunks found. Ingest data first."))
    return
  }

  for(const r of res){
    console.log("\nFile:",chalk.yellow(r.file))
    console.log(r.chunk.slice(0,300))
    console.log("Score:",r.score)
  }
}

/* -------------------------
 OPEN FILE
------------------------- */
function openFile(file){
  if(!fs.existsSync(file)){ console.log("File not found"); return }
  const text = fs.readFileSync(file,"utf8")
  console.log(text.slice(0,2000))
}

/* -------------------------
 STATS
------------------------- */
function stats(){
  const count = db.prepare(`SELECT COUNT(*) as c FROM vectors`).get()
  console.log("Total chunks:",count.c)
}

/* -------------------------
 LIST FOLDERS
------------------------- */
function folders(){
  if(!fs.existsSync(DATA_DIR)){ fs.mkdirSync(DATA_DIR) }
  return fs.readdirSync(DATA_DIR)
           .filter(f=>fs.statSync(path.join(DATA_DIR,f)).isDirectory())
}

/* -------------------------
 INGEST CLI
------------------------- */
async function ingestCLI(){
  const f = folders()
  if(f.length===0){ console.log("No folders inside datas"); return }

  console.log("\nSelect folder:\n")
  f.forEach((v,i)=>{ console.log(`${i+1}. ${v}`) })

  const rl = readline.createInterface({ input:process.stdin, output:process.stdout })
  rl.question("\nEnter number: ", async(n)=>{
    const folder = f[parseInt(n)-1]
    if(!folder){ console.log("Invalid selection"); rl.close(); return }
    await ingest(folder)
    rl.close()
  })
}

/* -------------------------
 CLONE REPO
------------------------- */
async function cloneRepo(url){
  const name = url.split("/").pop().replace(".git","")
  const target = `${DATA_DIR}/${name}`
  if(fs.existsSync(target)){ console.log("Repo already exists"); return }

  console.log(chalk.yellow("Cloning repository..."))
  await simpleGit().clone(url,target)
  console.log(chalk.green("Clone complete"))
}

/* -------------------------
 MAIN CLI
------------------------- */
const cmd = process.argv[2]

if(cmd==="clone"){
  const url = process.argv[3]
  cloneRepo(url)
}
else if(cmd==="ingest"){
  const folder = process.argv[3]
  const reset = process.argv.includes("--reset")

  if(folder){
    ingest(folder,{reset})
  }
  else{
    ingestCLI()
  }
}
else if(cmd==="ingest-all"){
  const reset = process.argv.includes("--reset")
  ingestAll({reset})
}
else if(cmd==="chat"){
  chat()
}
else if(cmd==="search"){
  const q = process.argv.slice(3).join(" ")
  searchCLI(q)
}
else if(cmd==="open"){
  openFile(process.argv[3])
}
else if(cmd==="stats"){
  stats()
}
else{
  console.log(`
Commands:

node ai.js clone <repo_url>
node ai.js ingest
node ai.js ingest <folder> [--reset]
node ai.js ingest-all [--reset]
node ai.js chat
node ai.js search "query"
node ai.js open <file>
node ai.js stats
  `)
}
