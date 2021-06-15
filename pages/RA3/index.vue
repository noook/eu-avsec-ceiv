<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import ra3KeysFr from '@/assets/img/ra3-keys_fr.png';
import ra3KeysEn from '@/assets/img/ra3-keys_en.png';
import ra3OffersFr from '@/assets/img/ra3-offers_fr.png';
import ra3OffersEn from '@/assets/img/ra3-offers_en.png';
import ra3PrevalidationFr from '@/assets/img/ra3-prevalidation_fr.png';
import ra3PrevalidationEn from '@/assets/img/ra3-prevalidation_en.png';
import ra3ValidationFr from '@/assets/img/ra3-validation_fr.png';
import ra3ValidationEn from '@/assets/img/ra3-validation_en.png';
import ra3SecurityProgramEn from '@/assets/img/ra3-entity-security-program_en.png';
import ra3SecurityProgramFr from '@/assets/img/ra3-entity-security-program_fr.png';
import ra3SecurityValidationEn from '@/assets/img/ra3-security-validation_en.png';
import ra3SecurityValidationFr from '@/assets/img/ra3-security-validation_fr.png';

export default defineComponent({
  nuxtI18n: {
    paths: {
      fr: '/ra3',
      en: '/ra3',
    },
  },
  setup() {
    const assets: Record<string, LocalizedAsset> = {
      ra3Keys: {
        fr: ra3KeysFr,
        en: ra3KeysEn,
      },
      ra3Offers: {
        fr: ra3OffersFr,
        en: ra3OffersEn,
      },
      ra3Prevalidation: {
        fr: ra3PrevalidationFr,
        en: ra3PrevalidationEn,
      },
      ra3Validation: {
        fr: ra3ValidationFr,
        en: ra3ValidationEn,
      },
      ra3SecurityProgram: {
        fr: ra3SecurityProgramFr,
        en: ra3SecurityProgramEn,
      },
      ra3SecurityValidation: {
        fr: ra3SecurityValidationFr,
        en: ra3SecurityValidationEn,
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
      <h1>{{ $t('ra3.title') }}</h1>
    </header>
    <main>
      <section>
        <h3 class="requirements">{{ $t('ra3.regulationRequirements') }}</h3>

        <!-- ra3SecurityProgram -->
        <img :src="ra3SecurityProgram[$i18n.locale]" :alt="ra3SecurityProgram[$i18n.locale]">
        <i18n path="ra3.p1" tag="p">
          <a
            target="_blank"
            rel="noopener"
            href="https://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=CONSLEG:2008R0300:20100201:EN:PDF"
            class="font-bold">No 300/2008</a>
          <strong>{{ $t('ra3.p1Keywords') }}</strong>
        </i18n>

        <!-- ra3SecurityValidation -->
        <img :src="ra3SecurityValidation[$i18n.locale]" :alt="ra3SecurityValidation[$i18n.locale]">
        <i18n path="ra3.p2" tag="p">
          <strong>No 654/2013</strong>
          <strong>No 185/2010</strong>
          <strong>{{ $t('ra3.p2Keywords') }}</strong>
        </i18n>

        <i18n path="ra3.footer" tag="p" class="text-center text-red-600">
          <strong>{{ $t('ra3.footerLink') }}</strong>
          <a
            target="_blank"
            rel="noopener"
            :href="$i18n.t('links.2015/1998')">{{ $t('ra3.footerLink2') }}</a>
        </i18n>
        <hr class="my-4">
        <h3>{{ $t('ra3.keys') }}</h3>
        <img class="keys" :src="ra3Keys[$i18n.locale]" :alt="ra3Keys[$i18n.locale]">
      </section>
      <section>
        <h3>{{ $t('ra3.whatWeOffer') }}</h3>
        <img class="h-20 mx-auto" :src="ra3Offers[$i18n.locale]" :alt="ra3Offers[$i18n.locale]">
        <hr class="my-6 border-gray-500">
        <!-- Prevalidation -->
        <img :src="ra3Prevalidation[$i18n.locale]" :alt="ra3Prevalidation[$i18n.locale]">
        <p class="my-3">{{ $t('ra3.prevalidationPrehamble') }}</p>
        <h4>{{ $t('ra3.whyPrevalidate') }}</h4>
        <p class="my-3">{{ $t('ra3.validationReason') }}</p>
        <h4>{{ $t('ra3.howWeProceed') }}</h4>
        <p>{{ $t('ra3.prevalidation.3steps') }}</p>
        <ul>
          <li>
            <strong class="capitalize">{{ $t('step') }} 1:</strong>
            <span>{{ $t('ra3.prevalidation.step1') }}</span>
          </li>
          <li>
            <strong class="capitalize">{{ $t('step') }} 2:</strong>
            <span>{{ $t('ra3.prevalidation.step2') }}</span>
          </li>
          <li>
            <strong class="capitalize">{{ $t('step') }} 3:</strong>
            <span>{{ $t('ra3.prevalidation.step3') }}</span>
          </li>
        </ul>
        <i18n path="ra3.takeOurSurvey" tag="p" class="my-2">
          <a
            class="text-blue-800 underline font-semibold"
            target="_blank"
            rel="noopener"
            href="https://docs.google.com/forms/d/e/1FAIpQLScJ8Dnsh0H3OE6AbXcyJkFM30kpWSHy2tnN84XcETtpIh-fQw/viewform">{{ $t('ra3.formText') }}</a>
        </i18n>
        <img :src="ra3Validation[$i18n.locale]" :alt="ra3Validation[$i18n.locale]">
        <h4 class="my-3">{{ $t('ra3.howWeProceed') }}</h4>
        <p class="my-3">{{ $t('ra3.validation.2steps') }}</p>
        <ul>
          <li>
            <strong class="capitalize">{{ $t('step') }} 1:</strong>
            <span>{{ $t('ra3.validation.step1') }}</span>
          </li>
          <li>
            <strong class="capitalize">{{ $t('step') }} 2:</strong>
            <span>{{ $t('ra3.validation.step2') }}</span>
          </li>
        </ul>
        <nuxt-link :to="localePath({ name: 'about-us' })">{{ $t('contactUs') }}</nuxt-link>
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

      ul {
        @apply mb-4;

        + a {
          @apply text-blue-800 font-semibold underline;
        }
      }

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
