module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json',
    createDefaultProgram: true
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        parser: 'flow',
        trailingComma: 'none',
        semi: false
      }
    ],
    'no-use-before-define': 'off',
    'max-len': 0,
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-unused-vars': 'off',
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] }
    ],
    'no-underscore-dangle': 0,
    '@typescript-eslint/naming-convention': 0
  }
}
