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
import dashboardCardHtmlSource from '@/components/imageComponents/dashboard-card.html?raw'
import diagramcHtmlSource from '@/components/imageComponents/diagramc.html?raw'
import trustaiDiagramHtmlSource from '@/components/imageComponents/trustai-diagram.html?raw'
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

const createEmbeddedHtml = (source, styles) => source.replace('</head>', `<style>${styles}</style></head>`)

const dashboardCardHtml = createEmbeddedHtml(
  dashboardCardHtmlSource.replace('src="logo.png"', 'src="/logo.png"'),
  `
    html,
    body {
      width: 100%;
      height: 100%;
      min-height: 0 !important;
      overflow: hidden !important;
      background: transparent !important;
    }

    body {
      padding: 0 !important;
      align-items: center !important;
      justify-content: center !important;
    }

    .card-wrap {
      max-width: min(520px, 100%) !important;
    }

    .dash-card {
      background: transparent !important;
      border: 0 !important;
      opacity: 1 !important;
      transform: none !important;
      transition: box-shadow 0.3s ease !important;
      box-shadow: none !important;
    }
  `,
)
const diagramcHtml = createEmbeddedHtml(
  diagramcHtmlSource,
  `
    html,
    body {
      width: 100%;
      height: 100%;
      min-height: 0 !important;
      overflow: hidden !important;
      background: transparent !important;
    }

    body {
      padding: 0 !important;
      align-items: center !important;
      justify-content: center !important;
    }

    .trustai-diagram-embed,
    .trustai-diagram {
      max-width: 100% !important;
    }

    .trustai-diagram {
      background: transparent !important;
      border: 0 !important;
      box-shadow: none !important;
    }
  `,
)
const trustaiDiagramHtml = createEmbeddedHtml(
  trustaiDiagramHtmlSource,
  `
    html,
    body {
      width: 100%;
      height: 100%;
      min-height: 0 !important;
      overflow: hidden !important;
      background: transparent !important;
    }

    body {
      padding: 0 !important;
      align-items: center !important;
      justify-content: center !important;
    }

    .diagram-box {
      background: transparent !important;
      border: 0 !important;
      max-width: min(440px, 100%) !important;
      box-shadow: none !important;
    }
  `,
)

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
      aside-width="32rem"
      aside-class="hidden lg:block"
      :aside-chrome="false"
      compact
      content-align="center"
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

        <!-- <Button as-child variant="outline" size="lg" class="rounded-full">
          <a href="mailto:info@trustai.com.tr">{{ $t('cta.contact') }}</a>
        </Button> -->
      </template>

      <template #aside>
        <iframe
          :srcdoc="dashboardCardHtml"
          title="TrustAI dashboard card"
          scrolling="no"
          class="block h-[21rem] w-full overflow-hidden border-0 bg-transparent"
        />
      </template>
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

      <div v-reveal="{ delay: 120 }" class="overflow-hidden">
        <iframe
          :srcdoc="trustaiDiagramHtml"
          title="TrustAI governance capabilities"
          loading="lazy"
          scrolling="no"
          class="block h-[38rem] w-full overflow-hidden border-0 bg-transparent sm:h-[34rem]"
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

      <div v-reveal="{ delay: 130 }" class="overflow-hidden">
        <iframe
          :srcdoc="diagramcHtml"
          title="Why TrustAI"
          loading="lazy"
          scrolling="no"
          class="block h-[24rem] w-full overflow-hidden border-0 bg-transparent sm:h-[30rem]"
        />
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
          <Button
            v-else
            variant="outline"
            class="pointer-events-none rounded-full border-border/80 bg-white/45 text-muted-foreground"
            disabled
            aria-disabled="true"
          >
            Preprint available soon
          </Button>
        </article>
      </div>
    </section>
    

    <Card v-reveal="{ delay: 120 }" class="content-card overflow-hidden bg-secondary/70">
      <CardHeader class="space-y-3">
        <CardTitle class="section-title">{{ $t('cta.title') }}</CardTitle>
        <CardDescription class="section-description">
          {{ $t('homePage.ctaDescription') }}
        </CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <!-- <Separator class="bg-border" /> -->
        <!-- <div class="flex flex-col gap-3 sm:flex-row">
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
        </div> -->
      </CardContent>
    </Card>
  </div>
</template>
