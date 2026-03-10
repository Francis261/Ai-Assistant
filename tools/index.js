import { fileOperationsTool } from "./file-operations.js"
import { zipUnzipTool } from "./zip-unzip.js"
import { webSearchScraperTool } from "./web-search-scraper.js"
import { gitTool } from "./git-tool.js"

const tools = [fileOperationsTool, zipUnzipTool, webSearchScraperTool, gitTool]
const toolMap = new Map(tools.map(t=>[t.name,t]))

export function getToolsManifest(){
  return tools.map(t=>({ name:t.name, description:t.description, schema:t.schema }))
}

export async function runTool(name,args){
  const tool = toolMap.get(name)
  if(!tool) throw new Error(`Unknown tool: ${name}`)
  return await tool.run(args || {})
}
