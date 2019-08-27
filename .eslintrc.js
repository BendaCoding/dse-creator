module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: ['react-hooks'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-console': 'off',
    'no-unused-vars': 'warn'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    node: true
  },
  globals: {
    __static: true
  }
};
