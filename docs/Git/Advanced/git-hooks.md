---
sidebar_position: 6
---

# Git Hooks

Git hooks are scripts that run automatically every time a particular event occurs in a Git repository.

## Location
Hooks are stored in `.git/hooks`. They are essentially shell scripts.

## Common Hooks

### pre-commit
Runs before a commit is created.
**Use case**: Run linters (ESLint, Prettier) or tests. If the script fails (exit code != 0), the commit is aborted.

```bash
#!/bin/sh
npm run lint
```

### pre-push
Runs before changes are pushed to a remote.
**Use case**: Run full test suite to ensure no broken code reaches the server.

## Sharing Hooks
Hooks are not checked into version control by default. To share them, people often use tools like `husky` (for Node.js) to manage hooks in `package.json`.
