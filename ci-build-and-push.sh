#!/bin/bash
set -e

IMAGE_NAME="ghcr.io/indoomni/halo-damasta-next"

docker buildx build --platform linux/amd64,linux/arm64 -t "${IMAGE_NAME}:latest" --push .
