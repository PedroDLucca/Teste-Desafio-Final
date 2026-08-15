const { defineConfig } = require('vite')
const react = require('@vitejs/plugin-react').default
const tailwindPlugin = require('@tailwindcss/vite').default

module.exports = defineConfig({
  plugins: [react(), tailwindPlugin()],
})
