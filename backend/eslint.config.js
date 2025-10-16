import importPlugin from 'eslint-plugin-import';
import nodePlugin from 'eslint-plugin-n';
import globals from 'globals';

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      import: importPlugin,
      n: nodePlugin,
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'import/order': ['warn', { groups: ['builtin', 'external', 'internal'] }],
      'n/no-missing-require': 'error',
      'n/no-unsupported-features/es-syntax': 'off',
    },
  },
];
