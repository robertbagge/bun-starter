#!/bin/bash

# ONLY TO BE EXECUTED WITH `bun run docker:build` FROM `mobile-api` DIRECTORY

cd ..
export VERSION=$1
pwd

echo "Building docker image for version '$VERSION'"

IMAGE="robertbagge/bun-starter"
docker build -t "$IMAGE:$VERSION" -f Dockerfile .
