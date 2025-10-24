FROM golang:1.21
WORKDIR /app
COPY . .
RUN adduser --disabled-password --gecos "" runner
USER runner
RUN go mod init runner && go mod tidy
CMD ["go", "run", "server.go"]
