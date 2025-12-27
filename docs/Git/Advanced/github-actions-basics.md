---
sidebar_position: 7
---

# GitHub Actions Basics

GitHub Actions is a CI/CD (Continuous Integration/Continuous Deployment) platform built into GitHub.

## Workflow File
Workflows are defined in YAML files inside `.github/workflows/`.

Example `main.yml`:

```yaml
name: CI

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3
    
    - name: Use Node.js
      uses: actions/setup-node@v3
      with:
        node-version: 18.x
        
    - name: Install dependencies
      run: npm ci
      
    - name: Run Tests
      run: npm test
```

## Key Components
- **Events (`on`)**: What triggers the action (push, PR, schedule).
- **Jobs**: Sets of steps that run on a runner (server).
- **Steps**: Individual commands or actions (reusable code).
