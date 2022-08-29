module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['@react-native-community', 'plugin:prettier/recommended'],
  ignorePatterns: ['.eslintrc.js'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    jsx: true,
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  rules: {
    'react/jsx-uses-react': 0,
    'react/react-in-jsx-scope': 0,
  },
};
