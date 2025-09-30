#!/bin/bash
set -e

ENV=${1:-dev}

case "$ENV" in
  dev)
    echo "Stopping development environment..."
    docker compose down
    ;;
  staging)
    if docker service ls -q -f name=damasta-staging_web > /dev/null 2>&1; then
      echo "Stopping staging environment (Swarm mode)..."
      docker stack rm damasta-staging
    else
      echo "Stopping staging environment (Standalone mode)..."
      docker compose -f docker-compose.staging.yml down
    fi
    ;;
  production)
    if docker service ls -q -f name=damasta-production_web > /dev/null 2>&1; then
      echo "Stopping production environment (Swarm mode)..."
      docker stack rm damasta-production
    else
      echo "Stopping production environment (Standalone mode)..."
      docker compose -f docker-compose.production.yml down
    fi
    ;;
  *)
    echo "Usage: $0 {dev|staging|production}"
    exit 1
    ;;
esac
