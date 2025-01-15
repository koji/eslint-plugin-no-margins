import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    // Enable global imports for `describe`, `it`, `expect`, etc.
    globals: true,

    // Specify the testing environment (e.g., 'node' or 'jsdom')
    environment: 'node', // Use 'jsdom' for browser-like environments

    // Include test files (default is '**/*.{test,spec}.{js,ts}')
    include: ['**/*.{test,spec}.{js,ts}'],

    // Exclude files or directories from testing
    exclude: ['node_modules', 'dist', 'build'],

    // Enable TypeScript support
    typecheck: {
      enabled: true, // Enable type checking during tests
      include: ['**/*.{test}.{js,ts}'], // Files to type-check
    },

    // Code coverage configuration
    coverage: {
      enabled: true, // Enable coverage reporting
      provider: 'istanbul', // Use 'istanbul' or 'v8' for coverage
      reporter: ['text', 'json', 'html'], // Output formats
      reportsDirectory: './coverage', // Directory for coverage reports
      include: ['src/**/*.{js,ts}'], // Files to include in coverage
      exclude: ['**/*.d.ts', '**/index.ts'], // Files to exclude from coverage
    },

    // Watch mode configuration
    watch: true, // Enable watch mode by default

    // Benchmarking configuration (optional)
    benchmark: {
      include: ['**/*.{bench,benchmark}.{js,ts}'], // Benchmark files
    },
  },
})
