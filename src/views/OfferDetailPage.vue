<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import FeatureHero from '@/components/FeatureHero.vue'
import FlatBandSection from '@/components/FlatBandSection.vue'

const props = defineProps({
  heroLabelKey: {
    type: String,
    required: true,
  },
  titleKey: {
    type: String,
    required: true,
  },
  categoryKey: {
    type: String,
    required: true,
  },
  overviewKey: {
    type: String,
    required: true,
  },
  primaryTitleKey: {
    type: String,
    required: true,
  },
  primaryListPath: {
    type: String,
    required: true,
  },
  secondaryTitleKey: {
    type: String,
    required: true,
  },
  secondaryListPath: {
    type: String,
    required: true,
  },
  valueTitleKey: {
    type: String,
    required: true,
  },
  valueListPath: {
    type: String,
    required: true,
  },
  heroSurfaceClass: {
    type: String,
    default:
      'bg-[linear-gradient(135deg,rgba(250,234,177,0.98),rgba(255,249,229,0.98)_58%,rgba(246,223,154,0.98))]',
  },
  primaryBandClass: {
    type: String,
    default:
      'bg-[linear-gradient(90deg,#c5d4db_0%,#b2c5cf_48%,#d9e2e6_100%)]',
  },
  secondaryBandClass: {
    type: String,
    default:
      'bg-[linear-gradient(90deg,#b9cbd4_0%,#d3dde2_52%,#a9bec8_100%)]',
  },
})

const { t, tm } = useI18n()

function list(path) {
  const value = tm(path)
  return Array.isArray(value) ? value : []
}

function isObject(item) {
  return typeof item === 'object' && item !== null && !Array.isArray(item)
}

const primaryItems = computed(() => list(props.primaryListPath))
const secondaryItems = computed(() => list(props.secondaryListPath))
const valueItems = computed(() => list(props.valueListPath))
const heroHighlights = computed(() => {
  const items = primaryItems.value.slice(0, 3)
  return items.map(item => (isObject(item) ? item.title : item))
})
</script>

<template>
  <div class="space-y-0">
    <FeatureHero
      v-reveal
      bleed
      flat
      full-height
      :label="t(heroLabelKey)"
      :title="t(titleKey)"
      :description="t(overviewKey)"
      :surface-class="heroSurfaceClass"
      aside-width="28rem"
      content-class="gap-10"
    >
      <template #aside>
        <div class="grid gap-5">
          <div class="space-y-3 border border-primary/12 bg-white/48 p-5">
            <p class="text-sm font-semibold uppercase tracking-[0.24em] text-primary/70">
              {{ t(categoryKey) }}
            </p>
            <p class="text-base leading-8 text-primary/84">
              {{ t(overviewKey) }}
            </p>
          </div>

          <div class="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            <div
              v-for="(item, index) in heroHighlights"
              :key="index"
              class="border border-primary/10 bg-white/44 p-4 text-sm leading-7 text-primary/84"
            >
              {{ item }}
            </div>
          </div>
        </div>
      </template>
    </FeatureHero>

    <FlatBandSection
      v-reveal="{ delay: 80 }"
      :label="t(categoryKey)"
      :title="t(primaryTitleKey)"
      :description="t(overviewKey)"
      :surface-class="primaryBandClass"
    >
      <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <div
          v-for="(item, index) in primaryItems"
          :key="index"
          class="border border-primary/10 bg-white/42 p-5 text-sm leading-7 text-primary/84"
        >
          <template v-if="isObject(item)">
            <div class="space-y-2">
              <h4 class="font-semibold text-primary/90">{{ item.title }}</h4>
              <p class="text-primary/80">{{ item.description }}</p>
            </div>
          </template>
          <template v-else>
            {{ item }}
          </template>
        </div>
      </div>
    </FlatBandSection>

    <FlatBandSection
      v-reveal="{ delay: 120 }"
      :label="t(titleKey)"
      :title="t(secondaryTitleKey)"
      :description="t(valueTitleKey)"
      :surface-class="secondaryBandClass"
    >
      <div class="grid gap-6 lg:grid-cols-2">
        <div class="space-y-5 border border-primary/10 bg-white/44 p-6">
          <p class="text-sm font-semibold uppercase tracking-[0.24em] text-primary/72">
            {{ t(secondaryTitleKey) }}
          </p>
          <div class="grid gap-3">
            <div
              v-for="(item, index) in secondaryItems"
              :key="index"
              class="border border-primary/10 bg-white/60 p-4 text-sm leading-7 text-primary/84"
            >
              <template v-if="isObject(item)">
                <div class="space-y-2">
                  <h4 class="font-semibold text-primary/90">{{ item.title }}</h4>
                  <p class="text-primary/80">{{ item.description }}</p>
                </div>
              </template>
              <template v-else>
                {{ item }}
              </template>
            </div>
          </div>
        </div>

        <div class="space-y-5 border border-primary/10 bg-white/44 p-6">
          <p class="text-sm font-semibold uppercase tracking-[0.24em] text-primary/72">
            {{ t(valueTitleKey) }}
          </p>
          <div class="grid gap-3">
            <div
              v-for="(item, index) in valueItems"
              :key="index"
              class="border border-primary/10 bg-white/60 p-4 text-sm leading-7 text-primary/84"
            >
              <template v-if="isObject(item)">
                <div class="space-y-2">
                  <h4 class="font-semibold text-primary/90">{{ item.title }}</h4>
                  <p class="text-primary/80">{{ item.description }}</p>
                </div>
              </template>
              <template v-else>
                {{ item }}
              </template>
            </div>
          </div>
        </div>
      </div>
    </FlatBandSection>
  </div>
</template>
