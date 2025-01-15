import { RuleTester } from 'eslint'
import { describe } from 'vitest'
import { noMarginInCss } from './../rules/no-margins-in-css'

describe('noMarginInCss', () => {
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

  ruleTester.run('noMarginInCss', noMarginInCss as any, {
    valid: [{ code: 'const style = css`padding-top: 1rem;`' }],
    invalid: [
      {
        code: 'const style = css`margin-top: 1rem;`',
        errors: [{ messageId: 'noMarginInCssInJs' }], // Use the correct messageId
      },
    ],
  })
})
