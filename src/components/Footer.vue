<script setup>
import { computed } from 'vue'
import { Mail, MapPin } from 'lucide-vue-next'
import { RouterLink, useRoute } from 'vue-router'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { navigationItems, normalizeLocale } from '@/lib/site'

const route = useRoute()
const locale = computed(() => normalizeLocale(route.params.locale))
</script>

<template>
  <footer class="px-4 pb-8 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] border border-primary/10 bg-primary px-6 py-8 text-white shadow-[0_24px_54px_-36px_rgba(23,56,75,0.38)]">
      <div class="absolute" />
      <div class="grid gap-8 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
        <div class="space-y-4">
          <div class="flex items-center gap-3">
            <img src="/logo.png" alt="TrustAI" class="h-14 w-auto object-contain" />
            <div>
              <p class="text-sm font-black uppercase tracking-[0.28em] text-accent">TrustAI</p>
              <p class="text-sm text-white/72">{{ $t('footer.tagline') }}</p>
            </div>
          </div>

          <Button as-child class="rounded-full bg-accent text-accent-foreground shadow-[0_18px_32px_-22px_rgba(245,186,66,0.5)] hover:bg-accent/90">
            <a href="mailto:info@trustai.com.tr">
              <Mail class="size-4" />
              info@trustai.com.tr
            </a>
          </Button>
        </div>

        <div class="space-y-3">
          <p class="text-sm font-bold uppercase tracking-[0.2em] text-accent">{{ $t('footer.navigation') }}</p>
          <div class="grid gap-1">
            <RouterLink
              v-for="item in navigationItems"
              :key="item.name"
              :to="{ name: item.name, params: { locale } }"
              class="w-fit text-sm font-medium text-white/72 transition hover:text-white"
            >
              {{ $t(item.labelKey) }}
            </RouterLink>
          </div>
        </div>

        <div class="space-y-3">
          <p class="text-sm font-bold uppercase tracking-[0.2em] text-accent">{{ $t('footer.contact') }}</p>
          <div class="flex items-start gap-3 text-sm leading-7 text-white/72">
            <MapPin class="mt-1 size-4 text-accent" />
            <p>{{ $t('footer.address') }}</p>
          </div>
          <div class="flex items-start gap-3 text-sm leading-7 text-white/72">
            <Mail class="mt-1 size-4 text-accent" />
            <a class="transition hover:text-white" href="mailto:info@trustai.com.tr">
              info@trustai.com.tr
            </a>
          </div>
        </div>
      </div>

      <Separator class="my-6 bg-white/10" />

      <p class="text-sm text-white/60">
        © {{ new Date().getFullYear() }} {{ $t('footer.rights') }}
      </p>
    </div>
  </footer>
</template>
