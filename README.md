# Recursio Legal & Support

Static micro-site for Recursio app legal and support pages. Built with [Astro](https://astro.build).

> **Note:** The legal content in this repository is a draft and must be reviewed by a qualified lawyer before publication.

## Routes

| Route | Page |
|---|---|
| `/` | Home — links to all legal/support pages |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Use |
| `/subscription-terms` | Subscription Terms |
| `/support` | Support |
| `/delete-account` | Delete Account |

## Getting Started

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Deployment

### Cloudflare Pages

1. Push the repo to GitHub.
2. In Cloudflare Pages, create a new project connected to the repo.
3. Set build command: `npm run build`
4. Set output directory: `dist`

### Netlify

1. Push the repo to GitHub.
2. In Netlify, create a new site from Git.
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Vercel

1. Push the repo to GitHub.
2. Import the repo in Vercel.
3. Vercel auto-detects Astro; build command and output directory are set automatically.

### GitHub Pages

1. Set `base` in `astro.config.mjs` to match your repo name (e.g. `base: '/recursio-legal'`).
2. Use the official [Astro GitHub Pages action](https://docs.astro.build/en/guides/deploy/github/) or configure your workflow to run `npm run build` and deploy `dist/`.

## Configuration

### Contact email

Update `support@recursio.app` in:
- `src/layouts/LegalLayout.astro` (footer)
- Each page file under `src/pages/` where the email appears

### Last updated date

Update the `Last updated` string in `src/layouts/LegalLayout.astro` (footer section).

### Base path (subpath deployment)

To deploy under a subpath (e.g. `https://example.com/recursio`), set the `base` option in `astro.config.mjs`:

```js
export default defineConfig({
  site: 'https://example.com',
  base: '/recursio',
});
```

### Legal entity details

Replace placeholder legal entity details in each page under `src/pages/` as required by your jurisdiction or legal advisor.

## Project Structure

```
src/
  layouts/
    LegalLayout.astro   # Shared header/nav/footer
  styles/
    global.css          # All styles, CSS variables
  pages/
    index.astro
    privacy.astro
    terms.astro
    subscription-terms.astro
    support.astro
    delete-account.astro
public/
  favicon.svg
astro.config.mjs
tsconfig.json
```
