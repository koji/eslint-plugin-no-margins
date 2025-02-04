import globals from 'globals'
import react from 'eslint-plugin-react'
// import noMargins from 'eslint-plugin-no-margins'
import noMargins from 'eslint-plugin-no-margins'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'no-margins': noMargins,
    },
    rules: {
      'no-margins/no-margins-inline': 'warn',
      'no-margins/no-margins-in-css': 'warn',
    },
  },
]
