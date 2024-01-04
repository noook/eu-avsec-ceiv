<script setup lang="ts">
interface LinkItem {
  name: string;
  text: string;
}

const showOverlay = ref(false)

const links = ref<LinkItem[]>([
  {
    name: '/',
    text: 'home',
  },
  {
    name: '/contact',
    text: 'contact',
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
    name: 'links-and-regulations',
    text: 'linksAndRegulations',
  },
])

const { locale } = useI18n()

const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <nav>
    <div class="mobile lg:hidden">
      <div class="bar">
        <NuxtLink class="text-lg mr-2" :to="switchLocalePath(locale === 'fr' ? 'en' : 'fr')">
          {{ locale === 'fr' ? 'EN' : 'FR' }}
        </NuxtLink>
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
              <NuxtLink
                class="font-medium"
                :to="localePath({
                  path: link.name
                })">
                {{ $t(link.text) }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </transition>
    </div>
    <div class="desktop">
      <ul class="flex items-center">
        <li v-for="link in links" :key="link.name">
          <NuxtLink
            class="font-medium"
            :to="localePath({
              path: link.name
            })">
            {{ $t(link.text) }}
          </NuxtLink>
        </li>
      </ul>
      <NuxtLink class="text-lg mr-2" :to="switchLocalePath(locale === 'fr' ? 'en' : 'fr')">
        {{ locale === 'fr' ? 'EN' : 'FR' }}
      </NuxtLink>
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

    &.router-link-exact-active {
      @apply relative;

      &:after {
        content: '';
        @apply absolute w-8 mt-1 h-0.5 bg-white;
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
        @apply py-2 font-medium;

        &.router-link-exact-active {
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
