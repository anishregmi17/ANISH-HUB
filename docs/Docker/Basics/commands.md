---
sidebar_position: 3
---

# Essential Commands

## Image Commands

### Pull an Image
Download an image from Docker Hub.
```bash
docker pull nginx
```

### List Images
See what images you have locally.
```bash
docker images
```

### Remove an Image
```bash
docker rmi nginx
```

## Container Commands

### Run a Container
The most common command.
```bash
# Syntax: docker run [OPTIONS] IMAGE [COMMAND]
docker run -d -p 8080:80 --name my-web-server nginx
```
-   `-d` (Detached): Run in background.
-   `-p 8080:80`: Map port 8080 on Host to port 80 in Container.
-   `--name`: Give it a friendly name.

### List Containers
```bash
# List running containers
docker ps

# List ALL containers (including stopped ones)
docker ps -a
```

### Stop & Start
```bash
docker stop my-web-server
docker start my-web-server
```

### View Logs
Debugging tool #1.
```bash
docker logs my-web-server
# Follow logs live
docker logs -f my-web-server
```

### Execute Command Inside Container
"SSH" into the container.
```bash
# Open an interactive shell
docker exec -it my-web-server bash
# (Use 'sh' if bash isn't installed)
```

### Remove Container
```bash
# Must stop first
docker stop my-web-server
docker rm my-web-server

# Force remove (stop + remove)
docker rm -f my-web-server
```
