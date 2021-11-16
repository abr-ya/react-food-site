module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    '@typescript-eslint/no-var-requires': 0,
    'react/function-component-definition': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'max-len': ['error', { code: 120 }],
    // temp
    'import/no-unresolved': 0,
    'import/no-import-module-exports': 0,
    'import/no-extraneous-dependencies': 0,
  },
};
