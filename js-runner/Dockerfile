FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN adduser --disabled-password --gecos "" runner
USER runner
RUN npm install
CMD ["node", "server.js"]
