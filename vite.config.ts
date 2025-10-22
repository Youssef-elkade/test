import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],

  css: {
    transformer: 'lightningcss',
    lightningcss: {
      // هذا سيعمل بعد الترقية
      tailwind: {}, 

      drafts: {
        // هذا يحل @custom-variant
        customMedia: true 
      }
    },
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  build: {
    target: 'esnext',
    outDir: 'build',
  },
  server: {
    port: 3000,
    open: true,
  },
});