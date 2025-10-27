import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      globals: {
        ...globals.node,    // para permitir require, module, etc.
        ...globals.jest     // para permitir test, expect, etc.
      }
    },
    rules: {
      complexity: ['warn', {max: 10}],
      quotes: ['warn', 'single']
    }
  }
]);