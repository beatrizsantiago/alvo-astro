// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3000,
  },

  vite: {
    plugins: [tailwindcss()]
  },

  site: 'https://igrejacristaalvo.com.br',

  integrations: [sitemap(), compress()]
});