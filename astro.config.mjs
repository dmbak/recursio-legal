import { defineConfig } from "astro/config";

// To deploy under a subpath (e.g. https://example.com/recursio/), set `base: '/recursio'`
// and `site: 'https://example.com'`. See README for details.
export default defineConfig({
  site: "https://recursio.app",
  // base: '/recursio',
  trailingSlash: "ignore",
  build: {
    format: "directory",
  },
});
