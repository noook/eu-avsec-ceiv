import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  // Target: https://go.nuxtjs.dev/config-target

  app: {
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
  },
  // Global page headers: https://go.nuxtjs.dev/config-head

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/main.scss',
    '@/assets/icons/style.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxtjs/google-fonts',
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
    langDir: 'locales',
    strategy: 'prefix_except_default',
    // seo: true,
    baseUrl: 'https://eu-avsec-ceiv.org',
  },

  // i18n: {
  //   locales: [
  //     {
  //       code: 'en', iso: 'en-US', file: 'en.ts', isCatchallLocale: true,
  //     },
  //     {
  //       code: 'fr', iso: 'fr-FR', file: 'fr.ts',
  //     },
  //   ],
  //   defaultLocale: 'en',
  //   langDir: '~/locales/',
  //   strategy: 'prefix_except_default',
  //   seo: true,
  //   baseUrl: 'https://eu-avsec-ceiv.org',
  // },

  googleFonts: {
    families: {
      Quicksand: [300, 400, 500, 600, 700],
    },
    display: 'swap',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  experimental: {
    typedPages: true,
  },
})
