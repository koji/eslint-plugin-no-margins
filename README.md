# eslint-plugin-no-margins

This is a plugin for ESLint that helps you avoid using margin-related properties in your code.

## Why use this plugin?

margin-related properties are easy to use and can quickly become a source of confusion and confusion and can lead to bugs.

## Installation

```shell
#npm
npm install --save-dev eslint-plugin-no-margins

#yarn
yarn add -D eslint-plugin-no-margins

#pnpm
pnpm add -D eslint-plugin-no-margins
```

## Usage

### eslint.config.js

```js
import js from '@eslint/js'
import globals from 'globals'
import noMargins from 'eslint-plugin-no-margins'

import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'no-margins': noMargins,
    },
    rules: {
      'no-margins/no-margins-in-css': 'warn',
      'no-margins/no-margins-inline': 'warn',
    },
  }
)
```

### react code

```tsx
import js from '@eslint/js'
import globals from 'globals'
import noMargins from 'eslint-plugin-no-margins'

import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'no-margins': noMargins,
    },
    rules: {
      'no-margins/no-margins-in-css': 'warn',
      'no-margins/no-margins-inline': 'warn',
    },
  }
)
```

### check margins

```shell
yarn run eslint src/App.tsx
yarn run v1.22.22
$ /home/koji/test_eslint-plugin/node_modules/.bin/eslint src/App.tsx

/home/koji/test_eslint-plugin/src/App.tsx
  11:21  warning  Avoid using 'marginTop' in your components  no-margins/no-margins-inline

✖ 1 problem (0 errors, 1 warning)
```
