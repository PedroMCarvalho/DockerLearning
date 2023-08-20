# Use uma imagem do Node.js como base
FROM node:14

# Defina o diretório de trabalho
WORKDIR /usr/src/app

# Copie os arquivos necessários
COPY package*.json ./
COPY dist/ ./dist/

# Instale as dependências
RUN npm install

# Expõe a porta em que o backend escuta
EXPOSE 8000

# Inicie o backend
CMD [ "node", "dist/index.js" ]
