import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://goverone.id',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
