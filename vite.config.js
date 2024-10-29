import { defineConfig } from 'vite';
import purgecss from 'vite-plugin-purgecss';

export default defineConfig({
  base: "/portafolio/", 
  plugins: [purgecss()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});
