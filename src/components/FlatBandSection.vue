<script setup>
defineProps({
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
  surfaceClass: {
    type: String,
    default:
      'bg-[linear-gradient(90deg,#c5d4db_0%,#b2c5cf_48%,#d9e2e6_100%)]',
  },
})
</script>

<template>
  <section class="relative left-1/2 w-screen -translate-x-1/2">
    <div class="relative overflow-hidden border-y border-primary/10 px-4 py-16 sm:px-6 lg:px-8 lg:py-20" :class="surfaceClass">
      <div class="pointer-events-none absolute inset-0 bg-[linear-gradient(140deg,rgba(255,255,255,0.3),transparent_44%,rgba(48,86,105,0.08)_100%)]" />
      <div class="relative mx-auto flex max-w-7xl flex-col gap-8">
        <div class="space-y-4">
          <p
            v-if="label"
            class="text-sm font-semibold uppercase tracking-[0.28em] text-primary/72"
          >
            {{ label }}
          </p>
          <h2 class="max-w-4xl text-[2rem] leading-tight font-medium tracking-tight text-primary sm:text-[2.35rem]">
            {{ title }}
          </h2>
          <p
            v-if="description"
            class="max-w-3xl text-base leading-8 text-primary/82"
          >
            {{ description }}
          </p>
        </div>

        <slot />
      </div>
    </div>
  </section>
</template>
