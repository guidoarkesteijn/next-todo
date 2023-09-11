/* eslint-env node */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'next/core-web-vitals'],
  globals: {
    React: true,
    Database: true
  },
  ignorePatterns: ["components/ui/**", "lib/**"],
}
