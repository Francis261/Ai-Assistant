# AI Assistant Engine (pgvector + HNSW)

Enterprise-ready local retrieval engine with API-first design.

## What changed
- `engine.js` is now the retrieval engine (ingest + query APIs only).
- `app.js` is a separate AI test client that calls the engine + Ollama.
- Storage is moved to PostgreSQL + `pgvector` with **HNSW** index for fast large-scale retrieval.
- Each logical vector DB is isolated by `storage` name (separate table + metadata in `dbs/`).

## Architecture
```mermaid
flowchart LR
  A[Sources: folder/file/github/text] --> B[/ingest API]
  B --> C[Chunk + Embed]
  C --> D[(Postgres + pgvector)]
  D --> E[HNSW index]

  U[Query text] --> F[/query API]
  F --> D
  D --> G[Top-k results + scores]
```

## Engine APIs
Base URL: `http://localhost:3001`

### `POST /ingest`
Payload:
```json
{
  "ingest_from": "folder-path | file-path | github-repo-url(.git) | direct text",
  "storage": "tenant_or_project_name",
  "chunk_size": 900,
  "chunk_overlap": 150
}
```

Response includes inserted chunks, dimensions, and storage table.

### `POST /query`
Payload:
```json
{
  "query": "what is http 404",
  "storage": "tenant_or_project_name",
  "top_k": 8
}
```

Returns top matches with similarity scores.

### `GET /storages`
Lists registered storages and dimensions.

### `GET /health`
Health check for engine + Postgres/pgvector readiness.

## Run

### 1) Start Postgres and enable pgvector
Example connection env:
```bash
export POSTGRES_URL='postgresql://postgres:postgres@127.0.0.1:5432/postgres'
```
`engine.js` auto-runs: `CREATE EXTENSION IF NOT EXISTS vector`.

### 2) Start Ollama
```bash
ollama serve
ollama pull nomic-embed-text
ollama pull granite3.1-dense:8b
```

### 3) Start engine
```bash
node engine.js
```

### 4) Ingest
```bash
curl -X POST http://127.0.0.1:3001/ingest \
  -H 'Content-Type: application/json' \
  -d '{"ingest_from":"datas/http","storage":"http_docs"}'
```

### 5) Query
```bash
curl -X POST http://127.0.0.1:3001/query \
  -H 'Content-Type: application/json' \
  -d '{"query":"what is http 404","storage":"http_docs","top_k":5}'
```

### 6) Test AI app (separate)
```bash
STORAGE=http_docs node app.js
```

## Enterprise notes
- HNSW indexing on each storage table for scalable approximate nearest-neighbor search.
- Storage isolation by table (`vectors_<storage>`), plus metadata registry table.
- `dbs/` contains storage manifests for local operational visibility.
- API-first design allows independent AI app(s) to consume retrieval engine.
