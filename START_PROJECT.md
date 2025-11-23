# How to Start the Project

## Quick Start (3 Steps)

### Step 1: Install Dependencies
Open your terminal in the project folder and run:
```bash
npm install
```
This will install all required packages (Next.js, React, Tailwind CSS, etc.)

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Open your browser and go to:
```
http://localhost:3000
```

---

## If You Get Errors

### Error: "Cannot find module" or "Module not found"
**Fix:** Make sure you ran `npm install` first!

### Error: "Port 3000 is already in use"
**Fix:** Use a different port:
```bash
npm run dev -- -p 3001
```
Then open: `http://localhost:3001`

### Error: "Internal Server Error"
**Fix:** Try these steps:
```bash
# 1. Delete node_modules and .next folder
rm -rf node_modules .next

# 2. Reinstall
npm install

# 3. Start again
npm run dev
```

### Error: TypeScript errors
**Fix:** Make sure all TypeScript packages are installed:
```bash
npm install --save-dev typescript @types/react @types/react-dom @types/node
```

---

## Complete Fresh Start (If Nothing Works)

1. **Delete these folders/files:**
   - `node_modules` folder
   - `.next` folder (if exists)
   - `package-lock.json` (if exists)

2. **Reinstall:**
   ```bash
   npm install
   ```

3. **Start:**
   ```bash
   npm run dev
   ```

---

## Need More Help?

If you're still getting errors, please share:
1. The exact error message
2. What command you ran
3. What step you're on

I'll help you fix it!

