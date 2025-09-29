# Base stage for installing dependencies
FROM node:18-alpine AS base
WORKDIR /app
COPY package.json ./
RUN npm install

# Development stage
FROM base AS development
# Source code is mounted via volume
EXPOSE 3000
CMD ["npm", "run", "dev"]

# Builder stage for production
FROM base AS builder
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine AS production
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.js ./next.config.js

EXPOSE 3000
CMD ["npm", "start"]