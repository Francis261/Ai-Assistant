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

function buildPrompt(question,docs,toolContext){
  const ctx = docs.length ? docs.map((d,i)=>`[${i+1}] ${d.source}\n${d.chunk_text}`).join("\n\n") : "(no context)"
  const tools = JSON.stringify(getToolsManifest(),null,2)

  return `You are an AI assistant.\n\nAvailable tools (JSON schema):\n${tools}\n\nIf needed, output EXACTLY one line with:\nTOOL_CALL:{"tool":"tool_name","args":{...}}\n\nIf no tool needed, answer normally.\nWhen tool context is present, summarize key outputs clearly for the user.\n\nContext:\n${ctx}\n\nTool context:\n${toolContext || "none"}\n\nQuestion: ${question}\nAnswer:`
}

function buildToolDecisionPrompt(question,docs){
  const ctx = docs.length ? docs.map((d,i)=>`[${i+1}] ${d.source}\n${d.chunk_text}`).join("\n\n") : "(no context)"
  const tools = JSON.stringify(getToolsManifest(),null,2)

  return `You are a strict tool router for a chat assistant.

Available tools (JSON schema):
${tools}

Decide whether calling a tool is required for the user message.
Return ONLY JSON in one line:
{"needs_tool":boolean,"confidence":number,"reason":"...","tool_call":{"tool":"...","args":{...}}}

Rules:
- needs_tool=true ONLY when a tool is explicitly needed to complete the request.
- For greetings, chit-chat, explanations, brainstorming, writing, coding advice, or questions answerable from context, set needs_tool=false.
- If unsure, set needs_tool=false.
- confidence must be 0..1.
- If needs_tool=false then tool_call must be null.

Context:
${ctx}

User message: ${question}`
}

function parseToolCall(text){
  const m = text.match(/TOOL_CALL:\s*(\{[\s\S]*\})/)
  if(!m) return null
  try{ return JSON.parse(m[1]) } catch{ return null }
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

function parseToolDecision(text){
  const firstJson = text.match(/\{[\s\S]*\}/)
  if(!firstJson) return null

  try{
    const parsed = JSON.parse(firstJson[0])
    if(typeof parsed?.needs_tool !== "boolean") return null
    if(typeof parsed?.confidence !== "number") return null
    const normalized = normalizeToolCall(parsed.tool_call)
    if(parsed.needs_tool && !normalized) return null
    return { ...parsed, tool_call: normalized }
  }
  catch{
    return null
  }
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

function formatToolResultBlock(toolEvents){
  if(!toolEvents.length) return ""
  const lines = toolEvents.map((e,i)=>`${i+1}. ${e.summary}`)
  return `Tool execution summary:\n${lines.join("\n")}`
}

async function executeToolCall(rawCall,toolEvents){
  const call = normalizeToolCall(rawCall)
  if(!call){
    const summary = "❌ Invalid tool call payload from model."
    toolEvents.push({ summary })
    return { context: `\n${summary}` }
  }

  try{
    const result = await runTool(call.tool,call.args)
    const summary = summarizeToolResult(call.tool, call.args, result)
    toolEvents.push({ summary, tool: call.tool, args: call.args, result })
    return {
      context: `\nTool ${call.tool} call: ${JSON.stringify(call.args)}\nTool ${call.tool} result: ${JSON.stringify(result).slice(0,6000)}\n${summary}`
    }
  }
  catch(err){
    const msg = err?.message || String(err)
    const summary = summarizeToolResult(call.tool, call.args, null, msg)
    toolEvents.push({ summary, tool: call.tool, args: call.args, error: msg })
    return { context: `\nTool ${call.tool} error: ${msg}\n${summary}` }
  }
}

async function ask(question){
  const q = await postJSON(`${ENGINE_URL}/query`,{ query: question, storage: STORAGE, top_k: 6, candidate_k: CANDIDATE_K, enable_rerank: ENABLE_RERANK })

  let toolContext = ""
  let finalAnswer = ""
  let allowToolCalls = !shouldForceNoTool(question)
  const toolEvents = []

  if(allowToolCalls){
    const decisionRaw = await generate(buildToolDecisionPrompt(question,q.results || []))
    const decision = parseToolDecision(decisionRaw)
    if(!decision || !decision.needs_tool || decision.confidence < TOOL_CALL_CONFIDENCE || !decision.tool_call){
      allowToolCalls = false
    }
    else{
      const executed = await executeToolCall(decision.tool_call, toolEvents)
      toolContext += executed.context
    }
  }

  for(let step=0; step<TOOL_STEPS; step++){
    const prompt = buildPrompt(question,q.results || [],toolContext)
    const out = await generate(prompt)

    if(!allowToolCalls){
      finalAnswer = out.replace(/TOOL_CALL:[\s\S]*/m,"").trim() || out
      break
    }

    const toolCall = parseToolCall(out)
    if(!toolCall){
      finalAnswer = out
      break
    }

    const executed = await executeToolCall(toolCall, toolEvents)
    toolContext += executed.context
  }

  if(!finalAnswer){
    finalAnswer = toolEvents.length
      ? "I executed the requested tool(s). See the summary below."
      : "I could not finalize a response in tool-call loop."
  }

  const toolSummaryBlock = formatToolResultBlock(toolEvents)
  const combined = toolSummaryBlock ? `${toolSummaryBlock}\n\n${finalAnswer}` : finalAnswer

  console.log(`\nRetrieved (rerank_applied=${q.rerank_applied}, model=${q.rerank_model}):`)
  for(const r of q.results || []) console.log(`- score=${Number(r.score).toFixed(4)} source=${r.source}`)
  console.log("\nAnswer:\n"+combined+"\n")
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
