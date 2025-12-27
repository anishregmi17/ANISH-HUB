---
sidebar_position: 4
---

# Basic Commands

## Initializing a Repository

To start using Git in a project, initialize it in the root directory:

```bash
git init
```
This creates a hidden `.git` folder.

## Checking Status

Always check the status of your files:

```bash
git status
```
This tells you which files are modified, staged, or untracked.

## Staging Changes (git add)

To move changes from the **Working Directory** to the **Staging Area**:

```bash
# Add a specific file
git add index.html

# Add all changed files (recommended for most cases)
git add .
```

## Committing Changes (git commit)

To save the staged changes to the **Repository**:

```bash
git commit -m "feat: setup initial homepage layout"
```

### Writing Good Commit Messages
- **Start with a verb**: "Add", "Fix", "Update"
- **Be descriptive**: "Fix login bug" is better than "Fix bug"
- **Use conventions**: `feat:` for features, `fix:` for bugs, `docs:` for documentation.

## Ignorning Files (.gitignore)
Create a file named `.gitignore` to prevent specific files from being tracked (e.g., `node_modules`, `.env`).

```bash
# .gitignore content
node_modules/
.env
.DS_Store
```
