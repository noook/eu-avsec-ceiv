<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import kc3AirSafetyEn from '@/assets/img/kc3-air-safety_en.png';
import kc3AirSafetyFr from '@/assets/img/kc3-air-safety_fr.png';
import kc3SafetyEntityEn from '@/assets/img/kc3-safety-entity_en.png';
import kc3SafetyEntityFr from '@/assets/img/kc3-safety-entity_fr.png';
import kc3KeysFr from '@/assets/img/kc3-keys_fr.png';
import kc3KeysEn from '@/assets/img/kc3-keys_en.png';
import kc3OffersFr from '@/assets/img/kc3-offers_fr.png';
import kc3OffersEn from '@/assets/img/kc3-offers_en.png';
import kc3PrevalidationFr from '@/assets/img/kc3-prevalidation_fr.png';
import kc3PrevalidationEn from '@/assets/img/kc3-prevalidation_en.png';
import kc3ValidationFr from '@/assets/img/kc3-validation_fr.png';
import kc3ValidationEn from '@/assets/img/kc3-validation_en.png';

export default defineComponent({
  nuxtI18n: {
    paths: {
      fr: '/kc3',
      en: '/kc3',
    },
  },
  setup() {
    const assets: Record<string, LocalizedAsset> = {
      kc3SafetyEntity: {
        fr: kc3SafetyEntityFr,
        en: kc3SafetyEntityEn,
      },
      kc3AirSafety: {
        fr: kc3AirSafetyFr,
        en: kc3AirSafetyEn,
      },
      kc3Keys: {
        fr: kc3KeysFr,
        en: kc3KeysEn,
      },
      kc3Offers: {
        fr: kc3OffersFr,
        en: kc3OffersEn,
      },
      kc3Prevalidation: {
        fr: kc3PrevalidationFr,
        en: kc3PrevalidationEn,
      },
      kc3Validation: {
        fr: kc3ValidationFr,
        en: kc3ValidationEn,
      },
    };

    return {
      ...assets,
    };
  },
});
</script>

<template>
  <div class="ra3">
    <header>
      <h1>{{ $t('kc3.title') }}</h1>
    </header>
    <main>
      <section>
        <h3 class="requirements">{{ $t('kc3.regulationRequirements') }}</h3>

        <!-- kc3SafetyEntity -->
        <img :src="kc3SafetyEntity[$i18n.locale]" :alt="kc3SafetyEntity[$i18n.locale]">
        <i18n path="kc3.p1" tag="p">
          <a
            target="_blank"
            rel="noopener"
            href="https://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=CONSLEG:2008R0300:20100201:EN:PDF"
            class="font-bold">No 300/2008</a>
          <strong>{{ $t('kc3.p1Keywords') }}</strong>
        </i18n>

        <!-- kc3AirSafety -->
        <img :src="kc3AirSafety[$i18n.locale]" :alt="kc3AirSafety[$i18n.locale]">
        <i18n path="kc3.p2" tag="p">
          <strong>No 654/2013</strong>
          <strong>No 185/2010</strong>
          <strong>{{ $t('kc3.p2Keywords') }}</strong>
        </i18n>

        <i18n path="kc3.footer" tag="p" class="text-center text-red-600">
          <a
            target="_blank"
            rel="noopener"
            href="https://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=OJ:L:2010:055:0001:0055:EN:PDF#:~:text=This%20Regulation%20lays%20down%20detailed,supplementing%20the%20common%20basic%20standards">{{ $t('kc3.footerLink') }}</a>
          <a
            target="_blank"
            rel="noopener"
            href="https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02015R1998-20160229&rid=1">{{ $t('kc3.footerLink2') }}</a>
        </i18n>
        <hr class="my-4">
        <h3>{{ $t('kc3.keys') }}</h3>
        <img class="keys" :src="kc3Keys[$i18n.locale]" :alt="kc3Keys[$i18n.locale]">
      </section>
      <section>
        <h3>{{ $t('kc3.whatWeOffer') }}</h3>
        <img class="h-20 mx-auto" :src="kc3Offers[$i18n.locale]" :alt="kc3Offers[$i18n.locale]">
        <hr class="my-6 border-gray-500">
        <!-- Prevalidation -->
        <img :src="kc3Prevalidation[$i18n.locale]" :alt="kc3Prevalidation[$i18n.locale]">
        <p class="my-3">{{ $t('kc3.prevalidationPrehamble') }}</p>
        <h4>{{ $t('kc3.whyPrevalidate') }}</h4>
        <p class="my-3">{{ $t('kc3.validationReason') }}</p>
        <h4>{{ $t('kc3.howWeProceed') }}</h4>
        <p>{{ $t('kc3.prevalidation.3steps') }}</p>
        <ul>
          <li>
            <strong class="capitalize">{{ $t('step') }} 1:</strong>
            <span>{{ $t('kc3.prevalidation.step1') }}</span>
          </li>
          <li>
            <strong class="capitalize">{{ $t('step') }} 2:</strong>
            <span>{{ $t('kc3.prevalidation.step2') }}</span>
          </li>
          <li>
            <strong class="capitalize">{{ $t('step') }} 3:</strong>
            <span>{{ $t('kc3.prevalidation.step3') }}</span>
          </li>
        </ul>
        <img :src="kc3Validation[$i18n.locale]" :alt="kc3Validation[$i18n.locale]">
        <h4 class="my-3">{{ $t('kc3.howWeProceed') }}</h4>
        <p class="my-3">{{ $t('kc3.validation.2steps') }}</p>
        <ul>
          <li>
            <strong class="capitalize">{{ $t('step') }} 1:</strong>
            <span>{{ $t('kc3.validation.step1') }}</span>
          </li>
          <li>
            <strong class="capitalize">{{ $t('step') }} 2:</strong>
            <span>{{ $t('kc3.validation.step2') }}</span>
          </li>
        </ul>
        <!-- @todo link to contact -->
        <a href="">{{ $t('contactUs') }}</a>
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.ra3 {
  @apply p-4;

  header {
    @apply px-8;
  }

  main {
    @apply lg:flex;

    section {
      @apply lg:p-4 sm:px-12 lg:px-4 flex-1;

      ul li {
        @apply mb-1;
      }
    }
  }

  h1, h2, h3 {
    @apply text-center text-blue-900;
  }

  h4 {
    @apply text-blue-800 font-semibold text-lg;
  }

  h1 {
    @apply text-3xl font-semibold mb-4 tracking-wide;
    @apply lg:w-max-3/5 mx-auto;
  }

  h3 {
    @apply text-lg font-semibold my-3;
    &.requirements ~ img {
      @apply mb-2;
      max-height: theme('height.8');

      &.keys {
        max-height: inherit;
        @apply mx-auto;
      }
    }

    ~ p {
      @apply mb-4;

      a {
        @apply underline text-blue-800;
      }
    }
  }
}
</style>
