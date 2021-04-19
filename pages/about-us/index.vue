<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AboutUs',
  nuxtI18n: {
    paths: {
      fr: '/notre-equipe',
      en: '/about-us',
    }
  },
  setup() {
    return {};
  },
})
</script>

<template>
  <div class="about-us">
    <h1>{{ $t('aboutUs') }}</h1>
  </div>
</template>

<style lang="scss" scoped>
.about-us {}
</style>