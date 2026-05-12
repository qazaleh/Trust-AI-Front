<script setup>
import { computed } from 'vue'
import { Orbit, Users } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'

import FeatureHero from '@/components/FeatureHero.vue'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { teamMembers } from '@/lib/site'                                                                                                                                                                                                                                                                                                                                                  
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
    <FeatureHero
      :show-grid-pattern="false"
      :label="$t('aboutPage.hero.label')"
      :title="$t('aboutPage.hero.title')"
      :description="$t('aboutPage.hero.subtitle')"
    >
      <template #actions>
        <Button as-child variant="outline" size="lg" class="rounded-full">
          <a href="mailto:info@trustai.com.tr">{{ $t('cta.contact') }}</a>
        </Button>
      </template>
    </FeatureHero>

    <Tabs default-value="who-we-are" class="space-y-6">
      <TabsList class="mx-auto grid w-full max-w-5xl grid-cols-3 items-stretch gap-2 rounded-[1.6rem] bg-secondary/80 p-2 shadow-sm md:p-2.5">
        <TabsTrigger
          value="who-we-are"
          class="w-full rounded-[1.1rem] px-4 py-3 text-center text-base font-semibold tracking-tight md:px-6 md:py-4 md:text-lg"
        >{{ $t('aboutPage.tabs.whoWeAre') }}</TabsTrigger>
        <TabsTrigger
          value="platform"
          class="w-full rounded-[1.1rem] px-4 py-3 text-center text-base font-semibold tracking-tight md:px-6 md:py-4 md:text-lg"
        >{{ $t('aboutPage.tabs.platform') }}</TabsTrigger>
        <TabsTrigger
          value="alignment"
          class="w-full rounded-[1.1rem] px-4 py-3 text-center text-base font-semibold tracking-tight md:px-6 md:py-4 md:text-lg"
        >{{ $t('aboutPage.tabs.alignment') }}</TabsTrigger>
      </TabsList>

      <TabsContent
        value="who-we-are"
        class="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y border-primary/10 bg-[linear-gradient(180deg,rgba(223,236,242,0.92),rgba(247,250,252,0.98)_100%)] py-8 md:py-10"
      >
        <div class="mx-auto grid w-full max-w-4xl gap-4 px-6">
          <Card class="border-border/70 bg-white/82 text-center shadow-sm">
            <CardHeader>
              <CardTitle class="content-title">{{ $t('aboutPage.vision.title') }}</CardTitle>
              <CardDescription class="content-copy">
                {{ $t('aboutPage.vision.description') }}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card class="border-border/70 bg-white/82 text-center shadow-sm">
            <CardHeader>
              <CardTitle class="content-title">{{ $t('aboutPage.mission.title') }}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul class="mx-auto grid max-w-2xl gap-3">
                <li
                  v-for="item in missionItems"
                  :key="item"
                  class="content-chip bg-white/88 text-center"
                >
                  {{ item }}
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      <TabsContent
        value="platform"
        class="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y border-primary/10 bg-[linear-gradient(180deg,rgba(223,236,242,0.92),rgba(247,250,252,0.98)_100%)] py-8 md:py-10"
      >
        <div class="mx-auto grid w-full max-w-4xl gap-4 px-6">
          <Card class="border-border/70 bg-white/82 text-center shadow-sm">
            <CardHeader>
              <CardTitle class="content-title">{{ $t('aboutPage.coreCapabilities.title') }}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul class="mx-auto grid max-w-2xl gap-3">
                <li
                  v-for="item in capabilityItems"
                  :key="item"
                  class="content-chip bg-white/88 text-center"
                >
                  {{ item }}
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card class="border-border/70 bg-white/82 text-center shadow-sm">
            <CardHeader>
              <CardTitle class="content-title">{{ $t('aboutPage.architecture.title') }}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul class="mx-auto grid max-w-2xl gap-3">
                <li
                  v-for="item in architectureItems"
                  :key="item"
                  class="content-chip bg-white/88 text-center"
                >
                  {{ item }}
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      <TabsContent
        value="alignment"
        class="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y border-primary/10 bg-[linear-gradient(180deg,rgba(223,236,242,0.92),rgba(247,250,252,0.98)_100%)] py-8 md:py-10"
      >
        <div class="mx-auto grid w-full max-w-4xl gap-4 px-6">
          <Card class="border-border/70 bg-white/82 text-center shadow-sm">
            <CardHeader>
              <CardTitle class="content-title">{{ $t('aboutPage.regulatory.title') }}</CardTitle>
              <CardDescription class="content-copy">
                {{ $t('aboutPage.regulatory.p1') }}
              </CardDescription>
            </CardHeader>
            <CardContent class="space-y-4">
              <div class="flex flex-wrap justify-center gap-2">
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
              <p class="content-copy mx-auto max-w-2xl">
                {{ $t('aboutPage.regulatory.p2') }}
              </p>
            </CardContent>
          </Card>

          <Card class="border-border/70 bg-white/82 text-center shadow-sm">
            <CardHeader>
              <CardTitle class="content-title">{{ $t('aboutPage.sectors.title') }}</CardTitle>
            </CardHeader>
            <CardContent class="space-y-4 content-copy">
              <p>{{ $t('aboutPage.sectors.p1') }}</p>
              <p>{{ $t('aboutPage.sectors.p2') }}</p>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
    </Tabs>

    <section class="space-y-6">
      <div class="section-intro">
        <p class="section-label">{{ $t('ourTeamsPage.hero.label') }}</p>
        <h2 class="section-title">{{ $t('ourTeamsPage.hero.title') }}</h2>
        <p class="section-description">{{ $t('ourTeamsPage.hero.subtitle') }}</p>
      </div>

 

      <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <Card
          v-for="member in teamMembers"
          :key="member.name"
          class="content-card"
        >
          <CardHeader class="items-start gap-4">
            <Avatar class="size-28 rounded-[1.75rem] border border-border/70 bg-secondary/55">
              <AvatarImage
                :src="member.image"
                :alt="member.name"
                class="object-cover"
                :style="{ objectPosition: member.imagePosition || 'center center' }"
              />
              <AvatarFallback class="rounded-[1.75rem] bg-secondary text-primary">
                {{ member.initials }}
              </AvatarFallback>
            </Avatar>

            <div class="space-y-3">
              <Badge variant="secondary" class="rounded-full px-3 py-1">
                {{ $t(member.roleKey) }}
              </Badge>
              <div class="space-y-2">
                <CardTitle class="content-subtitle">{{ member.name }}</CardTitle>
                <CardDescription class="content-copy">
                  {{ $t(member.bioKey) }}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>
    </section>

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
