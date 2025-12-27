---
sidebar_position: 1
---

# Branching Basics

## What is a Branch?
A branch is a movable pointer to a commit. The default branch name in Git is usually `main` or `master`. Branching allows you to diverge from the main line of development and continue to do work without messing up that main line.

## Creating a Branch
```bash
git branch feature-login
```

## Switching Branches
To switch context to the new branch:
```bash
git switch feature-login
# OR (older command)
git checkout feature-login
```

## Create and Switch Shortcut
```bash
git switch -c feature-login
# OR
git checkout -b feature-login
```

## Listing Branches
```bash
git branch
```
The active branch is marked with an asterisk `*`.

## Deleting a Branch
```bash
# Safe delete (checks for merge)
git branch -d feature-login

# Force delete
git branch -D feature-login
```
