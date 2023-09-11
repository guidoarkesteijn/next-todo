/* eslint-env node */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', "prettier"],
  extends: ['eslint:recommended', 'next/core-web-vitals', "prettier"],
  globals: {
    React: true,
    Database: true
  },
  rules: {
    "prettier/prettier": "error"
  },
  ignorePatterns: ["components/ui/**", "lib/**"],
}
