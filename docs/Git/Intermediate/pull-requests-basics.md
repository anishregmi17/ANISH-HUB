---
sidebar_position: 6
---

# Pull Requests (PRs)

Pull Requests (called Merge Requests in GitLab) are a feature of hosting providers like GitHub, not Git itself. They allow developers to discuss code changes before merging.

## The Workflow

1. **Push your branch**: `git push origin my-feature`
2. **Open PR**: Go to GitHub, click "Compare & pull request".
3. **Review**: Teammates comment on code.
4. **Update**: If changes are requested, simply fix them locally and `git push` again. The PR updates automatically.
5. **Merge**: Click the big green "Merge" button on GitHub.

## Best Practices
- **Small PRs**: Easier to review.
- **Descriptive Title/Description**: Explain *why* you made the change.
- **Screenshots**: If it's a UI change, show it.
