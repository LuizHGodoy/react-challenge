# Use a versão oficial do Node.js com suporte a ES2021
FROM node:16

# Diretório de trabalho dentro do container
WORKDIR /app

# Copie o package.json e o package-lock.json
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código da aplicação
COPY . .

# Ajuste as permissões do diretório node_modules
RUN chown -R node:node /app/node_modules

# Exponha a porta que o Vite utiliza
EXPOSE 5173

# Comando para iniciar a aplicação
CMD ["npm", "run", "dev"]
