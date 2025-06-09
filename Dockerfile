FROM node:20.12.2-alpine

# Update and install security patches
RUN apk update && apk upgrade --no-cache

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

# Build application
RUN npm run build

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/api/health || exit 1

# Install curl for health check
RUN apk add --no-cache curl

# Start application
CMD ["npm", "run", "start"]

