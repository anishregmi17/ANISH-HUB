---
sidebar_position: 4
---

# Interactive Rebase

Interactive rebase is a powerful tool to clean up your commit history before merging. You can squash, reword, drop, or reorder commits.

## Usage

Rebase the last N commits (e.g., 3):

```bash
git rebase -i HEAD~3
```

An editor will open showing:
```text
pick f7f3f6d Change my name a bit
pick 310154e Update README formatting and add blame
pick a5f4a0d Add cat-file
```

## Commands
By changing `pick` to other commands, you can:
- **reword (r)**: Edit the commit message.
- **squash (s)**: Melt into previous commit.
- **drop (d)**: Remove commit entirely.

## Example: Squashing
To combine the last 3 commits into one, change the bottom two to `squash`:

```text
pick f7f3f6d Start feature
squash 310154e Work in progress
squash a5f4a0d Finish feature
```
Save and exit. Git will ask for a new combined message.
