---
sidebar_position: 2
---

# Volumes (Persistence)

By default, data inside a container is **ephemeral** (temporary). If you delete the container, the data inside it is gone forever.

**Volumes** are the preferred mechanism for persisting data generate by and used by Docker containers.

## Types of Mounts

1.  **Named Volumes**: Managed by Docker. Best for database data.
2.  **Bind Mounts**: Maps a specific folder on your Host to the Container. Best for code development.

## Using a Named Volume (Database Example)
Great for MySQL/Postgres data.

```bash
# Create a volume
docker volume create db_data

# Run MySQL using that volume
docker run -d \
  -v db_data:/var/lib/mysql \
  -e MYSQL_ROOT_PASSWORD=secret \
  mysql:8.0
```
*Even if you remove this container, `db_data` volume persists.*

## Using a Bind Mount (Development)
You want your code changes on Windows to reflect instantly inside the container.

```bash
# Map current folder $(pwd) to /var/www/html
docker run -d \
  -p 80:80 \
  -v "$(pwd):/var/www/html" \
  php:8.2-apache
```
