import { TSESLint } from '@typescript-eslint/experimental-utils';
import { noMarginInline, noMarginInCss } from './rules/';

export const rules: Record<string, TSESLint.RuleModule<string, unknown[]>> = {
  'no-margin-inline': noMarginInline,
  'no-margin-in-css': noMarginInCss,
};

export const configs = {
  recommended: {
    plugins: ['no-margins'],
    rules: {
      'no-margin-inline': 'warn',
      'no-margin-in-css': 'warn',
    },
  },
};
