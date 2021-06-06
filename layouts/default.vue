<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { MetaInfo } from 'vue-meta';

export default defineComponent({
  name: 'DefaultLayout',
  setup() {
    return {};
  },
  head() {
    return {
      meta: [
        {
          name: 'description',
          content: this.$i18n.t('homepage.target'),
        },
      ],
    } as MetaInfo;
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
