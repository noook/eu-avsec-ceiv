module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': ['error', 'never', {
      svg: 'always', json: 'always', png: 'always', jpg: 'always',
    }],
    'import/no-unresolved': ['error', { ignore: ['png$', 'jpg$'] }],
    'vue/html-closing-bracket-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-undef': 'off',
    'max-len': 'off',
  },
  overrides: [
    {
      files: ['*.ts'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.png'],
      },
      typescript: {},
    },
  },
};
