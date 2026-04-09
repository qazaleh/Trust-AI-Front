<script setup>
import { computed } from 'vue'
import { ArrowRight, ShieldCheck } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'

import PageHero from '@/components/PageHero.vue'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const { tm } = useI18n()

const collectedItems = computed(() => {
  const items = tm('privacyPage.whatWeCollect.items')
  return [
    {
      title: items['contact-title'],
      description: items.contact,
    },
    {
      title: items['usage-title'],
      description: items.usage,
    },
    {
      title: items['communications-title'],
      description: items.communications,
    },
  ]
})

const usageItems = computed(() => {
  const value = tm('privacyPage.howWeUse.items')
  return Array.isArray(value) ? value : []
})

const rightsItems = computed(() => {
  const value = tm('privacyPage.yourRights.items')
  return Array.isArray(value) ? value : []
})
</script>

<template>
  <div class="page-shell">
    <PageHero
      :label="$t('privacyPage.hero.label')"
      :title="$t('privacyPage.hero.title')"
      :description="$t('privacyPage.hero.subtitle')"
    >
      <template #actions>
        <Button as-child size="lg" class="rounded-full shadow-sm">
          <a href="mailto:info@trustai.com.tr">
            {{ $t('cta.contact') }}
            <ArrowRight class="size-4" />
          </a>
        </Button>
      </template>

      <!-- <template #aside>
        <div class="space-y-3">
          <div class="flex size-11 items-center justify-center rounded-2xl bg-secondary text-primary">
            <ShieldCheck class="size-5" />
          </div>
          <p class="text-sm leading-7 text-muted-foreground">
            TrustAI applies privacy and transparency principles to every interaction with the site.
          </p>
        </div>
      </template> -->
    </PageHero>

    <Card class="content-card">
      <CardHeader>
        <CardTitle class="content-title">{{ $t('privacyPage.policyDetails') }}</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible default-value="general">
          <AccordionItem value="general" class="border-border/70">
            <AccordionTrigger class="text-base font-medium text-muted-foreground">
              {{ $t('privacyPage.generalPrinciples.title') }}
            </AccordionTrigger>
            <AccordionContent class="space-y-4 content-copy">
              <p>{{ $t('privacyPage.generalPrinciples.p1') }}</p>
              <p>{{ $t('privacyPage.generalPrinciples.p2') }}</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="collect" class="border-border/70">
            <AccordionTrigger class="text-base font-medium text-muted-foreground">
              {{ $t('privacyPage.whatWeCollect.title') }}
            </AccordionTrigger>
            <AccordionContent class="space-y-4 content-copy">
              <p>{{ $t('privacyPage.whatWeCollect.intro') }}</p>
              <div class="grid gap-3">
                <div
                  v-for="item in collectedItems"
                  :key="item.title"
                  class="content-chip"
                >
                  <p class="font-semibold text-muted-foreground">{{ item.title }}</p>
                  <p class="mt-1">{{ item.description }}</p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="usage" class="border-border/70">
            <AccordionTrigger class="text-base font-medium text-muted-foreground">
              {{ $t('privacyPage.howWeUse.title') }}
            </AccordionTrigger>
            <AccordionContent class="space-y-4 content-copy">
              <p>{{ $t('privacyPage.howWeUse.intro') }}</p>
              <ul class="space-y-3">
                <li
                  v-for="item in usageItems"
                  :key="item"
                  class="content-chip"
                >
                  {{ item }}
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="security" class="border-border/70">
            <AccordionTrigger class="text-base font-medium text-muted-foreground">
              {{ $t('privacyPage.dataSecurity.title') }}
            </AccordionTrigger>
            <AccordionContent class="content-copy">
              {{ $t('privacyPage.dataSecurity.description') }}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="rights" class="border-border/70">
            <AccordionTrigger class="text-base font-medium text-muted-foreground">
              {{ $t('privacyPage.yourRights.title') }}
            </AccordionTrigger>
            <AccordionContent class="space-y-4 content-copy">
              <p>{{ $t('privacyPage.yourRights.intro') }}</p>
              <ul class="space-y-3">
                <li
                  v-for="item in rightsItems"
                  :key="item"
                  class="content-chip"
                >
                  {{ item }}
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="cookies" class="border-border/70">
            <AccordionTrigger class="text-base font-medium text-muted-foreground">
              {{ $t('privacyPage.cookies.title') }}
            </AccordionTrigger>
            <AccordionContent class="content-copy">
              {{ $t('privacyPage.cookies.description') }}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="updates" class="border-border/70">
            <AccordionTrigger class="text-base font-medium text-muted-foreground">
              {{ $t('privacyPage.updates.title') }}
            </AccordionTrigger>
            <AccordionContent class="content-copy">
              {{ $t('privacyPage.updates.description') }}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>

    <Card class="content-card bg-secondary/70">
      <CardHeader>
        <CardTitle class="content-title">{{ $t('privacyPage.contactTitle') }}</CardTitle>
      </CardHeader>
      <CardContent class="content-copy flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p>{{ $t('privacyPage.contactDescription') }}</p>
        <Button as-child class="rounded-full shadow-sm">
          <a href="mailto:info@trustai.com.tr">info@trustai.com.tr</a>
        </Button>
      </CardContent>
    </Card>
  </div>
</template>
