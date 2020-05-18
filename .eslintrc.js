module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  //globals: {
  //  _: 'readonly',
  //},
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    //ecmaFeatures: {
    //  jsx: true,
    //},
  },
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        'tests/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
  rules: {
    //'import/prefer-default-export': 'off',
    //'no-plusplus': 'off',
  },
}
