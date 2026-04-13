<script setup>
import { computed } from 'vue'
import { ArrowRight } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

import PageHero from '@/components/PageHero.vue'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { normalizeLocale } from '@/lib/site'

const route = useRoute()
const locale = computed(() => normalizeLocale(route.params.locale))
const { tm } = useI18n()

const missionItems = computed(() => {
  const value = tm('aboutPage.mission.items')
  return Array.isArray(value) ? value : []
})

const capabilityItems = computed(() => {
  const value = tm('aboutPage.coreCapabilities.items')
  return Array.isArray(value) ? value : []
})

const architectureItems = computed(() => {
  const value = tm('aboutPage.architecture.items')
  return Array.isArray(value) ? value : []
})

const regulatoryItems = computed(() => {
  const value = tm('aboutPage.regulatory.items')
  return Array.isArray(value) ? value : []
})
</script>

<template>
  <div class="page-shell">
    <PageHero
      :label="$t('aboutPage.hero.label')"
      :title="$t('aboutPage.hero.title')"
      :description="$t('aboutPage.hero.subtitle')"
    >
      <template #actions>
        <!-- <Button as-child size="lg" class="rounded-full shadow-sm">
          <RouterLink :to="{ name: 'research', params: { locale } }">
            {{ $t('cta.research') }}
            <ArrowRight class="size-4" />
          </RouterLink>
        </Button> -->

        <Button as-child variant="outline" size="lg" class="rounded-full">
          <a href="mailto:info@trustai.com.tr">{{ $t('cta.contact') }}</a>
        </Button>
      </template>

      <!-- <template #aside>
        <div class="space-y-4">
          <p class="text-sm font-bold uppercase tracking-[0.22em] text-primary">Aligned With</p>
          <div class="flex flex-wrap gap-2">
            <Badge
              v-for="item in regulatoryItems.slice(0, 4)"
              :key="item"
              variant="secondary"
              class="rounded-full px-3 py-1"
            >
              {{ item }}
            </Badge>
          </div>
        </div>
      </template> -->
    </PageHero>

    <Tabs default-value="who-we-are" class="gap-6">
      <TabsList class="grid w-full grid-cols-1 rounded-[1.5rem] bg-secondary/80 p-1 md:grid-cols-3">
        <TabsTrigger value="who-we-are">{{ $t('aboutPage.tabs.whoWeAre') }}</TabsTrigger>
        <TabsTrigger value="platform">{{ $t('aboutPage.tabs.platform') }}</TabsTrigger>
        <TabsTrigger value="alignment">{{ $t('aboutPage.tabs.alignment') }}</TabsTrigger>
      </TabsList>

      <TabsContent value="who-we-are">
        <div class="grid gap-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <Card class="content-card">
            <CardHeader>
              <CardTitle class="content-title">{{ $t('aboutPage.whoWeAre.title') }}</CardTitle>
            </CardHeader>
            <CardContent class="space-y-4 content-copy">
              <p>{{ $t('aboutPage.whoWeAre.p1') }}</p>
              <p>{{ $t('aboutPage.whoWeAre.p2') }}</p>
              <p>{{ $t('aboutPage.whoWeAre.p3') }}</p>
            </CardContent>
          </Card>

          <div class="grid gap-4">
            <Card class="content-card">
              <CardHeader>
                <CardTitle class="content-title">{{ $t('aboutPage.vision.title') }}</CardTitle>
                <CardDescription class="content-copy">
                  {{ $t('aboutPage.vision.description') }}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card class="content-card">
              <CardHeader>
                <CardTitle class="content-title">{{ $t('aboutPage.mission.title') }}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul class="space-y-3">
                  <li
                    v-for="item in missionItems"
                    :key="item"
                    class="content-chip"
                  >
                    {{ item }}
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="platform">
        <div class="grid gap-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <Card class="content-card">
            <CardHeader>
              <CardTitle class="content-title">{{ $t('aboutPage.platform.title') }}</CardTitle>
              <CardDescription class="content-copy">
                {{ $t('aboutPage.platform.description') }}
              </CardDescription>
            </CardHeader>
            <CardContent class="space-y-4 content-copy">
              <p>{{ $t('aboutPage.difference.p1') }}</p>
              <p>{{ $t('aboutPage.difference.p2') }}</p>
            </CardContent>
          </Card>

          <div class="grid gap-4">
            <Card class="content-card">
              <CardHeader>
                <CardTitle class="content-title">{{ $t('aboutPage.coreCapabilities.title') }}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul class="space-y-3">
                  <li
                    v-for="item in capabilityItems"
                    :key="item"
                    class="content-chip"
                  >
                    {{ item }}
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card class="content-card">
              <CardHeader>
                <CardTitle class="content-title">{{ $t('aboutPage.architecture.title') }}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul class="space-y-3">
                  <li
                    v-for="item in architectureItems"
                    :key="item"
                    class="content-chip"
                  >
                    {{ item }}
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="alignment">
        <div class="grid gap-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <Card class="content-card">
            <CardHeader>
              <CardTitle class="content-title">{{ $t('aboutPage.scientific.title') }}</CardTitle>
            </CardHeader>
            <CardContent class="space-y-4 content-copy">
              <p>{{ $t('aboutPage.scientific.p1') }}</p>
              <p>{{ $t('aboutPage.scientific.p2') }}</p>
              <p>{{ $t('aboutPage.scientific.p3') }}</p>
            </CardContent>
          </Card>

          <div class="grid gap-4">
            <Card class="content-card">
              <CardHeader>
                <CardTitle class="content-title">{{ $t('aboutPage.regulatory.title') }}</CardTitle>
                <CardDescription class="content-copy">
                  {{ $t('aboutPage.regulatory.p1') }}
                </CardDescription>
              </CardHeader>
              <CardContent class="space-y-4">
                <div class="flex flex-wrap gap-2">
                  <Badge
                    v-for="item in regulatoryItems"
                    :key="item"
                    variant="secondary"
                    class="rounded-full px-3 py-1"
                  >
                    {{ item }}
                  </Badge>
                </div>
                <Separator />
                <p class="content-copy">
                  {{ $t('aboutPage.regulatory.p2') }}
                </p>
              </CardContent>
            </Card>

            <Card class="content-card">
              <CardHeader>
                <CardTitle class="content-title">{{ $t('aboutPage.sectors.title') }}</CardTitle>
              </CardHeader>
              <CardContent class="space-y-4 content-copy">
                <p>{{ $t('aboutPage.sectors.p1') }}</p>
                <p>{{ $t('aboutPage.sectors.p2') }}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </TabsContent>
    </Tabs>

    <Card class="content-card bg-secondary/70">
      <CardContent class="space-y-4 px-6 py-8 text-center">
        <p class="content-copy-lg">
          {{ $t('aboutPage.closing.statement') }}
        </p>
        <p class="content-title max-w-none">{{ $t('aboutPage.closing.highlight') }}</p>
      </CardContent>
    </Card>
  </div>
</template>
