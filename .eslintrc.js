module.exports = {
  root: true,
  env: {
    browser: false,
    es2021: true,
    mocha: true,
    node: true,
  },
  plugins: ['@typescript-eslint'],
  extends: ['standard', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'n/no-unsupported-features/es-syntax': ['error', { ignores: ['modules'] }],
  },
};
