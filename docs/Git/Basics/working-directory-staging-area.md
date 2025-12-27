---
sidebar_position: 3
---

# The Three Stages

Understanding the three states of Git is crucial for mastering it.

## 1. Working Directory (Modified)
This is where you are currently working. It holds the actual files on your computer. When you modify a file, it starts here as "modified" but "untracked" or "unstaged".

## 2. Staging Area (Staged)
Also known as the "Index". This is a holding area for changes that you want to include in the next commit. You "add" files from the Working Directory to the Staging Area.
*Think of this as preparing a package box.*

## 3. Repository (Committed)
This is where Git permanently stores your changes as "commits". Once committed, the snapshot is saved in the local database (`.git` directory).
*Think of this as sealing the box and shipping it.*

## The Workflow

1. **Modify** files in your working directory.
2. **Stage** the files, adding snapshots of them to your staging area (`git add`).
3. **Commit** the staged files, which takes the files as they are in the staging area and stores that snapshot permanently to your Git directory (`git commit`).
