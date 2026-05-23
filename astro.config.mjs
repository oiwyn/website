// @ts-check
import { defineConfig } from 'astro/config';
import vtbot from 'astro-vtbot';

// https://astro.build/config
export default defineConfig({
  server: {
    watch: ['src/content/**/*.md']
  },

  integrations: [vtbot()],
});