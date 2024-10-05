
FROM oven/bun:1.1.17 as base
WORKDIR /app
COPY out/index.js .

USER bun
ENTRYPOINT [ "bun", "run", "index.js" ]
