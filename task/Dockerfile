FROM node:18-alpine as builder

ENV NODE_ENV build

USER node
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY --chown=node:node . .
RUN npm run build

FROM node:18-alpine as runner

ARG APP_ENV=prod

ENV APP_ENV=${APP_ENV}

USER node
WORKDIR /app

COPY --from=builder --chown=node:node /app/package*.json ./
COPY --from=builder --chown=node:node /app/node_modules/ ./node_modules/
COPY --from=builder --chown=node:node /app/dist/ ./dist/

COPY --from=builder --chown=node:node /app/src/migrations ./src/migrations
COPY --from=builder --chown=node:node /app/tsconfig.json ./tsconfig.json

COPY --chown=node:node docker-entrypoint.sh /usr/local/bin/docker-entrypoint
RUN chmod +x /usr/local/bin/docker-entrypoint

CMD ["node"]
ENTRYPOINT ["docker-entrypoint"]