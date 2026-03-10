import fs from "fs"
import path from "path"

function candidatePaths(p){
  const normalized = String(p || "").trim()
  if(!normalized) return []
  if(path.isAbsolute(normalized)) return [path.resolve(normalized)]

  const cwd = process.cwd()
  return [
    path.resolve(cwd, normalized),
    path.resolve(cwd, "..", normalized),
    path.resolve(cwd, "..", "..", normalized)
  ]
}

function resolveSafe(p){
  const candidates = candidatePaths(p)
  if(candidates.length===0) throw new Error("path is required")

  const existing = candidates.find(fs.existsSync)
  if(existing) return existing
  return candidates[0]
}

export const fileOperationsTool = {
  name: "file_operations",
  description: "List/read/write/copy/move/delete files and directories",
  schema: {
    action: "list|read|write|append|copy|move|delete|mkdir|stat",
    path: "target path",
    to: "destination path for copy/move",
    content: "content for write/append",
    limit: "optional max items for list"
  },
  async run(args){
    const action = args?.action
    const target = resolveSafe(args?.path)

    if(action === "list"){
      const limit = Math.max(1, Number(args?.limit || 200))
      const items = fs.readdirSync(target).slice(0,limit).map(name=>{
        const full = path.join(target,name)
        const st = fs.statSync(full)
        return { name, type: st.isDirectory()?"dir":"file", size: st.size }
      })
      return { path: target, count: items.length, items }
    }

    if(action === "read"){
      return { path: target, content: fs.readFileSync(target,"utf8") }
    }

    if(action === "write"){
      fs.writeFileSync(target, String(args?.content ?? ""), "utf8")
      return { ok: true, path: target }
    }

    if(action === "append"){
      fs.appendFileSync(target, String(args?.content ?? ""), "utf8")
      return { ok: true, path: target }
    }

    if(action === "copy"){
      const to = resolveSafe(args?.to)
      fs.cpSync(target,to,{ recursive:true, force:true })
      return { ok:true, from:target, to }
    }

    if(action === "move"){
      const to = resolveSafe(args?.to)
      fs.renameSync(target,to)
      return { ok:true, from:target, to }
    }

    if(action === "delete"){
      fs.rmSync(target,{ recursive:true, force:true })
      return { ok:true, path:target }
    }

    if(action === "mkdir"){
      fs.mkdirSync(target,{ recursive:true })
      return { ok:true, path:target }
    }

    if(action === "stat"){
      const st = fs.statSync(target)
      return {
        path: target,
        isDirectory: st.isDirectory(),
        size: st.size,
        mtime: st.mtime.toISOString()
      }
    }

    throw new Error("Unsupported action for file_operations")
  }
}
