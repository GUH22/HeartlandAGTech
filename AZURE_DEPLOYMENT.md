# Azure Static Web Apps Deployment Guide

## Recommended: Azure Static Web Apps

**Why Azure Static Web Apps?**
- ✅ Free tier available (perfect for getting started)
- ✅ Built-in CI/CD with GitHub/GitLab/Azure DevOps
- ✅ Automatic HTTPS/SSL certificates
- ✅ Global CDN for fast performance
- ✅ Custom domain support
- ✅ Perfect for React/Vite static sites
- ✅ Built-in routing support for React Router

## Prerequisites

1. **Azure Account** - Sign up at [azure.microsoft.com](https://azure.microsoft.com)
2. **GitHub Account** (recommended) - For automatic deployments
3. **Azure CLI** (optional but helpful) - Install from [aka.ms/installazurecliwindows](https://aka.ms/installazurecliwindows)

## Deployment Options

### Option 1: Deploy via Azure Portal (Easiest - Recommended)

1. **Build your site locally first:**
   ```bash
   npm install
   npm run build
   ```
   This creates a `dist` folder with your production-ready site.

2. **Create Static Web App in Azure Portal:**
   - Go to [portal.azure.com](https://portal.azure.com)
   - Click "Create a resource"
   - Search for "Static Web Apps"
   - Click "Create"

3. **Configure the Static Web App:**
   - **Subscription**: Choose your Azure subscription
   - **Resource Group**: Create new or use existing
   - **Name**: e.g., `heartland-website`
   - **Plan type**: Free (or Standard for production)
   - **Region**: Choose closest to your users
   - **Source**: Choose your deployment method:
     - **GitHub** (recommended): Connect GitHub account, select repo and branch
     - **Other**: For manual deployment

4. **Build Configuration:**
   - **Build Presets**: Custom
   - **App location**: `/` (root of your repo)
   - **Api location**: Leave empty (no API)
   - **Output location**: `dist` (this is where Vite builds to)

5. **Review and Create** - Click "Review + create" then "Create"

6. **If using GitHub:**
   - Azure will create a GitHub Action workflow automatically
   - Every push to your main branch will trigger a deployment
   - First deployment will start automatically

### Option 2: Manual Deployment (No GitHub)

1. **Build your site:**
   ```bash
   npm install
   npm run build
   ```

2. **Install Azure Static Web Apps CLI:**
   ```bash
   npm install -g @azure/static-web-apps-cli
   ```

3. **Deploy:**
   ```bash
   swa deploy ./dist --deployment-token YOUR_DEPLOYMENT_TOKEN
   ```
   - Get your deployment token from Azure Portal → Your Static Web App → Manage deployment token

### Option 3: Azure CLI Deployment

1. **Login to Azure:**
   ```bash
   az login
   ```

2. **Create Static Web App:**
   ```bash
   az staticwebapp create \
     --name heartland-website \
     --resource-group YOUR_RESOURCE_GROUP \
     --location "East US 2" \
     --sku Free
   ```

3. **Deploy:**
   ```bash
   npm run build
   az staticwebapp deploy \
     --name heartland-website \
     --resource-group YOUR_RESOURCE_GROUP \
     --app-location "/" \
     --output-location "dist"
   ```

## Important Configuration for React Router

Since you're using React Router, you need to configure Azure Static Web Apps to handle client-side routing. Create a `staticwebapp.config.json` file in your project root:

```json
{
  "navigationFallback": {
    "rewrite": "/index.html",
    "exclude": ["/images/*.{png,jpg,gif,ico,svg}", "/*.{css,scss,js,png,jpg,gif,ico,svg,woff,woff2,ttf,eot}"]
  },
  "routes": [
    {
      "route": "/*",
      "serve": "/index.html",
      "statusCode": 200
    }
  ]
}
```

This ensures that all routes (like `/about`, `/products`, etc.) serve your `index.html` file so React Router can handle the routing.

## Post-Deployment

1. **Get your URL:**
   - After deployment, Azure provides a URL like: `https://your-app-name.azurestaticapps.net`
   - Find it in Azure Portal → Your Static Web App → Overview

2. **Custom Domain (Optional):**
   - Go to Custom domains in your Static Web App
   - Add your domain (e.g., `www.heartlandagtech.com`)
   - Follow the DNS configuration instructions

3. **Environment Variables (if needed):**
   - Go to Configuration → Application settings
   - Add any environment variables your app needs

## Cost Estimate

- **Free Tier**: Perfect for development and small sites
  - 100 GB bandwidth/month
  - 2 GB storage
  - Custom domains supported
  
- **Standard Tier**: For production ($9/month + usage)
  - More bandwidth and storage
  - Better performance SLAs

## Troubleshooting

- **404 errors on routes**: Make sure `staticwebapp.config.json` is in your repo root
- **Build fails**: Check the GitHub Actions logs (if using GitHub) or build logs in Azure Portal
- **Images not loading**: Verify image paths use `/Images/` (with capital I) and are in the `Public` folder

## Next Steps

1. Create the `staticwebapp.config.json` file (see above)
2. Commit and push to GitHub (if using GitHub deployment)
3. Create the Static Web App in Azure Portal
4. Wait for first deployment to complete
5. Test your site at the provided Azure URL

