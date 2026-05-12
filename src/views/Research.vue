<script setup>
import { ExternalLink, Sparkles } from 'lucide-vue-next'

import FeatureHero from '@/components/FeatureHero.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { publications } from '@/lib/site'
</script>

<template>
  <div class="page-shell">
    <FeatureHero
      v-reveal
      :show-grid-pattern="false"
      :label="$t('researchReferences.label')"
      :title="$t('researchReferences.title')"
      :description="$t('researchReferences.description')"
    />

    <section v-reveal="{ delay: 120 }" class="space-y-6">
      <SectionHeading
        :title="$t('researchReferences.subtitle')"
        :description="$t('researchPage.sectionDescription')"
      />

      <div class="grid gap-4 lg:grid-cols-2">
        <Card
          v-for="publication in publications"
          :key="publication.title"
          class="content-card"
        >
          <CardHeader class="space-y-4">
            <div class="flex items-center gap-2 text-primary">
              <Sparkles class="size-4" />
              <span class="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                {{ $t('researchPage.publicationLabel') }}
              </span>
            </div>
            <div class="space-y-3">
              <CardTitle class="content-title leading-tight">
                {{ $t(publication.titleKey) }}
              </CardTitle>
              <CardDescription class="content-copy">
                {{ $t(publication.descriptionKey) }}
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <Button
              v-if="publication.href"
              as-child
              variant="outline"
              class="rounded-full"
            >
              <a :href="publication.href" target="_blank" rel="noreferrer">
                <ExternalLink class="size-4" />
                {{ $t('researchSection.publicationBtn') }}
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
          </CardContent>
        </Card>
      </div>
    </section>

    <Card v-reveal="{ delay: 200 }" class="content-card bg-secondary/70">
      <CardHeader>
        <CardTitle class="content-title">{{ $t('researchPage.collaborateTitle') }}</CardTitle>
        <CardDescription class="section-description">
          {{ $t('researchPage.collaborateDescription') }}
        </CardDescription>
      </CardHeader>
      <!-- <CardContent>
        <Button as-child class="rounded-full shadow-sm">
          <a href="mailto:info@trustai.com.tr">{{ $t('cta.contact') }}</a>
        </Button>
      </CardContent> -->
    </Card>
  </div>
</template>
