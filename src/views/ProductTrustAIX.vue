<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import {
  BookOpenCheck,
  Brain,
  ClipboardList,
  FileCheck,
  MessageSquareText,
  Scale,
  ShieldCheck,
  ShieldQuestion,
  Sparkles,
} from 'lucide-vue-next'

import FlatBandSection from '@/components/FlatBandSection.vue'
import OfferDetailPage from './OfferDetailPage.vue'

const { t, tm } = useI18n()
const modules = computed(() => tm('productsPage.trustaiX.mlEvaluation.modules'))
const useCases = computed(() => tm('productsPage.trustaiX.mlEvaluation.useCases'))
const moduleIcons = [Sparkles, Scale, ShieldCheck]
const llmModules = computed(() => tm('productsPage.trustaiX.llmEvaluation.modules'))
const llmUseCases = computed(() => tm('productsPage.trustaiX.llmEvaluation.useCases'))
const llmModuleIcons = [BookOpenCheck, MessageSquareText, Brain, ClipboardList, ShieldQuestion, FileCheck]
</script>

<template>
  <OfferDetailPage
    hero-label-key="productsPage.hero.label"
    title-key="navbar.trustaiX"
    category-key="productsPage.trustaiX.category"
    overview-key="productsPage.trustaiX.overview"
    primary-title-key="productsPage.trustaiX.whatItDoesTitle"
    primary-list-path="productsPage.trustaiX.whatItDoes"
    secondary-title-key="productsPage.trustaiX.featuresTitle"
    secondary-list-path="productsPage.trustaiX.features"
    value-title-key="productsPage.trustaiX.valueTitle"
    value-list-path="productsPage.trustaiX.value"
    hero-surface-class="bg-[linear-gradient(135deg,#e6f2f3_0%,#f2f9f9_55%,#ffffff_100%)]"
    primary-band-class="bg-[linear-gradient(90deg,#ffffff_0%,#fbfbfb_100%)]"
    secondary-band-class="bg-[linear-gradient(90deg,#ffffff_0%,#fbfbfb_100%)]"
  />

  <FlatBandSection
    id="ml-evaluation"
    v-reveal
    :label="t('productsPage.trustaiX.mlEvaluation.label')"
    :title="t('productsPage.trustaiX.mlEvaluation.title')"
    :description="t('productsPage.trustaiX.mlEvaluation.description')"
    surface-class="bg-[linear-gradient(135deg,#e6f2f3_0%,#f2f9f9_55%,#ffffff_100%)]"
  >
    <div class="grid gap-4 lg:grid-cols-3">
      <article
        v-for="(module, index) in modules"
        :key="module.title"
        class="space-y-4 border border-primary/10 bg-white/60 p-6"
      >
        <component :is="moduleIcons[index]" class="size-7 text-primary" aria-hidden="true" />
        <h3 class="text-xl font-semibold text-primary">{{ module.title }}</h3>
        <p class="text-sm leading-7 text-primary/84">{{ module.description }}</p>
        <ul class="list-disc space-y-2 pl-5 text-sm leading-7 text-primary/84">
          <li v-for="detail in module.details" :key="detail">{{ detail }}</li>
        </ul>
      </article>
    </div>

    <div class="space-y-5 pt-4">
      <h3 class="text-2xl font-medium tracking-tight text-primary">
        {{ t('productsPage.trustaiX.mlEvaluation.useCasesTitle') }}
      </h3>
      <div class="grid gap-4 md:grid-cols-2">
        <article
          v-for="useCase in useCases"
          :key="useCase.title"
          class="space-y-2 border border-primary/10 bg-white/60 p-5"
        >
          <h4 class="font-semibold text-primary">{{ useCase.title }}</h4>
          <p class="text-sm leading-7 text-primary/84">{{ useCase.description }}</p>
        </article>
      </div>
    </div>

    <div class="border-l-2 border-primary/30 bg-white/60 p-5">
      <h3 class="font-semibold text-primary">
        {{ t('productsPage.trustaiX.mlEvaluation.reportingTitle') }}
      </h3>
      <p class="mt-2 text-sm leading-7 text-primary/84">
        {{ t('productsPage.trustaiX.mlEvaluation.reportingDescription') }}
      </p>
    </div>
  </FlatBandSection>

  <FlatBandSection
    id="llm-evaluation"
    v-reveal
    :label="t('productsPage.trustaiX.llmEvaluation.label')"
    :title="t('productsPage.trustaiX.llmEvaluation.title')"
    :description="t('productsPage.trustaiX.llmEvaluation.description')"
    surface-class="bg-[linear-gradient(90deg,#ffffff_0%,#fbfbfb_100%)]"
  >
    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      <article
        v-for="(module, index) in llmModules"
        :key="module.title"
        class="space-y-4 border border-primary/10 bg-white/60 p-6"
      >
        <component :is="llmModuleIcons[index]" class="size-7 text-primary" aria-hidden="true" />
        <h3 class="text-xl font-semibold text-primary">{{ module.title }}</h3>
        <p class="text-sm leading-7 text-primary/84">{{ module.description }}</p>
        <ul class="list-disc space-y-2 pl-5 text-sm leading-7 text-primary/84">
          <li v-for="detail in module.details" :key="detail">{{ detail }}</li>
        </ul>
      </article>
    </div>

    <div class="space-y-5 pt-4">
      <h3 class="text-2xl font-medium tracking-tight text-primary">
        {{ t('productsPage.trustaiX.llmEvaluation.useCasesTitle') }}
      </h3>
      <div class="grid gap-4 md:grid-cols-2">
        <article
          v-for="useCase in llmUseCases"
          :key="useCase.title"
          class="space-y-2 border border-primary/10 bg-white/60 p-5"
        >
          <h4 class="font-semibold text-primary">{{ useCase.title }}</h4>
          <p class="text-sm leading-7 text-primary/84">{{ useCase.description }}</p>
        </article>
      </div>
    </div>

    <div class="border-l-2 border-primary/30 bg-white/60 p-5">
      <h3 class="font-semibold text-primary">
        {{ t('productsPage.trustaiX.llmEvaluation.reportingTitle') }}
      </h3>
      <p class="mt-2 text-sm leading-7 text-primary/84">
        {{ t('productsPage.trustaiX.llmEvaluation.reportingDescription') }}
      </p>
    </div>
  </FlatBandSection>
</template>
