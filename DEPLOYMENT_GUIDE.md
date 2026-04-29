# Mtshabezi High School Website Deployment & Maintenance Guide

Congratulations! The Mtshabezi High School website is now live on GitHub Pages. This guide explains how to maintain the site and how to move it to a different hosting provider (like Hostinger, Netlify, or Vercel) in the future.

## 🚀 Current Deployment (GitHub Pages)

The site is currently hosted at: `https://sizo527.github.io/website_proto/`

### How it works:
- **Automated Workflow**: Every time you push code to the `main` branch, a GitHub Action (`.github/workflows/deploy.yml`) automatically builds the site and publishes it.
- **Base Path**: Because the site is in a subfolder (`/website_proto/`), the `vite.config.ts` handles the pathing automatically using the `base` property.

---

## 🛠️ How to Deploy to Other Platforms

If you decide to move the site to a new host (e.g., `www.mtshabezi.ac.zw`), follow these steps:

### 1. Update the Base Path
If the site will be at the **root** of a domain (e.g., `www.mtshabezi.com` instead of `/website_proto/`), you must update `vite.config.ts`:

```typescript
// Change this:
base: mode === 'production' ? (process.env.GITHUB_REPOSITORY ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/` : '/website_proto/') : '/',

// To this (for a root domain):
base: '/',
```

### 2. Manual Build (for cPanel/Hostinger)
If your host doesn't support GitHub Actions, you can build the site locally:
1.  Run `npm run build` in your terminal.
2.  This creates a `dist/` folder.
3.  Upload the **contents** of the `dist/` folder to your server's `public_html` directory via FTP or File Manager.

### 3. SPA Routing (404 Handling)
This is a Single Page Application (SPA). If a user refreshes a page like `/about`, the server might show a 404.
- **Netlify/Vercel**: They handle this automatically with our current config.
- **Apache (cPanel/Hostinger)**: You must create a `.htaccess` file in the root with this content:
  ```apache
  <IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
  </IfModule>
  ```

---

## 📂 Maintenance Tasks

### Updating PDF Documents
To update the Prospectus or Fees, simply replace the files in `public/docs/`:
- `public/docs/Prospectus.pdf`
- `public/docs/AdmissionForm.pdf`
- `public/docs/Fees.pdf`
The links on the Admissions page will update automatically.

### Contact Details
When you receive the official school contract, remember to update the placeholders (emails and phone numbers) in:
- `src/components/layout/Navbar.tsx` (Top bar)
- `src/components/layout/Footer.tsx` (Bottom section)
- `src/pages/AgriHub.tsx` (WhatsApp order link)

---

## 🧪 Local Development
To run the site on your computer for testing:
1.  Open the folder in VS Code.
2.  Open a terminal and run `npm install`.
3.  Run `npm run dev`.
4.  Open `http://localhost:5173` in your browser.

---

**Built with Excellence for Mtshabezi High School.**
