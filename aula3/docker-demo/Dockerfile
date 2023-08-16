FROM node:14

WORKDIR /app

COPY package*.json ./
COPY server.js ./
COPY index.html ./

RUN npm install

EXPOSE 8088

CMD ["node", "server.js"]
