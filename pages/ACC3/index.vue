<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import acc3KeysFr from '@/assets/img/acc3-keys_fr.png';
import acc3KeysEn from '@/assets/img/acc3-keys_en.png';
import acc3OffersFr from '@/assets/img/acc3-offers_fr.png';
import acc3OffersEn from '@/assets/img/acc3-offers_en.png';
import acc3PrevalidationFr from '@/assets/img/acc3-prevalidation_fr.png';
import acc3PrevalidationEn from '@/assets/img/acc3-prevalidation_en.png';
import acc3ValidationFr from '@/assets/img/acc3-validation_fr.png';
import acc3ValidationEn from '@/assets/img/acc3-validation_en.png';
import aviationSecurityValidationFr from '@/assets/img/aviation-security-validation_fr.png';
import aviationSecurityValidationEn from '@/assets/img/aviation-security-validation_en.png';
import carrierSecurityProgramFr from '@/assets/img/carrier-security-program_fr.png';
import carrierSecurityProgramEn from '@/assets/img/carrier-security-program_en.png';
import specificSecurityProgramFr from '@/assets/img/specific-security-program_fr.png';
import specificSecurityProgramEn from '@/assets/img/specific-security-program_en.png';

export default defineComponent({
  nuxtI18n: {
    paths: {
      fr: '/acc3',
      en: '/acc3',
    },
  },
  setup() {
    const assets: Record<string, LocalizedAsset> = {
      acc3Keys: {
        fr: acc3KeysFr,
        en: acc3KeysEn,
      },
      acc3Offers: {
        fr: acc3OffersFr,
        en: acc3OffersEn,
      },
      acc3Prevalidation: {
        fr: acc3PrevalidationFr,
        en: acc3PrevalidationEn,
      },
      acc3Validation: {
        fr: acc3ValidationFr,
        en: acc3ValidationEn,
      },
      aviationSecurityValidation: {
        fr: aviationSecurityValidationFr,
        en: aviationSecurityValidationEn,
      },
      carrierSecurityProgram: {
        fr: carrierSecurityProgramFr,
        en: carrierSecurityProgramEn,
      },
      specificSecurityProgram: {
        fr: specificSecurityProgramFr,
        en: specificSecurityProgramEn,
      },
    };

    return {
      ...assets,
    };
  },
});
</script>

<template>
  <div class="acc3">
    <header>
      <h1>{{ $t('acc3.title') }}</h1>
    </header>
    <main>
      <section>
        <h3 class="requirements">{{ $t('acc3.regulationRequirements') }}</h3>

        <!-- carrierSecurityProgram -->
        <img :src="carrierSecurityProgram[$i18n.locale]" :alt="carrierSecurityProgram[$i18n.locale]">
        <i18n path="acc3.p1" tag="p">
          <a
            target="_blank"
            rel="noopener"
            href="https://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=CONSLEG:2008R0300:20100201:EN:PDF">No 300/2008</a>
          <strong>{{ $t('acc3.p1Keywords') }}</strong>
        </i18n>

        <!-- specificSecurityProgram -->
        <img :src="specificSecurityProgram[$i18n.locale]" :alt="specificSecurityProgram[$i18n.locale]">
        <i18n path="acc3.p2" tag="p">
          <strong>No 859/2011</strong>
          <strong>{{ $t('acc3.6gAttachment') }}</strong>
        </i18n>

        <!-- aviationSecurityValidation -->
        <img :src="aviationSecurityValidation[$i18n.locale]" :alt="aviationSecurityValidation[$i18n.locale]">
        <i18n path="acc3.p3" tag="p">
          <strong>No 1082/2012</strong>
          <strong>No 185/2010</strong>
          <strong>{{ $t('acc3.p3Keywords') }}</strong>
        </i18n>

        <i18n path="acc3.footer" tag="p" class="text-center text-red-600">
          <a
            target="_blank"
            rel="noopener"
            href="https://eur-lex.europa.eu/legal-content/FR/TXT/HTML/?uri=CELEX:02015R1998-20160229&qid=1459776851163&from=FR">{{ $t('acc3.footerLink') }}</a>
        </i18n>
        <hr class="my-4">
        <h3>{{ $t('acc3.keys') }}</h3>
        <img class="keys" :src="acc3Keys[$i18n.locale]" :alt="acc3Keys[$i18n.locale]">
      </section>
      <section>
        <h3>{{ $t('acc3.whatWeOffer') }}</h3>
        <img class="h-20 mx-auto" :src="acc3Offers[$i18n.locale]" :alt="acc3Offers[$i18n.locale]">
        <hr class="my-6 border-gray-500">
        <!-- Prevalidation -->
        <img :src="acc3Prevalidation[$i18n.locale]" :alt="acc3Prevalidation[$i18n.locale]">
        <p class="my-3">{{ $t('acc3.prevalidationPrehamble') }}</p>
        <h4>{{ $t('acc3.whyPrevalidate') }}</h4>
        <p class="my-3">{{ $t('acc3.validationReason') }}</p>
        <h4>{{ $t('acc3.howWeProceed') }}</h4>
        <p>{{ $t('acc3.prevalidation.3steps') }}</p>
        <ul>
          <li>
            <strong class="capitalize">{{ $t('step') }} 1:</strong>
            <span>{{ $t('acc3.prevalidation.step1') }}</span>
          </li>
          <li>
            <strong class="capitalize">{{ $t('step') }} 2:</strong>
            <span>{{ $t('acc3.prevalidation.step2') }}</span>
          </li>
          <li>
            <strong class="capitalize">{{ $t('step') }} 3:</strong>
            <span>{{ $t('acc3.prevalidation.step3') }}</span>
          </li>
        </ul>
        <i18n path="acc3.takeOurSurvey" tag="p" class="my-2">
          <a
            class="text-blue-800 underline font-semibold"
            target="_blank"
            rel="noopener"
            href="https://docs.google.com/forms/d/e/1FAIpQLScJ8Dnsh0H3OE6AbXcyJkFM30kpWSHy2tnN84XcETtpIh-fQw/viewform">{{ $t('acc3.formText') }}</a>
        </i18n>
        <img :src="acc3Validation[$i18n.locale]" :alt="acc3Validation[$i18n.locale]">
        <h4 class="my-3">{{ $t('acc3.howWeProceed') }}</h4>
        <p class="my-3">{{ $t('acc3.validation.3steps') }}</p>
        <ul>
          <li>
            <strong class="capitalize">{{ $t('step') }} 1:</strong>
            <span>{{ $t('acc3.validation.step1') }}</span>
          </li>
          <li>
            <strong class="capitalize">{{ $t('step') }} 2:</strong>
            <span>{{ $t('acc3.validation.step2') }}</span>
          </li>
          <li>
            <strong class="capitalize">{{ $t('step') }} 3:</strong>
            <span>{{ $t('acc3.validation.step3') }}</span>
          </li>
        </ul>
        <!-- @todo link to contact -->
        <a href="">{{ $t('contactUs') }}</a>
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.acc3 {
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
