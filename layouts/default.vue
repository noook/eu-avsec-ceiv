<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
// import { MetaInfo } from 'vue-meta';

export default defineComponent({
  name: 'DefaultLayout',
  // @ts-ignore
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return {
      htmlAttrs: {
        ...i18nHead.htmlAttrs,
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `
            ${this.$i18n.t('homepage.welcome')}
            ${this.$i18n.t('homepage.target', [`${this.$i18n.t('ACC3')} ${this.$i18n.t('RA3')} ${this.$i18n.t('or')} ${this.$i18n.t('KC3')}`])}
          `,
        },
        ...i18nHead.meta,
      ],
      link: [
        ...i18nHead.link,
      ],
    };
  },
});
</script>

<template>
  <div id="app">
    <Navbar />
    <div class="flex justify-center">
      <Nuxt id="nuxt" />
    </div>
    <footer>
      Copyright &copy; 2013-{{ new Date().getFullYear() }} EU-AVSEC-CEIV.ORG
    </footer>
  </div>
</template>

<style lang="scss" scoped>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

#app {
  @apply relative;
}

#nuxt {
  @apply mt-14 bg-gray-50 w-full;
  max-width: 1200px;
}

footer {
  @apply text-xs text-center py-4;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
