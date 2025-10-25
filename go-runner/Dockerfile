FROM golang:1.21
WORKDIR /app
COPY . .
RUN adduser --disabled-password --gecos "" runner
RUN go mod init runner && go mod tidy
USER runner
CMD ["go", "run", "server.go"]
