import { TSESLint } from '@typescript-eslint/experimental-utils'

export const noMarginInCss: TSESLint.RuleModule<'noMarginInCss', []> = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Disallow the use of margin-related properties in css-in-js',
      recommended: false,
    },
    messages: {
      noMarginInCss: "Avoid using '{{property}}' in css-in-js.",
    },
    schema: [],
  },
  defaultOptions: [],
  create: (context) => {
    const forbiddenMargins = [
      'margin',
      'margin-left',
      'margin-right',
      'margin-top',
      'margin-bottom',
    ]

    return {
      // Check for CSS-in-JS template literals
      TaggedTemplateExpression(node) {
        if (node.tag.type === 'Identifier' && node.tag.name === 'css') {
          const templateLiteral = node.quasi
          templateLiteral.quasis.forEach((quasi) => {
            const text = quasi.value.raw
            forbiddenMargins.forEach((property) => {
              const regex = new RegExp(`\\b${property}\\b`, 'i')
              if (regex.test(text)) {
                context.report({
                  node: quasi,
                  messageId: 'noMarginInCss',
                  data: {
                    property,
                  },
                })
              }
            })
          })
        }
      },
    }
  },
}
