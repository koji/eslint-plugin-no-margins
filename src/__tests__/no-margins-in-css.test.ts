import { RuleTester } from 'eslint'
import { describe } from 'vitest'
import { noMarginsInCss } from './../rules'

describe('noMarginsInCss', () => {
  let ruleTester = new RuleTester({
    languageOptions: {
      parser: require('@babel/eslint-parser'), // Use Babel parser for JSX
      ecmaVersion: 2020, // Use a modern ECMAScript version
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Enable JSX syntax
        },
      },
    },
  })

  ruleTester.run('noMarginsInCss', noMarginsInCss as any, {
    valid: [{ code: 'const style = css`padding-top: 1rem;`' }],
    invalid: [
      {
        code: 'const style = css`margin-top: 1rem;`',
        errors: [{ messageId: 'noMarginsInCssInJs' }], // Use the correct messageId
      },
    ],
  })
})
