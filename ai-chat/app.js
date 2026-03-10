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
const TOOL_STEPS = Number(process.env.TOOL_STEPS || 3)

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
        if(typeof obj.response === "string" && obj.response){ onToken(obj.response) }
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

function toolsTagGuide(){
  return `Tool tags you can emit (exactly one tag when taking an action):

File operations:
<list path="/path" limit="20"></list>
<read path="/path/file.txt"></read>
<write path="/path/file.txt">new content here</write>
<append path="/path/file.txt">content to append</append>
<copy path="/from" to="/to"></copy>
<move path="/from" to="/to"></move>
<delete path="/path"></delete>
<mkdir path="/path"></mkdir>
<stat path="/path"></stat>

Zip tool:
<zip path="/source" destination="/out.zip"></zip>
<unzip path="/archive.zip" destination="/output-dir"></unzip>

Web tool:
<search_web query="best js orm" limit="5"></search_web>
<scrape_web url="https://example.com"></scrape_web>

Git tool:
<git_status repo_path="/repo"></git_status>
<git_branches repo_path="/repo"></git_branches>
<git_log repo_path="/repo" limit="10"></git_log>

Also accepted legacy style with comma after tag name, e.g. <read, path="...">...</read>.
If no tool is needed, answer normally without a tag.`
}

function toolHistoryText(events){
  if(!events.length) return "none"
  return events.map((e,i)=>[
    `Step ${i+1}: ${e.summary}`,
    `tool=${e.tool || "unknown"}`,
    `args=${JSON.stringify(e.args || {})}`,
    e.error ? `error=${e.error}` : `result=${JSON.stringify(e.result || {}).slice(0,1400)}`
  ].join("\n")).join("\n\n")
}

function buildActionPrompt(question,docs,toolEvents){
  return `You are an AI assistant with tools.

${toolsTagGuide()}

User query:
${question}

Retrieved context:
${contextText(docs)}

Previous tool execution history:
${toolHistoryText(toolEvents)}

Decide the next step:
- If a tool is needed, output exactly one tool tag and nothing else.
- If no tool is needed, respond with plain text answer (no tool tag).`
}

function buildFinalPrompt(question,docs,toolEvents,draftAnswer){
  return `You are an AI assistant. Write the final user response.

User query:
${question}

Retrieved context:
${contextText(docs)}

Tool results:
${toolHistoryText(toolEvents)}

Draft answer:
${draftAnswer || "none"}

Rules:
- Give a direct final answer for the user.
- If tools were run, summarize what was done and show concrete output.
- Do not output tool tags.`
}

function parseAttributes(attrText){
  const out = {}
  const rx = /(\w+)\s*=\s*"([^"]*)"/g
  let m
  while((m = rx.exec(attrText)) !== null){ out[m[1]] = m[2] }
  return out
}

function mapTagToTool(tagName,attrs,innerText){
  const name = tagName.toLowerCase()
  const inner = String(innerText || "").trim()

  const fileActions = new Set(["list","read","write","append","copy","move","delete","mkdir","stat"])
  if(fileActions.has(name)){
    const args = { action: name, ...attrs }
    if((name === "write" || name === "append") && inner && !args.content){ args.content = inner }
    return { type: "tool", tool_call: { tool: "file_operations", args } }
  }

  if(name === "zip" || name === "unzip"){
    const source = attrs.path || attrs.source
    const destination = attrs.destination || attrs.to || (name === "zip" ? `${source || "archive"}.zip` : ".")
    return { type: "tool", tool_call: { tool: "zip_unzip", args: { action: name, source, destination } } }
  }

  if(name === "search_web"){
    return { type: "tool", tool_call: { tool: "web_search_scraper", args: { action: "search", query: attrs.query, limit: attrs.limit } } }
  }

  if(name === "scrape_web"){
    return { type: "tool", tool_call: { tool: "web_search_scraper", args: { action: "scrape", url: attrs.url } } }
  }

  if(name === "git_status"){
    return { type: "tool", tool_call: { tool: "git_tool", args: { action: "status", repo_path: attrs.repo_path } } }
  }

  if(name === "git_branches"){
    return { type: "tool", tool_call: { tool: "git_tool", args: { action: "branches", repo_path: attrs.repo_path } } }
  }

  if(name === "git_log"){
    return { type: "tool", tool_call: { tool: "git_tool", args: { action: "log", repo_path: attrs.repo_path, limit: attrs.limit } } }
  }

  return null
}

