module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'airbnb-base',
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
  },
};
