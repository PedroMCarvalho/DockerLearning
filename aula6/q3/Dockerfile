# Use a base image do Node.js
FROM node:14

# Defina o diretório de trabalho no container
WORKDIR /usr/src/app

# Copie o package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./
COPY dist/ ./dist/

# Instale as dependências do projeto
RUN npm install

# Copie o código-fonte para o diretório de trabalho
COPY . .

# Compile o código TypeScript
RUN npm install -g typescript
RUN tsc

# Exponha a porta em que o servidor estará rodando
EXPOSE 8000

# Inicie o backend
CMD [ "node", "dist/index.js" ]

