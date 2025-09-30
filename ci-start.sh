#!/bin/bash
set -e

ENV=${1:-dev}
MODE=${2:-standalone} # Default to standalone

case "$ENV" in
  dev)
    # Dev is always standalone
    echo "Starting development environment..."
    docker compose -p damasta-dev up --build # Assuming 'damasta-dev' for dev environment
    ;;
  staging)
    if [ "$MODE" == "swarm" ]; then
      echo "Starting staging environment (Swarm mode)..."
      docker stack deploy -c docker-compose.staging.yml damasta-staging
    else
      echo "Starting staging environment (Standalone mode)..."
      docker compose -f docker-compose.staging.yml -p damasta-staging up -d
      # --build
    fi
    ;;
  production)
    if [ "$MODE" == "swarm" ]; then
      echo "Starting production environment (Swarm mode)..."
      docker stack deploy -c docker-compose.production.yml damasta-production
    else
      echo "Starting production environment (Standalone mode)..."
      docker compose -f docker-compose.production.yml -p damasta-production up -d
      # --build
    fi
    ;;
  *)
    echo "Usage: $0 {dev|staging|production} [standalone|swarm]"
    exit 1
    ;;
esac
