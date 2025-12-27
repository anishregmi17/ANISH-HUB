---
sidebar_position: 6
---

# Undoing Changes

## Discarding Local Changes (Unstaged)

If you messed up a file and want to revert it to the last commit (dangerous - data loss):

```bash
git restore filename.txt
# OR
git checkout -- filename.txt
```

## Unstaging Files

If you accidentally ran `git add` and want to remove a file from the staging area but keep your changes:

```bash
git restore --staged filename.txt
# OR
git reset HEAD filename.txt
```

## Amending the Last Commit

If you forgot to add a file or made a typo in the commit message:

```bash
git add forgotten-file.js
git commit --amend -m "New better message"
```

## Resetting Commits (Advanced)

### Soft Reset
Moves the HEAD backward but **keeps changes staged**.
```bash
git reset --soft HEAD~1
```

### Mixed Reset (Default)
Moves the HEAD backward and **unstages changes** (keeps them in working dir).
```bash
git reset HEAD~1
```

### Hard Reset
Moves the HEAD backward and **destroys all changes**. (WARNING: Irreversible).
```bash
git reset --hard HEAD~1
```
