---
sidebar_position: 8
---

# Git Flow & Workflows

## Git Flow
A robust framework for managing large projects.
- **master/main**: Production-ready code.
- **develop**: Integration branch for features.
- **feature/**: New features (branch off develop, merge back to develop).
- **release/**: Prep for a new production release.
- **hotfix/**: Urgent fixes for production (branch off master, merge to master AND develop).

## GitHub Flow
A simpler, lightweight workflow often used for web apps.
1. `main` is always deployable.
2. Create branch from `main`.
3. Commit changes.
4. Open Pull Request.
5. Discuss and Review.
6. Deploy.
7. Merge into `main`.
