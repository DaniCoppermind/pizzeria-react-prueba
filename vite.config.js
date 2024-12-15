import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/vite-react-deploy',
  resolve: {
    alias: {
      src: '/src',
      components: '/src/components',
      assets: '/src/assets',
      data: '/src/data',
    },
  },
})
