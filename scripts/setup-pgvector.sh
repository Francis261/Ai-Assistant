#!/usr/bin/env bash
set -euo pipefail

# Usage:
#   bash scripts/setup-pgvector.sh
#
# Optional env overrides:
#   PG_CONTAINER=ai-assistant-pgvector
#   PG_PORT=5432
#   PG_USER=postgres
#   PG_PASSWORD=postgres
#   PG_DB=postgres
#   PGVECTOR_IMAGE=pgvector/pgvector:pg16

PG_CONTAINER="${PG_CONTAINER:-ai-assistant-pgvector}"
PG_PORT="${PG_PORT:-5432}"
PG_USER="${PG_USER:-postgres}"
PG_PASSWORD="${PG_PASSWORD:-postgres}"
PG_DB="${PG_DB:-postgres}"
PGVECTOR_IMAGE="${PGVECTOR_IMAGE:-pgvector/pgvector:pg16}"

if ! command -v docker >/dev/null 2>&1; then
  echo "[ERROR] docker is required for this setup script."
  echo "Install Docker, then re-run: bash scripts/setup-pgvector.sh"
  exit 1
fi

if ! docker info >/dev/null 2>&1; then
  echo "[ERROR] docker daemon is not running. Start Docker and retry."
  exit 1
fi

if docker ps -a --format '{{.Names}}' | grep -Fxq "$PG_CONTAINER"; then
  if ! docker ps --format '{{.Names}}' | grep -Fxq "$PG_CONTAINER"; then
    echo "[INFO] Starting existing container: $PG_CONTAINER"
    docker start "$PG_CONTAINER" >/dev/null
  else
    echo "[INFO] Container already running: $PG_CONTAINER"
  fi
else
  echo "[INFO] Creating new pgvector container: $PG_CONTAINER"
  docker run -d \
    --name "$PG_CONTAINER" \
    -e POSTGRES_USER="$PG_USER" \
    -e POSTGRES_PASSWORD="$PG_PASSWORD" \
    -e POSTGRES_DB="$PG_DB" \
    -p "$PG_PORT:5432" \
    "$PGVECTOR_IMAGE" >/dev/null
fi

echo "[INFO] Waiting for PostgreSQL readiness..."
for i in {1..60}; do
  if docker exec "$PG_CONTAINER" pg_isready -U "$PG_USER" -d "$PG_DB" >/dev/null 2>&1; then
    break
  fi
  sleep 1
  if [[ "$i" == "60" ]]; then
    echo "[ERROR] PostgreSQL did not become ready in time."
    exit 1
  fi
done

echo "[INFO] Ensuring vector extension is enabled..."
docker exec "$PG_CONTAINER" psql -U "$PG_USER" -d "$PG_DB" -c 'CREATE EXTENSION IF NOT EXISTS vector;' >/dev/null

POSTGRES_URL="postgresql://${PG_USER}:${PG_PASSWORD}@127.0.0.1:${PG_PORT}/${PG_DB}"

echo "[INFO] Writing .env.engine"
cat > .env.engine <<ENV
POSTGRES_URL=${POSTGRES_URL}
ENGINE_PORT=3001
OLLAMA_URL=http://127.0.0.1:11434/api
EMBED_MODEL=nomic-embed-text
RERANK_MODEL=bge-reranker-base
ENABLE_RERANK_DEFAULT=true
ENV

echo ""
echo "[SUCCESS] pgvector is ready."
echo "POSTGRES_URL=${POSTGRES_URL}"
echo ""
echo "Next steps:"
echo "  source .env.engine"
echo "  npm install"
echo "  npm run start"
echo ""
echo "To stop DB:   docker stop ${PG_CONTAINER}"
echo "To remove DB: docker rm -f ${PG_CONTAINER}"
