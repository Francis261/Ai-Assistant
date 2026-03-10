#!/usr/bin/env node

import fs from "fs"
import path from "path"
import readline from "readline"
import fetch from "node-fetch"
import { getToolsManifest, runTool } from "../tools/index.js"

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
const TOOL_CALL_CONFIDENCE = Number(process.env.TOOL_CALL_CONFIDENCE || 0.65)

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
      if(typeof obj.response === "string" && obj.response){
        onToken(obj.response)
      }
    }
    catch{}
  }
}

function contextText(docs){
  return docs.length ? docs.map((d,i)=>`[${i+1}] ${d.source}\n${d.chunk_text}`).join("\n\n") : "(no context)"
}

function toolHistoryText(toolEvents){
  if(!toolEvents.length) return "none"
  return toolEvents.map((e,i)=>[
    `Step ${i+1}`,
    `tool: ${e.tool || "unknown"}`,
    `args: ${JSON.stringify(e.args || {})}`,
    `summary: ${e.summary}`,
    e.error ? `error: ${e.error}` : `result: ${JSON.stringify(e.result || {}).slice(0,1500)}`
  ].join("\n")).join("\n\n")
}

function buildPlannerPrompt(question,docs,toolEvents){
  const tools = JSON.stringify(getToolsManifest(),null,2)

  return `You are a tool planner for an AI assistant.

Available tools (JSON schema):
${tools}

User request:
${question}

Retrieved context:
${contextText(docs)}

Previous tool executions:
${toolHistoryText(toolEvents)}

Decide exactly one next action and return ONLY JSON in one line:
{"type":"tool"|"final","confidence":number,"tool":"name","args":{},"answer":"text"}

Rules:
- If a tool is needed, return type="tool" with tool+args.
- If no more tools are needed, return type="final" with answer.
- confidence must be 0..1.
- For type="final", tool/args can be omitted.
- For type="tool", answer can be omitted.
- Do not include markdown or explanation outside JSON.`
}

function buildFinalPrompt(question,docs,toolEvents,draftAnswer){
  const summaryBlock = toolEvents.length
    ? `Tool execution summary:\n${toolEvents.map((e,i)=>`${i+1}. ${e.summary}`).join("\n")}`
    : "Tool execution summary:\nnone"

  return `You are an AI assistant. Provide the final response to the user.

User request:
${question}

Retrieved context:
${contextText(docs)}

${summaryBlock}

Detailed tool outputs:
${toolHistoryText(toolEvents)}

Draft answer (optional):
${draftAnswer || "none"}

Instructions:
- Answer naturally and directly for the user.
- If tools were used, explain what was done and show concrete results.
- If a tool failed, mention the failure and best next step.
- Do not output TOOL_CALL or JSON.`
}

function parseFirstJson(text){
  const m = text.match(/\{[\s\S]*\}/)
  if(!m) return null
  try{ return JSON.parse(m[0]) } catch{ return null }
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

function parsePlannerDecision(text){
  const parsed = parseFirstJson(text)
  if(!parsed || typeof parsed.type !== "string") return null

  const type = parsed.type.trim().toLowerCase()
  const confidence = typeof parsed.confidence === "number" ? parsed.confidence : 0.5

  if(type === "tool"){
    const normalized = normalizeToolCall({ tool: parsed.tool, args: parsed.args })
    if(!normalized) return null
    return { type, confidence, tool_call: normalized, answer: "" }
  }

  if(type === "final"){
    return { type, confidence, answer: String(parsed.answer || "").trim(), tool_call: null }
  }

  return null
}

function shouldForceNoTool(question){
  const q = question.trim().toLowerCase()
  if(!q) return true

  const smallTalk = [
    "hi","hello","hey","yo","sup","good morning","good afternoon","good evening",
    "how are you","thanks","thank you","ok","okay","cool","nice"
  ]

  return smallTalk.some(s => q === s || q.startsWith(`${s} `))
}

function summarizeToolResult(toolName,args,result,error){
  if(error){
    return `❌ ${toolName} failed: ${error}`
  }

  if(toolName === "file_operations" && args?.action === "list"){
    const items = Array.isArray(result?.items) ? result.items : []
    const preview = items.slice(0,3).map(i=>`${i.type === "dir" ? "[dir]" : "[file]"} ${i.name}`).join(", ")
    return `✅ Listed ${items.length} item(s) in ${result?.path || args?.path}.${preview ? ` Preview: ${preview}` : ""}`
  }

  if(toolName === "web_search_scraper" && args?.action === "search"){
    const items = Array.isArray(result?.results) ? result.results : []
    return `✅ Found ${items.length} search result(s) for "${args?.query || ""}".`
  }

  if(toolName === "web_search_scraper" && args?.action === "scrape"){
    const len = String(result?.content || "").length
    return `✅ Scraped ${args?.url || result?.url || "url"} (${len} chars extracted).`
  }

  return `✅ ${toolName} executed successfully.`
}

async function executeToolCall(rawCall,toolEvents){
  const call = normalizeToolCall(rawCall)
  if(!call){
    const summary = "❌ Invalid tool call payload from model."
    toolEvents.push({ summary })
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
    const summary = summarizeToolResult(call.tool, call.args, null, msg)
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

  if(!shouldForceNoTool(question)){
    for(let step=0; step<TOOL_STEPS; step++){
      const decisionRaw = await generate(buildPlannerPrompt(question,docs,toolEvents))
      const decision = parsePlannerDecision(decisionRaw)
      if(!decision){ break }

      if(decision.type === "tool"){
        if(decision.confidence < TOOL_CALL_CONFIDENCE){ break }
        await executeToolCall(decision.tool_call, toolEvents)
        continue
      }

      draftAnswer = decision.answer || ""
      break
    }
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
