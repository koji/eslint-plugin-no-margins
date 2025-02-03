import { TSESLint } from '@typescript-eslint/experimental-utils'
import { noMarginsInline, noMarginsInCss } from './rules/'

export default {
  rules: {
    'no-margins-inline': noMarginsInline,
    'no-margins-in-css': noMarginsInCss,
  },
  configs: {
    recommended: {
      plugins: ['no-margins'],
      rules: {
        'no-margins-inline': 'warn',
        'no-margins-in-css': 'warn',
      },
    },
  }
}
