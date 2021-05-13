<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import safetyEvolvesFr from '@/assets/img/aviation-safety-evolves_fr.png';
import safetyEvolvesEn from '@/assets/img/aviation-safety-evolves_en.png';
import ourMissionFr from '@/assets/img/our-mission_fr.png';
import ourMissionEn from '@/assets/img/our-mission_en.png';
import ourVisionFr from '@/assets/img/our-vision_fr.png';
import ourVisionEn from '@/assets/img/our-vision_en.png';
import ourValuesFr from '@/assets/img/our-values_fr.png';
import ourValuesEn from '@/assets/img/our-values_en.png';

export default defineComponent({
  name: 'Home',
  setup() {
    const assets: Record<string, LocalizedAsset> = {
      safetyEvolves: {
        fr: safetyEvolvesFr,
        en: safetyEvolvesEn,
      },
      ourMission: {
        fr: ourMissionFr,
        en: ourMissionEn,
      },
      ourVision: {
        fr: ourVisionFr,
        en: ourVisionEn,
      },
      ourValues: {
        fr: ourValuesFr,
        en: ourValuesEn,
      },
    };

    return {
      ...assets,
    };
  },
});
</script>

<template>
  <div class="home">
    <header>
      <h1 class="title">{{ $t('homepage.welcome') }}</h1>
      <h2>{{ $t('ACC3') }} - {{ $t('RA3') }} - {{ $t('KC3') }}</h2>
      <div class="flex justify-center my-6">
        <img class="w-32 h-32" src="@/assets/img/ceiv.png" alt="CEIV">
      </div>
    </header>
    <hr>
    <main>
      <section>
        <i18n path="homepage.target" tag="small">
          <strong>{{ $t('ACC3') }}, {{ $t('RA3') }}, {{ $t('or') }} {{ $t('KC3') }}</strong>
        </i18n>
        <h3>{{ $t('homepage.regulationImplementation') }}</h3>
        <i18n path="homepage.p1.text" tag="p">
          <a target="_blank" rel="noopener" href="https://eur-lex.europa.eu/legal-content/FR/TXT/HTML/?uri=CELEX:02015R1998-20160229&rid=1">2015/1998</a>
          <strong>{{ $t('homepage.p1.date') }}</strong>
          <span class="text-red-600 italic">{{ $t('homepage.p1.effectiveDate') }}</span>
        </i18n>
        <hr>
        <i18n path="homepage.p2.text" tag="p">
          <strong>{{ $t('homepage.p2.effectiveDate') }}</strong>
          <strong>{{ $t('homepage.p2.accent') }}</strong>
        </i18n>
        <i18n path="homepage.p3.text" tag="p">
          <strong>{{ $t('homepage.p3.ra3') }}</strong>
          <strong>{{ $t('homepage.p3.kc3') }}</strong>
        </i18n>
        <img :src="safetyEvolves[$i18n.locale]" :alt="$t('homepage.aviationSafetyEvolves')">
        <p class="text-lg text-right font-semibold tracking-wider">
          {{ $t('homepage.areYouReady') }}
        </p>
        <figure>
          <a target="_blank" rel="noopener" href="https://docs.google.com/a/eu-avsec-ceiv.org/viewer?a=v&pid=sites&srcid=ZXUtYXZzZWMtY2Vpdi5vcmd8ZXUtYXZzZWMtY2Vpdi1vcmd8Z3g6NTQwNjdlN2IwZmFhNTgyMg">
            <span>{{ $t('homepage.viewPresentation') }}</span>
            <img src="https://sites.google.com/a/eu-avsec-ceiv.org/eu-avsec-ceiv-org/_/rsrc/1381403981328/home/ACC3-RA3-KC3%20website%20pres%20176x99.jpg" alt="">
          </a>
        </figure>
      </section>
      <hr class="lg:hidden border-warm-gray-300">
      <section>
        <img :src="ourMission[$i18n.locale]" :alt="$t('homepage.ourMission')">
        <p>{{ $t('homepage.ourMissionText') }}</p>
        <img :src="ourVision[$i18n.locale]" :alt="$t('homepage.ourVision')">
        <p>{{ $t('homepage.ourVisionText') }}</p>
        <img :src="ourValues[$i18n.locale]" :alt="$t('homepage.ourValues')">
        <ul>
          <li>
            <h4>{{ $t('homepage.integrity') }}</h4>
            <p>{{ $t('homepage.integrityText') }}</p>
          </li>
          <li>
            <h4>{{ $t('homepage.teamwork') }}</h4>
            <p>{{ $t('homepage.teamworkText') }}</p>
          </li>
          <li>
            <h4>{{ $t('homepage.excellence') }}</h4>
            <p>{{ $t('homepage.excellenceText') }}</p>
          </li>
          <li>
            <h4>{{ $t('homepage.responsiveness') }}</h4>
            <p>{{ $t('homepage.responsivenessText') }}</p>
          </li>
          <li>
            <h4>{{ $t('homepage.objectivity') }}</h4>
            <p>{{ $t('homepage.objectivityText') }}</p>
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.home {
  @apply p-4;

  header {
    @apply px-8;
  }

  main {
    @apply lg:flex;

    section {
      @apply p-4 sm:px-12 lg:px-4 flex-1;
    }
  }

  h1, h2, h3 {
    @apply text-center text-blue-900;
  }

  h1 {
    @apply text-2xl font-semibold mb-4 tracking-wide;
    @apply lg:w-max-3/5 mx-auto;
  }

  h2 {
    @apply font-medium;
  }

  h3 {
    @apply font-semibold my-3;
  }

  p {
    @apply my-4;
  }

  hr {
    @apply my-3;
  }

  figure a {
    @apply flex items-center justify-center text-center;

    span {
      @apply text-lg font-bold mr-4;
    }
  }

  ul {
    @apply my-4;

    h4 {
      @apply tracking-widest uppercase font-bold text-blue-900;
    }

    p {
      @apply mt-1;
    }
  }
}
</style>
