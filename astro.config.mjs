import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://therealdealmaker.com',
  integrations: [sitemap()],
  markdown: {
    syntaxHighlight: false
  },
  scopedStyleStrategy: 'where'
});
