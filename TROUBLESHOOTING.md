# Troubleshooting Guide

## Common Errors and Solutions

### 1. "Module not found" or "Cannot find module" Error

**Solution:**
```bash
# Delete node_modules and package-lock.json (if exists)
rm -rf node_modules package-lock.json

# Reinstall dependencies
npm install
```

### 2. "Port 3000 is already in use" Error

**Solution:**
```bash
# Option 1: Use a different port
npm run dev -- -p 3001

# Option 2: Kill the process using port 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F
```

### 3. TypeScript Errors

**Solution:**
```bash
# Make sure TypeScript is installed
npm install --save-dev typescript @types/react @types/react-dom @types/node

# If errors persist, try:
npm run build
```

### 4. "Internal Server Error" or Build Errors

**Solution:**
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall and rebuild
npm install
npm run dev
```

### 5. Tailwind CSS Not Working

**Solution:**
- Make sure `tailwind.config.js` and `postcss.config.js` are in the root
- Verify `app/globals.css` has Tailwind directives
- Restart the dev server

### 6. "Cannot use import statement outside a module"

**Solution:**
- Make sure you're using Next.js 14+ (check package.json)
- Verify `tsconfig.json` has correct module settings

## Step-by-Step Fresh Start

If you're experiencing persistent errors, try this:

1. **Clean everything:**
   ```bash
   rm -rf node_modules .next package-lock.json
   ```

2. **Reinstall:**
   ```bash
   npm install
   ```

3. **Start fresh:**
   ```bash
   npm run dev
   ```

## Still Having Issues?

Share the exact error message you're seeing, and I can help you fix it!

