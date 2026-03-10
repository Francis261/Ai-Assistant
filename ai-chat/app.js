#!/usr/bin/env node

import fs from "fs"
import path from "path"
import readline from "readline"
import fetch from "node-fetch"
import { runTool } from "../tools/index.js"

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
    if(!(key in process.env)) process.env[key] = val
  }
}

loadEnvFile(path.resolve(".env.engine"))

const ENGINE_URL = process.env.ENGINE_URL || `http://127.0.0.1:${process.env.ENGINE_PORT || 3001}`
const OLLAMA = process.env.OLLAMA_URL || "http://127.0.0.1:11434/api"
const MODEL = process.env.MODEL || "granite3.1-dense:8b"
const STORAGE = process.env.STORAGE || "default"
const ENABLE_RERANK = process.env.ENABLE_RERANK !== "false"
const CANDIDATE_K = Number(process.env.CANDIDATE_K || 40)
const TOOL_STEPS = Number(process.env.TOOL_STEPS || 4)

const TOOL_TAG_SYSTEM_PROMPT = `You are an AI assistant with XML-like tool tags.
When a tool is needed, output ONLY tool tags and nothing else.
When no tool is needed, answer normally in plain text.

Tool tags you can call:

File operations
- <list, path="..." limit="20"></list>
- <read, path="..."></read>
- <write, path="...">content</write>
- <append, path="...">content</append>
- <copy, path="..." to="..."></copy>
- <move, path="..." to="..."></move>
- <delete, path="..."></delete>
- <mkdir, path="..."></mkdir>
- <stat, path="..."></stat>

Zip operations
- <zip, path="..." destination="..."></zip>
- <unzip, path="..." destination="..."></unzip>

Web operations
- <search, query="..." limit="5"></search>
- <scrape, url="..."></scrape>

Git operations
- <git_status, repo_path="..."></git_status>
- <git_branches, repo_path="..."></git_branches>
- <git_log, repo_path="..." limit="10"></git_log>

Rules:
- You may output multiple tool tags in one response.
- Use exact closing tags.
- Do not mix normal prose with tool tags in the same response.
- After tool results are provided, decide whether more tools are needed or provide final answer.`

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

async function generateStream(prompt,onToken){
  const res = await fetch(`${OLLAMA}/generate`,{
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ model: MODEL, prompt, stream: true })
  })

  if(!res.ok){
    const t = await res.text()
    throw new Error(`${res.status} ${t}`)
  }

  if(!res.body){ return }

  const decoder = new TextDecoder()
  let buffer = ""

  for await (const chunk of res.body){
    buffer += decoder.decode(chunk,{ stream:true })
    const lines = buffer.split("\n")
    buffer = lines.pop() || ""

    for(const line of lines){
      const trimmed = line.trim()
      if(!trimmed) continue
      try{
        const obj = JSON.parse(trimmed)
        if(typeof obj.response === "string" && obj.response){
          onToken(obj.response)
        }
      }
      catch{}
    }
  }

  if(buffer.trim()){
    try{
      const obj = JSON.parse(buffer)
      if(typeof obj.response === "string" && obj.response){ onToken(obj.response) }
    }
    catch{}
  }
}

function contextText(docs){
  return docs.length ? docs.map((d,i)=>`[${i+1}] ${d.source}\n${d.chunk_text}`).join("\n\n") : "(no context)"
}

function parseAttrs(raw){
  const attrs = {}
  const re = /(\w+)="([^"]*)"/g
  let m
  while((m = re.exec(raw))){ attrs[m[1]] = m[2] }
  return attrs
}

function parseToolTags(text){
  const normalized = text.replace(/<([a-zA-Z_][\w-]*)\s*,/g,"<$1 ")
  const tags = []

  const pairedRe = /<([a-zA-Z_][\w-]*)([^>]*)>([\s\S]*?)<\/\1>/g
  let m
  while((m = pairedRe.exec(normalized))){
    tags.push({ name: m[1].toLowerCase(), attrs: parseAttrs(m[2] || ""), content: (m[3] || "").trim() })
  }

  const selfRe = /<([a-zA-Z_][\w-]*)([^>]*)\/>/g
  while((m = selfRe.exec(normalized))){
    tags.push({ name: m[1].toLowerCase(), attrs: parseAttrs(m[2] || ""), content: "" })
  }

  return tags
}

function asNumber(value,fallback){
  const n = Number(value)
  return Number.isFinite(n) ? n : fallback
}

function tagToCall(tag){
  const a = tag.attrs || {}

  if(["list","read","write","append","copy","move","delete","mkdir","stat"].includes(tag.name)){
    const args = { action: tag.name, path: a.path }
    if(a.to) args.to = a.to
    if(a.limit) args.limit = asNumber(a.limit, 20)
    if(tag.name === "write" || tag.name === "append") args.content = tag.content || ""
    return { tool: "file_operations", args }
  }

  if(tag.name === "zip"){
    const source = a.source || a.path
    const destination = a.destination || `${source}.zip`
    return { tool: "zip_unzip", args: { action: "zip", source, destination } }
  }

  if(tag.name === "unzip"){
    const source = a.source || a.path
    const destination = a.destination || path.dirname(source || ".")
    return { tool: "zip_unzip", args: { action: "unzip", source, destination } }
  }

  if(tag.name === "search"){
    return {
      tool: "web_search_scraper",
      args: { action: "search", query: a.query, limit: asNumber(a.limit, 5) }
    }
  }

  if(tag.name === "scrape"){
    return { tool: "web_search_scraper", args: { action: "scrape", url: a.url } }
  }

  if(tag.name === "git_status"){
    return { tool: "git_tool", args: { action: "status", repo_path: a.repo_path || "." } }
  }

  if(tag.name === "git_branches"){
    return { tool: "git_tool", args: { action: "branches", repo_path: a.repo_path || "." } }
  }

  if(tag.name === "git_log"){
    return {
      tool: "git_tool",
      args: { action: "log", repo_path: a.repo_path || ".", limit: asNumber(a.limit, 10) }
    }
  }

  return null
}

