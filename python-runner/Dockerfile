FROM python:3.11-slim
WORKDIR /app
COPY . .
RUN adduser --disabled-password --gecos "" runner
USER runner
RUN pip install flask
CMD ["python", "server.py"]