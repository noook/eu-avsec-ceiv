<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import teamMembers from '@/assets/team';

export default defineComponent({
  name: 'AboutUs',
  nuxtI18n: {
    paths: {
      en: '/about-us',
      fr: '/notre-equipe',
    },
  },
  setup() {
    return {
      teamMembers,
    };
  },
});
</script>

<template>
  <div class="about-us">
    <h1>{{ $t('meetOurTeam') }}</h1>
    <main>
      <div v-for="member in teamMembers" :key="member.name" class="member">
        <img :src="member.picture" :alt="member.name">
        <div class="info">
          <h2>{{ member.name }}<span v-if="member.title">, {{ member.title }}</span></h2>
          <p>{{ member.desc[$i18n.locale] }}</p>
          <p>
            {{ $t('spokenLanguages') }}:
            {{ member.languages.map(lang => $t(`languages.${lang}`)).join(', ') }}
          </p>
          <div class="contact">
            <span>Contact: <a :href="`tel:${member.phone}`">{{ member.phone }}</a></span>
            <span>Email: <a :href="`mailto:${member.email}`">{{ member.email }}</a></span>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.about-us {
  > h1 {
    @apply my-6 mx-6 text-xl text-blue-900 font-font-semibold text-center uppercase;
    @apply md:text-2xl md:w-2/3 md:mx-auto;
  }

  main {
    @apply p-4 md:px-8 lg:px-12;
  }

  .member {
    @apply flex flex-col items-center mb-12;
    @apply md:flex-row md:items-start;

    > img {
      @apply w-36;
    }

    .info {
      @apply mt-8;
      @apply md:mt-0 md:ml-8;

      h2 {
        @apply mb-2 text-blue-900 tracking-wider font-semibold;

        span {
          @apply text-blue-800 font-normal tracking-normal;
        }
      }

      p {
        @apply mb-1;
      }

      .contact {
        @apply flex flex-col;

        a {
          @apply underline text-blue-800;
        }
      }
    }
  }
}
</style>
