<script setup>
import { computed } from 'vue'
import {
  ArrowRight,
  Eye,
  FileSearch,
  GitBranch,
  Network,
  Search,
  ShieldCheck,
  ClipboardCheck,
} from 'lucide-vue-next'
import { useRoute } from 'vue-router'

import PageHero from '@/components/PageHero.vue'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { normalizeLocale, publications } from '@/lib/site'

const route = useRoute()
const locale = computed(() => normalizeLocale(route.params.locale))

const serviceCards = [
  {
    icon: Eye,
    titleKey: 'whatWeDo.explainability.title',
    descriptionKey: 'whatWeDo.explainability.description',
  },
  {
    icon: GitBranch,
    titleKey: 'whatWeDo.traceability.title',
    descriptionKey: 'whatWeDo.traceability.description',
  },
  {
    icon: ClipboardCheck,
    titleKey: 'whatWeDo.workflows.title',
    descriptionKey: 'whatWeDo.workflows.description',
  },
  {
    icon: FileSearch,
    titleKey: 'whatWeDo.audit.title',
    descriptionKey: 'whatWeDo.audit.description',
  },
]

const whyCards = [
  {
    icon: Search,
    titleKey: 'why.foundation.title',
    descriptionKey: 'why.foundation.description',
  },
  {
    icon: Network,
    titleKey: 'why.sector.title',
    descriptionKey: 'why.sector.description',
  },
  {
    icon: ShieldCheck,
    titleKey: 'why.governance.title',
    descriptionKey: 'why.governance.description',
  },
  {
    icon: FileSearch,
    titleKey: 'why.audit.title',
    descriptionKey: 'why.audit.description',
  },
]
</script>

