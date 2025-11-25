# GitHub Setup Instructions

## Step 1: Create a GitHub Repository

1. Go to https://github.com/new
2. Repository name: `SC_Website` (or your preferred name)
3. Description: "Sutherland Event Studio Website"
4. Choose Public or Private
5. **DO NOT** initialize with README, .gitignore, or license
6. Click "Create repository"

## Step 2: Add Remote and Push

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add your GitHub repository as remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Alternative: Using SSH

If you have SSH keys set up:

```bash
git remote add origin git@github.com:YOUR_USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

## Current Status

✅ Git repository initialized
✅ All files committed
⏳ Waiting for GitHub repository URL to push

