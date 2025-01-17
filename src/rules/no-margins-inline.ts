import { TSESLint } from '@typescript-eslint/experimental-utils'

export const noMarginInline: TSESLint.RuleModule<'noMarginInline', []> = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Disallow the use of margin-related styles',
      recommended: false,
    },
    messages: {
      noMarginInline: "Avoid using '{{property}}' in your components.",
    },
    schema: [],
  },
  defaultOptions: [],
  create: (context) => {
    const forbiddenMargins = [
      'margin',
      'marginLeft',
      'marginRight',
      'marginTop',
      'marginBottom',
      'marginX', // custom property
      'marginY', // custom property
    ]

    return {
      // Visitor for object properties
      Property(node) {
        // Ensure node.key is an Identifier or Literal
        if (
          (node.key.type === 'Identifier' &&
            forbiddenMargins.includes(node.key.name)) ||
          (node.key.type === 'Literal' &&
            typeof node.key.value === 'string' &&
            forbiddenMargins.includes(node.key.value))
        ) {
          context.report({
            node: node.key,
            messageId: 'noMarginInline',
            data: {
              property:
                node.key.type === 'Identifier' ? node.key.name : node.key.value,
            },
          })
        }
      },
      // Visitor for JSX attributes
      JSXAttribute(node) {
        // Ensure node.name is a JSXIdentifier
        if (
          node.name.type === 'JSXIdentifier' &&
          forbiddenMargins.includes(node.name.name)
        ) {
          context.report({
            node: node.name,
            messageId: 'noMarginInline',
            data: {
              property: node.name.name,
            },
          })
        }
      },
    }
  },
}
