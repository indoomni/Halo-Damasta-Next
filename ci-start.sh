#!/bin/bash
set -e

ENV=${1:-dev}
MODE=${2:-standalone} # Default to standalone

case "$ENV" in
  dev)
    # Dev is always standalone
    docker compose up --build
    ;;
  staging)
    if [ "$MODE" == "swarm" ]; then
      docker stack deploy -c docker-compose.staging.yml damasta-staging
    else
      docker compose -f docker-compose.staging.yml up -d
      # --build
    fi
    ;;
  production)
    if [ "$MODE" == "swarm" ]; then
      docker stack deploy -c docker-compose.production.yml damasta-production
    else
      docker compose -f docker-compose.production.yml up -d
      # --build
    fi
    ;;
  *)
    echo "Usage: $0 {dev|staging|production} [standalone|swarm]"
    exit 1
    ;;
esac
