---
sidebar_position: 1
---

# The Dockerfile

A **Dockerfile** is a text script with instructions to build a Docker Image.

## Common Instructions

| Instruction | Description |
| :--- | :--- |
| `FROM` | Base image to start from (e.g., `php:8.2-fpm`, `node:18`) |
| `WORKDIR` | Sets the working directory inside the container |
| `COPY` | Copies files from Host to Container |
| `RUN` | Runs a command during the build process (e.g., `apt-get install`) |
| `CMD` | Command to run when the container *starts* |
| `EXPOSE` | Documents which port the container listens on |
| `ENV` | Sets environment variables |

## Example: Node.js App

Create a file named `Dockerfile` (no extension):

```dockerfile
# 1. Base Image
FROM node:18-alpine

# 2. Set working dir
WORKDIR /app

# 3. Copy package.json first (for caching)
COPY package.json .

# 4. Install dependencies
RUN npm install

# 5. Copy the rest of the code
COPY . .

# 6. Expose port
EXPOSE 3000

# 7. Start command
CMD ["npm", "start"]
```

## Building the Image
Navigate to the directory containing the Dockerfile and run:

```bash
# -t gives the image a tag (name)
# . tells it to look in current directory
docker build -t my-node-app .
```

## Running Your Custom Image
```bash
docker run -p 3000:3000 my-node-app
```
