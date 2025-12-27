---
sidebar_position: 5
---

# Cherry Picking

Cherry picking is used to apply a specific commit from one branch to another, without merging the whole branch.

## Use Case
You fixed a bug in `development` branch (commit `abc1234`), and you need that specific fix in `production` immediately, but you aren't ready to merge all of `development`.

## Command

```bash
git checkout production
git cherry-pick abc1234
```

Git applies the changes from that single commit and creates a new commit on your current branch.
