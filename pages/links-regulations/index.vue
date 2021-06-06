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
                href="https://ec.europa.eu/transport/modes/air/security/cargo-mail/air-carriers_en.htm">
                {{ $t('linksRegulations.EC.link1') }}
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener"
                href="https://ec.europa.eu/transport/modes/air/security/cargo-mail/entities_en.htm">
                {{ $t('linksRegulations.EC.link2') }}
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener"
                href="https://webgate.ec.europa.eu/ksda/publicAccess.htm">
                {{ $t('linksRegulations.EC.link3') }}
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <h2>{{ $t('linksRegulations.CEIV.title') }}</h2>
        <div>
          <img src="@/assets/img/ceiv.png" alt="CEIV">
          <ul>
            <li>
              <a
                target="_blank"
                rel="noopener"
                href="https://www.iata.org/en/programs/security/cargo-security/ceiv/">
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
            <i18n path="linksRegulations.EURLEX.link1" tag="li">
              <span>2010-02-01</span>
              <a
                target="_blank"
                rel="noopener"
                href="https://eur-lex.europa.eu/legal-content/FR/TXT/PDF/?uri=CELEX:02008R0300-20100201&rid=1">(CE) N° 300/2008 (M1.pdf)</a>
            </i18n>
            <i18n path="linksRegulations.EURLEX.link2" tag="li">
              <span>2020-08-22</span>
              <a
                target="_blank"
                rel="noopener"
                href="https://eur-lex.europa.eu/legal-content/FR/TXT/PDF/?uri=CELEX:02009R0748-20200424&qid=1619096634483&from=FR">(CE) N° 748/2009 (2018/336 M14)</a>
            </i18n>
            <i18n path="linksRegulations.EURLEX.link3" tag="li">
              <span>2020-07-02</span>
              <a
                target="_blank"
                rel="noopener"
                href="https://eur-lex.europa.eu/legal-content/FR/TXT/PDF/?uri=CELEX:02015R1998-20210315&qid=1621241688071&from=EN">(EU) No 2015/1998 M9 (.pdf)</a>
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
              <span>2020-06-30</span>
              <a
                target="_blank"
                rel="noopener"
                href="https://eur-lex.europa.eu/legal-content/FR/TXT/PDF/?uri=CELEX:32019R0103&from=EN">(EU) No 2020/910 (M8)</a>
            </i18n>
            <i18n path="linksRegulations.latestRegulations.link2" tag="li">
              <span>2021-02-18</span>
              <a
                target="_blank"
                rel="noopener"
                href="https://eur-lex.europa.eu/legal-content/FR/TXT/PDF/?uri=CELEX:32021R0255&from=FR">(EU) No 2021/255 (M9)</a>
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
