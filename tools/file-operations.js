import fs from "fs"
import path from "path"

function resolveSafe(p){
  if(typeof p !== "string" || !p.trim()) throw new Error("path is required")
  return path.resolve(p)
}

export const fileOperationsTool = {
  name: "file_operations",
  description: "List/read/write/copy/move/delete files and directories",
  schema: {
    action: "list|read|write|append|copy|move|delete|mkdir|stat",
    path: "target path",
    to: "destination path for copy/move",
    content: "content for write/append"
  },
  async run(args){
    const action = args?.action
    const target = resolveSafe(args?.path)

    if(action === "list"){
      const items = fs.readdirSync(target).map(name=>{
        const full = path.join(target,name)
        const st = fs.statSync(full)
        return { name, type: st.isDirectory()?"dir":"file", size: st.size }
      })
      return { path: target, items }
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
