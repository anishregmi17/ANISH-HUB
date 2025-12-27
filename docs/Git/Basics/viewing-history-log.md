---
sidebar_position: 5
---

# Viewing History

## Git Log

To view the history of commits:

```bash
git log
```

Press `q` to exit the log view.

## Concise Logs

For a cleaner, one-line view:

```bash
git log --oneline
```
Output example:
```
a1b2c3d feat: add navigation bar
e4f5g6h fix: correct typo in footer
```

## Visualizing History

To see how branches and merges have occurred:

```bash
git log --oneline --graph --all
```

## Viewing Changes

To see what exactly changed in a file before staging it:

```bash
git diff
```

To see changes that are already staged:
```bash
git diff --staged
```
