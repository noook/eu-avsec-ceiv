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
        <h3>Whate are the EU regulations reuqirements ?</h3>
      </section>
      <section>droite</section>
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
      @apply p-4 sm:px-12 lg:px-4;
    }
  }

  h1, h2, h3 {
    @apply text-center text-blue-900;
  }

  h1 {
    @apply text-2xl font-semibold mb-4 tracking-wide;
    @apply lg:w-max-3/5 mx-auto;
  }

  h3 {
    @apply font-semibold my-3;
  }
}
</style>
