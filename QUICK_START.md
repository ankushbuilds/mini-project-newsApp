# Quick Deployment Steps

## 1. Push to GitHub

```bash
git add .
git commit -m "Add backend proxy setup"
git push origin main
```

## 2. Deploy Backend to Vercel

1. Go to https://vercel.com (sign in with GitHub)
2. Click "New Project" 
3. Select your `mini-project-newsApp` repository
4. In Environment Variables, add:
   - `GNEWS_API_KEY` = `73881df8dd3703f2f3cbdce587f0ca9e`
5. Click "Deploy"
6. **Copy your Vercel URL** (will look like: `mini-project-newsapp.vercel.app`)

## 3. Update Frontend Environment

Create/Update `.env.production` file:
```
VITE_API_URL=https://YOUR_VERCEL_URL/api
```

Replace `YOUR_VERCEL_URL` with your actual Vercel domain from step 2.

## 4. Deploy Frontend to GitHub Pages

```bash
npm run build
npm run deploy
```

## 5. Access Your App

- **Desktop & Mobile**: https://ankushbuilds.github.io/mini-project-newsApp
- Wait 5-10 minutes for GitHub Pages to update

## Verify Everything Works

1. Open the URL on your phone
2. Check if news articles load
3. If blank page, check browser console (F12) for errors

## Logs to Check If Issues

- **Backend errors**: https://vercel.com/dashboard → Select project → Deployments
- **Frontend build errors**: Repository → Actions tab

That's it! Your app is now live and accessible from your phone! 🚀
