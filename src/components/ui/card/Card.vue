<script setup>
import { cn } from "@/lib/utils";

const props = defineProps({
  class: { type: null, required: false },
});
</script>

<template>
  <div
    data-slot="card"
    :class="
      cn(
        'bg-card text-card-foreground flex flex-col gap-6 rounded-[1.85rem] border border-border/80 py-6 shadow-[0_18px_45px_-34px_rgba(23,56,75,0.12)]',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
