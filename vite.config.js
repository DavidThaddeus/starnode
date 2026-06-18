import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['three']
  },
  server: {
    host: true,
    port: 3000
  },
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    chunkSizeWarningLimit: 900,
    rollupOptions: {
      output: {
        // Only the always-needed vendors get named eager chunks. `three` is
        // pulled in solely by the lazy StarField, and @solana only by the lazy
        // WalletButton — leaving those (and their transitive deps like bn.js)
        // unnamed lets Rollup keep them in their async chunks, out of the
        // initial download.
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (id.includes('three') || id.includes('@react-three')) return 'three'
          if (id.includes('framer-motion')) return 'framer'
          if (
            id.includes('/react/') ||
            id.includes('/react-dom/') ||
            id.includes('/scheduler/') ||
            id.includes('react-router')
          ) {
            return 'react-vendor'
          }
        }
      }
    }
  }
})
