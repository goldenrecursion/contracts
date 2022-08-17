module.exports = {
  root: true,
  env: {
    browser: false,
    mocha: true,
    node: true,
  },
  plugins: ['@typescript-eslint', 'promise'],
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:promise/recommended',
    'plugin:n/recommended-module',
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    'n/no-missing-import': 0,
    'n/no-unpublished-import': 0,
    'import/named': 0,
    'import/namespace': 0,
    'import/default': 0,
    'import/no-named-as-default-member': 0,
  },
  overrides: [
    {
      files: ['.eslintrc.js'],
      env: {
        node: true,
      },
    },
  ],
};
