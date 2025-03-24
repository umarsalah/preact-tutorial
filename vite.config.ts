import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact(), tsconfigPaths()],
  resolve: {
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
      },
    },
  },
})
