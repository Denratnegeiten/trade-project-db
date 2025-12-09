FROM node:20.10.0-slim
WORKDIR /trade-app
COPY package.json package-lock.json ./ 
RUN npm install --production=false 
COPY . . 
CMD ["node", "server.js"]