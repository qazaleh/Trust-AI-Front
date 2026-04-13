<script setup>
import { computed } from 'vue'

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
    default: '22rem',
  },
  asideClass: {
    type: String,
    default: '',
  },
  contentAlign: {
    type: String,
    default: 'end',
  },
  asideChrome: {
    type: Boolean,
    default: true,
  },
  compact: {
    type: Boolean,
    default: false,
  },
})

const gridAlignmentClass = computed(() => (
  props.contentAlign === 'center' ? 'lg:items-center' : 'lg:items-end'
))
</script>

<template>
  <section
    class="relative overflow-hidden rounded-[2.25rem] border border-border/80 bg-card px-6 text-foreground shadow-[0_18px_40px_-34px_rgba(23,56,75,0.14)] sm:px-8 lg:px-10"
    :class="compact ? 'py-7 lg:py-8' : 'py-10 lg:py-12'"
    :style="{ '--page-hero-aside-width': asideWidth }"
  >
    <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
    <div class="absolute -left-16 top-0 size-56 rounded-full bg-accent/12 blur-3xl" />
    <div class="absolute right-0 bottom-0 size-56 rounded-full bg-primary/8 blur-3xl" />

    <div
      class="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,var(--page-hero-aside-width))]"
      :class="gridAlignmentClass"
    >
      <div class="space-y-5">
        <p v-if="label" class="section-label">
          {{ label }}
        </p>

        <div class="space-y-3">
          <h1 class="hero-title text-balance">
            {{ title }}
          </h1>
          <p v-if="description" class="hero-description">
            {{ description }}
          </p>
        </div>

        <div v-if="$slots.actions" class="flex flex-col gap-3 sm:flex-row">
          <slot name="actions" />
        </div>
      </div>

      <div
        v-if="$slots.aside"
        :class="[
          asideChrome
            ? 'rounded-[1.9rem] border border-border/80 bg-background/82 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] backdrop-blur-sm'
            : '',
          asideClass,
        ]"
      >
        <slot name="aside" />
      </div>
    </div>
  </section>
</template>