<template>
  <div class="page-shell gap-10">
    <PageHero
      v-reveal
      :label="$t('researchHero.label')"
      :title="$t('researchHero.title')"
      :description="$t('researchHero.description')"
    >
      <template #actions>
        <Button as-child size="lg" class="rounded-full shadow-sm">
          <RouterLink :to="{ name: 'research', params: { locale } }">
            {{ $t('researchHero.button') }}
            <ArrowRight class="size-4" />
          </RouterLink>
        </Button>

        <Button as-child variant="outline" size="lg" class="rounded-full">
          <a href="mailto:info@trustai.com.tr">{{ $t('cta.contact') }}</a>
        </Button>
      </template>

      <!-- <template #aside>
        <div class="space-y-4">
          <p class="text-sm font-bold uppercase tracking-[0.22em] text-foreground">{{ $t('homePage.focusAreas') }}</p>
          <div class="space-y-3">
            <div class="rounded-[1.6rem] border border-border/70 bg-white/55 px-4 py-3">
              <p class="text-sm font-semibold text-foreground">{{ $t('whatWeDo.explainability.title') }}</p>
              <p class="mt-1 text-sm leading-6 text-foreground">
                {{ $t('whatWeDo.explainability.description') }}
              </p>
            </div>
            <div class="rounded-[1.6rem] border border-border/70 bg-white/55 px-4 py-3">
              <p class="text-sm font-semibold text-foreground">{{ $t('whatWeDo.traceability.title') }}</p>
              <p class="mt-1 text-sm leading-6 text-foreground">
                {{ $t('whatWeDo.traceability.description') }}
              </p>
            </div>
            <div class="rounded-[1.6rem] border border-border/70 bg-white/55 px-4 py-3">
              <p class="text-sm font-semibold text-foreground">{{ $t('whatWeDo.audit.title') }}</p>
              <p class="mt-1 text-sm leading-6 text-foreground">
                {{ $t('whatWeDo.audit.description') }}
              </p>
            </div>
          </div>
        </div>
      </template> -->
    </PageHero>

    <section class="space-y-6">
      <div v-reveal="{ delay: 40 }" class="section-intro">
        <p class="section-label">
          {{ $t('whatWeDo.label') }}
        </p>
        <h2 class="section-title max-w-3xl">
          {{ $t('whatWeDo.title') }}
        </h2>
        <p class="section-description">
          {{ $t('homePage.servicesDescription') }}
        </p>
      </div>

      <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <Card
          v-for="(item, index) in serviceCards"
          :key="item.titleKey"
          v-reveal="{ delay: 80 + index * 60 }"
          class="content-card bg-card"
        >
          <CardHeader class="gap-4">
            <div class="flex size-12 items-center justify-center rounded-[1.2rem] bg-secondary/14 text-primary">
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

    <section class="section-divider grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
      <div v-reveal="{ delay: 40 }" class="space-y-5">
        <p class="section-label">
          {{ $t('about.label') }}
        </p>
        <h2 class="section-title max-w-3xl">
          {{ $t('about.title') }}
        </h2>
        <div class="space-y-4 content-copy-lg">
          <p>{{ $t('about.intro') }}</p>
          <p>{{ $t('about.sectorFocus') }}</p>
          <p>{{ $t('about.approach') }}</p>
          <p>{{ $t('about.team') }}</p>
        </div>
      </div>

      <div v-reveal="{ delay: 120 }" class="content-panel">
        <img
          src="/whatwedo.png"
          alt="TrustAI governance capabilities"
          class="h-full w-full object-cover"
        />
      </div>
    </section>

    <section class="section-divider grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-center">
      <div class="space-y-6">
        <div v-reveal="{ delay: 40 }" class="section-intro">
          <p class="section-label">
            {{ $t('why.label') }}
          </p>
          <h2 class="section-title">
            {{ $t('why.title') }}
          </h2>
        </div>

        <div class="space-y-4">
          <div
            v-for="(item, index) in whyCards"
            :key="item.titleKey"
            v-reveal="{ delay: 80 + index * 50 }"
            class="border-b border-border pb-4 last:border-b-0 last:pb-0"
          >
            <div class="flex items-start gap-4">
              <div class="mt-1 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent/15 text-primary">
                <component :is="item.icon" class="size-4" />
              </div>
              <div class="space-y-2">
                <h3 class="content-subtitle">{{ $t(item.titleKey) }}</h3>
                <p class="content-copy-lg">
                  {{ $t(item.descriptionKey) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-reveal="{ delay: 130 }" class="content-panel bg-secondary/35 p-4">
        <img src="/why.png" alt="Why TrustAI" class="h-auto w-full object-contain" />
      </div>
    </section>

    <section class="section-divider space-y-6">
      <div v-reveal="{ delay: 40 }" class="section-intro">
        <p class="section-label">
          {{ $t('researchSection.title') }}
        </p>
        <h2 class="section-title">
          {{ $t('researchSection.subtitle') }}
        </h2>
        <p class="section-description">
          {{ $t('homePage.researchDescription') }}
        </p>
      </div>

      <div class="divide-y divide-border rounded-[1.75rem] border border-border bg-white/40">
        <article
          v-for="(publication, index) in publications"
          :key="publication.titleKey"
          v-reveal="{ delay: 100 + index * 70 }"
          class="space-y-4 px-6 py-6"
        >
          <h3 class="content-title leading-tight">
            {{ $t(publication.titleKey) }}
          </h3>
          <p class="content-copy-lg">
            {{ $t(publication.descriptionKey) }}
          </p>
          <Button
            v-if="publication.href"
            as-child
            variant="outline"
            class="rounded-full"
          >
            <a :href="publication.href" target="_blank" rel="noreferrer">
              {{ $t('researchSection.publicationBtn') }}
              <ArrowRight class="size-4" />
            </a>
          </Button>
        </article>
      </div>
    </section>

    <Card v-reveal="{ delay: 120 }" class="content-card overflow-hidden bg-secondary/70">
      <CardHeader class="space-y-3">
        <CardTitle class="section-title">{{ $t('cta.title') }}</CardTitle>
        <CardDescription class="section-description">
          {{ $t('cta.description') }}
        </CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <Separator class="bg-border" />
        <div class="flex flex-col gap-3 sm:flex-row">
          <Button as-child variant="secondary" size="lg" class="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="mailto:info@trustai.com.tr">{{ $t('cta.contact') }}</a>
          </Button>
          <Button
            as-child
            variant="outline"
            size="lg"
            class="rounded-full border-border bg-white/55 text-primary hover:bg-white"
          >
            <RouterLink :to="{ name: 'research', params: { locale } }">
              {{ $t('cta.research') }}
            </RouterLink>
          </Button>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
