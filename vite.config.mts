import { defineConfig } from 'vite'
import typescript from '@rollup/plugin-typescript'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts', // Entry point for the build
      name: 'eslintPluginTemplate', // Global variable name for the library
      fileName: 'index', // Output file name
      formats: ['es', 'cjs'], // Output formats (ES and CommonJS)
    },
    rollupOptions: {
      external: ['eslint'], // Externalize dependencies
      output: {
        globals: {
          eslint: 'eslint', // Map external dependencies to global variables
        },
      },
    },
  },
  plugins: [
    typescript({
      tsconfig: './tsconfig.json', // Path to your tsconfig.json
    }),
  ],
})
