<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';
import articles, { NewsEntry } from '@/assets/news';

export default defineComponent({
  name: 'News',
  nuxtI18n: {
    paths: {
      fr: '/actus',
      en: '/news',
    },
  },
  setup() {
    const sections = computed(() => {
      const sorted = [...articles].sort((a, b) => +b.period - +a.period);
      const groups = sorted.reduce<Record<string, NewsEntry[]>>((acc, article) => {
        const key = `${article.period.getMonth()}/${article.period.getFullYear()}`;

        if (!acc[key]) {
          acc[key] = [];
        }

        acc[key].push(article);

        return acc;
      }, {});

      return Object
        .entries(groups)
        .sort((a, b) => +b[1][0].period - +a[1][0].period)
        .map(([period, items]) => {
          const [month, year] = period.split('/').map(Number);

          return {
            period: new Date(year, month),
            items,
          };
        });
    });

    return {
      sections,
    };
  },
});
</script>

<template>
  <div class="news">
    <h1>News</h1>
    <main>
      <section v-for="(section, idx) in sections" :key="idx">
        <h2>{{ section.period.toLocaleString($i18n.locale, { month: 'long' }) }} {{ section.period.getFullYear() }}</h2>
        <article v-for="(article, articleIdx) in section.items" :key="articleIdx">
          <div class="content">
            <h3>{{ article.name[$i18n.locale] }}</h3>
            <h4>{{ article.title[$i18n.locale] }}</h4>
            <img v-if="article.illustration" :src="article.illustration.src" :alt="article.illustration.alt">
            <p>{{ article.desc[$i18n.locale] }} <a v-if="article.readMore" target="_blank" rel="noopener" :href="article.readMore">{{ $t('readMore') }}...</a></p>
            <div v-if="article.links" class="links">
              <a v-for="(link, linkIdx) in article.links" :key="linkIdx" target="_blank" rel="noopener" :href="link.link">{{ link.text }}</a>
            </div>
          </div>
          <img v-if="article.illustration" :src="article.illustration.src" :alt="article.illustration.alt">
        </article>
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.news {
  > h1 {
    @apply my-6 mx-6 text-xl text-blue-900 font-font-semibold text-center uppercase;
    @apply md:text-2xl md:w-2/3 md:mx-auto;
  }

  main {
    @apply w-full p-4 md:px-8 lg:px-12;

    section {
      @apply mb-4 lg:mb-8;

      h2 {
        @apply text-2xl font-medium capitalize;
        @apply py-1 mb-4 border-t border-b border-blue-900 text-blue-900;
      }
    }

    article {
      @apply mb-6 flex items-center;

      .content {
        img {
          @apply mx-auto my-4 lg:hidden;
        }
      }

      > img {
        @apply hidden lg:inline max-w-32 lg:ml-8;
      }

      h3 {
        @apply tracking-widest text-blue-900 mb-1;
      }

      h4 {
        @apply text-center text-blue-900 font-semibold mb-2;
      }

      p {
        a {
          @apply italic underline font-medium;
        }
      }

      .links {
        @apply mt-2;

        a {
          @apply mr-4 underline text-blue-800;
        }
      }
    }
  }
}
</style>
