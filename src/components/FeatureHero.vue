<script setup>
import { computed, useSlots } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  asideWidth: {
    type: String,
    default: '25rem',
  },
  flat: {
    type: Boolean,
    default: false,
  },
  bleed: {
    type: Boolean,
    default: false,
  },
  fullHeight: {
    type: Boolean,
    default: false,
  },
  asideChrome: {
    type: Boolean,
    default: true,
  },
  centered: {
    type: Boolean,
    default: true,
  },
  surfaceClass: {
    type: String,
    default:
      'bg-[linear-gradient(135deg,rgba(250,234,177,0.98),rgba(255,249,229,0.98)_58%,rgba(246,223,154,0.98))]',
  },
  contentClass: {
    type: String,
    default: '',
  },
  asideClass: {
    type: String,
    default: '',
  },
  showGridPattern: {
    type: Boolean,
    default: true,
  },
})

const slots = useSlots()

const hasAside = computed(() => Boolean(slots.aside))
const gridClass = computed(() =>
  hasAside.value
    ? 'lg:grid-cols-[minmax(0,1fr)_minmax(0,var(--feature-hero-aside-width))] lg:items-center'
    : '',
)

const copyClass = computed(() =>
  props.centered ? 'mx-auto max-w-4xl text-center' : '',
)

const actionsClass = computed(() =>
  props.centered ? 'justify-center' : '',
)
</script>

<template>
  <section
    :class="bleed ? 'relative left-1/2 w-screen -translate-x-1/2' : ''"
  >
    <div
      class="relative overflow-hidden border border-primary/10 px-6 sm:px-8 lg:px-10 xl:px-14"
      :class="[
        flat ? 'rounded-none shadow-none' : 'rounded-[2.4rem] shadow-[0_24px_52px_-34px_rgba(48,86,105,0.22)]',
        fullHeight ? 'flex min-h-[31rem] items-center py-14 sm:min-h-[35rem] lg:min-h-[calc(100svh-9rem)] lg:py-20' : 'py-12 lg:py-14',
        surfaceClass,
      ]"
      :style="{ '--feature-hero-aside-width': asideWidth }"
    >
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(255,255,255,0.64),transparent_28%),radial-gradient(circle_at_82%_22%,rgba(255,255,255,0.16),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.2),transparent_32%),linear-gradient(140deg,rgba(255,255,255,0.08),rgba(255,255,255,0.14))]" />
      <div class="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/85 to-transparent" />
      <div
        v-if="showGridPattern"
        class="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(16,24,32,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(16,24,32,0.06)_1px,transparent_1px)] bg-[size:2.45rem_2.45rem] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.36),transparent_76%)]"
      />

      <div
        class="relative grid w-full gap-8"
        :class="[bleed ? 'mx-auto max-w-7xl' : '', gridClass, contentClass]"
      >
        <div :class="['space-y-6', copyClass]">
          <p
            v-if="label"
            class="text-sm font-semibold uppercase tracking-[0.28em] text-primary/72"
          >
            {{ label }}
          </p>

          <div class="space-y-4">
            <h1 class="text-balance text-[2.25rem] leading-tight font-medium tracking-tight text-primary sm:text-[2.7rem] lg:text-[3.15rem]">
              {{ title }}
            </h1>
            <p
              v-if="description"
              class="max-w-3xl text-base leading-8 text-primary/86 sm:text-[1.05rem]"
            >
              {{ description }}
            </p>
          </div>

          <div v-if="$slots.actions" :class="['flex flex-col gap-3 sm:flex-row', actionsClass]">
            <slot name="actions" />
          </div>
        </div>

        <div
          v-if="hasAside"
          :class="[
            asideChrome
              ? flat
                ? 'border border-white/55 bg-white/38 p-5 backdrop-blur-[1px]'
                : 'rounded-[2rem] border border-white/55 bg-white/38 p-5 shadow-[0_18px_34px_-24px_rgba(48,86,105,0.28)] backdrop-blur-[1px]'
              : '',
            asideClass,
          ]"
        >
          <slot name="aside" />
        </div>
      </div>
    </div>
  </section>
</template>
