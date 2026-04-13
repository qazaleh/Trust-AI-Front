<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import PageHero from '@/components/PageHero.vue'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const { tm } = useI18n()

const noticeItems = computed(() => {
  const value = tm('privacyPage.noticeItems')
  return Array.isArray(value) ? value : []
})
</script>

<template>
  <div class="page-shell">
    <PageHero
      :label="$t('privacyPage.hero.label')"
      :title="$t('privacyPage.hero.title')"
    />

    <Card class="content-card">
      <CardHeader>
        <CardTitle class="content-title">{{ $t('privacyPage.policyDetails') }}</CardTitle>
      </CardHeader>
      <CardContent class="space-y-5">
        <div class="space-y-3 content-copy-lg">
          <p class="content-subtitle">{{ $t('privacyPage.noticeTitle') }}</p>
          <p>{{ $t('privacyPage.noticeIntro') }}</p>
        </div>

        <ul class="grid gap-3">
          <li
            v-for="item in noticeItems"
            :key="item"
            class="content-chip bg-background/82"
          >
            {{ item }}
          </li>
        </ul>
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
