# News App - Deployment Guide

## Overview
This guide helps you deploy your news app to GitHub Pages with a backend proxy to avoid CORS issues.

## Prerequisites
- GitHub account
- Vercel account (free) - https://vercel.com
- Node.js and npm installed

## Step 1: Setup GitHub Repository

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit"
git branch -M main

# Create a repository on GitHub (https://github.com/new)
# Then push:
git remote add origin https://github.com/YOUR_USERNAME/my-app.git
git push -u origin main
```

## Step 2: Deploy Backend to Vercel

1. Go to https://vercel.com and sign up/login with GitHub
2. Click "Add New" → "Project"
3. Import your repository from GitHub
4. Select your `my-app` repository
5. In the settings, add environment variables:
   - Name: `GNEWS_API_KEY`
   - Value: `73881df8dd3703f2f3cbdce587f0ca9e`
6. Click "Deploy"
7. After deployment, copy your Vercel domain (e.g., `my-app.vercel.app`)

## Step 3: Update Frontend Configuration

Update your `.env.local` file or create a `.env.production` file:

```
VITE_API_URL=https://YOUR_VERCEL_DOMAIN.vercel.app/api
```

Replace `YOUR_VERCEL_DOMAIN` with your actual Vercel domain.

## Step 4: Build and Deploy Frontend to GitHub Pages

1. Update your `vite.config.js` to set the correct base path:

```javascript
export default {
  base: '/my-app/',  // Replace 'my-app' with your repository name
  // ... rest of config
}
```

2. Build the project:

```bash
npm run build
```

3. Enable GitHub Pages:
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages`
   - Folder: `/ (root)`

4. Commit and push:

```bash
# Build creates dist/ folder
npm run build
git add .
git commit -m "Update API configuration"
git push origin main
```

5. Deploy to GitHub Pages:

```bash
# Install gh-pages package
npm install --save-dev gh-pages

# Add to package.json scripts:
"deploy": "npm run build && npx gh-pages -d dist"

# Run deploy
npm run deploy
```

## Step 5: Access Your App

- **Desktop**: https://YOUR_USERNAME.github.io/my-app/
- **Mobile**: Same URL

## Testing CORS

Your app will now:
1. Make requests to your Vercel backend
2. Backend proxies requests to gnews.io API
3. No CORS errors on the frontend

## Environment Variables

- Local development uses `VITE_API_URL=http://localhost:3000/api`
- Production uses your Vercel domain

## Troubleshooting

### API calls still failing?
- Check Vercel Function logs at https://vercel.com/dashboard
- Verify `GNEWS_API_KEY` is set in Vercel environment variables
- Check browser console for exact error

### GitHub Pages not updating?
- Push to main branch (triggers automatic build)
- Check Repository → Actions for build status
- Clear browser cache (Ctrl+Shift+Delete)

### CORS still issues?
- Verify the backend URL in `.env` is correct
- Check browser DevTools → Network → API request
- Confirm backend is returning proper CORS headers

## Optional: Local Backend Testing

To test locally with the backend:

```bash
# In another terminal, run a simple test server
npm install -g http-server
cd dist
http-server -p 3000
```

Then access at `http://localhost:3000`
