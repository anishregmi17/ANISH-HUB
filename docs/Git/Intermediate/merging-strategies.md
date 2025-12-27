---
sidebar_position: 3
---

# Merging Strategies

When you have finished working on a branch, you usually want to bring those changes back into the main branch.

## Fast-Forward Merge
If the target branch (e.g., `main`) has NOT moved forward since you created your feature branch, Git can simply move the pointer forward.

```bash
git checkout main
git merge feature-branch
```
*Result: No new merge commit is created. The history looks linear.*

## Merge Commit (Recursive/3-way)
If `main` has new commits since you branched off, Git creates a new "Merge Commit" that ties the two histories together.

```bash
git checkout main
git merge feature-branch
```
*Result: A new commit is added with two parents.*

## Squashing
Combines all commits from the feature branch into a single commit on the target branch. Good for keeping the main history clean.

```bash
git checkout main
git merge --squash feature-branch
git commit -m "feat: complete feature X"
```
