/// <reference types="vitest" />
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    alias: {
      "@/*": "./src/*"
    },
    include: ['**/*-test.?(c|m)[jt]s?(x)'],
    exclude: ['src/*', 'node_modules'],
  },
})
