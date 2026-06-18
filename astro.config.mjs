import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  site: 'https://clinic-sa.com',
  prefetch: { defaultStrategy: 'viewport' },
  build: { inlineStylesheets: 'auto' },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  compressHTML: true,
  server: { host: true },
  vite: {
    resolve: {
      alias: {
        '@lib': resolve(__dirname, 'src/lib'),
        '@styles': resolve(__dirname, 'src/styles'),
        '@components': resolve(__dirname, 'src/components'),
        '@layouts': resolve(__dirname, 'src/layouts'),
        '@content': resolve(__dirname, 'src/content'),
        '@data': resolve(__dirname, 'src/data'),
      },
    },
  },
});
