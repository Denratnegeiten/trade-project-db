# Использование минимального образа Node.js
FROM node:20.10.0-slim

# Установка рабочей директории внутри контейнера
WORKDIR /trade-app

# Копирование манифестов проекта
COPY package.json package-lock.json ./ 

# Установка всех зависимостей, создающая node_modules
RUN npm install --production=false 

# Копирование оставшихся файлов проекта
COPY . . 

# Команда для запуска приложения
CMD ["node", "server.js"]