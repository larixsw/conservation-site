FROM node:alpine AS base

RUN apk add --no-cache openssl
WORKDIR /app

FROM base AS build

COPY . .
RUN npm ci
RUN npm run build

FROM base

COPY package*.json .
RUN npm ci --omit=dev --ignore-scripts

COPY schema.prisma .
RUN npx prisma generate

COPY migrations ./migrations
COPY --from=build /app/.keystone ./.keystone

ENV NODE_ENV=production
EXPOSE 3000

CMD ["npm", "start"]