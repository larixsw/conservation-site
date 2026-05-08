FROM node:alpine AS base

RUN apk add --no-cache openssl
WORKDIR /app

FROM base AS build

COPY package*.json .
RUN npm ci
COPY . .
RUN npm run build

FROM base

COPY package*.json .
COPY schema.prisma .
COPY migrations ./migrations
COPY --from=build /app/.keystone ./.keystone

RUN npm ci --omit=dev

ENV NODE_ENV=production
EXPOSE 3000

CMD ["npm", "start"]