FROM node:alpine AS base

RUN apk add --no-cache openssl
WORKDIR /app

FROM base AS build

COPY . .
RUN npm ci
RUN npm run build

FROM base

COPY package*.json .
RUN npm ci --production

COPY --from=build .keystone .
COPY migrations .
COPY schema.prisma .

CMD ["npm", "start"]