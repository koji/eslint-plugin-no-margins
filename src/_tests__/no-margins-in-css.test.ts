import { TSESLint } from '@typescript-eslint/experimental-utils'
import { noMarginInCss } from '../rules/no-margins-in-css'

const ruleTester = new TSESLint.RuleTester({
  parser: require.resolve('espree'),
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
})

ruleTester.run('noMarginInCss', noMarginInCss, {
  valid: [{ code: 'describe valid code pattern' }],
  invalid: [
    {
      code: 'describe invalid code pattern',
      errors: [{ messageId: 'noMarginInCssInJs' }],
    },
  ],
})
