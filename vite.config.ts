/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.join(__dirname, 'src') }],
  },
  base: 'http://localhost:5173/add-forecast',
  test:{
    globals: true,
    include: ['src/**/*.spec.tsx'],
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts']
  }
})
