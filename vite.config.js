import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import tailwindcss from  'tailwindcss'
import autoprefixer from 'autoprefixer'

import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss,
    autoprefixer,
    vue(),
  ],
  base: '/stock6/dist/',  // 所有资源路径都会加上 '/src/' 前缀
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})
