import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
      '@/Components': path.resolve(__dirname, './Components'),
      '@/Pages': path.resolve(__dirname, './Pages'),
      '@/utils': path.resolve(__dirname, './src/utils'),
    },
  },
})

