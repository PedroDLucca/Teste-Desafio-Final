import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindPlugin from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindPlugin()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
})
