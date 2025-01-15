import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Firebase will serve from this directory
    emptyOutDir: true,
    sourcemap: false, // Disable sourcemaps for production
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor chunks for better caching
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
  server: {
    port: 3000, // Match development port with Firebase hosting
  },
  base: '/', // Ensures proper asset loading in production
});