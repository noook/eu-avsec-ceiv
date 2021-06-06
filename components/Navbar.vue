<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api';

interface LinkItem {
  name: string;
  text: string;
}

export default defineComponent({
  name: 'Navbar',
  setup() {
    const showOverlay = ref(false);

    const links = ref<LinkItem[]>([
      {
        name: '/',
        text: 'home',
      },
      {
        name: '/about-us',
        text: 'aboutUs',
      },
      {
        name: 'news',
        text: 'news',
      },
      {
        name: 'ACC3',
        text: 'ACC3',
      },
      {
        name: 'RA3',
        text: 'RA3',
      },
      {
        name: 'KC3',
        text: 'KC3',
      },
      {
        name: 'links-regulations',
        text: 'linksAndRegulations',
      },
    ]);

    return {
      showOverlay,
      links,
    };
  },
});
</script>

<template>
  <nav>
    <div class="mobile lg:hidden">
      <div class="bar">
        <nuxt-link class="text-lg mr-2" :to="switchLocalePath($i18n.locale === 'fr' ? 'en' : 'fr')">
          {{ $i18n.locale === 'fr' ? 'EN' : 'FR' }}
        </nuxt-link>
        <button aria-label="Open menu" @click="showOverlay = true">
          <i class="icon-menu" />
        </button>
      </div>
      <transition name="fade">
        <div v-if="showOverlay" class="overlay">
          <div class="actions">
            <button aria-label="Close menu" @click="showOverlay = false">
              <i class="icon-cross" />
            </button>
          </div>
          <ul>
            <li v-for="link in links" :key="link.name" @click="showOverlay = false">
              <nuxt-link :to="localePath(link.name)">{{ $t(link.text) }}</nuxt-link>
            </li>
          </ul>
        </div>
      </transition>
    </div>
    <div class="desktop">
      <ul class="flex items-center">
        <li v-for="link in links" :key="link.name">
          <nuxt-link :to="localePath(link.name)">{{ $t(link.text) }}</nuxt-link>
        </li>
      </ul>
      <nuxt-link class="text-lg mr-2" :to="switchLocalePath($i18n.locale === 'fr' ? 'en' : 'fr')">
        {{ $i18n.locale === 'fr' ? 'EN' : 'FR' }}
      </nuxt-link>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  @apply fixed top-0 inset-x-0;
  @apply text-white bg-black;
}

.desktop {
  @apply h-14 px-4;
  @apply hidden lg:flex justify-between items-center;

  a {
    @apply mr-8;

    &.nuxt-link-exact-active {
      @apply relative;

      &:after {
        content: '';
        @apply absolute w-8 mt-1 h-2px bg-white;
        @apply top-full left-1/2 transform -translate-x-1/2;
      }
    }
  }
}

.mobile {
  @apply h-14;

  .bar {
    @apply flex justify-end items-center;
    @apply h-full px-4 text-2xl;

    > button {
      @apply flex items-center p-2 focus:outline-none;
    }
  }

  .overlay {
    @apply absolute inset-0 w-screen h-screen;
    @apply bg-black p-6;

    .actions {
      @apply flex items-center justify-end text-2xl;

      > button {
        @apply p-2 focus:outline-none;
      }
    }

    ul li {
      @apply flex justify-center;

      a {
        @apply py-2;

        &.nuxt-link-exact-active {
          @apply font-semibold;
        }
      }
    }
  }
}

.fade-enter-active, .fade-leave-active {
  @apply duration-150;
}
.fade-enter, .fade-leave-to {
  @apply opacity-0;
}
</style>
