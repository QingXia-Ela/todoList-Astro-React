import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import node from '@astrojs/node';
import tailwindIntegration from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwindIntegration()
  ],
  output: 'server',
  adapter: node({
    mode: 'standalone'
  })
});
