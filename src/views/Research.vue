<script setup>
import { ArrowRight, ExternalLink, Sparkles } from 'lucide-vue-next'
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
import { normalizeLocale, publications } from '@/lib/site'

const route = useRoute()
const locale = computed(() => normalizeLocale(route.params.locale))

const researchThemes = ['counterfactual', 'robustness', 'audit']
</script>

<template>
  <div class="page-shell">
    <PageHero
      v-reveal
      :label="$t('researchReferences.label')"
      :title="$t('researchReferences.title')"
      :description="$t('researchReferences.description')"
    >
      <template #actions>
        <Button as-child size="lg" class="rounded-full shadow-sm">
          <a href="mailto:info@trustai.com.tr">
            {{ $t('cta.contact') }}
            <ArrowRight class="size-4" />
          </a>
        </Button>

        <Button as-child variant="outline" size="lg" class="rounded-full">
          <RouterLink :to="{ name: 'governance', params: { locale } }">
            {{ $t('navbar.governance') }}
          </RouterLink>
        </Button>
      </template>
<!-- 
      <template #aside>
        <div class="space-y-4">
          <p class="text-sm font-bold uppercase tracking-[0.22em] text-primary">Research Themes</p>
          <div class="space-y-3">
            <div
              v-for="theme in researchThemes"
              :key="theme.title"
              class="rounded-2xl bg-secondary/70 px-4 py-3"
            >
              <p class="text-sm font-semibold text-primary">{{ theme.title }}</p>
              <p class="mt-1 text-sm leading-6 text-muted-foreground">{{ theme.description }}</p>
            </div>
          </div>
        </div>
      </template> -->
    </PageHero>

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
            <p v-else class="content-copy">
              {{ $t('researchPage.publicationRequest') }}
            </p>
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
      <CardContent>
        <Button as-child class="rounded-full shadow-sm">
          <a href="mailto:info@trustai.com.tr">{{ $t('cta.contact') }}</a>
        </Button>
      </CardContent>
    </Card>
  </div>
</template>
