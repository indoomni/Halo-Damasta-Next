#!/bin/bash
set -e

IMAGE_NAME="ghcr.io/indoomni/halo-damasta-next"

docker build -t "${IMAGE_NAME}:latest" .
