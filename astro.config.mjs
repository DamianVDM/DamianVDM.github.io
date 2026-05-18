// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Keep your interactive integrations active
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  },

  // REPLACE this with your GitHub Pages URL (e.g., 'https://your-username.github.io')
  site: 'https://DamianVDM.github.io',

  // REPLACE this with your repository name prefixed with a slash (e.g., '/aerosteel')
  // Note: Leave this blank or remove it if deploying to your main user site (username.github.io)
  base: '',
});
