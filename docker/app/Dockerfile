FROM python:3.11-slim
WORKDIR /app
COPY . /app
RUN pip install -U pip && \
    pip install -q build && \
    python -m build && \
    pip install dist/portfolio-0.0.1.tar.gz
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "setup.wsgi:application"]