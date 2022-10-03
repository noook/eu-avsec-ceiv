<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  nuxtI18n: {
    paths: {
      fr: '/liens-et-reglementations',
      en: '/links-and-regulations',
    },
  },
  setup() {
    return {};
  },
  head() {
    return {
      title: `EU-AVSEC-CEIV | ${this.$i18n.t('linksRegulations.title')}`,
    };
  },
});
</script>

<template>
  <div class="links-regulations">
    <header>
      <h1 class="text-center">{{ $t('linksRegulations.title') }}</h1>
    </header>
    <main>
      <section>
        <h2>{{ $t('linksRegulations.europeanCommission') }}</h2>
        <div>
          <img src="@/assets/img/european-commission.png" alt="European Commission">
          <ul>
            <li>
              <a
                target="_blank"
                rel="noopener"
                :href="$i18n.t('links.EC1')">
                {{ $t('linksRegulations.EC.link1') }}
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener"
                :href="$i18n.t('links.EC2')">
                {{ $t('linksRegulations.EC.link2') }}
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener"
                :href="$i18n.t('links.EC3')">
                {{ $t('linksRegulations.EC.link3') }}
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <h2>{{ $t('linksRegulations.CEIV.title') }}</h2>
        <div class="flex !items-center">
          <img src="@/assets/img/ceiv.png" alt="CEIV">
          <ul>
            <li>
              <a
                target="_blank"
                rel="noopener"
                :href="$i18n.t('links.IATACEIV')">
                {{ $t('linksRegulations.CEIV.link1') }}
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <h2>{{ $t('linksRegulations.EURLEX.title') }}</h2>
        <div>
          <img src="@/assets/img/eur-lex.png" alt="EUR-Lex">
          <ul>
            <li class="mb-2">
              <strong>{{ $t('linksRegulations.consolidatedVersions') }}</strong>
            </li>
            <i18n path="linksRegulations.EURLEX.link1" tag="li">
              <span>2010-02-01</span>
              <a
                target="_blank"
                rel="noopener"
                :href="$i18n.t('links.LEX-300/2008')">({{ $t('europeanCommission') }}) N° 300/2008 (M1.pdf)</a>
            </i18n>
            <i18n path="linksRegulations.EURLEX.link2" tag="li">
              <span>2022-03-25</span>
              <a
                target="_blank"
                rel="noopener"
                :href="$i18n.t('links.LEX-748/2009')">({{ $t('europeanCommission') }}) N° 748/2009 (M16.pdf)</a>
            </i18n>
            <i18n path="linksRegulations.EURLEX.link3" tag="li">
              <span>2022-07-07</span>
              <a
                target="_blank"
                rel="noopener"
                :href="$i18n.t('links.LEX-2015/1998')">({{ $t('europeanUnion') }}) N° 2015/1998 (M15.pdf)</a>
            </i18n>
          </ul>
        </div>
      </section>
      <section>
        <h2>{{ $t('linksRegulations.latestRegulations.title') }}</h2>
        <div>
          <img src="@/assets/img/breaking-news.jpg" alt="latest news">
          <ul>
            <i18n path="linksRegulations.latestRegulations.link1" tag="li">
              <span>2021-04-22</span>
              <a
                target="_blank"
                rel="noopener"
                :href="$i18n.t('links.2021/662')">({{ $t('europeanUnion') }}) No 2021/662 (M15)</a>
            </i18n>
            <i18n path="linksRegulations.latestRegulations.link2" tag="li">
              <span>2022-03-14</span>
              <a
                target="_blank"
                rel="noopener"
                :href="$i18n.t('links.2022/421')">({{ $t('europeanUnion') }}) No 2022/421</a>
            </i18n>
          </ul>
        </div>
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.links-regulations {
  @apply p-4;

  header {
    @apply px-8;
  }

  main {
  }

  h1 {
    @apply text-3xl font-semibold mb-4 tracking-wide;
    @apply lg:w-max-3/5 mx-auto;
  }

  section {
    @apply mb-8;

    h2 {
      @apply mb-6 font-semibold text-blue-900 text-xl;
    }

    a {
      @apply text-blue-800 underline font-medium;
    }

    div {
      @apply flex items-start;

      > img {
        @apply w-100px mr-8;
      }
    }
  }
}
</style>
