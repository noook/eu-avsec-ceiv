export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  generate: {
    // choose to suit your project
    interval: 2000,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'eu-avsec-ceiv',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/icons/style.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    'nuxt-windicss',
    '@nuxtjs/composition-api/module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-i18n',
  ],

  i18n: {
    locales: [
      {
        code: 'en', iso: 'en-US', file: 'en.ts',
      },
      {
        code: 'fr', iso: 'fr-FR', file: 'fr.ts',
      },
    ],
    defaultLocale: 'en',
    langDir: '~/locales/',
    strategy: 'prefix_except_default',
    seo: true,
    parsePages: false,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
};
