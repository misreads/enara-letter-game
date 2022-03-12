module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
  ],
  settings: {
    'import/resolver': {
      node: {},
      'babel-module': {
        alias: {
          '~scss': './src/scss',
          '~screens': './src/app/screens',
          '~config': './src/config',
          '~constants': './src/constants',
          '~redux': './src/redux',
          '~services': './src/services',
          '~utils': './src/utils',
          '~propTypes': './src/propTypes',
          '~hooks': './src/hooks',
        },
      },
    },
  },
  plugins: [
    'babel',
  ],
  rules: {
    'no-extra-parens': 'off',
    indent: 'off',
    'no-mixed-operators': 'off',
    'max-nested-callbacks': ['error', 3],
    'no-magic-numbers': ['error', { ignore: [0, 1, -1, 2, 3], enforceConst: true }],
    'react/jsx-wrap-multilines': ['error', { declaration: false, assignment: false }],
    'babel/no-unused-expressions': 1,
    'no-unused-expressions': 'off',
    'import/order': [
      'error', {
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'unknown', 'parent', 'internal', 'sibling', 'index'],
      },
    ],
    'import/no-named-as-default': 'off',
    'import/no-cycle': 'off',
    'react/jsx-filename-extension': 'off',
    'react/button-has-type': 'off',
    'max-len': 'off',
  },
};
