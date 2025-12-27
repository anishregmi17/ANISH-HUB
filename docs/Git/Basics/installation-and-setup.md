---
sidebar_position: 2
---

# Installation & Setup

## Installing Git

### Windows
Download and install from [git-scm.com](https://git-scm.com/download/win). Use the default settings if you are unsure.

### macOS
Using Homebrew:
```bash
brew install git
```
Or download the installer from [git-scm.com](https://git-scm.com/download/mac).

### Linux (Ubuntu/Debian)
```bash
sudo apt-get update
sudo apt-get install git
```

## First-Time Configuration

After installing Git, you must configure your identity. This information is embedded in every commit you make.

Open your terminal (PowerShell, Terminal, Git Bash) and run:

```bash
# Set your name
git config --global user.name "Your Name"

# Set your email (must match your GitHub email for credit)
git config --global user.email "your.email@example.com"
```

## Verifying Configuration

To check your settings:

```bash
git config --list
```
