import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    hmr: true,
    watch: {
      usePolling: true,
    },
  },
  build: {
    copyPublicDir: true,
  },
})