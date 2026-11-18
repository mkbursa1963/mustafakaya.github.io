import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: process.env.PAGES_ORIGIN || 'https://mkbursa1963.github.io',
  base: process.env.PAGES_BASE_PATH || '/',
  trailingSlash: 'always',
});
