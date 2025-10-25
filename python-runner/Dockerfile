FROM python:3.11-slim
WORKDIR /app
COPY . .
RUN adduser --disabled-password --gecos "" runner
RUN pip install flask
USER runner
CMD ["python", "server.py"]