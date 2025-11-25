# Fix PowerShell Execution Policy Issue

## The Problem
PowerShell is blocking npm scripts because script execution is disabled.

## Solution Options

### Option 1: Change Execution Policy (Recommended)
Run PowerShell as Administrator and execute:
```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```
Type `Y` when prompted.

### Option 2: Use Command Prompt Instead
Open **Command Prompt** (cmd.exe) instead of PowerShell and run:
```bash
npm run dev
```

### Option 3: Bypass for Current Session Only
In PowerShell, run:
```powershell
Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process
```
Then run `npm run dev`

---

## Quick Fix (Easiest)

**Just use Command Prompt (cmd) instead of PowerShell!**

1. Press `Win + R`
2. Type `cmd` and press Enter
3. Navigate to your project:
   ```bash
   cd C:\Users\hp\Documents\SC_Website
   ```
4. Run:
   ```bash
   npm run dev
   ```

This will work immediately without changing any settings.

