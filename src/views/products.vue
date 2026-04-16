<script setup>
import { ArrowRight, Bot, Boxes, BrainCircuit, FileSearch, Workflow } from 'lucide-vue-next'
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
const selectedProduct = ref(null)

const productCards = [
  {
    key: 'trustaiX',
    icon: BrainCircuit,
    accentClass: 'bg-accent/16 text-primary',
    delay: 120,
    revealClass: 'reveal-slide-left',
  },
  {
    key: 'trustaiUX',
    icon: Bot,
    accentClass: 'bg-primary/10 text-primary',
    delay: 200,
    revealClass: 'reveal-slide-right',
  },
]

const ecosystemIcons = [FileSearch, Workflow, Boxes]

function list(path) {
  const value = tm(path)
  return Array.isArray(value) ? value : []
}

function toggleProduct(key) {
  selectedProduct.value = selectedProduct.value === key ? null : key
}
</script>

<template>
  <div class="page-shell">
    <PageHero
      v-reveal
      :label="$t('productsPage.hero.label')"
      :title="$t('productsPage.hero.title')"
      :description="$t('productsPage.hero.subtitle')"
    >
      <!-- <template #actions>
        <Button as-child size="lg" class="rounded-full shadow-sm">
          <a href="mailto:info@trustai.com.tr">
            {{ $t('cta.contact') }}
          </a>
        </Button>

        <Button as-child variant="outline" size="lg" class="rounded-full">
          <RouterLink :to="{ name: 'services', params: { locale } }">
            {{ $t('navbar.services') }}
          </RouterLink>
        </Button>
      </template> -->
    </PageHero>

    <section v-reveal="{ delay: 120 }" class="space-y-6">
      <SectionHeading
        :label="$t('productsPage.overview.label')"
        :title="$t('productsPage.overview.title')"
        :description="$t('productsPage.overview.description')"
      />

      <div class="grid items-start gap-4">
        <Card
          v-for="product in productCards"
          :key="product.key"
          v-reveal="{ delay: product.delay }"
          :class="['content-card hover-lift', product.revealClass]"
        >
          <CardHeader class="gap-4">
            <div class="flex size-12 items-center justify-center rounded-[1.1rem]" :class="product.accentClass">
              <component :is="product.icon" class="size-5" />
            </div>
            <div class="space-y-2">
              <p class="section-label">{{ $t(`productsPage.${product.key}.category`) }}</p>
              <CardTitle class="content-title">{{ $t(`productsPage.${product.key}.name`) }}</CardTitle>
              <CardDescription class="content-copy">
                {{ $t(`productsPage.${product.key}.overview`) }}
              </CardDescription>
            </div>

            <div class="pt-2">
              <Button
                variant="outline"
                class="group rounded-full border-border bg-background/78 text-primary hover:bg-white"
                :aria-expanded="selectedProduct === product.key"
                @click="toggleProduct(product.key)"
              >
                {{ selectedProduct === product.key ? $t('common.hideProductDetails') : $t('common.showProductDetails') }}
                <ArrowRight
                  :class="[
                    'size-4 transition-transform duration-300',
                    selectedProduct === product.key ? 'rotate-90' : 'group-hover:translate-x-1'
                  ]"
                />
              </Button>
            </div>
          </CardHeader>

          <Transition name="detail-panel">
            <CardContent
              v-if="selectedProduct === product.key"
              class="grid gap-5 border-t border-border/70 pt-6 lg:grid-cols-2"
            >
              <div class="space-y-4">
                <div class="section-intro">
                  <p class="section-label">{{ $t(`productsPage.${product.key}.whatItDoesTitle`) }}</p>
                </div>
                <div class="grid gap-3">
                  <div
                    v-for="item in list(`productsPage.${product.key}.whatItDoes`)"
                    :key="item"
                    class="content-chip bg-background/82"
                  >
                    {{ item }}
                  </div>
                </div>
              </div>

              <div class="grid gap-5 sm:grid-cols-2">
                <div class="space-y-4 rounded-[1.5rem] border border-border/70 bg-background/78 p-5">
                  <p class="section-label">{{ $t(`productsPage.${product.key}.featuresTitle`) }}</p>
                  <ul class="space-y-3">
                    <li
                      v-for="item in list(`productsPage.${product.key}.features`)"
                      :key="item"
                      class="content-copy"
                    >
                      {{ item }}
                    </li>
                  </ul>
                </div>

                <div class="space-y-4 rounded-[1.5rem] border border-border/70 bg-background/78 p-5">
                  <p class="section-label">
                    {{ $t(`productsPage.${product.key}.${product.key === 'trustaiX' ? 'deploymentTitle' : 'compatibilityTitle'}`) }}
                  </p>
                  <ul class="space-y-3">
                    <li
                      v-for="item in list(`productsPage.${product.key}.${product.key === 'trustaiX' ? 'deployment' : 'compatibility'}`)"
                      :key="item"
                      class="content-copy"
                    >
                      {{ item }}
                    </li>
                  </ul>
                </div>

                <div class="space-y-4 rounded-[1.5rem] border border-border/70 bg-secondary/55 p-5 sm:col-span-2">
                  <p class="section-label">{{ $t(`productsPage.${product.key}.valueTitle`) }}</p>
                  <div class="grid gap-3 md:grid-cols-2">
                    <div
                      v-for="item in list(`productsPage.${product.key}.value`)"
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

    <Card v-reveal="{ delay: 300 }" class="content-card overflow-hidden bg-secondary/70">
      <CardHeader class="space-y-3">
        <p class="section-label">{{ $t('productsPage.ecosystem.label') }}</p>
        <CardTitle class="section-title max-w-3xl">
          {{ $t('productsPage.ecosystem.title') }}
        </CardTitle>
        <CardDescription class="section-description">
          {{ $t('productsPage.ecosystem.description') }}
        </CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div class="grid gap-4 md:grid-cols-3">
          <div
            v-for="(item, index) in list('productsPage.ecosystem.items')"
            :key="item"
            v-reveal="{ delay: 120 * (index + 1) }"
            class="rounded-[1.5rem] border border-border/70 bg-background/82 p-5 hover-lift"
          >
            <component :is="ecosystemIcons[index]" class="mb-4 size-5 text-accent" />
            <p class="content-copy">{{ item }}</p>
          </div>
        </div>
<!-- 
        <div class="flex flex-col gap-3 sm:flex-row">
          <Button as-child size="lg" class="rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
            <RouterLink :to="{ name: 'services', params: { locale } }">
              {{ $t('navbar.services') }}
            </RouterLink>
          </Button>
          <Button as-child variant="outline" size="lg" class="rounded-full border-border bg-white/55 text-primary hover:bg-white">
            <a href="mailto:info@trustai.com.tr">{{ $t('cta.contact') }}</a>
          </Button>
        </div> -->
      </CardContent>
    </Card>
  </div>
</template>
