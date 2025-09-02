# National Day Site

Simple React + Vite project configured for Cloudflare Pages deployment.

## Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start a dev server:
   ```bash
   npm run dev
   ```
3. Create a production build:
   ```bash
   npm run build
   ```
4. Preview the production build locally:
   ```bash
   npm run preview
   ```

## Deploy to Cloudflare Pages

1. Push this repository to GitHub.
2. In the Cloudflare Dashboard go to **Pages** and create a new project connecting to your Git repo.
3. Set the build command to `npm run build`.
4. Set the build output directory to `dist`.
5. Use Node version 18+ (or the default).
6. Ensure `_redirects` and `_headers` remain at the repository root.
7. Optional: define any `VITE_*` environment variables for your build.

Cloudflare will handle single-page app routing via the `_redirects` file. Static assets in `/assets/` are cached aggressively thanks to the `_headers` configuration.

### Manual upload (fallback)
If you prefer a manual deployment, run `npm run build` and upload the contents of the `dist` folder through the Cloudflare Pages interface.

