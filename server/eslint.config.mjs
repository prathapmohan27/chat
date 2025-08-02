// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['eslint.config.mjs'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      sourceType: 'commonjs',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      // New: Backend-relevant
      '@typescript-eslint/explicit-function-return-type': [
        'error',
        {
          allowExpressions: false,
          allowTypedFunctionExpressions: false,
        },
      ],

      '@typescript-eslint/explicit-module-boundary-types': 'error',

      '@typescript-eslint/require-await': 'warn', // async functions must await
      '@typescript-eslint/prefer-readonly': 'warn', // encourage readonly for immutability
      '@typescript-eslint/consistent-type-imports': 'error', // enforce type-only imports

      'no-console': ['warn', { allow: ['warn', 'error'] }], // allow error logging only
      'no-return-await': 'error', // avoid redundant await
      'no-useless-catch': 'error', // catch blocks must do something useful
      eqeqeq: ['error', 'always'], // already included
      curly: ['error', 'all'], // already included
    },
  },
);
