// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist', 'storybook-static']),

  // App/source files (browser)
  {
    files: ['src/**/*.{js,jsx}', '.storybook/**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },

  // Entry/config files (node)
  {
    files: [
      '*.config.js',
      'vite.config.js',
      'eslint.config.js',
      '.storybook/main.js',
    ],
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },

  // Files where Fast Refresh rule doesn't apply
  {
    files: ['src/main.jsx', '.storybook/preview.jsx'],
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },

  ...storybook.configs['flat/recommended'],
])
