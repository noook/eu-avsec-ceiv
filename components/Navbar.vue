<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api';
import { LocaleKeys } from '@/locales';

interface LinkItem {
  name: string;
  text: keyof LocaleKeys;
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
      // {
      //   name: 'news',
      //   text: 'news',
      // },
      // {
      //   name: 'acc3',
      //   text: 'ACC3',
      // },
      // {
      //   name: 'ra3',
      //   text: 'ACC3',
      // },
      // {
      //   name: 'kc3',
      //   text: 'KC3',
      // },
      // {
      //   name: 'contact',
      //   text: 'contact',
      // },
      // {
      //   name: 'links-and-regulations',
      //   text: 'linksAndRegulations',
      // },
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
    <div class="mobile">
      <div class="bar">
        <button @click="showOverlay = true"><i class="icon-menu" /></button>
      </div>
      <transition name="fade">
        <div v-if="showOverlay" class="overlay">
          <div class="actions">
            <button @click="showOverlay = false"><i class="icon-cross" /></button>
          </div>
          <ul>
            <li v-for="link in links" :key="link.name" @click="showOverlay = false">
              <nuxt-link :to="localePath(link.name)">{{ $t(link.text) }}</nuxt-link>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  @apply fixed top-0 inset-x-0;
  @apply text-white bg-black;
}

.mobile {
  @apply h-14;

  .bar {
    @apply flex justify-end items-center;
    @apply h-full px-4 text-2xl;

    > button {
      @apply p-2 focus:outline-none;
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
  @apply duration-500;
}
.fade-enter, .fade-leave-to {
  @apply opacity-0;
}
</style>