function parseToolTag(text){
  const m = text.match(/<\s*([a-zA-Z_][\w-]*)\s*,?\s*([^>]*)>([\s\S]*?)<\s*\/\s*\1\s*>/)
  if(!m) return null

  const [,tagName,attrText,innerText] = m
  const attrs = parseAttributes(attrText || "")
  return mapTagToTool(tagName,attrs,innerText)
}

function parseLegacyToolCall(text){
  const m = text.match(/TOOL_CALL:\s*(\{[\s\S]*\})/)
  if(!m) return null
  try{ return { type: "tool", tool_call: JSON.parse(m[1]) } } catch{ return null }
}

function normalizeToolCall(call){
  if(!call || typeof call !== "object") return null
  if(typeof call.tool !== "string" || !call.tool.trim()) return null
  const clean = { tool: call.tool.trim(), args: {} }
  if(call.args && typeof call.args === "object") clean.args = { ...call.args }
  for(const [k,v] of Object.entries(call)){
    if(k === "tool" || k === "args") continue
    if(clean.args[k] === undefined){ clean.args[k] = v }
  }
  return clean
}

function detectDirective(output){
  const tagDirective = parseToolTag(output)
  if(tagDirective) return tagDirective

  const legacy = parseLegacyToolCall(output)
  if(legacy) return legacy

  return { type: "final", answer: output.trim() }
}

function summarizeToolResult(toolName,args,result,error){
  if(error){ return `❌ ${toolName} failed: ${error}` }

  if(toolName === "file_operations" && args?.action === "list"){
    const items = Array.isArray(result?.items) ? result.items : []
    const preview = items.slice(0,5).map(i=>`${i.type === "dir" ? "[dir]" : "[file]"} ${i.name}`).join(", ")
    return `✅ Listed ${items.length} item(s) in ${result?.path || args?.path}.${preview ? ` Preview: ${preview}` : ""}`
  }

  if(toolName === "web_search_scraper" && args?.action === "search"){
    const items = Array.isArray(result?.results) ? result.results : []
    return `✅ Search returned ${items.length} result(s) for "${args?.query || ""}".`
  }

  if(toolName === "web_search_scraper" && args?.action === "scrape"){
    const len = String(result?.content || "").length
    return `✅ Scraped ${args?.url || result?.url || "url"} (${len} chars).`
  }

  return `✅ ${toolName} executed successfully.`
}

async function executeToolCall(rawCall,toolEvents){
  const call = normalizeToolCall(rawCall)
  if(!call){
    const summary = "❌ Invalid tool payload from model."
    toolEvents.push({ summary })
    console.log(`\n[tool] ${summary}`)
    return
  }

  try{
    const result = await runTool(call.tool,call.args)
    const summary = summarizeToolResult(call.tool,call.args,result)
    toolEvents.push({ summary, tool: call.tool, args: call.args, result })
    console.log(`\n[tool] ${summary}`)
  }
  catch(err){
    const msg = err?.message || String(err)
    const summary = summarizeToolResult(call.tool,call.args,null,msg)
    toolEvents.push({ summary, tool: call.tool, args: call.args, error: msg })
    console.log(`\n[tool] ${summary}`)
  }
}

async function ask(question){
  const q = await postJSON(`${ENGINE_URL}/query`,{ query: question, storage: STORAGE, top_k: 6, candidate_k: CANDIDATE_K, enable_rerank: ENABLE_RERANK })
  const docs = q.results || []
  const toolEvents = []
  let draftAnswer = ""

  console.log(`\nRetrieved (rerank_applied=${q.rerank_applied}, model=${q.rerank_model}):`)
  for(const r of docs) console.log(`- score=${Number(r.score).toFixed(4)} source=${r.source}`)

  for(let step=0; step<TOOL_STEPS; step++){
    const out = await generate(buildActionPrompt(question,docs,toolEvents))
    const decision = detectDirective(out)

    if(decision.type === "tool"){
      await executeToolCall(decision.tool_call, toolEvents)
      continue
    }

    draftAnswer = decision.answer || ""
    break
  }

  const finalPrompt = buildFinalPrompt(question,docs,toolEvents,draftAnswer)
  process.stdout.write("\nAnswer:\n")
  await generateStream(finalPrompt,(token)=>process.stdout.write(token))
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
