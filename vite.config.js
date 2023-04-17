import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    base:'/https-.github.io-cinema',
  build: {
    target: 'es2015'
  },
  plugins: [vue()]
})
