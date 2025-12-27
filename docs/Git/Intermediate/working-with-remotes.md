---
sidebar_position: 1
---

# Working with Remotes

## What is a Remote?
A remote is a version of your repository that is hosted on the internet or network (e.g., GitHub, GitLab).

## Cloning a Repository
To download an existing repository including all its history:
```bash
git clone https://github.com/username/repo-name.git
```

## Connecting a Local Repo to Remote
If you started locally with `git init`:
```bash
git remote add origin https://github.com/username/repo-name.git
```
*`origin` is just the standard name for the main remote repo.*

## Pushing Changes
Upload your local commits to the remote:
```bash
git push -u origin main
```
*-u sets the upstream, so next time you can just type `git push`.*

## Pulling Changes
Download new changes from the remote:
```bash
git pull origin main
```
*This is basically a `git fetch` followed by a `git merge`.*

## Fetching
Downloads changes but does not merge them into your code:
```bash
git fetch
```
