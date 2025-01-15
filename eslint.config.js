// eslint.config.js
import babelParser from '@babel/eslint-parser'

export default [
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    languageOptions: {
      parser: babelParser,
    },
    rules: {
      semi: ['error', 'always'],
    },
  },
]
