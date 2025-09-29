#!/bin/bash
set -e

ENV=${1:-dev}

case "$ENV" in
  dev)
    docker-compose logs -f
    ;;
  staging)
    if docker service ls -q -f name=damasta-staging_web > /dev/null 2>&1; then
      echo "Showing logs for staging environment (Swarm mode)..."
      docker service logs -f damasta-staging_web
    else
      echo "Showing logs for staging environment (Standalone mode)..."
      docker-compose -f docker-compose.staging.yml logs -f
    fi
    ;;
  production)
    if docker service ls -q -f name=damasta-production_web > /dev/null 2>&1; then
      echo "Showing logs for production environment (Swarm mode)..."
      docker service logs -f damasta-production_web
    else
      echo "Showing logs for production environment (Standalone mode)..."
      docker-compose -f docker-compose.production.yml logs -f
    fi
    ;;
  *)
    echo "Usage: $0 {dev|staging|production}"
    exit 1
    ;;
esac
