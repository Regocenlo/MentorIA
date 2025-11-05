FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN adduser --disabled-password --gecos "" runner
COPY . .
USER runner
CMD ["node", "server.js"]
