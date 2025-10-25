FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN adduser --disabled-password --gecos "" runner
RUN npm install
USER runner
CMD ["node", "server.js"]
