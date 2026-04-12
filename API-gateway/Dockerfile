FROM node:20-bookworm-slim

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci --omit=dev && mkdir -p /usr/src/app/runtime

COPY . .

EXPOSE 3000

CMD ["node", "gateway.js"]
