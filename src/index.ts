import { TSESLint } from '@typescript-eslint/experimental-utils'
import { noMarginsInline, noMarginsInCss } from './rules/'

export const rules: Record<string, TSESLint.RuleModule<string, unknown[]>> = {
  'no-margins-inline': noMarginsInline,
  'no-margins-in-css': noMarginsInCss,
}

export const configs = {
  recommended: {
    plugins: ['no-margins'],
    rules: {
      'no-margins-inline': 'warn',
      'no-margins-in-css': 'warn',
    },
  },
}

  export default {
    rules,
    configs,
  }
