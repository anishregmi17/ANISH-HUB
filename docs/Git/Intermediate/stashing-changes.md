---
sidebar_position: 7
---

# Stashing Changes

Sometimes you are working on a feature but need to switch branches quickly to fix a bug. You don't want to commit half-finished work.

## git stash
Takes your uncommitted changes (both staged and unstaged) and saves them in a stack, cleaning your working directory.

```bash
git stash
# OR with a name
git stash save "work in progress login"
```

## git stash pop
Restores the most recent stash and removes it from the stack.

```bash
git stash pop
```

## git stash list
See everything you've stashed.
```bash
git stash list
```

## git stash apply
Restores changes but keeps them in the stack (useful if you want to apply to multiple branches).
```bash
git stash apply
```
