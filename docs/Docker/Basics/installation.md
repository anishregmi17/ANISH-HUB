---
sidebar_position: 2
---

# Installation & Setup

## Windows (Docker Desktop)
1.  Download **Docker Desktop for Windows** from [docker.com](https://www.docker.com/products/docker-desktop).
2.  Run the installer.
3.  Ensure WSL 2 (Windows Subsystem for Linux) is enabled for best performance.

## Mac (Docker Desktop)
1.  Download **Docker Desktop for Mac**.
2.  Choose the correct chip version (Intel or Apple Silicon/M1/M2).
3.  Drag to Applications and run.

## Linux (Ubuntu)
```bash
# Update repositories
sudo apt-get update

# Install Docker
sudo apt-get install docker.io -y

# Start Docker service
sudo systemctl start docker
sudo systemctl enable docker

# Add user to docker group (avoid using sudo)
sudo usermod -aG docker $USER
```
*Note: Log out and back in for group changes to take effect.*

## Verifying Installation
Open your terminal/command prompt and run:

```bash
docker --version
# Docker version 24.0.5, build ced0996

docker run hello-world
```
If you see a "Hello from Docker!" message, you are all set!
