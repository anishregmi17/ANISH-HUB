---
sidebar_position: 4
---

# Handling Conflicts

Merge conflicts occur when two people change the same lines in the same file, or if one person deletes a file while another modifies it.

## Identifying Conflicts
When a merge fails, Git tells you:
```bash
CONFLICT (content): Merge conflict in file.txt
Automatic merge failed; fix conflicts and then commit the result.
```

## Resolving Conflicts
1. Open the conflicted file. You will see markers:
```text
<<<<<<< HEAD
Current change in main
=======
Incoming change from feature
>>>>>>> feature-branch
```
2. Delete the markers (`<<<<`, `====`, `>>>>`) and edit the code to look exactly how you want it.
3. Save the file.

## Finalizing the Merge
After editing:
```bash
git add file.txt
git commit
```
*No need for `-m` message, Git supplies a default 'Merge branch...' message.*

## Aborting
If you get confused and just want to stop:
```bash
git merge --abort
```
