<script setup>
import { ArrowRight, ClipboardCheck, Shield, ShieldAlert, Workflow } from 'lucide-vue-next'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

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

const { tm } = useI18n()
const selectedService = ref(null)

const serviceCards = [
  {
    key: 'framework',
    icon: Workflow,
    accentClass: 'bg-accent/16 text-primary',
    delay: 120,
  },
  {
    key: 'assurance',
    icon: ShieldAlert,
    accentClass: 'bg-primary/10 text-primary',
    delay: 200,
  },
]

const processIcons = [ClipboardCheck, Shield, Workflow, ArrowRight, ClipboardCheck]

function list(path) {
  const value = tm(path)
  return Array.isArray(value) ? value : []
}

function toggleService(key) {
  selectedService.value = selectedService.value === key ? null : key
}
</script>

<template>
  <div class="page-shell">
    <PageHero
      v-reveal
      :label="$t('servicesPage.hero.label')"
      :title="$t('servicesPage.hero.title')"
      :description="$t('servicesPage.hero.subtitle')"
    >
      <!-- <template #actions>
        <Button as-child size="lg" class="rounded-full shadow-sm">
          <a href="mailto:info@trustai.com.tr">
            {{ $t('cta.contact') }}
          </a>
        </Button>

        <Button as-child variant="outline" size="lg" class="rounded-full">
          <RouterLink :to="{ name: 'products', params: { locale } }">
            {{ $t('navbar.products') }}
          </RouterLink>
        </Button>
      </template> -->
    </PageHero>

    <section v-reveal="{ delay: 120 }" class="space-y-6">
      <SectionHeading
        :label="$t('servicesPage.overview.label')"
        :title="$t('servicesPage.overview.title')"
        :description="$t('servicesPage.overview.description')"
      />

      <div class="grid items-start gap-4">
        <Card
          v-for="service in serviceCards"
          :key="service.key"
          v-reveal="{ delay: service.delay }"
          :class="['content-card hover-lift']"
        >
          <CardHeader class="gap-4">
            <div class="flex size-12 items-center justify-center rounded-[1.1rem]" :class="service.accentClass">
              <component :is="service.icon" class="size-5" />
            </div>
            <div class="space-y-2">
              <p class="section-label">{{ $t(`servicesPage.${service.key}.category`) }}</p>
              <CardTitle class="content-title">{{ $t(`servicesPage.${service.key}.name`) }}</CardTitle>
              <CardDescription class="content-copy">
                {{ $t(`servicesPage.${service.key}.overview`) }}
              </CardDescription>
            </div>

            <div class="pt-2">
              <Button
                variant="outline"
                class="group rounded-full border-border bg-background/78 text-primary hover:bg-white"
                :aria-expanded="selectedService === service.key"
                @click="toggleService(service.key)"
              >
                {{ selectedService === service.key ? $t('common.hideServiceDetails') : $t('common.showServiceDetails') }}
                <ArrowRight
                  :class="[
                    'size-4 transition-transform duration-300',
                    selectedService === service.key ? 'rotate-90' : 'group-hover:translate-x-1'
                  ]"
                />
              </Button>
            </div>
          </CardHeader>

          <Transition name="detail-panel">
            <CardContent
              v-if="selectedService === service.key"
              class="grid gap-5 border-t border-border/70 pt-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]"
            >
              <div class="space-y-4">
                <p class="section-label">{{ $t(`servicesPage.${service.key}.whatWeDoTitle`) }}</p>
                <div class="grid gap-3">
                  <div
                    v-for="item in list(`servicesPage.${service.key}.whatWeDo`)"
                    :key="item"
                    class="content-chip bg-background/82"
                  >
                    {{ item }}
                  </div>
                </div>
              </div>

              <div class="grid gap-5">
                <div class="rounded-[1.5rem] border border-border/70 bg-background/78 p-5">
                  <p class="section-label">
                    {{ $t(`servicesPage.${service.key}.${service.key === 'framework' ? 'deliverablesTitle' : 'capabilitiesTitle'}`) }}
                  </p>
                  <ul class="mt-4 space-y-3">
                    <li
                      v-for="item in list(`servicesPage.${service.key}.${service.key === 'framework' ? 'deliverables' : 'capabilities'}`)"
                      :key="item"
                      class="content-copy"
                    >
                      {{ item }}
                    </li>
                  </ul>
                </div>

                <div class="rounded-[1.5rem] border border-border/70 bg-secondary/55 p-5">
                  <p class="section-label">{{ $t(`servicesPage.${service.key}.valueTitle`) }}</p>
                  <div class="mt-4 grid gap-3">
                    <div
                      v-for="item in list(`servicesPage.${service.key}.value`)"
                      :key="item"
                      class="content-chip bg-background/82"
                    >
                      {{ item }}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Transition>
        </Card>
      </div>
    </section>

    <section v-reveal="{ delay: 200 }" class="space-y-6">
      <SectionHeading
        :label="$t('servicesPage.process.label')"
        :title="$t('servicesPage.process.title')"
        :description="$t('servicesPage.process.description')"
      />

      <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        <Card
          v-for="(step, index) in list('servicesPage.process.steps')"
          :key="step.title"
          v-reveal="{ delay: 120 * (index + 1) }"
          class="content-card hover-lift"
        >
          <CardHeader class="gap-4">
            <div class="flex size-12 items-center justify-center rounded-[1.1rem] bg-accent/16 text-primary">
              <component :is="processIcons[index]" class="size-5" />
            </div>
            <div class="space-y-2">
              <p class="section-label">0{{ index + 1 }}</p>
              <CardTitle class="content-subtitle">{{ step.title }}</CardTitle>
              <CardDescription class="content-copy">
                {{ step.description }}
              </CardDescription>
            </div>
          </CardHeader>
        </Card>
      </div>
    </section>

    <Card v-reveal="{ delay: 300 }" class="content-card overflow-hidden bg-secondary/70">
      <CardHeader class="space-y-3">
        <p class="section-label">{{ $t('servicesPage.hero.label') }}</p>
        <CardTitle class="section-title max-w-3xl">
          {{ $t('servicesPage.cta.title') }}
        </CardTitle>
        <CardDescription class="section-description">
          {{ $t('cta.description') }}
        </CardDescription>
      </CardHeader>
      <!-- <CardContent class="flex flex-col gap-3 sm:flex-row">
        <Button as-child size="lg" class="rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
          <a href="mailto:info@trustai.com.tr">{{ $t('cta.contact') }}</a>
        </Button>
        <Button as-child variant="outline" size="lg" class="rounded-full border-border bg-white/55 text-primary hover:bg-white">
          <RouterLink :to="{ name: 'products', params: { locale } }">
            {{ $t('navbar.products') }}
          </RouterLink>
        </Button>
      </CardContent> -->
    </Card>
  </div>
</template>
