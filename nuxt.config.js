export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  generate: {
    // choose to suit your project
    interval: 2000,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'EU-AVSEC-CEIV',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { property: 'og:type', content: 'website' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/main.scss',
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
    '@nuxtjs/google-fonts',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-i18n',
  ],

  i18n: {
    locales: [
      {
        code: 'en', iso: 'en-US', file: 'en.ts', isCatchallLocale: true,
      },
      {
        code: 'fr', iso: 'fr-FR', file: 'fr.ts',
      },
    ],
    defaultLocale: 'en',
    langDir: '~/locales/',
    strategy: 'prefix_except_default',
    seo: true,
    baseUrl: 'https://eu-avsec-ceiv.org',
  },

  googleFonts: {
    families: {
      Quicksand: [300, 400, 500, 600, 700],
    },
    display: 'swap',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  server: {
    host: '0', // default: localhost
  },
};
