FROM openjdk:21-slim
WORKDIR /app
COPY . .
RUN apt-get update && apt-get install -y nodejs npm
RUN adduser --disabled-password --gecos "" runner
RUN npm install
USER runner
CMD ["node", "server.js"]
