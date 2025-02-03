import { defineConfig } from 'vite'
import typescript from '@rollup/plugin-typescript'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'eslintPluginNoMargins',
      fileName: (format) => {
        return format === 'es' ? 'index.js' : 'index.cjs'
      },
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: [
        'eslint',
        '@typescript-eslint/experimental-utils'
      ],
      output: {
        globals: {
          eslint: 'eslint',
          '@typescript-eslint/experimental-utils': 'typescriptEslintUtils'
        },
      },
    },
  },
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
    }),
  ],
})
