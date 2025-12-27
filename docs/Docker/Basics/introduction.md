---
sidebar_position: 1
---

# Introduction to Docker

## What is Docker?

**Docker** is a platform for developing, shipping, and running applications. It allows you to separate your application from your infrastructure so you can deliver software quickly.

### The "It Works on My Machine" Problem
Before Docker, developers often faced issues where code worked perfectly on their local machine but failed in production or on a colleague's machine due to different OS versions, libraries, or dependencies.

**Docker solves this by packaging the application and ALL its dependencies (libraries, runtime, tools) into a "Container".**

## Containers vs Virtual Machines (VMs)

| Feature | Virtual Machine (VM) | Docker Container |
| :--- | :--- | :--- |
| **Architecture** | Emulates hardware + Full OS | Shares Host OS Kernel |
| **Size** | Heavy (GBs) | Lightweight (MBs) |
| **Boot Time** | Minutes | Milliseconds/Seconds |
| **Performance** | Native-like but some overhead | Native performance |

## Key Terminology

1.  **Dockerfile**: A text document that contains all the commands to assemble an image. (The Recipe)
2.  **Image**: A read-only template with instructions for creating a Docker container. (The Blueprint/Snapshot)
3.  **Container**: A runnable instance of an image. (The running Application)
4.  **Docker Hub**: A cloud registry to share and download Docker images.
