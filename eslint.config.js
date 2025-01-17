import babelParser from '@babel/eslint-parser';
import typescriptParser from '@typescript-eslint/parser';
import eslintPluginNoMargins from './src/index.js';

export default [
  {
    files: ['*.js', '*.jsx'],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-react'],
        },
      },
    },
    plugins: {
      'no-margins': eslintPluginNoMargins,
    },
    rules: {
      'semi': ['error', 'always'],
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'no-margins/no-margin-inline': 'warn',
    },
  },
  {
    files: ['*.ts', '*.tsx'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
      'no-margins': eslintPluginNoMargins,
    },
    extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-type-checked',
    ],
    rules: {
      'semi': ['error', 'always'],
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-margins/no-margin-inline': 'warn',
      'no-margins/no-margin-in-css': 'warn',
    },
  },
];
