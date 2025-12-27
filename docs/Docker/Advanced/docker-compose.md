---
sidebar_position: 1
---

# Docker Compose

`docker run` commands get long and messy. **Docker Compose** allows you to define multi-container applications in a single YAML file (`docker-compose.yml`).

## The `docker-compose.yml` File

Example: A typical Laravel/PHP setup with MySQL.

```yaml
version: '3.8'

services:
  # App Service
  app:
    image: php:8.2-apache
    ports:
      - "8000:80"
    volumes:
      - .:/var/www/html
    networks:
      - laravel-net
    depends_on:
      - db

  # Database Service
  db:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: laravel
    volumes:
      - db_data:/var/lib/mysql
    networks:
      - laravel-net

# Define volumes
volumes:
  db_data:

# Define networks
networks:
  laravel-net:
```

## Compose Commands

### Start Everything
```bash
# -d for detached mode (background)
docker-compose up -d
```

### Stop Everything
```bash
docker-compose down
# To stop AND remove volumes
docker-compose down -v
```

### View Logs (aggregated)
```bash
docker-compose logs -f
```
