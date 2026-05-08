FROM node:alpine AS base

RUN apk add --no-cache openssl
WORKDIR /app

FROM base AS build

COPY . .
RUN npm ci
RUN npm run build

FROM base

COPY package*.json .
COPY schema.prisma .
COPY migrations ./migrations
COPY --from=build /app/.keystone ./.keystone

RUN npm ci --omit=dev --ignore-scripts
COPY --from=build /app/node_modules/.prisma ./node_modules/.prisma

ENV NODE_ENV=production
EXPOSE 3000

CMD ["npm", "start"]