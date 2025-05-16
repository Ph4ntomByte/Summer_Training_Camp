# 1️⃣ Build Stage
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm ci

# Copy app source
COPY . .

# Build the app
RUN npm run build

# 2️⃣ Production Stage
FROM node:18-alpine AS runner

WORKDIR /app

# Only copy required files
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

# Set environment to production
ENV NODE_ENV=production

# Expose port
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]
