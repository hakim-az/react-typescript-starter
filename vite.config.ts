import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@shadecn': path.resolve(__dirname, './src/shadecn/components/ui'),
    },
  },
  plugins: [react()],
})
