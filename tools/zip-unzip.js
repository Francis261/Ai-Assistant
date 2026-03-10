import { execFile } from "child_process"
import { promisify } from "util"
import path from "path"

const execFileAsync = promisify(execFile)

function abs(p){
  if(typeof p !== "string" || !p.trim()) throw new Error("path is required")
  return path.resolve(p)
}

export const zipUnzipTool = {
  name: "zip_unzip",
  description: "Zip and unzip files/directories using system zip/unzip",
  schema: {
    action: "zip|unzip",
    source: "source path",
    destination: "destination zip path or output dir"
  },
  async run(args){
    const action = args?.action
    const source = abs(args?.source)
    const destination = abs(args?.destination)

    if(action === "zip"){
      await execFileAsync("zip", ["-r", destination, source])
      return { ok:true, action, source, destination }
    }

    if(action === "unzip"){
      await execFileAsync("unzip", ["-o", source, "-d", destination])
      return { ok:true, action, source, destination }
    }

    throw new Error("Unsupported action for zip_unzip")
  }
}
