<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import {
  ArrowRight,
  Binary,
  Bot,
  BrainCircuit,
  ChartColumnBig,
  Database,
  Download,
  FileSearch,
  FileText,
  MessageSquareText,
  Network,
  Search,
  ShieldCheck,
  Sparkles,
  Workflow,
} from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

import dashboardCardHtmlSource from '@/components/imageComponents/dashboard-card.html?raw'
import diagramcHtmlSource from '@/components/imageComponents/diagramc.html?raw'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { downloadGovernancePlaybook } from '@/lib/downloads'
import { normalizeLocale } from '@/lib/site'

const route = useRoute()
const { t, tm } = useI18n()
const locale = computed(() => normalizeLocale(route.params.locale))

const createEmbeddedHtml = (source, styles) => source.replace('</head>', `<style>${styles}</style></head>`)

const  dashboardCardHtml = createEmbeddedHtml(
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
      max-width: 90% !important;
    }

    .trustai-diagram {
      background: transparent !important;
      border: 0 !important;
      box-shadow: none !important;
    }
  `,
)
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

const heroSlides = [
  {
    key: 'overview',
    icon: BrainCircuit,
    labelKey: 'researchHero.label',
    titleKey: 'researchHero.title',
    descriptionKey: 'researchHero.description',
    tabKey: 'homePage.heroSlider.overview.tab',
  },
  {
    key: 'ml',
    icon: ChartColumnBig,
    labelKey: 'whatWeDo.label',
    titleKey: 'whatWeDo.explainability.title',
    descriptionKey: 'whatWeDo.explainability.description',
    tabKey: 'homePage.heroSlider.ml.tab',
    items: [
      {
        icon: Binary,
        titleKey: 'homePage.heroSlider.ml.items.0.title',
        descriptionKey: 'homePage.heroSlider.ml.items.0.description',
      },
      {
        icon: ChartColumnBig,
        titleKey: 'homePage.heroSlider.ml.items.1.title',
        descriptionKey: 'homePage.heroSlider.ml.items.1.description',
      },
      {
        icon: Database,
        titleKey: 'homePage.heroSlider.ml.items.2.title',
        descriptionKey: 'homePage.heroSlider.ml.items.2.description',
      },
    ],
  },
  {
    key: 'llm',
    icon: MessageSquareText,
    labelKey: 'whatWeDo.label',
    titleKey: 'whatWeDo.traceability.title',
    descriptionKey: 'whatWeDo.traceability.description',
    tabKey: 'homePage.heroSlider.llm.tab',
    items: [
      {
        icon: MessageSquareText,
        titleKey: 'homePage.heroSlider.llm.items.0.title',
        descriptionKey: 'homePage.heroSlider.llm.items.0.description',
      },
      {
        icon: FileText,
        titleKey: 'homePage.heroSlider.llm.items.1.title',
        descriptionKey: 'homePage.heroSlider.llm.items.1.description',
      },
      {
        icon: BrainCircuit,
        titleKey: 'homePage.heroSlider.llm.items.2.title',
        descriptionKey: 'homePage.heroSlider.llm.items.2.description',
      },
    ],
  },
  {
    key: 'agents',
    icon: Workflow,
    labelKey: 'whatWeDo.label',
    titleKey: 'whatWeDo.workflows.title',
    descriptionKey: 'whatWeDo.workflows.description',
    tabKey: 'homePage.heroSlider.agents.tab',
    items: [
      {
        icon: Workflow,
        titleKey: 'homePage.heroSlider.agents.items.0.title',
        descriptionKey: 'homePage.heroSlider.agents.items.0.description',
      },
      {
        icon: Bot,
        titleKey: 'homePage.heroSlider.agents.items.1.title',
        descriptionKey: 'homePage.heroSlider.agents.items.1.description',
      },
      {
        icon: Sparkles,
        titleKey: 'homePage.heroSlider.agents.items.2.title',
        descriptionKey: 'homePage.heroSlider.agents.items.2.description',
      },
    ],
  },
]

const currentHeroIndex = ref(0)
let heroIntervalId

const currentHeroSlide = computed(() => heroSlides[currentHeroIndex.value])
const heroSliderDots = computed(() => heroSlides.map((slide) => ({
  key: slide.key,
  label: t(slide.tabKey),
})))

function getHeroSlideBadges(slideKey) {
  const badgeKey = `homePage.heroSlider.${slideKey}.badges`
  const badges = tm(badgeKey)
  return Array.isArray(badges) ? badges : []
}

const goToHeroSlide = (index) => {
  currentHeroIndex.value = (index + heroSlides.length) % heroSlides.length
}

const stopHeroRotation = () => {
  if (heroIntervalId) {
    window.clearInterval(heroIntervalId)
    heroIntervalId = undefined
  }
}

const startHeroRotation = () => {
  stopHeroRotation()
  heroIntervalId = window.setInterval(() => {
    goToHeroSlide(currentHeroIndex.value + 1)
  }, 6500)
}

onMounted(() => {
  startHeroRotation()
})

onBeforeUnmount(() => {
  stopHeroRotation()
})
</script>

<template>
  <div class="page-shell gap-10">
    <section
      v-reveal
      class="relative"
    >
      <div class="hero-slider-stage">
        <article
          v-for="(slide, index) in heroSlides"
          :key="slide.key"
          :class="[
            'hero-slide-shell',
            index === currentHeroIndex ? 'hero-slide-shell--active' : 'hero-slide-shell--inactive',
          ]"
          :aria-hidden="index === currentHeroIndex ? 'false' : 'true'"
        >
          <div class="hero-slide-grid" />

          <div class="hero-slide-layout">
            <div class="hero-slide-copy">
              <p class="section-label !text-primary">
                {{ $t(slide.labelKey) }}
              </p>

              <div class="space-y-4">
                <h1 class="hero-title max-w-none text-balance text-primary sm:text-[2.6rem]">
                  {{ $t(slide.titleKey) }}
                </h1>
                <p class="hero-description max-w-3xl text-base leading-8 text-foreground/88">
                  {{ $t(slide.descriptionKey) }}
                </p>
              </div>

              <div
                v-if="getHeroSlideBadges(slide.key).length"
                class="flex flex-wrap gap-3"
              >
                <span
                  v-for="badge in getHeroSlideBadges(slide.key)"
                  :key="badge"
                  class="rounded-full border border-primary/10 bg-white/55 px-4 py-2 text-sm font-semibold text-primary shadow-sm"
                >
                  {{ badge }}
                </span>
              </div>

              <div
                v-if="slide.key === 'overview'"
                class="flex w-full max-w-[18rem] flex-col gap-3"
              >
                <Button
                  as-child
                  size="lg"
                  class="w-full rounded-full bg-primary text-primary-foreground shadow-sm hover:bg-primary/92"
                >
                  <RouterLink :to="{ name: 'research-insights', params: { locale } }">
                    {{ $t('researchHero.button') }}
                    <ArrowRight class="size-4" />
                  </RouterLink>
                </Button>
                <Button
                  type="button"
                  size="lg"
                  variant="outline"
                  class="w-full rounded-full border-primary/20 bg-white/65 text-primary shadow-sm hover:bg-white/85"
                  @click="downloadGovernancePlaybook"
                >
                  {{ $t('researchHero.governancePlaybookButton') }}
                  <Download class="size-4" />
                </Button>
              </div>
            </div>

            <div class="hero-slide-panel">
              <iframe
                v-if="slide.key === 'overview'"
                :srcdoc="dashboardCardHtml"
                title="TrustAI dashboard card"
                scrolling="no"
                class="block h-[21rem] w-full overflow-hidden border-0 bg-transparent"
              />

              <div v-else class="grid gap-3">
                <div
                  v-for="item in slide.items"
                  :key="item.titleKey"
                  class="rounded-[1.5rem] border border-primary/10 bg-white/80 p-5 text-primary shadow-[0_18px_40px_-32px_rgba(48,86,105,0.28)] backdrop-blur-sm"
                >
                  <div class="flex items-start gap-3">
                    <div class="mt-0.5 flex size-11 shrink-0 items-center justify-center rounded-[1rem] bg-secondary/55 text-primary">
                      <component :is="item.icon" class="size-5" />
                    </div>
                    <div class="space-y-2">
                      <p class="text-base font-semibold tracking-tight text-primary">
                        {{ $t(item.titleKey) }}
                      </p>
                      <p class="text-sm leading-7 text-foreground/82">
                        {{ $t(item.descriptionKey) }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>

      <div class="hero-slide-dots">
        <button
          v-for="(slide, index) in heroSliderDots"
          :key="slide.key"
          type="button"
          class="hero-slide-dot"
          :class="{ 'is-active': index === currentHeroIndex }"
          :aria-label="slide.label"
          @click="goToHeroSlide(index)"
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
    

    <Card v-reveal="{ delay: 120 }" class="content-card overflow-hidden bg-secondary/70">
      <CardHeader class="space-y-3">
        <CardTitle class="section-title">{{ $t('cta.title') }}</CardTitle>
        <CardDescription class="section-description">
          {{ $t('homePage.ctaDescription') }}
        </CardDescription>
      </CardHeader>

    </Card>
  </div>
</template>

<style scoped>
.hero-slider-stage {
  position: relative;
  min-height: 39rem;
}

.hero-slide-shell {
  position: relative;
  overflow: hidden;
  position: absolute;
  inset: 0;
  min-height: 39rem;
  background:
    linear-gradient(135deg, rgba(250, 234, 177, 0.98), rgba(255, 249, 229, 0.98) 58%, rgba(246, 223, 154, 0.98));
  border-radius: 2.25rem;
  padding: 1.5rem;
  color: var(--foreground);
  transition:
  opacity 0.45s ease-in-out,
  transform 0.45s ease-in-out,
  filter 0.45s ease-in-out;
  will-change: opacity, transform, filter;
}

.hero-slide-shell--active {
  opacity: 1;
  transform: translate3d(0, 0, 0) scale(1);
  filter: blur(0);
  z-index: 2;
  pointer-events: auto;
}

.hero-slide-shell--inactive {
  opacity: 0;
  transform: translate3d(16px, 0, 0) scale(0.992);
  filter: blur(2px);
  z-index: 1;
  pointer-events: none;
}

.hero-slide-shell::before {
  position: absolute;
  inset: 0;
  content: '';
  background:
    radial-gradient(circle at 14% 18%, rgba(255, 255, 255, 0.62), transparent 28%),
    radial-gradient(circle at 82% 22%, rgba(245, 186, 66, 0.2), transparent 24%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.24), transparent 32%),
    linear-gradient(140deg, rgba(250, 234, 177, 0.12), rgba(255, 255, 255, 0.18));
}

.hero-slide-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgb(48 86 105 / 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgb(48 86 105 / 0.06) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: linear-gradient(to bottom, rgb(0 0 0 / 0.34), transparent 72%);
  opacity: 0.22;
}

.hero-slide-layout {
  position: relative;
  z-index: 1;
  display: grid;
  min-height: 36rem;
  gap: 2.5rem;
  padding: 1rem;
  align-items: center;
}

@media (min-width: 1024px) {
  .hero-slide-layout {
    grid-template-columns: minmax(0, 1fr) minmax(0, 32rem);
  }
}

.hero-slide-copy {
  display: flex;
  min-height: 100%;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
}

.hero-slide-panel {
  width: 100%;
  border-radius: 1.9rem;
  border: none;
  background: transparent;
  padding: 0;
  box-shadow: none;
  backdrop-filter: none;
}

.hero-slide-dots {
  position: absolute;
  z-index: 2;
  right: 0;
  bottom: 1rem;
  left: 0;
  display: flex;
  justify-content: center;
  gap: 0.55rem;
}

.hero-slide-dot {
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 9999px;
  background: rgb(255 255 255 / 0.34);
  border: 1px solid rgb(48 86 105 / 0.12);
  transition:
    transform 0.2s ease,
    background-color 0.2s ease;
}

.hero-slide-dot.is-active {
  background: rgb(48 86 105 / 0.98);
  transform: scale(1.18);
}

@media (max-width: 1023px) {
  .hero-slider-stage {
    min-height: 31rem;
  }

  .hero-slide-shell {
    min-height: 31rem;
    padding: 1rem;
  }

  .hero-slide-layout {
    min-height: 28rem;
    gap: 1rem;
    padding: 0.5rem 0.5rem 2.5rem;
  }

  .hero-slide-copy {
    justify-content: flex-start;
  }

  .hero-slide-panel {
    display: none;
  }
}

@media (max-width: 768px) {
  .hero-slide-shell {
    min-height: 41rem;
    padding: 1rem;
  }

  .hero-slide-layout {
    min-height: 38rem;
    padding: 0.5rem;
  }
}
</style>