function toolHistoryText(toolEvents){
  if(!toolEvents.length) return "none"

  return toolEvents.map((e,i)=>[
    `Step ${i+1}`,
    `tool: ${e.tool}`,
    `args: ${JSON.stringify(e.args)}`,
    `ok: ${e.ok}`,
    `summary: ${e.summary}`,
    e.ok ? `result: ${JSON.stringify(e.result).slice(0,1800)}` : `error: ${e.error}`
  ].join("\n")).join("\n\n")
}

function summarizeToolResult(tool,args,result,error){
  if(error){ return `❌ ${tool} failed: ${error}` }

  if(tool === "file_operations" && args.action === "list"){
    const items = Array.isArray(result?.items) ? result.items : []
    const preview = items.slice(0,5).map(i=>`${i.type === "dir" ? "[dir]" : "[file]"} ${i.name}`).join(", ")
    return `✅ Listed ${items.length} item(s) from ${result?.path || args.path}. ${preview}`.trim()
  }

  if(tool === "web_search_scraper" && args.action === "search"){
    const items = Array.isArray(result?.results) ? result.results : []
    const preview = items.slice(0,3).map(i=>i.title).join(" | ")
    return `✅ Search returned ${items.length} result(s). ${preview}`.trim()
  }

  if(tool === "web_search_scraper" && args.action === "scrape"){
    return `✅ Scraped ${result?.url || args.url} (${String(result?.content || "").length} chars).`
  }

  return `✅ ${tool} executed.`
}

async function executeTag(tag,toolEvents){
  const call = tagToCall(tag)
  if(!call){
    toolEvents.push({ ok:false, tool:`tag:${tag.name}`, args:tag.attrs || {}, error:"Unsupported tag", summary:`❌ Unsupported tag <${tag.name}>.` })
    console.log(`\n[tool] ❌ Unsupported tag <${tag.name}>.`)
    return
  }

  try{
    const result = await runTool(call.tool,call.args)
    const summary = summarizeToolResult(call.tool,call.args,result)
    toolEvents.push({ ok:true, tool:call.tool, args:call.args, result, summary })
    console.log(`\n[tool] ${summary}`)
  }
  catch(err){
    const msg = err?.message || String(err)
    const summary = summarizeToolResult(call.tool,call.args,null,msg)
    toolEvents.push({ ok:false, tool:call.tool, args:call.args, error:msg, summary })
    console.log(`\n[tool] ${summary}`)
  }
}

function buildAgentPrompt(question,docs,toolEvents){
  return `${TOOL_TAG_SYSTEM_PROMPT}

User query:
${question}

Retrieved context:
${contextText(docs)}

Tool execution history:
${toolHistoryText(toolEvents)}

Now decide next step.`
}

function buildFinalPrompt(question,docs,toolEvents,draft){
  return `You are an AI assistant. Produce the final response to the user.

User query:
${question}

Retrieved context:
${contextText(docs)}

Tool execution history:
${toolHistoryText(toolEvents)}

Draft model answer (if any):
${draft || "none"}

Instructions:
- Give a clear, human-readable response.
- If tools were used, include concrete outputs.
- Mention failures briefly and suggest next action.
- Do not output tool tags.`
}

async function ask(question){
  const q = await postJSON(`${ENGINE_URL}/query`,{
    query: question,
    storage: STORAGE,
    top_k: 6,
    candidate_k: CANDIDATE_K,
    enable_rerank: ENABLE_RERANK
  })

  const docs = q.results || []
  const toolEvents = []
  let draftAnswer = ""

  console.log(`\nRetrieved (rerank_applied=${q.rerank_applied}, model=${q.rerank_model}):`)
  for(const r of docs) console.log(`- score=${Number(r.score).toFixed(4)} source=${r.source}`)

  for(let step=0; step<TOOL_STEPS; step++){
    const out = await generate(buildAgentPrompt(question,docs,toolEvents))
    const tags = parseToolTags(out)

    if(tags.length === 0){
      draftAnswer = out.trim()
      break
    }

    for(const tag of tags){
      await executeTag(tag,toolEvents)
    }
  }

  process.stdout.write("\nAnswer:\n")
  await generateStream(buildFinalPrompt(question,docs,toolEvents,draftAnswer), token => process.stdout.write(token))
  process.stdout.write("\n\n")
}

const rl = readline.createInterface({ input:process.stdin, output:process.stdout })
console.log(`AI app ready (storage=${STORAGE}). Type 'exit' to quit.`)

function loop(){
  rl.question("> ",async(q)=>{
    if(q.trim().toLowerCase()==="exit"){ rl.close(); return }
    if(!q.trim()){ loop(); return }

    try{ await ask(q) }
    catch(err){
      const msg = String(err.message || err)
      if(msg.includes("password authentication failed")){
        console.error("Error: Engine DB auth failed. Re-run: bash scripts/setup-pgvector.sh && source .env.engine && npm run start")
      }
      else console.error("Error:",msg)
    }
    loop()
  })
}

loop()
