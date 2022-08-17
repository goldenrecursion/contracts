module.exports = {
  root: true,
  env: {
    mocha: true,
    node: true,
  },
  plugins: ['@typescript-eslint', 'promise'],
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:promise/recommended',
    'plugin:n/recommended',
  ],
  overrides: [
    {
      files: ['**.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
      },
      extends: [
        'plugin:@typescript-eslint/recommended',
        // FIXME !!!
        // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:n/recommended-module',
      ],
      rules: {
        'n/no-missing-import': 0,
        'n/no-unpublished-import': 0,

        // following handled by typescript
        'import/named': 0,
        'import/namespace': 0,
        'import/default': 0,
        'import/no-named-as-default-member': 0,
      },
    },
  ],
};
