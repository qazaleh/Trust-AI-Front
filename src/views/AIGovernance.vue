<script setup>
import { AlertTriangle, ArrowRight, Eye, FileSearch, LineChart, Scale, ShieldCheck } from 'lucide-vue-next'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import PageHero from '@/components/PageHero.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { normalizeLocale } from '@/lib/site'

const route = useRoute()
const locale = computed(() => normalizeLocale(route.params.locale))

const riskCards = [
  {
    icon: AlertTriangle,
    titleKey: 'aiGovernancePage.whyItMatters.cards.bias.title',
    descriptionKey: 'aiGovernancePage.whyItMatters.cards.bias.description',
  },
  {
    icon: Eye,
    titleKey: 'aiGovernancePage.whyItMatters.cards.opacity.title',
    descriptionKey: 'aiGovernancePage.whyItMatters.cards.opacity.description',
  },
  {
    icon: Scale,
    titleKey: 'aiGovernancePage.whyItMatters.cards.regulatory.title',
    descriptionKey: 'aiGovernancePage.whyItMatters.cards.regulatory.description',
  },
]

const pillarCards = [
  {
    icon: ShieldCheck,
    titleKey: 'aiGovernancePage.pillars.accountability.title',
    descriptionKey: 'aiGovernancePage.pillars.accountability.description',
  },
  {
    icon: FileSearch,
    titleKey: 'aiGovernancePage.pillars.traceability.title',
    descriptionKey: 'aiGovernancePage.pillars.traceability.description',
  },
  {
    icon: LineChart,
    titleKey: 'aiGovernancePage.pillars.monitoring.title',
    descriptionKey: 'aiGovernancePage.pillars.monitoring.description',
  },
]
</script>

<template>
  <div class="page-shell">
    <PageHero
      v-reveal
      :label="$t('aiGovernancePage.hero.label')"
      :title="$t('aiGovernancePage.hero.title')"
      :description="$t('aiGovernancePage.hero.subtitle')"
    >
      <template #actions>
        <Button as-child size="lg" class="rounded-full shadow-sm">
          <a href="mailto:info@trustai.com.tr">
            {{ $t('aiGovernancePage.closing.cta') }}
            <ArrowRight class="size-4" />
          </a>
        </Button>

        <Button as-child variant="outline" size="lg" class="rounded-full">
          <RouterLink :to="{ name: 'research', params: { locale } }">
            {{ $t('cta.research') }}
          </RouterLink>
        </Button>
      </template>
<!-- 
      <template #aside>
        <div class="space-y-3">
          <p class="text-sm font-bold uppercase tracking-[0.22em] text-primary">Governance Outcomes</p>
          <div class="space-y-3 text-sm leading-7 text-muted-foreground">
            <div class="rounded-2xl bg-secondary/70 px-4 py-3">
              {{ $t('aiGovernancePage.pillars.accountability.title') }}
            </div>
            <div class="rounded-2xl bg-secondary/70 px-4 py-3">
              {{ $t('aiGovernancePage.pillars.traceability.title') }}
            </div>
            <div class="rounded-2xl bg-secondary/70 px-4 py-3">
              {{ $t('aiGovernancePage.pillars.monitoring.title') }}
            </div>
          </div>
        </div>
      </template> -->
    </PageHero>

    <section v-reveal="{ delay: 120 }" class="grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
      <Card class="content-card">
        <CardHeader>
          <CardTitle class="content-title">{{ $t('aiGovernancePage.whatIs.title') }}</CardTitle>
        </CardHeader>
        <CardContent class="space-y-4 content-copy">
          <p>{{ $t('aiGovernancePage.whatIs.p1') }}</p>
          <p>{{ $t('aiGovernancePage.whatIs.p2') }}</p>
        </CardContent>
      </Card>

      <Card class="content-card bg-secondary/70">
        <CardHeader>
          <CardTitle class="content-title">{{ $t('aiGovernancePage.financialSector.title') }}</CardTitle>
          <CardDescription class="content-copy">
            {{ $t('aiGovernancePage.financialSector.p1') }}
          </CardDescription>
        </CardHeader>
        <CardContent class="content-copy">
          {{ $t('aiGovernancePage.financialSector.p2') }}
        </CardContent>
      </Card>
    </section>

    <section v-reveal="{ delay: 180 }" class="space-y-6">
      <SectionHeading :title="$t('aiGovernancePage.whyItMatters.title')" />

      <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <Card
          v-for="item in riskCards"
          :key="item.titleKey"
          class="content-card"
        >
          <CardHeader class="gap-4">
            <div class="flex size-11 items-center justify-center rounded-2xl bg-accent/50 text-primary">
              <component :is="item.icon" class="size-5" />
            </div>
            <div class="space-y-2">
              <CardTitle class="content-subtitle">{{ $t(item.titleKey) }}</CardTitle>
              <CardDescription class="content-copy">
                {{ $t(item.descriptionKey) }}
              </CardDescription>
            </div>
          </CardHeader>
        </Card>
      </div>
    </section>

    <section v-reveal="{ delay: 220 }" class="space-y-6">
      <SectionHeading :title="$t('aiGovernancePage.pillars.title')" />

      <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <Card
          v-for="item in pillarCards"
          :key="item.titleKey"
          class="content-card"
        >
          <CardHeader class="gap-4">
            <div class="flex size-11 items-center justify-center rounded-2xl bg-secondary text-primary">
              <component :is="item.icon" class="size-5" />
            </div>
            <div class="space-y-2">
              <CardTitle class="content-subtitle">{{ $t(item.titleKey) }}</CardTitle>
              <CardDescription class="content-copy">
                {{ $t(item.descriptionKey) }}
              </CardDescription>
            </div>
          </CardHeader>
        </Card>
      </div>
    </section>

    <Card v-reveal="{ delay: 280 }" class="content-card bg-secondary/70">
      <CardHeader class="space-y-3">
        <CardTitle class="section-title max-w-3xl">{{ $t('aiGovernancePage.closing.title') }}</CardTitle>
        <CardDescription class="section-description">
          {{ $t('aiGovernancePage.closing.description') }}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button as-child variant="secondary" size="lg" class="rounded-full">
          <a href="mailto:info@trustai.com.tr">{{ $t('aiGovernancePage.closing.cta') }}</a>
        </Button>
      </CardContent>
    </Card>
  </div>
</template>
