---
sidebar_position: 3
---

# Networking

Containers implement isolation. By default, they cannot talk to each other unless connected to the same Network.

## The Default Bridge
Every container connects to a default `bridge` network, but they can't communicate by "name" easily on the default bridge.

## Creating a Custom Network (Recommended)
User-defined bridges allow **Service Discovery** (containers can reach each other by name).

```bash
# 1. Create network
docker network create my-net

# 2. Run Database attached to network
docker run -d --name my-db --network my-net mysql

# 3. Run App attached to SAME network
docker run -d --name my-app --network my-net my-node-app
```

Now, inside `my-app`, you can connect to the database using the hostname `my-db`. No need for IP addresses!

## Inspecting Networks
```bash
docker network ls
docker network inspect my-net
```
