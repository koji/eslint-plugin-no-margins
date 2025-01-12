import { noMarginInline, noMarginInCss } from './rules/'

export = {
  rurles: {
    'no-margin-inline': noMarginInline,
    'no-margin-in-css': noMarginInCss,
  },
  configs: {
    all: {
      plugins: ['no-margins'],
      rules: {
        'no-margin-inline': 'warn',
        'no-margin-in-css': 'warn',
      },
    },
  },
}
