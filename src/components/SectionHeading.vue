<script setup>
import { cn } from '@/lib/utils'

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
  class: {
    type: null,
    required: false,
  },
})
</script>

<template>
  <div :class="cn('space-y-4', props.class)">
    <p v-if="label" class="section-label">
      {{ label }}
    </p>

    <div class="space-y-2">
      <h2 class="section-title max-w-3xl">
        {{ title }}
      </h2>
      <p v-if="description" class="section-description">
        {{ description }}
      </p>
    </div>
  </div>
</template>
