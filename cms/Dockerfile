FROM node:alpine AS base

RUN apk add --no-cache openssl
WORKDIR /app

FROM base AS build

COPY . .
RUN npm ci
RUN npm run build

FROM base

COPY package*.json .
COPY migrations .
COPY schema.prisma .
COPY --from=build .keystone .

RUN npm ci --omit=dev

CMD ["npm", "start"]