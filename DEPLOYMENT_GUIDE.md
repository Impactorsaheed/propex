# 🚀 PropEx — 100% Free Deployment & Mobile Installation Guide

This guide walks you through deploying **PropEx** completely free to **Vercel** via **GitHub**, connecting to **Supabase** (free tier), and installing it directly onto your phone's home screen as a native Progressive Web App (PWA).

---

## Part 1: How to Install on Your Phone From the Web (PWA)

PropEx is fully configured as a Progressive Web App (PWA). You do **NOT** need the Apple App Store or Google Play Store.

### 📱 On iPhone (iOS Safari):
1. Open your deployed PropEx URL (or open the app in Safari).
2. Tap the **Share** icon at the bottom of the screen (the square with an arrow pointing up `↑`).
3. Scroll down and tap **"Add to Home Screen"**.
4. Tap **"Add"** in the top right corner.
5. **Result:** PropEx appears on your home screen with its custom building icon `🏢`. It opens in clean standalone mode without browser bars!

### 🤖 On Android (Chrome / Samsung Internet):
1. Open your deployed PropEx URL in Chrome.
2. Tap the top button **"📲 Install on Phone"** or tap the 3-dot menu `⋮` in Chrome.
3. Select **"Install app"** or **"Add to Home screen"**.
4. Confirm **"Install"**.
5. **Result:** PropEx installs into your app drawer and home screen.

> **No Repeated Logins:** The application uses persistent device storage (`localStorage`). Once opened on your phone, you remain authenticated indefinitely — no need to keep relogging every time you record an expense!

---

## Part 2: 100% Free Deployment to Vercel (2 Minutes)

### Step 1: Push Project to GitHub
In PowerShell or your terminal inside `C:\Users\USER\.gemini\antigravity\scratch\propex`:

```powershell
git init
git add .
git commit -m "Initial PropEx Nigeria Real Estate PWA release"
git branch -M main
```

Create a new repository on [GitHub](https://github.com/new) named `propex` (Public or Private), then run:

```powershell
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/propex.git
git push -u origin main
```

### Step 2: Connect to Vercel (Free Forever)
1. Go to [vercel.com](https://vercel.com) and click **"Sign Up"** (use your GitHub account).
2. Click **"Add New Project"** → select **"Import Git Repository"** → choose your `propex` repository.
3. Vercel automatically detects the Vite configuration and our included `vercel.json`.
4. Click **"Deploy"**!
5. In ~40 seconds, Vercel gives you a free live production URL:  
   `https://propex-yourname.vercel.app` with free SSL/HTTPS!

---

## Part 3: Connecting Free Supabase Database (When Ready)

When you are ready to transition from browser local storage to cloud PostgreSQL:

1. Sign up free at [supabase.com](https://supabase.com).
2. Click **"New Project"** (select the closest region, e.g., Europe or US East).
3. Under the **SQL Editor**, paste the SQL table definitions from our PRD.
4. Copy your `SUPABASE_URL` and `SUPABASE_ANON_KEY` from **Project Settings → API**.
5. Add these two variables in your Vercel Dashboard under **Settings → Environment Variables**.

---

## Total Monthly Cost: **₦0.00 / $0.00**
- GitHub: Free
- Vercel Hosting: Free Hobby Tier
- Supabase Database: Free Tier (up to 500MB Postgres)
- Web Speech API: Free (Browser built-in)
