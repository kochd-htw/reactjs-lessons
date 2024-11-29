module.exports = {
    parser: '@babel/eslint-parser',
    parserOptions: {
      ecmaVersion: 6,
      sourceType: 'module',
      allowImportExportEverywhere: true
    },
    extends: ['airbnb'],
    env: {
      browser: true,
      node: true
    },
    rules: {
      'max-len': ['warn', { code: 200 }],
      'no-plusplus': ['warn', { allowForLoopAfterthoughts: true }],
      'object-curly-newline': 'off',
      'one-var-declaration-per-line': 'off',
      'prefer-destructuring': [
        'warn',
        {
          array: false,
          object: true
        },
        {
          enforceForRenamedProperties: false
        }
      ],
      'one-var': 'off',
      'func-names': ['warn', 'never'],
      'arrow-parens': ['off'],
      'linebreak-style': ['off'],
      'consistent-return': 'off',
      'comma-dangle': ['error', 'never'],
      'generator-star-spacing': 'off',
      'import/no-unresolved': 'warn',
      'import/no-extraneous-dependencies': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      'no-console': 'off',
      'no-use-before-define': ['error'],
      'no-multi-assign': 'off',
      'promise/param-names': 'warn',
      'promise/always-return': 'warn',
      'promise/catch-or-return': 'warn',
      'react/jsx-wrap-multilines': 'off',
      'operator-linebreak': 'off',
      'promise/no-native': 'off',
      'react/function-component-definition': [
        'error', {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function'
        }
      ],
      'react/sort-comp': ['warn', {
        order: ['type-annotations', 'static-methods', 'lifecycle', 'everything-else', 'render']
      }],
      'react/jsx-no-bind': 'off',
      'react/forbid-prop-types': 'off',
      'react/require-default-props': 'off',
      'react/jsx-filename-extension': [
        'warn',
        { extensions: ['.jsx'] }
      ],
      semi: [
        2,
        'never'
      ]
    },
    plugins: [
      'import',
      'promise',
      'compat',
      'react'
    ]
  }
  