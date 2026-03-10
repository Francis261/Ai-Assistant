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
 OLLAMA EMBEDDING
------------------------- */
async function embed(text){
  const res = await fetch(`${OLLAMA}/embeddings`,{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({model: EMBED_MODEL, prompt: text})
  })
  const data = await res.json()
  return data.embedding
}

/* -------------------------
 OLLAMA GENERATE
------------------------- */
async function generate(prompt){
  const res = await fetch(`${OLLAMA}/generate`,{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({model: MODEL, prompt, stream:false})
  })
  const data = await res.json()
  return data.response
}

/* -------------------------
 SIMILARITY
------------------------- */
function similarity(a,b){
  let dot=0, magA=0, magB=0
  for(let i=0;i<a.length;i++){
    dot+=a[i]*b[i]
    magA+=a[i]*a[i]
    magB+=b[i]*b[i]
  }
  magA=Math.sqrt(magA)
  magB=Math.sqrt(magB)
  return dot/(magA*magB)
}

/* -------------------------
 CHUNK TEXT
------------------------- */
function chunkText(text,size=800){
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

    // skip junk folders
    const junkFolder = pathLower.includes("/test/") ||
                       pathLower.includes("/deps/") ||
                       pathLower.includes("/benchmark/") ||
                       pathLower.includes("/tools/") ||
                       pathLower.includes("/docsify") ||
                       pathLower.includes("/doc/notes")

    // only include source folders or main docs
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
async function ingest(folder){
  const files = scanFiles(folder)

  for(const file of files){
    console.log(chalk.yellow("Reading:"),file)
    const text = fs.readFileSync(file,"utf8")
    const chunks = chunkText(text)

    await Promise.all(
      chunks.map(chunk =>
        limit(async()=>{
          const emb = await embed(chunk)
          db.prepare(`
            INSERT INTO vectors(file,chunk,embedding)
            VALUES(?,?,?)
          `).run(file,chunk,JSON.stringify(emb))
        })
      )
    )
  }
  console.log(chalk.green("Ingestion finished"))
}

/* -------------------------
 SEARCH
------------------------- */
async function search(query,k=4){
  const qEmb = await embed(query)
  const rows = db.prepare(`SELECT file,chunk,embedding FROM vectors`).all()

  const scored = rows.map(r=>{
    const emb = JSON.parse(r.embedding)
    return { file: r.file, chunk: r.chunk, score: similarity(qEmb,emb) }
  })

  scored.sort((a,b)=>b.score - a.score)
  return scored.slice(0,k)
}

/* -------------------------
 RAG
------------------------- */
async function askRAG(question){
  const docs = await search(question,4)
  let context = ""
  if(docs.length>0){
    context = docs.map(d=>`
File: ${d.file}

${d.chunk}
    `).join("\n")
  }
  const prompt = `
Use the context to answer the question.

${context}

Question: ${question}

Answer:
  `
  return generate(prompt)
}

/* -------------------------
 CHAT
------------------------- */
function chat(){
  const rl = readline.createInterface({ input:process.stdin, output:process.stdout })
  console.log(chalk.cyan("\nAI Chat Mode (type exit)\n"))

  function ask(){
    rl.question("> ",async(q)=>{
      if(q==="exit"){ rl.close(); return }
      const res = await askRAG(q)
      console.log(chalk.green("\n"+res+"\n"))
      ask()
    })
  }
  ask()
}

/* -------------------------
 SEARCH CLI
------------------------- */
async function searchCLI(q){
  const res = await search(q)
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
  ingestCLI()
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
node ai.js chat
node ai.js search "query"
node ai.js open <file>
node ai.js stats
  `)
}
