<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { FlaskConical, Scale, GitBranch, ChartNoAxesColumnIncreasing, Activity, ChevronDown } from 'lucide-vue-next'

import PageHero from '@/components/PageHero.vue'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { evaluationRun, labScenarios } from '@/lib/mlEvaluationLab'

const { t, locale } = useI18n()
const language = computed(() => locale.value === 'tr' ? 'tr-TR' : 'en-US')
const evaluationDate = computed(() => new Intl.DateTimeFormat(language.value, {
  day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC',
}).format(new Date(`${evaluationRun.date}T12:00:00Z`)))
const number = (value, digits = 0) => new Intl.NumberFormat(language.value, {
  minimumFractionDigits: digits, maximumFractionDigits: digits,
}).format(value)
const percent = value => new Intl.NumberFormat(language.value, {
  style: 'percent', minimumFractionDigits: 1, maximumFractionDigits: 1,
}).format(value)
const metricValue = (key, value) => ['accuracy', 'recall'].includes(key)
  ? percent(value) : number(value, ['mae', 'rmse'].includes(key) ? 2 : 3)
const displayedTestCounts = labScenarios.reduce((counts, scenario) => ({
  passed: counts.passed + scenario.passed,
  skipped: counts.skipped + scenario.skipped,
}), { passed: 0, skipped: 0 })
const adult = labScenarios.find(scenario => scenario.id === 'adult')
const adultTotal = Object.values(adult.evidence.groups).reduce((sum, n) => sum + n, 0)
const alternativeScenarios = labScenarios.filter(scenario => ['german_credit', 'insurance'].includes(scenario.id))
const icons = { adult: Scale, german_credit: GitBranch, telco_churn: ChartNoAxesColumnIncreasing, insurance: Activity }
const readingKeys = ['attribution', 'alternatives', 'provenance', 'scope']
const copy = (scenario, key) => t(`lab.scenarios.${scenario.id}.${key}`)
</script>

