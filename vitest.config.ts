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
      "components/**" // exclude components folder due to unsupported useOptimistic hook used in todo-item with vitest.
    ],
    coverage: {
      exclude: [
        "components/ui/**" // exclude components folder due to unsupported useOptimistic hook used in todo-item with vitest.
      ],
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    }
  }
})