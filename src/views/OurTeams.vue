<script setup>
import { ArrowRight, Orbit, Users } from 'lucide-vue-next'

import PageHero from '@/components/PageHero.vue'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { teamMembers } from '@/lib/site'
</script>

<template>
  <div class="page-shell">
    <PageHero
      :label="$t('ourTeamsPage.hero.label')"
      :title="$t('ourTeamsPage.hero.title')"
      :description="$t('ourTeamsPage.hero.subtitle')"
    >
      <template #actions>
        <Button as-child size="lg" class="rounded-full shadow-sm">
          <a href="mailto:info@trustai.com.tr">
            {{ $t('cta.contact') }}
            <ArrowRight class="size-4" />
          </a>
        </Button>
      </template>
<!-- 
      <template #aside>
        <div class="space-y-4">
          <div class="flex size-11 items-center justify-center rounded-2xl bg-secondary text-primary">
            <Users class="size-5" />
          </div>
          <p class="text-sm leading-7 text-muted-foreground">
            A multidisciplinary team spanning AI research, product engineering, governance, and sector delivery.
          </p>
        </div>
      </template> -->
    </PageHero>

    <div class="grid gap-4 lg:grid-cols-2">
      <Card class="content-card">
        <CardHeader>
          <CardTitle class="content-title flex items-center gap-2">
            <Orbit class="size-5" />
            {{ $t('teamPage.structureTitle') }}
          </CardTitle>
        </CardHeader>
        <CardContent class="space-y-4 content-copy">
          <p>{{ $t('aboutPage.team.p1') }}</p>
          <p>{{ $t('aboutPage.team.p2') }}</p>
        </CardContent>
      </Card>

      <Card class="content-card bg-secondary/70">
        <CardHeader>
          <CardTitle class="content-title">{{ $t('teamPage.howWeWorkTitle') }}</CardTitle>
          <CardDescription class="content-copy">
            {{ $t('teamPage.howWeWorkDescription') }}
          </CardDescription>
        </CardHeader>
        <CardContent class="grid gap-3">
          <div class="content-chip bg-background/80">{{ $t('teamPage.howWeWorkItems.academic') }}</div>
          <div class="content-chip bg-background/80">{{ $t('teamPage.howWeWorkItems.engineering') }}</div>
          <div class="content-chip bg-background/80">{{ $t('teamPage.howWeWorkItems.governance') }}</div>
        </CardContent>
      </Card>
    </div>

    <section class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
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
    </section>
  </div>
</template>