<template>
  <div class="page-shell lab-page gap-10">
    <PageHero
      :label="t('lab.eyebrow')"
      :title="t('lab.title')"
      :description="t('lab.description')"
      aside-width="31rem"
      content-align="center"
      :aside-chrome="false"
      class="lab-hero"
    >
      <template #actions>
        <Button as-child size="lg" class="rounded-full">
          <a href="#scenarios">{{ t('lab.explore') }}</a>
        </Button>
        <Button as-child variant="outline" size="lg" class="rounded-full bg-white/70">
          <a href="#reading-evidence">{{ t('lab.methodLink') }}</a>
        </Button>
      </template>
      <template #aside>
        <div class="evidence-card" :aria-label="t('lab.evidenceTitle')">
          <div class="flex items-start justify-between gap-3 border-b border-primary/15 pb-4">
            <div>
              <p class="text-lg font-bold text-primary">{{ t('lab.evidenceTitle') }}</p>
              <p class="mt-1 text-sm leading-6">{{ t('lab.evidenceSubtitle') }}</p>
            </div>
            <FlaskConical class="mt-1 size-6 shrink-0 text-primary" aria-hidden="true" />
          </div>
          <p class="mt-4 text-sm font-semibold text-primary">{{ t('lab.adultContext', { count: number(adultTotal) }) }}</p>
          <div class="my-4 grid grid-cols-2 gap-3">
            <div class="evidence-metric">
              <p class="text-3xl font-bold tabular-nums text-primary">{{ number(adult.evidence.parityDifference, 3) }}</p>
              <p class="mt-2 text-sm font-semibold">{{ t('lab.parity') }}</p>
              <p class="mt-1 text-sm text-muted-foreground">{{ t('lab.parityReference') }}</p>
            </div>
            <div class="evidence-metric">
              <p class="text-3xl font-bold tabular-nums text-primary">{{ number(adult.evidence.disparateImpact, 2) }}</p>
              <p class="mt-2 text-sm font-semibold">{{ t('lab.impact') }}</p>
              <p class="mt-1 text-sm text-muted-foreground">{{ t('lab.impactReference') }}</p>
            </div>
          </div>
          <p class="text-sm leading-6">{{ t('lab.intersection') }}</p>
          <dl class="mt-4 grid gap-3 border-t border-primary/15 pt-4 sm:grid-cols-2">
            <div v-for="scenario in alternativeScenarios" :key="scenario.id">
              <dt class="text-sm font-semibold text-primary">{{ scenario.id === 'german_credit' ? t('lab.germanShort') : t('lab.insuranceShort') }}</dt>
              <dd class="mt-1 text-base font-bold">{{ t('lab.counterfactualCount', { count: scenario.evidence.generated }) }}</dd>
              <dd class="text-sm leading-6">{{ t('lab.oneQuery') }}</dd>
            </div>
          </dl>
          <p class="mt-4 border-t border-primary/15 pt-3 text-sm text-muted-foreground">{{ t('lab.evaluated', { date: evaluationDate }) }} · UTC</p>
        </div>
      </template>
    </PageHero>

    <section class="run-strip" aria-labelledby="run-title">
      <div class="min-w-0 space-y-2">
        <h2 id="run-title" class="text-xl font-bold text-primary">{{ t('lab.runTitle') }}</h2>
        <p class="max-w-4xl text-base leading-7">{{ t('lab.runDescription') }}</p>
      </div>
      <div class="flex shrink-0 flex-wrap gap-3">
        <div class="run-stat"><strong>{{ displayedTestCounts.passed }}</strong><span>{{ t('lab.pass') }}</span></div>
        <div v-if="displayedTestCounts.skipped" class="run-stat run-stat--skipped"><strong>{{ displayedTestCounts.skipped }}</strong><span>{{ t('lab.skipped') }}</span></div>
      </div>
    </section>

    <section id="scenarios" class="space-y-6 scroll-mt-32" aria-labelledby="scenarios-title">
      <div class="section-intro">
        <h2 id="scenarios-title" class="section-title">{{ t('lab.scenariosTitle') }}</h2>
        <p class="max-w-4xl text-base leading-7">{{ t('lab.scenariosDescription') }}</p>
      </div>
      <nav class="flex flex-wrap gap-2" :aria-label="t('lab.scenarioNav')">
        <a v-for="scenario in labScenarios" :key="scenario.id" :href="`#${scenario.id}`" class="scenario-link">
          {{ copy(scenario, 'title') }}
        </a>
      </nav>

      <Card v-for="scenario in labScenarios" :id="scenario.id" :key="scenario.id" class="scenario-card content-card scroll-mt-32 gap-0 p-0">
        <article :aria-labelledby="`${scenario.id}-title`">
          <header class="scenario-header">
            <div class="flex min-w-0 items-start gap-4">
              <div class="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-secondary/70 text-primary">
                <component :is="icons[scenario.id]" class="size-6" aria-hidden="true" />
              </div>
              <div class="min-w-0">
                <p class="text-sm font-semibold text-primary">{{ copy(scenario, 'topic') }}</p>
                <h3 :id="`${scenario.id}-title`" class="mt-1 text-2xl font-bold text-primary">{{ copy(scenario, 'title') }}</h3>
              </div>
            </div>
            <div class="text-sm leading-6 sm:text-right">
              <span class="status-badge" :class="{ 'status-badge--skipped': scenario.skipped }">
                {{ scenario.skipped ? t('lab.skippedTests', { count: scenario.skipped }) : t('lab.passedTests', { count: scenario.passed }) }}
              </span>
              <p class="mt-2">{{ t('lab.evaluated', { date: evaluationDate }) }}</p>
            </div>
          </header>

          <div class="scenario-body">
            <div class="space-y-5">
              <div>
                <p class="lab-label">{{ t('lab.decision') }}</p>
                <p class="mt-2 text-xl font-semibold leading-8">{{ copy(scenario, 'question') }}</p>
              </div>
              <dl class="space-y-3 text-base leading-7">
                <div>
                  <dt class="lab-label">{{ t('lab.dataset') }}</dt>
                  <dd><a :href="scenario.sourceUrl" class="source-link">{{ scenario.dataset }}</a></dd>
                </div>
                <div><dt class="lab-label">{{ t('lab.model') }}</dt><dd>{{ scenario.model }}</dd></div>
                <div><dt class="lab-label">{{ t('lab.methods') }}</dt><dd>{{ copy(scenario, 'methods') }}</dd></div>
              </dl>
              <div class="border-l-2 border-primary/35 pl-4">
                <h4 class="font-bold text-primary">{{ t('lab.interpretation') }}</h4>
                <p class="mt-2 text-base leading-7">{{ copy(scenario, 'interpretation') }}</p>
              </div>
            </div>

            <div class="result-panel space-y-5">
              <p class="lab-label">{{ t('lab.serviceResults') }}</p>

              <template v-if="scenario.id === 'adult'">
                <div>
                  <p class="text-base font-bold text-primary">{{ t('lab.pretrain') }}</p>
                  <p class="mt-1 text-sm">{{ t('lab.fairnessSample', { count: number(adultTotal) }) }}</p>
                </div>
                <table class="lab-table">
                  <caption class="sr-only">{{ t('lab.pretrain') }}</caption>
                  <tbody>
                    <tr><th scope="row">{{ t('lab.parity') }}</th><td>{{ number(scenario.evidence.parityDifference, 3) }}</td></tr>
                    <tr><th scope="row">{{ t('lab.impact') }}</th><td>{{ number(scenario.evidence.disparateImpact, 2) }}</td></tr>
                  </tbody>
                </table>
                <figure>
                  <figcaption class="mb-3 text-sm font-bold text-primary">{{ t('lab.groupChart') }}</figcaption>
                  <div v-for="(count, group) in scenario.evidence.groups" :key="group" class="mb-3">
                    <div class="mb-1 flex items-baseline justify-between gap-3 text-sm">
                      <span>{{ t(`lab.${group}`) }}</span><strong class="tabular-nums">{{ number(count) }}</strong>
                    </div>
                    <div class="bar-track" aria-hidden="true"><div class="bar-fill" :class="{ 'bar-fill--muted': group === 'excluded' }" :style="{ width: `${count / adultTotal * 100}%` }" /></div>
                  </div>
                </figure>
              </template>

              <template v-else-if="scenario.id === 'german_credit'">
                <div>
                  <p class="text-base font-bold text-primary">{{ t('lab.verifiedFlip') }}</p>
                  <p class="mt-1 text-sm">{{ t('lab.oneQuery') }}</p>
                </div>
                <figure>
                  <figcaption class="mb-3 text-sm">{{ t('lab.cfChart') }}</figcaption>
                  <div v-for="key in ['requested', 'verified']" :key="key" class="mb-4">
                    <div class="mb-2 flex justify-between gap-3 text-sm"><span>{{ t(`lab.${key}`) }}</span><strong>{{ key === 'requested' ? scenario.evidence.requested : scenario.evidence.generated }}</strong></div>
                    <div class="grid grid-cols-4 gap-2" aria-hidden="true"><div v-for="n in 4" :key="n" class="h-6 rounded-lg" :class="key === 'requested' ? 'border border-primary/40' : 'bg-primary'" /></div>
                  </div>
                </figure>
                <p class="text-base leading-7">{{ t('lab.germanExample') }}</p>
                <p class="text-sm leading-6">{{ t('lab.alternativeNote') }}</p>
              </template>

              <template v-else-if="scenario.id === 'telco_churn'">
                <figure>
                  <figcaption class="text-base font-bold text-primary">{{ t('lab.shapChart') }}</figcaption>
                  <p class="mb-4 mt-1 text-sm leading-6">{{ t('lab.shapScale') }}</p>
                  <div v-for="feature in scenario.evidence.ranking" :key="feature.key" class="mb-4">
                    <div class="mb-1 flex items-baseline justify-between gap-3 text-sm"><span>{{ t(`lab.features.${feature.key}`) }}</span><strong class="tabular-nums">{{ number(feature.value, 3) }}</strong></div>
                    <div class="bar-track" aria-hidden="true"><div class="bar-fill" :style="{ width: `${feature.value / scenario.evidence.ranking[0].value * 100}%` }" /></div>
                  </div>
                  <p class="text-sm leading-6">{{ t('lab.shapSample', { samples: scenario.evidence.sampleSize, background: scenario.evidence.backgroundSize }) }}</p>
                </figure>
              </template>

              <template v-else-if="scenario.id === 'insurance'">
                <div>
                  <p class="text-3xl font-bold text-primary">{{ t('lab.counterfactualCount', { count: scenario.evidence.generated }) }}</p>
                  <p class="mt-2 text-sm">{{ t('lab.oneQuery') }}</p>
                  <p class="mt-2 text-sm leading-6">{{ t('lab.targetRange', { low: number(scenario.evidence.desiredRange[0]), high: number(scenario.evidence.desiredRange[1]) }) }}</p>
                </div>
                <p class="text-base leading-7">{{ t('lab.insuranceExample') }}</p>
                <table class="lab-table">
                  <caption class="mb-2 text-left text-sm font-bold text-primary">{{ t('lab.tests.fairness_regression') }} · n = {{ scenario.split.test }}</caption>
                  <tbody>
                    <tr><th scope="row">{{ t('lab.quantileParity') }}</th><td>{{ number(scenario.evidence.parityQuantile, 3) }}</td></tr>
                    <tr><th scope="row">{{ t('lab.quantileImpact') }}</th><td>{{ t('lab.undefined') }}</td></tr>
                  </tbody>
                </table>
                <p class="text-sm leading-6">{{ t('lab.undefinedNote') }}</p>
              </template>
            </div>
          </div>

          <div class="mx-6 mb-6 rounded-2xl border border-border bg-background/70 p-4 sm:mx-8">
            <h4 class="text-base font-bold text-primary">{{ t('lab.limitations') }}</h4>
            <p class="mt-1 text-base leading-7">{{ copy(scenario, 'limitations') }}</p>
          </div>
          <details class="method-details">
            <summary><span>{{ t('lab.methodology') }}<span class="sr-only"> · {{ copy(scenario, 'title') }}</span></span><ChevronDown class="size-5 shrink-0" aria-hidden="true" /></summary>
            <div class="space-y-5 px-6 pb-6 sm:px-8">
              <p class="text-base leading-8">{{ copy(scenario, 'methodology') }}</p>
              <p class="text-sm font-semibold text-primary">{{ t('lab.trainingSplit', { fit: number(scenario.split.training), validation: number(scenario.split.validation), test: number(scenario.split.test) }) }}</p>
              <table class="lab-table test-table">
                <caption class="sr-only">{{ copy(scenario, 'title') }} · {{ t('lab.methods') }}</caption>
                <thead><tr><th scope="col">{{ t('lab.test') }}</th><th scope="col">{{ t('lab.status') }}</th><th scope="col">{{ t('lab.samples') }}</th></tr></thead>
                <tbody>
                  <tr v-for="test in scenario.tests" :key="test.id">
                    <th scope="row">{{ t(`lab.tests.${test.id}`) }}</th>
                    <td>{{ test.status === 'PASS' ? t('lab.pass') : t('lab.notRun') }}</td>
                    <td><template v-if="test.samples !== null">{{ number(test.samples) }}</template><template v-else><span aria-hidden="true">—</span><span class="sr-only">{{ t('lab.notRun') }}</span></template></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </details>
        </article>
      </Card>
    </section>

    <section class="section-divider space-y-5" aria-labelledby="training-title">
      <div class="section-intro">
        <p class="lab-label">{{ t('lab.trainingLabel') }}</p>
        <h2 id="training-title" class="section-title">{{ t('lab.trainingTitle') }}</h2>
        <p class="max-w-4xl text-base leading-7">{{ t('lab.trainingDescription') }}</p>
      </div>
      <div class="overflow-x-auto rounded-3xl border border-border bg-card p-4 sm:p-6" tabindex="0" role="region" :aria-label="t('lab.trainingCaption')">
        <table class="lab-table training-table">
          <caption class="sr-only">{{ t('lab.trainingCaption') }}</caption>
          <thead><tr><th scope="col">{{ t('lab.dataset') }}</th><th scope="col">{{ t('lab.fit') }}</th><th scope="col">{{ t('lab.validation') }}</th><th scope="col">{{ t('lab.heldout') }}</th><th scope="col">{{ t('lab.performance') }}</th></tr></thead>
          <tbody>
            <tr v-for="scenario in labScenarios" :key="scenario.id">
              <th scope="row">{{ copy(scenario, 'title') }}</th>
              <td>{{ number(scenario.split.training) }}</td>
              <td><span v-if="scenario.split.validation">{{ number(scenario.split.validation) }}</span><span v-else><span aria-hidden="true">—</span><span class="sr-only">{{ t('lab.noValidation') }}</span></span></td>
              <td>{{ number(scenario.split.test) }}</td>
              <td><div class="flex flex-wrap gap-x-4 gap-y-1"><span v-for="(value, key) in scenario.training" :key="key" class="whitespace-nowrap">{{ t(`lab.${key}`) }} <strong>{{ metricValue(key, value) }}</strong></span></div></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section id="reading-evidence" class="section-divider scroll-mt-32 space-y-6" aria-labelledby="reading-title">
      <h2 id="reading-title" class="section-title">{{ t('lab.readingTitle') }}</h2>
      <div class="grid gap-6 md:grid-cols-2">
        <div v-for="key in readingKeys" :key="key" class="rounded-3xl border border-border bg-card p-6">
          <h3 class="text-xl font-bold text-primary">{{ t(`lab.reading.${key}Title`) }}</h3>
          <p class="mt-3 text-base leading-8">{{ t(`lab.reading.${key}`) }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.lab-hero {
  background: linear-gradient(135deg, #faeab1, #fff9e5 58%, #f6df9a);
}
.lab-hero :deep(.section-label) { color: var(--primary); }
.lab-hero :deep(.hero-title) { font-size: clamp(2rem, 3.5vw, 3rem); line-height: 1.15; font-weight: 700; }
.lab-hero :deep(.hero-description) { font-size: 1rem; line-height: 1.9; }
.evidence-card {
  border: 1px solid rgb(48 86 105 / 0.2);
  border-radius: 1.65rem;
  background: rgb(255 253 248 / 0.95);
  padding: 1.5rem;
  box-shadow: 0 24px 50px -35px rgb(48 86 105 / 0.35);
}
.evidence-metric { border-radius: 1rem; padding: 1rem; background: #edf1f1; }
.run-strip { display: flex; align-items: center; justify-content: space-between; gap: 1.5rem; padding: 0.5rem 0; }
.run-stat { display: flex; min-width: 6rem; flex-direction: column; gap: 0.25rem; border: 1px solid #bdd1cb; border-radius: 1.2rem; background: #eaf2ee; padding: 1rem; color: #214f43; }
.run-stat strong { font-size: 2rem; line-height: 1; }
.run-stat span { font-size: 0.875rem; font-weight: 700; }
.run-stat--skipped { border-color: #d5c395; background: #faf0d6; color: #705018; }
.scenario-link { border: 1px solid var(--border); border-radius: 999px; padding: 0.6rem 1rem; font-size: 0.875rem; font-weight: 700; color: var(--primary); background: var(--surface); }
.scenario-link:hover { background: var(--secondary); }
.scenario-card { overflow: hidden; }
.scenario-header { display: flex; justify-content: space-between; gap: 1.25rem; padding: 1.5rem 2rem; border-bottom: 1px solid var(--border); }
.scenario-body { display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr); gap: 2rem; padding: 2rem; }
.lab-label { font-size: 0.875rem; font-weight: 800; color: var(--primary); }
.result-panel { align-self: start; min-width: 0; border-radius: 1.5rem; border: 1px solid #d8e1df; background: #f0f4f2; padding: 1.5rem; }
.source-link { text-decoration: underline; text-underline-offset: 4px; color: var(--primary); }
.status-badge { display: inline-block; border-radius: 999px; padding: 0.35rem 0.8rem; font-size: 0.875rem; font-weight: 800; color: #214f43; background: #e4efe9; }
.status-badge--skipped { color: #705018; background: #faf0d6; }
.lab-table { width: 100%; border-collapse: collapse; font-size: 0.875rem; line-height: 1.6; }
.lab-table th, .lab-table td { border-bottom: 1px solid var(--border); padding: 0.7rem 0.4rem; text-align: left; vertical-align: top; }
.lab-table th { font-weight: 700; }
.lab-table td { font-variant-numeric: tabular-nums; }
.lab-table tr:last-child th, .lab-table tr:last-child td { border-bottom: 0; }
.result-panel .lab-table td { text-align: right; font-weight: 800; }
.bar-track { height: 0.65rem; overflow: hidden; border-radius: 999px; background: #dce5e1; }
.bar-fill { height: 100%; border-radius: 999px; background: var(--primary); }
.bar-fill--muted { background: #7d8d8b; }
.method-details { border-top: 1px solid var(--border); }
.method-details summary { display: flex; align-items: center; justify-content: space-between; gap: 1rem; cursor: pointer; list-style: none; padding: 1.25rem 2rem; font-weight: 800; color: var(--primary); }
.method-details summary::-webkit-details-marker { display: none; }
.method-details[open] summary svg { transform: rotate(180deg); }
.method-details summary:hover { background: #f0f4f2; }
.training-table { min-width: 42rem; }
.training-table td:last-child { min-width: 21rem; }
.lab-page :is(a, summary, [tabindex]):focus-visible { outline: 3px solid var(--primary); outline-offset: 4px; }
@media (max-width: 1023px) {
  .run-strip { align-items: flex-start; flex-direction: column; }
}
@media (max-width: 767px) {
  .scenario-body { grid-template-columns: minmax(0, 1fr); padding: 1.5rem; gap: 1.5rem; }
  .scenario-header { flex-direction: column; padding: 1.5rem; }
  .evidence-card, .result-panel { padding: 1.15rem; }
  .evidence-metric { padding: 0.8rem; }
  .method-details summary { padding: 1.25rem 1.5rem; }
  .test-table { table-layout: fixed; }
  .test-table th:first-child { width: 47%; }
  .test-table th:last-child { width: 19%; }
  .test-table th, .test-table td { overflow-wrap: anywhere; }
}
</style>
