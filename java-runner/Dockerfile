FROM openjdk:21-slim
WORKDIR /app
COPY . .
RUN apt-get update && apt-get install -y nodejs npm
RUN adduser --disabled-password --gecos "" runner
USER runner
RUN npm install
CMD ["node", "server.js"]
