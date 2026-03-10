import simpleGit from "simple-git"
import path from "path"

export const gitTool = {
  name: "git_tool",
  description: "Read git status/log/branches for a repository",
  schema: {
    action: "status|log|branches",
    repo_path: "path to git repository",
    limit: "optional max commits for log"
  },
  async run(args){
    const action = args?.action
    const repo = path.resolve(args?.repo_path || ".")
    const git = simpleGit(repo)

    if(action === "status"){
      return await git.status()
    }

    if(action === "branches"){
      return await git.branch()
    }

    if(action === "log"){
      const limit = Number(args?.limit || 10)
      return await git.log({ maxCount: limit })
    }

    throw new Error("Unsupported action for git_tool")
  }
}
