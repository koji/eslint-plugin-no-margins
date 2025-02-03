import { TSESLint } from '@typescript-eslint/experimental-utils'
import { forbiddenMargins } from './constants'

export const noMarginsInCss: TSESLint.RuleModule<'noMarginsInCss', []> = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Disallow the use of margin-related properties in css-in-js',
      recommended: false,
    },
    messages: {
      noMarginsInCss: "Avoid using '{{property}}' in css-in-js.",
    },
    schema: [],
  },
  defaultOptions: [],
  create: (context) => {
    return {
      // Check for CSS-in-JS template literals
      TaggedTemplateExpression(node) {
        if (node.tag.type === 'Identifier' && node.tag.name === 'css') {
          const templateLiteral = node.quasi
          templateLiteral.quasis.forEach((quasi) => {
            const text = quasi.value.raw
            // Find the first matching margin property
            const foundMargin = forbiddenMargins.find((property) => {
              const regex = new RegExp(`\\b${property}\\b`, 'i')
              return regex.test(text)
            })
            
            if (foundMargin) {
              context.report({
                node: quasi,
                messageId: 'noMarginsInCss',
                data: {
                  property: foundMargin,
                },
              })
            }
          })
        }
      },
    }
  },
}
