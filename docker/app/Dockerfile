# FROM python:3.11-slim
# WORKDIR /app
# COPY . /app
# RUN pip install -U pip && \
#     pip install -q build && \
#     python -m build && \
#     pip install dist/portfolio-0.0.1.tar.gz
# CMD ["gunicorn", "--bind", "0.0.0.0:8000", "setup.wsgi:application"]

# Stage 1: Build stage
FROM python:3.11-slim AS builder
WORKDIR /app
COPY . /app
RUN pip install -U pip && \
    pip install -q build && \
    python -m build

# Stage 2: Final stage
FROM python:3.11-slim
WORKDIR /app
COPY --from=builder /app/dist/portfolio-0.0.1.tar.gz /app/dist/portfolio-0.0.1.tar.gz
RUN pip install --no-cache-dir /app/dist/portfolio-0.0.1.tar.gz
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "setup.wsgi:application"]