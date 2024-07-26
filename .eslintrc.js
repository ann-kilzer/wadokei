module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
      'eslint:recommended',
      'plugin:react-hooks/recommended',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', '*.html'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
      project: ["tsconfig.json", "tsconfig.node.json"]
  },
  plugins: [
      'react-refresh',
      '@stylistic/ts'
  ],
  rules: {
      'no-redeclare': 'off',
      'react-refresh/only-export-components': [
          'warn',
          { allowConstantExport: true },
      ],
      'react/react-in-jsx-scope': 'off',
      'quotes': ['error', 'single'],
      '@typescript-eslint/prefer-nullish-coalescing': 'off',
      '@typescript-eslint/no-unsafe-call': ['off'],
      '@stylistic/ts/indent': ['error', 4],
  },
}
