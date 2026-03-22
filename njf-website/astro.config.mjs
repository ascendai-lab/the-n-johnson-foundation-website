// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://thenjohnsonfoundation.org',
  output: 'server',
  adapter: netlify(),
  integrations: [
    sanity({
      projectId: '1zx880ik',
      dataset: 'production',
      useCdn: false,
      stega: {
        studioUrl: 'https://njf-cms.sanity.studio',
      },
    }),
    react(),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});