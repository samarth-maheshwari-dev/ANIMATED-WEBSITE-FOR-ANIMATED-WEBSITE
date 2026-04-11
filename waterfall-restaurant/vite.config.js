import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@data': path.resolve(__dirname, './src/data'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@sections': path.resolve(__dirname, './src/components/sections'),
      '@styles': path.resolve(__dirname, './src/styles'),
    }
  },
  build: {
    rollupOptions: {
      output: {
        // Code-split heavy libraries to prevent one giant bundle
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-animation': ['gsap', 'framer-motion'],
          'vendor-lightbox': ['yet-another-react-lightbox'],
        }
      }
    }
  }
})
