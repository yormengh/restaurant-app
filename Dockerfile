# Production-ready multi-stage Dockerfile for a Vite app
# Note: you already have host apps on ports 80, 8080 and 8081 —
# run the built image mapping its container port 80 to a free host port (example: 8082)
#   docker run -p 8082:80 your-image:tag

# --- Build stage -----------------------------------------------------------
FROM node:18-alpine AS builder
WORKDIR /app

# Install deps and build
COPY package*.json ./
RUN npm ci --prefer-offline --no-audit --progress=false
COPY . .
RUN npm run build

# --- Production stage (nginx) ---------------------------------------------
FROM nginx:alpine AS production

# Remove default nginx static content
RUN rm -rf /usr/share/nginx/html/*

# Copy built site from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Optional: customize nginx config by adding a file at /etc/nginx/conf.d/default.conf
# (left as default which serves files from /usr/share/nginx/html)

# Expose container port 80 (map to any unused host port when running)
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"] 