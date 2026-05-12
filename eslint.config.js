import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import importPlugin from 'eslint-plugin-import';
import unusedImports from 'eslint-plugin-unused-imports';

import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist']),

  {
    files: ['**/*.{ts,tsx}'],

    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      react.configs.flat.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite
    ],

    plugins: {
      import: importPlugin,
      'unused-imports': unusedImports
    },

    languageOptions: {
      globals: globals.browser
    },

    settings: {
      react: {
        version: 'detect'
      }
    },

    rules: {
      // React
      'react/react-in-jsx-scope': 'off',

      // Imports
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always'
        }
      ],

      // Unused imports
      'unused-imports/no-unused-imports': 'warn',

      // TypeScript
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_'
        }
      ],

      // General
      'no-console': 'warn'
    }
  }
]);
