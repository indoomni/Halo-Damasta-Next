#!/bin/bash
set -e

IMAGE_NAME="ghcr.io/indoomni/halo-damasta-next"

docker pull "${IMAGE_NAME}:latest"
