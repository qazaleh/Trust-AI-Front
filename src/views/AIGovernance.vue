<script setup>
import { ShieldCheck, Scale, FileSearch, Eye, AlertTriangle, LineChart } from 'lucide-vue-next'
</script>

<template>
  <div class="ai-page">

    <!-- HERO -->
    <section class="ai-hero">
      <div class="hero-inner">
        <h1>{{ $t('aiGovernancePage.hero.title') }}</h1>
        <p>
         {{ $t('aiGovernancePage.hero.subtitle') }}
        </p>
      </div>
    </section>

    <!-- INTRO -->
    <section class="ai-section">
      <h2>{{ $t('aiGovernancePage.whatIs.title') }}</h2>
      <p>
        {{ $t('aiGovernancePage.whatIs.p1') }}
      </p>

      <p>
        {{ $t('aiGovernancePage.whatIs.p2') }}
      </p>
    </section>

    <!-- WHY IT MATTERS -->
    <section class="ai-section light">
      <h2>{{ $t('aiGovernancePage.whyItMatters.title') }}</h2>

      <div class="icon-grid">

        <div class="icon-card">
          <AlertTriangle :size="40" />
          <h3>{{ $t('aiGovernancePage.whyItMatters.cards.bias.title') }}</h3>
          <p>
           {{ $t('aiGovernancePage.whyItMatters.cards.bias.description') }}
          </p>
        </div>

        <div class="icon-card">
          <Eye :size="40" />
          <h3>{{ $t('aiGovernancePage.whyItMatters.cards.opacity.title') }}</h3>
          <p>
            {{ $t('aiGovernancePage.whyItMatters.cards.opacity.description') }}
          </p>
        </div>

        <div class="icon-card">
          <Scale :size="40" />
          <h3>{{ $t('aiGovernancePage.whyItMatters.cards.regulatory.title') }}</h3>
          <p>
            {{ $t('aiGovernancePage.whyItMatters.cards.regulatory.description') }}
          </p>
        </div>

      </div>
    </section>

    <!-- CORE PRINCIPLES -->
    <section class="ai-section">
      <h2>{{ $t('aiGovernancePage.pillars.title') }}</h2>

      <div class="pillar-list">

        <div class="pillar">
          <ShieldCheck :size="28" />
          <div>
            <h3>{{ $t('aiGovernancePage.pillars.accountability.title') }}</h3>
            <p>
              {{ $t('aiGovernancePage.pillars.accountability.description') }}
            </p>
          </div>
        </div>

        <div class="pillar">
          <FileSearch :size="28" />
          <div>
            <h3>{{ $t('aiGovernancePage.pillars.traceability.title') }}</h3>
            <p>
              {{ $t('aiGovernancePage.pillars.traceability.description') }}
            </p>
          </div>
        </div>

        <div class="pillar">
          <LineChart :size="28" />
          <div>
            <h3>{{ $t('aiGovernancePage.pillars.monitoring.title') }}</h3>
            <p>
              {{ $t('aiGovernancePage.pillars.monitoring.description') }}
            </p>
          </div>
        </div>

      </div>
    </section>

    <!-- SECTOR FOCUS -->
    <section class="ai-section highlight">
      <h2>{{ $t('aiGovernancePage.financialSector.title') }}</h2>

      <p>
        {{ $t('aiGovernancePage.financialSector.p1') }}
      </p>

      <p>
        {{ $t('aiGovernancePage.financialSector.p2') }}
      </p>
    </section>

    <!-- CONCLUSION -->
    <section class="ai-section center">
      <h2>{{ $t('aiGovernancePage.closing.title') }}</h2>

      <p>
       {{ $t('aiGovernancePage.closing.description') }}
      </p>

      <a href="mailto:info@trustai.com.tr" class="ai-cta">
        {{ $t('aiGovernancePage.closing.cta') }}
      </a>
    </section>

  </div>
</template>

<style scoped>

section {
  padding: 30px 8%;
}


.ai-page {
  background: white;
}

/* HERO */
.ai-hero {
  background: #142355;
  color: white;
  text-align: center;
  height: 220px;
}

@media (max-width: 1024px) {
  .ai-hero   {
   height:450px;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .ai-hero {
     height:450px;
  }
}

.ai-hero h1 {
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 24px;
}

.ai-hero p {
  font-size: 18px;
  max-width: 820px;
  margin: 0 auto;
  line-height: 1.7;
  opacity: 0.9;
}

/* GENERAL SECTION */
.ai-section {
  max-width: 1000px;
  margin: 0 auto;
}

.ai-section h2 {
  font-size: 32px;
  font-weight: 700;
  color: #142355;
  margin-bottom: 30px;
}

.ai-section p {
  font-size: 16px;
  line-height: 1.8;
  color: #333;
  margin-bottom: 20px;
}

/* LIGHT BACKGROUND */
.ai-section.light {
  background: #f9fafc;
  max-width: none;
}

/* ICON GRID */
.icon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-top: 40px;
}

.icon-card {
  padding: 30px;
  border: 1px solid #eee;
  border-radius: 18px;
  background: white;
  transition: 0.3s ease;
}

.icon-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 15px 40px rgba(0,0,0,0.08);
}

.icon-card svg {
  stroke: rgba(236,189,90,1.0);
  margin-bottom: 15px;
}

.icon-card h3 {
  font-size: 20px;
  color: #142355;
  margin-bottom: 12px;
}

/* PILLARS */
.pillar-list {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.pillar {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.pillar svg {
  stroke: #142355;
}

.pillar h3 {
  font-size: 18px;
  color: #142355;
  margin-bottom: 8px;
}

/* HIGHLIGHT */
.ai-section.highlight {
  background: rgba(236,189,90,0.08);
  border-left: 6px solid rgba(236,189,90,1.0);
}

/* CENTER SECTION */
.ai-section.center {
  text-align: center;
}

.ai-cta {
  display: inline-block;
  margin-top: 30px;
  padding: 16px 36px;
  border-radius: 40px;
  background: rgba(236,189,90,1.0);
  color: #142355;
  font-weight: 600;
  text-decoration: none;
  transition: 0.3s ease;
}

.ai-cta:hover {
  transform: translateY(-4px);
}

</style>