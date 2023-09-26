FROM node:18.16.0-alpine AS build

ENV TZ UTC
ENV NODE_ENV deveploment
ENV DATABASE_URL postgresql://postgres:postgres@postgres:5433/food

WORKDIR /app

COPY . .

RUN corepack enable
RUN corepack prepare pnpm@latest --activate
RUN pnpm config set store-dir .pnpm
RUN pnpm install --prefer-offline --frozen-lockfile
RUN pnpm run build

CMD npx prisma migrate deploy && node dist/main.js
