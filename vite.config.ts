import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr({
    svgrOptions: {
    }
  })], css: {
    modules: {
      localsConvention: 'camelCase' // Optional: makes CSS class names camelCase in JS
    }
  },
  build: {
    ssr: './server.jsx',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, './public/index.html'),
        // nested: path.resolve(__dirname, 'nested/index.html'),
      },
    }
  },
  resolve: {
    alias: [

    ],
  },
  ssr: {
    noExternal: ['@mui/material', 'devextreme', 'reactstrap', '@emotion/react', '@emotion/styled'],
  },
});