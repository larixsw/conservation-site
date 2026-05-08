FROM node:alpine AS base

RUN apk add --no-cache openssl
WORKDIR /app

FROM base AS build

COPY . .
RUN npm ci
RUN npm run build

FROM base

ENV NODE_ENV=production

COPY package*.json .
COPY schema.prisma .

RUN npm ci --omit=dev --ignore-scripts
RUN npx prisma generate

COPY migrations ./migrations
COPY --from=build /app/.keystone ./.keystone

EXPOSE 3000

CMD ["npm", "start"]