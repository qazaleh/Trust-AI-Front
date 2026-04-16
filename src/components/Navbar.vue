<script setup>
import { computed, ref, watch } from 'vue'
import { Globe, Mail, Menu } from 'lucide-vue-next'
import { RouterLink, useRoute } from 'vue-router'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { navigationItems, normalizeLocale } from '@/lib/site'
import { cn } from '@/lib/utils'

const route = useRoute()
const mobileOpen = ref(false)

const locale = computed(() => normalizeLocale(route.params.locale))
const currentRouteName = computed(() =>
  typeof route.name === 'string' ? route.name : 'home'
)
const nextLocale = computed(() => (locale.value === 'en' ? 'tr' : 'en'))
const switchLocaleTarget = computed(() => ({
  name: currentRouteName.value,
  params: {
    ...route.params,
    locale: nextLocale.value,
  },
}))

watch(
  () => route.fullPath,
  () => {
    mobileOpen.value = false
  }
)

function isActive(name) {
  return route.name === name
}
</script>

<template>
  <header class="relative z-50 px-4 pb-3 pt-[17px] sm:px-6 lg:fixed lg:inset-x-0 lg:top-0 lg:px-8">
    <div
      class="mx-auto flex max-w-7xl items-center justify-between rounded-full bg-linear-to-l from-[#4d7984] via-primary to-[#213d48] px-3 py-2 shadow-[0_20px_44px_-28px_rgba(48,86,105,0.4)]"
    >
      <RouterLink
        :to="{ name: 'home', params: { locale } }"
        class="inline-flex h-12 shrink-0 items-center rounded-full px-1"
      >
        <img
          src="/logo.png"
          alt="TrustAI"
          class="pointer-events-none block h-8 w-auto rounded-full object-contain drop-shadow-[0_6px_18px_rgba(44,104,123,0.12)]"
        />
      </RouterLink>

      <nav class="hidden items-center gap-1 lg:flex">
        <RouterLink
          v-for="item in navigationItems"
          :key="item.name"
          :to="{ name: item.name, params: { locale } }"
          :class="
            cn(
              'inline-flex h-10 items-center rounded-full px-4 text-sm font-semibold transition',
              isActive(item.name)
                ? 'bg-white text-primary shadow-[0_10px_26px_-20px_rgba(17,33,43,0.22)]'
                : 'text-white/84 hover:bg-white/12 hover:text-white'
            )
          "
        >
          {{ $t(item.labelKey) }}
        </RouterLink>
      </nav>

      <div class="hidden items-center gap-2 lg:flex">
        <Button as-child variant="outline" class="rounded-full border-white/18 bg-white/8 text-white hover:bg-white/14 hover:text-white">
          <RouterLink :to="switchLocaleTarget">
            <Globe class="size-4" />
            {{ locale.toUpperCase() }}
          </RouterLink>
        </Button>

        <Button as-child class="rounded-full bg-accent text-accent-foreground shadow-[0_18px_32px_-22px_rgba(245,186,66,0.6)] hover:bg-accent/90">
          <a href="mailto:info@trustai.com.tr">
            <Mail class="size-4" />
            {{ $t('cta.contact') }}
          </a>
        </Button>
      </div>

      <div class="flex items-center gap-2 lg:hidden">
        <Button as-child variant="outline" size="icon" class="rounded-full border-white/18 bg-white/8 text-white hover:bg-white/14 hover:text-white">
          <RouterLink :to="switchLocaleTarget" :aria-label="$t('common.switchLanguage', { locale: nextLocale.toUpperCase() })">
            <Globe class="size-4" />
          </RouterLink>
        </Button>

        <Sheet v-model:open="mobileOpen">
          <SheetTrigger as-child>
            <Button variant="outline" size="icon" class="rounded-full border-white/18 bg-white/8 text-white hover:bg-white/14 hover:text-white">
              <Menu class="size-4" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" class="w-[310px] border-l border-border bg-card px-0">
            <div class="flex h-full flex-col">
              <div class="px-6 pb-4 pt-8">
                <p class="text-sm font-black uppercase tracking-[0.28em] text-primary">TrustAI</p>
                <p class="mt-2 text-sm leading-7 text-muted-foreground">
                  {{ $t('footer.tagline') }}
                </p>
              </div>

              <div class="flex flex-1 flex-col gap-1 px-3">
                <RouterLink
                  v-for="item in navigationItems"
                  :key="item.name"
                  :to="{ name: item.name, params: { locale } }"
                  :class="
                    cn(
                      'rounded-2xl px-4 py-3 text-sm font-semibold transition',
                      isActive(item.name)
                        ? 'bg-white text-primary'
                        : 'text-muted-foreground hover:bg-white hover:text-foreground'
                    )
                  "
                >
                  {{ $t(item.labelKey) }}
                </RouterLink>
              </div>

              <div class="space-y-3 border-t border-border px-6 py-6">
                <Button as-child class="w-full rounded-full bg-accent text-accent-foreground shadow-[0_18px_32px_-22px_rgba(245,186,66,0.6)] hover:bg-accent/90">
                  <a href="mailto:info@trustai.com.tr">
                    <Mail class="size-4" />
                    {{ $t('cta.contact') }}
                  </a>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  </header>
</template>
