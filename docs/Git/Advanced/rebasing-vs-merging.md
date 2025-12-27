---
sidebar_position: 5
---

# Rebasing vs Merging

Both commands integrate changes from one branch into another, but they do it differently.

## Merging
- **Pros**: Non-destructive. Preserves complete history.
- **Cons**: Can create a messy "tram line" history with many merge commits.

## Rebasing
Re-writes the project history by creating new commits for each commit in the original branch.

### The Golden Rule
> **Never rebase a public branch.**
If others are basing work off your branch, and you rebase it, you rewrite history and break their work. Only rebase your *local* feature branches before pushing.

### How to Rebase
To update your feature branch with the latest `main` changes without a merge commit:

```bash
git checkout feature-branch
git rebase main
```
This picks up your commits and puts them "on top" of the latest main.
