import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import vueDevTools from 'vite-plugin-vue-devtools' // slået fra

// https://vite.dev/config/
export default defineConfig({
  base: 'Big-Ben', 
  plugins: [
    vue(),
    // vueDevTools(), // slået fra for at fjerne overlay-ikonet
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
