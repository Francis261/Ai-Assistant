#!/usr/bin/env node

import readline from "readline"
import fetch from "node-fetch"

const ENGINE_URL = process.env.ENGINE_URL || "http://127.0.0.1:3001"
const OLLAMA = process.env.OLLAMA_URL || "http://127.0.0.1:11434/api"
const MODEL = process.env.MODEL || "granite3.1-dense:8b"
const STORAGE = process.env.STORAGE || "default"

async function postJSON(url,body){
  const res = await fetch(url,{ method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(body) })
  if(!res.ok){
    const t = await res.text()
    throw new Error(`${res.status} ${t}`)
  }
  return res.json()
}

async function generate(prompt){
  const out = await postJSON(`${OLLAMA}/generate`,{ model: MODEL, prompt, stream:false })
  return out.response || ""
}

function buildPrompt(question,docs){
  const ctx = docs.length
    ? docs.map((d,i)=>`[${i+1}] ${d.source}\n${d.chunk_text}`).join("\n\n")
    : "(no context)"

  return `Answer using the retrieved context first. If unsure, say so.\n\nContext:\n${ctx}\n\nQuestion: ${question}\nAnswer:`
}

async function ask(question){
  const q = await postJSON(`${ENGINE_URL}/query`,{ query: question, storage: STORAGE, top_k: 6 })
  const prompt = buildPrompt(question,q.results || [])
  const answer = await generate(prompt)

  console.log("\nRetrieved:")
  for(const r of q.results || []){
    console.log(`- score=${Number(r.score).toFixed(4)} source=${r.source}`)
  }
  console.log("\nAnswer:\n"+answer+"\n")
}

const rl = readline.createInterface({ input:process.stdin, output:process.stdout })
console.log(`AI app ready (storage=${STORAGE}). Type 'exit' to quit.`)

function loop(){
  rl.question("> ",async(q)=>{
    if(q.trim().toLowerCase()==="exit"){ rl.close(); return }
    try{ await ask(q) }
    catch(err){ console.error("Error:",err.message) }
    loop()
  })
}

loop()
