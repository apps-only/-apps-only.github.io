import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'docs'
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          //允许s-开头的自定义组件
          isCustomElement: (tag) => tag.startsWith('s-')
        }
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
