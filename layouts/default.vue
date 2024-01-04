<script setup lang="ts">
const head = useLocaleHead({
  addSeoAttributes: true,
})

const i18n = useI18n()

useHead({
  htmlAttrs: {
    ...head.value.htmlAttrs,
  },
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: `
        ${i18n.t('homepage.welcome')}
        ${i18n.t('homepage.target', [`${i18n.t('ACC3')} ${i18n.t('RA3')} ${i18n.t('or')} ${i18n.t('KC3')}`])}
      `,
    },
    ...head.value.meta ?? [],
  ],
  link: [
    ...head.value.link ?? [],
  ],
})
</script>

<template>
  <div id="app">
    <Navbar />
    <div class="flex justify-center">
      <slot />
    </div>
    <footer>
      Copyright &copy; 2013-{{ new Date().getFullYear() }} EU-AVSEC-CEIV.ORG
    </footer>
  </div>
</template>

<style lang="scss">
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

#app {
  @apply mt-14 bg-gray-50 w-full mx-auto;
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
