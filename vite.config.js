/* global process */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === "production" ? "/portfoliotest" : "/",
  server: {
    historyApiFallback: true,
  },
  build: {
    //chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'], // Mettez 'react' et 'react-dom' dans leur propre chunk
          // Ajoutez d'autres regroupements si nécessaire
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),      
      '@config': fileURLToPath(new URL('./src/config.js', import.meta.url)),
      '@img': fileURLToPath(new URL('./src/assets/img/', import.meta.url)),
    },
  },
});
