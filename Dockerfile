# Multi-stage build: build static site with pnpm, then serve with nginx

# ---- Builder ----
FROM node:24-alpine AS builder

WORKDIR /app

# Enable pnpm via corepack and pin to repo's packageManager version
RUN corepack enable

# Only copy lockfiles and package manifest first for better layer caching
COPY package.json pnpm-lock.yaml* ./

# Install dependencies
RUN corepack prepare pnpm@10.20.0 --activate \
  && pnpm install --frozen-lockfile

# Copy the rest of the source
COPY . .

# Build static site (Nuxt generate)
RUN pnpm generate

# ---- Runtime ----
FROM nginx:alpine AS runtime

# Copy nginx config
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Copy generated static assets from builder
COPY --from=builder /app/.output/public /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


