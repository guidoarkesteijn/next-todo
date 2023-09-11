import { configDefaults, defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    exclude: [
      ...configDefaults.exclude,
      "e2e/**",
      "components/**"
    ],
    coverage: {
      exclude: [
        "components/ui/**"
      ],
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    }
  }
})