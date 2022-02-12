module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  globals: {
    context: 'readonly',
    given: 'readonly',
    kakao: 'readonly',
    Feature: 'readonly',
    Scenario: 'readonly',
  },
  rules: {
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'no-useless-concat': 'off',
    'no-use-before-define': 'off',
    'no-shadow': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-array-index-key': 'off',
    'react/prop-types': 'off',
  },
};
