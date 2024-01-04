<script setup lang="ts">
defineI18nRoute({
  paths: {
    fr: '/liens-et-reglementations',
    en: '/links-and-regulations',
  },
})

const i18n = useI18n()

useHead({
  title: `EU-AVSEC-CEIV | ${i18n.t('linksRegulations.title')}`,
})
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
                :href="$t('links.EC1')">
                {{ $t('linksRegulations.EC.link1') }}
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener"
                :href="$t('links.EC2')">
                {{ $t('linksRegulations.EC.link2') }}
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener"
                :href="$t('links.EC3')">
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
                :href="$t('links.IATACEIV')">
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
            <i18n-t scope="global" keypath="linksRegulations.EURLEX.link1" tag="li">
              <span>2010-02-01</span>
              <a
                target="_blank"
                rel="noopener"
                :href="$t('links.LEX-300/2008')">({{ $t('europeanCommission') }}) N° 300/2008 (M1.pdf)</a>
            </i18n-t>
            <i18n-t scope="global" keypath="linksRegulations.EURLEX.link2" tag="li">
              <span>2023-03-23</span>
              <a
                target="_blank"
                rel="noopener"
                :href="$t('links.LEX-748/2009')">({{ $t('europeanCommission') }}) N° 748/2009 (M17.pdf)</a>
            </i18n-t>
            <i18n-t scope="global" keypath="linksRegulations.EURLEX.link3" tag="li">
              <span>2022-07-07</span>
              <a
                target="_blank"
                rel="noopener"
                :href="$t('links.LEX-2015/1998')">({{ $t('europeanUnion') }}) N° 2015/1998 (M16.pdf)</a>
            </i18n-t>
          </ul>
        </div>
      </section>
      <section>
        <h2>{{ $t('linksRegulations.latestRegulations.title') }}</h2>
        <div>
          <img src="@/assets/img/breaking-news.jpg" alt="latest news">
          <ul>
            <i18n-t scope="global" keypath="linksRegulations.latestRegulations.link2" tag="li">
              <span>2023-03-10</span>
              <a
                target="_blank"
                rel="noopener"
                :href="$t('links.2023/566')">({{ $t('europeanUnion') }}) No 2023/566 (M16) (2023/566 M16.pdf)</a>
            </i18n-t>
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
    @apply lg:max-w-sm mx-auto;
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
        @apply w-[100px] mr-8;
      }
    }
  }
}
</style>
