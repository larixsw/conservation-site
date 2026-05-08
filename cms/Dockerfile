FROM node:alpine as build

COPY . .
RUN npm ci
RUN npm run build

FROM node:alpine

RUN apk add --no-cache openssl

COPY --from=build .keystone .keystone
COPY --from=build package.json package.json
COPY --from=build migrations migrations
COPY --from=build schema.prisma schema.prisma

RUN npm ci --production

CMD ["npm", "start"]