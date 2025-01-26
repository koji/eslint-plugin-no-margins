import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['**/*.{test,spec}.{js,ts}'],
    exclude: ['node_modules', 'dist', 'build'],
    typecheck: {
      enabled: true,
      include: ['**/*.{test,spec}.{js,ts}'],
    },
    coverage: {
      enabled: true,
      provider: 'istanbul',
      reporter: ['text', 'json', 'html'],
      reportsDirectory: './coverage',
      include: ['src/**/*.{js,ts}'],
      exclude: ['**/*.d.ts', '**/index.ts'],
    },
    watch: true,
    benchmark: {
      include: ['**/*.{bench,benchmark}.{js,ts}'],
    },
  },
});
