<script setup>
import { computed, ref, watch } from 'vue'
import { ChevronDown, Globe, Mail, Menu } from 'lucide-vue-next'
import { RouterLink, useRoute } from 'vue-router'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { navigationItems, normalizeLocale } from '@/lib/site'
import { cn } from '@/lib/utils'

const route = useRoute()
const mobileOpen = ref(false)
const desktopOpenGroup = ref(null)
const mobileOpenGroup = ref(null)

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
    mobileOpenGroup.value = null
    desktopOpenGroup.value = null
  }
)

function localizeTarget(target) {
  return {
    ...target,
    params: {
      ...(target.params || {}),
      locale: locale.value,
    },
  }
}

function isTargetActive(target) {
  if (route.name !== target.name) {
    return false
  }

  if (target.hash) {
    return route.hash === target.hash
  }

  return true
}

function isItemActive(item) {
  if (item.type === 'link') {
    return isTargetActive(item.to)
  }

  return item.matches.includes(currentRouteName.value)
}

function toggleMobileGroup(key) {
  mobileOpenGroup.value = mobileOpenGroup.value === key ? null : key
}
</script>

<template>
  <header class="relative z-50 px-4 pb-3 pt-[17px] sm:px-6 lg:fixed lg:inset-x-0 lg:top-0 lg:px-8">
    <div
      class="mx-auto flex max-w-7xl items-center justify-between rounded-full bg-linear-to-l from-[#4d7984] via-primary to-[#213d48] px-3 py-2.5 shadow-[0_20px_44px_-28px_rgba(48,86,105,0.4)]"
    >
      <RouterLink
        :to="{ name: 'home', params: { locale } }"
        class="inline-flex h-14 shrink-0 items-center rounded-full px-2"
      >
        <img
          src="/logo.png"
          alt="TrustAI"
          class="pointer-events-none block h-9 w-auto rounded-full object-contain drop-shadow-[0_6px_18px_rgba(44,104,123,0.12)]"
        />
      </RouterLink>

      <nav class="hidden items-center gap-1 xl:flex">
        <template
          v-for="item in navigationItems"
          :key="item.key"
        >
          <RouterLink
            v-if="item.type === 'link'"
            :to="localizeTarget(item.to)"
            :class="
              cn(
                'inline-flex h-[3.15rem] items-center rounded-full px-4 text-[1.1rem] leading-none font-semibold transition',
                isItemActive(item)
                  ? 'bg-white text-primary shadow-[0_10px_26px_-20px_rgba(17,33,43,0.22)]'
                  : 'text-white/84 hover:bg-white/12 hover:text-white'
              )
            "
          >
            {{ $t(item.labelKey) }}
          </RouterLink>

          <div
            v-else
            class="relative"
            @mouseenter="desktopOpenGroup = item.key"
            @mouseleave="desktopOpenGroup = null"
          >
            <button
              type="button"
              :class="
                cn(
                  'inline-flex h-[3.15rem] items-center gap-2 rounded-full px-4 text-[1.1rem] leading-none font-semibold transition',
                  isItemActive(item) || desktopOpenGroup === item.key
                    ? 'bg-white text-primary shadow-[0_10px_26px_-20px_rgba(17,33,43,0.22)]'
                    : 'text-white/84 hover:bg-white/12 hover:text-white'
                )
              "
            >
              {{ $t(item.labelKey) }}
              <ChevronDown class="size-5" />
            </button>

            <div
              v-if="desktopOpenGroup === item.key"
              class="absolute left-0 top-full z-50 pt-3"
            >
              <div class="min-w-80 rounded-[1.35rem] border border-border/70 bg-card p-2 shadow-[0_26px_50px_-30px_rgba(17,33,43,0.38)]">
                <RouterLink
                  v-for="child in item.children"
                  :key="child.key"
                  :to="localizeTarget(child.to)"
                  :class="
                    cn(
                      'flex rounded-[1rem] px-4 py-3 text-[1rem] font-semibold transition',
                      isTargetActive(child.to)
                        ? 'bg-secondary/70 text-primary'
                        : 'text-muted-foreground hover:bg-secondary/40 hover:text-foreground'
                    )
                  "
                >
                  {{ $t(child.labelKey) }}
                </RouterLink>
              </div>
            </div>
          </div>
        </template>
      </nav>

      <div class="hidden items-center gap-2 xl:flex">
        <Button as-child variant="outline" class="h-[3.15rem] rounded-full border-white/18 bg-white/8 px-4 text-[0.95rem] font-semibold text-white hover:bg-white/14 hover:text-white">
          <RouterLink :to="switchLocaleTarget">
            <Globe class="size-4" />
            {{ locale.toUpperCase() }}
          </RouterLink>
        </Button>

        <Button as-child class="h-[3.15rem] rounded-full bg-accent px-5 text-[0.95rem] font-semibold text-accent-foreground shadow-[0_18px_32px_-22px_rgba(245,186,66,0.6)] hover:bg-accent/90">
          <a href="mailto:info@trustai.com.tr">
            <Mail class="size-4" />
            {{ $t('cta.contact') }}
          </a>
        </Button>
      </div>

      <div class="flex items-center gap-2 xl:hidden">
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
                <template
                  v-for="item in navigationItems"
                  :key="item.key"
                >
                  <RouterLink
                    v-if="item.type === 'link'"
                    :to="localizeTarget(item.to)"
                    :class="
                      cn(
                        'rounded-2xl px-4 py-3 text-sm font-semibold transition',
                        isItemActive(item)
                          ? 'bg-white text-primary'
                          : 'text-muted-foreground hover:bg-white hover:text-foreground'
                      )
                    "
                  >
                    {{ $t(item.labelKey) }}
                  </RouterLink>

                  <div
                    v-else
                    class="rounded-[1.4rem] border border-border/70 bg-background/60"
                  >
                    <button
                      type="button"
                      class="flex w-full items-center justify-between px-4 py-3 text-sm font-semibold text-foreground"
                      @click="toggleMobileGroup(item.key)"
                    >
                      {{ $t(item.labelKey) }}
                      <ChevronDown
                        :class="[
                          'size-4 transition-transform duration-200',
                          mobileOpenGroup === item.key ? 'rotate-180' : ''
                        ]"
                      />
                    </button>

                    <div
                      v-if="mobileOpenGroup === item.key"
                      class="grid gap-1 px-2 pb-2"
                    >
                      <RouterLink
                        v-for="child in item.children"
                        :key="child.key"
                        :to="localizeTarget(child.to)"
                        :class="
                          cn(
                            'rounded-xl px-4 py-3 text-sm font-medium transition',
                            isTargetActive(child.to)
                              ? 'bg-secondary/70 text-primary'
                              : 'text-muted-foreground hover:bg-white hover:text-foreground'
                          )
                        "
                      >
                        {{ $t(child.labelKey) }}
                      </RouterLink>
                    </div>
                  </div>
                </template>
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
