module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-inferrable-types': 'warn',
    '@typescript-eslint/no-misused-promises': 'warn',
    'no-case-declarations': 'off',
    'no-extra-boolean-cast': 'off',
    'no-unsafe-finally': 'off',
    'prefer-const': 'warn',
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: true,
        endOfLine: 'auto'
      }
    ],
    '@typescript-eslint/ban-types': 'warn',
    'prefer-rest-params': 'warn',
    'require-await': 'warn',
    'no-console': 'warn',
    '@typescript-eslint/no-floating-promises': 'error',
  },
  root: true,
  ignorePatterns: ['.eslintrc.js'],
};
