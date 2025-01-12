import { TSESLint } from '@typescript-eslint/experimental-utils'
import { noMarginInline } from '../rules/no-margins-inline'

const ruleTester = new TSESLint.RuleTester({
  parser: require.resolve('espree'),
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
})

ruleTester.run('noMarginInline', noMarginInline, {
  valid: [{ code: 'describe valid code pattern' }],
  invalid: [
    {
      code: 'describe invalid code pattern',
      errors: [{ messageId: 'noMarginInline' }],
    },
  ],
})
