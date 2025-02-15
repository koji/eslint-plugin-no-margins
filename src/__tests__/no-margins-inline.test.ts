import { RuleTester } from 'eslint'
import { describe } from 'vitest'
import { noMarginsInline } from '../rules'

describe('noMarginsInline', () => {
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

  ruleTester.run('noMarginsInline', noMarginsInline as any, {
    valid: [{ code: '<div style={{ padding: "1rem" }}>valid</div>' }],
    invalid: [
      {
        code: '<div style={{ margin: "1rem" }}>invalid</div>',
        errors: [{ messageId: 'noMarginsInline' }],
      },
    ],
  })
})
