import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended'
import prettierConfig from 'eslint-config-prettier'

export default tseslint
  .config(
    { ignores: ['dist', 'vite.config.d.ts'] },
    {
      extends: [
        js.configs.recommended,
        ...tseslint.configs.recommendedTypeChecked, // Type-aware rules
        ...tseslint.configs.stylisticTypeChecked, // Optional stylistic rules
        prettierConfig,
      ],
      files: ['**/*.{ts,tsx}'],
      languageOptions: {
        ecmaVersion: 2020,
        globals: globals.browser,
        parserOptions: {
          project: ['./tsconfig.node.json', './tsconfig.app.json'],
          tsconfigRootDir: import.meta.dirname,
        },
      },
      settings: {
        react: { version: '18.3' }, // Specify React version
      },
      plugins: {
        'react-hooks': reactHooks,
        'react-refresh': reactRefresh,
        react, // Add React plugin
      },
      rules: {
        'react/react-in-jsx-scope': 'off',
        'react/jsx-uses-react': 'off',
        semi: ['error', 'never'],
        'comma-dangle': 'off',
        '@typescript-eslint/comma-dangle': 'off',
        'import/no-named-as-default': 'off',
        'import/prefer-default-export': 'off',
        'react/jsx-uses-vars': 'error',
        'react/prop-types': 'off',
        'react/jsx-filename-extension': 'off',
        'react/self-closing-comp': [
          'error',
          {
            component: true, // Enforce self-closing on components without children
            html: true, // Enforce self-closing on HTML elements without children
          },
        ],
        'prettier/prettier': [
          'warn',
          {
            endOfLine: 'auto',
          },
        ],
        'no-unused-vars': 'warn',
        'no-console': 'off',
        'func-names': 'off',
        'no-process-exit': 'off',
        'object-shorthand': 'off',
        'no-param-reassign': 'off',
        'class-methods-use-this': 'off',
        'react/no-unescaped-entities': 'off',
        'jsx-a11y/label-has-associated-control': 'off',
        'react/destructuring-assignment': 'error',
        'react/jsx-no-constructed-context-values': 'off',
        'no-unused-expressions': 'off',
        'no-nested-ternary': 'warn',
        'jsx-a11y/click-events-have-key-events': 'off',
        'import/named': 'off',
        'no-named-as-default': 'off',
        'react/button-has-type': 'off',
        'jsx-a11y/no-noninteractive-element-interactions': 'off',
        'react/no-array-index-key': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'react/jsx-props-no-spreading': 'off',
        'import/no-named-as-default-member': 'off',
        'consistent-return': 'warn',
        'react/jsx-no-useless-fragment': 'off',
        'import/no-cycle': ['off', { maxDepth: 10, ignoreExternal: true }],
        'react/require-default-props': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'react-hooks/exhaustive-deps': 'error',
        ...reactHooks.configs.recommended.rules,
        ...react.configs.recommended.rules, // React rules
        ...react.configs['jsx-runtime'].rules, // JSX runtime rules
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      },
    },
  )
  .concat(eslintPluginPrettier)
