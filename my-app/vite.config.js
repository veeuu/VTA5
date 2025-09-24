// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',              // output directory for Vercel
    chunkSizeWarningLimit: 2000, // increase from 500 KB to 2 MB
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // separate chunk for dependencies
          }
        }
      }
    }
  }
});
