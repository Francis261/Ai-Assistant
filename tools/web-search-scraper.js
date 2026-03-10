import fetch from "node-fetch"

function stripHtml(html){
  return html
    .replace(/<script[\s\S]*?<\/script>/gi,"")
    .replace(/<style[\s\S]*?<\/style>/gi,"")
    .replace(/<[^>]+>/g," ")
    .replace(/\s+/g," ")
    .trim()
}

async function webSearch(query,limit=5){
  const url = `https://duckduckgo.com/html/?q=${encodeURIComponent(query)}`
  const res = await fetch(url)
  const html = await res.text()
  const matches = [...html.matchAll(/<a[^>]*class="result__a"[^>]*href="([^"]+)"[^>]*>(.*?)<\/a>/g)]
  return matches.slice(0,limit).map(m=>({ url: m[1], title: stripHtml(m[2]) }))
}

async function scrapeUrl(url){
  const res = await fetch(url,{ headers:{"User-Agent":"Mozilla/5.0"} })
  const html = await res.text()
  return { url, content: stripHtml(html).slice(0,12000) }
}

export const webSearchScraperTool = {
  name: "web_search_scraper",
  description: "Search the web and scrape webpage text content",
  schema: {
    action: "search|scrape",
    query: "search query",
    url: "url for scraping",
    limit: "max search results"
  },
  async run(args){
    const action = args?.action
    if(action === "search"){
      if(!args?.query) throw new Error("query is required")
      return { results: await webSearch(args.query, Number(args.limit || 5)) }
    }
    if(action === "scrape"){
      if(!args?.url) throw new Error("url is required")
      return await scrapeUrl(args.url)
    }
    throw new Error("Unsupported action for web_search_scraper")
  }
}
