// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // put all node_modules in a separate chunk
          }
        }
      }
    },
    chunkSizeWarningLimit: 2000 // increase warning limit to 2 MB
  }
});
