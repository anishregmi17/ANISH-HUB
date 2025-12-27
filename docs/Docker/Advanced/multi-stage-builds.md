---
sidebar_position: 2
---

# Multi-Stage Builds

Multi-stage builds allow you to create small, secure production images by separating the build environment from the runtime environment.

## The Problem
A `Go` application needs the Go compiler to build (heavy). But the final app is just a binary (tiny). You don't need the compiler in production.

## The Solution (Dockerfile)

```dockerfile
# STAGE 1: Build
FROM golang:1.21 AS builder
WORKDIR /app
COPY . .
# Build the binary
RUN go build -o myapp main.go

# STAGE 2: Production (Runtime)
# Start fresh with a tiny OS
FROM alpine:latest
WORKDIR /root/
# Copy ONLY the binary from Stage 1
COPY --from=builder /app/myapp .

CMD ["./myapp"]
```

## Benefits
1.  **Tiny Images**: From 800MB (Go image) -> 10MB (Alpine + Binary).
2.  **Security**: Compilers and source code are NOT in the final image.
