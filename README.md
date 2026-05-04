# Recursio Legal &amp; Support

A small static website with the legal and support documents for **Recursio**, a mobile language-learning app focused on English practice (vocabulary, grammar, recall, AI Coach, AI Writing, AI Grammar).

This is a legal/support micro-site, not a marketing site. It is intentionally simple, fast, and easy to maintain.

- No backend, no database, no analytics, no tracking, no cookies.
- Built with [Astro](https://astro.build/) + TypeScript.
- Deployable as a fully static export to GitHub Pages, Cloudflare Pages, Netlify, Vercel, or any static host.

## Routes

| Path                  | Page                                   |
| --------------------- | -------------------------------------- |
| `/`                   | Recursio Legal &amp; Support (landing) |
| `/privacy`            | Privacy Policy                         |
| `/terms`              | Terms of Use                           |
| `/subscription-terms` | Subscription Terms                     |
| `/support`            | Support                                |
| `/delete-account`     | Delete Account                         |

## Project structure

```
package.json
astro.config.mjs
tsconfig.json
public/
  favicon.svg
src/
  layouts/
    LegalLayout.astro     # shared header, footer, meta, nav
  pages/
    index.astro
    privacy.astro
    terms.astro
    subscription-terms.astro
    support.astro
    delete-account.astro
  styles/
    global.css            # design tokens + page styles
```

## Requirements

- Node.js 18.17+ (or 20+).
- npm (or pnpm/yarn — commands below assume npm).

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

The dev server prints a local URL (default `http://localhost:4321`).

## Build (static export)

```bash
npm run build
```

Output is written to `dist/`. Every page is a plain static HTML file — no server runtime required.

## Preview the production build

```bash
npm run preview
```

## Deploying

Any static host works. Point it at the `dist/` folder produced by `npm run build`.

- **GitHub Pages** — publish `dist/` (e.g. via GitHub Actions or the `gh-pages` branch).
- **Cloudflare Pages** — set build command `npm run build`, output directory `dist`.
- **Netlify** — set build command `npm run build`, publish directory `dist`.
- **Vercel** — auto-detects Astro; output is static.

### Serving under a subpath (e.g. `/recursio/`)

If you need URLs like `https://example.com/recursio/privacy`, set a base path in `astro.config.mjs`:

```js
// astro.config.mjs
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://example.com",
  base: "/recursio",
});
```

All internal links in the layout and pages already use `import.meta.env.BASE_URL`, so they will pick up the new base automatically. Then re-run `npm run build`. After deployment the routes will be:

- `https://example.com/recursio/`
- `https://example.com/recursio/privacy`
- `https://example.com/recursio/terms`
- `https://example.com/recursio/subscription-terms`
- `https://example.com/recursio/support`
- `https://example.com/recursio/delete-account`

For a GitHub Pages **project site** (`https://<user>.github.io/<repo>/`), set `base: '/<repo>'` and `site: 'https://<user>.github.io'`.

## How to update content

### Contact email

The contact email `support@recursio.app` appears in:

- `src/layouts/LegalLayout.astro` — footer.
- `src/pages/privacy.astro`
- `src/pages/terms.astro`
- `src/pages/subscription-terms.astro`
- `src/pages/support.astro`
- `src/pages/delete-account.astro`

To change it, search the project for `support@recursio.app` and replace all occurrences.

### "Last updated" date

Each legal/support page has a `<p class="meta">Last updated: May 2026</p>` line near the top. The footer in `src/layouts/LegalLayout.astro` also shows `Last updated: May 2026`. Update these strings together when content changes.

### Site URL / canonical URLs

- Default `site` is set to `https://recursio.app` in `astro.config.mjs`.
- `LegalLayout.astro` builds the canonical URL using a `SITE_URL` constant (`https://recursio.app`). Update it there if the production domain changes.

### Placeholder legal entity details

The current draft does **not** include a registered company name, legal entity number, or registered address. When the legal entity is finalized:

1. Add the entity name, registration number, and registered address to the relevant sections of `src/pages/privacy.astro` and `src/pages/terms.astro` (typically a "Contact" or "Data controller" section).
2. Replace the "draft" notice boxes (`.accent-surface` blocks) on the legal pages, or remove them once the content has been reviewed by qualified legal counsel.

### Branding

- Color tokens live in `src/styles/global.css` under `:root`.
- The brand mark gradient is in the same file (`.brand-mark`).
- The favicon is `public/favicon.svg`.

## Quality / safety notes

- The legal text in this repository is a **draft** and must be reviewed by qualified legal counsel before publication.
- Do not add real registration numbers, addresses, or legal entity names until they are confirmed.
- The site is fully static, requires no authentication, and has no environment variables.
