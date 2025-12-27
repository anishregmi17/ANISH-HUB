---
sidebar_position: 9
---

# Submodules

Submodules allow you to keep a Git repository as a subdirectory of another Git repository.

## Adding a Submodule
```bash
git submodule add https://github.com/other/repo.git library-folder
```
This adds a `.gitmodules` file tracking the mapping.

## Cloning with Submodules
By default, `git clone` does NOT download submodules.

```bash
git clone --recurse-submodules https://github.com/my/repo.git
```

If you already cloned:
```bash
git submodule update --init --recursive
```

## Updating Submodules
To pull changes for the submodule:
```bash
git submodule update --remote merge
```
