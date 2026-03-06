<script setup>
</script>

<template>
  <div class="about-page">

    <!-- HERO -->
    <section class="about-hero">
      <!-- <div class="hero-inner"> -->
        <h1>{{ $t('aboutPage.hero.title') }}</h1>
        <p>
         {{ $t('aboutPage.hero.subtitle') }}
        </p>
      <!-- </div> -->
    </section>

    <!-- WHO WE ARE -->
    <section class="about-section">
      <h2>{{ $t('aboutPage.whoWeAre.title') }}</h2>

      <p>
        {{ $t('aboutPage.whoWeAre.p1') }}
      </p>

      <p>
       {{ $t('aboutPage.whoWeAre.p2') }}
      </p>

      <p>
       {{ $t('aboutPage.whoWeAre.p3') }}
      </p>
    </section>

    <!-- VISION & MISSION -->
    <section class="about-section split subtle">
      <div>
        <h2>{{ $t('aboutPage.vision.title') }}</h2>
        <p>
         {{ $t('aboutPage.vision.description') }}
        </p>
      </div>

      <div>
        <h2>{{ $t('aboutPage.mission.title') }}</h2>
        <ul>
          <li>{{ $t('aboutPage.mission.items[0]') }}</li>
          <li>{{ $t('aboutPage.mission.items[1]') }}</li>
          <li>{{ $t('aboutPage.mission.items[2]') }}</li>
          <li>{{ $t('aboutPage.mission.items[3]') }}</li>
        </ul>
      </div>
    </section>

    <!-- DIFFERENTIATION -->
    <section class="about-section">
      <h2>{{ $t('aboutPage.difference.title') }}</h2>

      <p>
       {{ $t('aboutPage.difference.p1') }}
      </p>

      <p>
        {{ $t('aboutPage.difference.p2') }}
      </p>
    </section>

    <!-- TRUSTAI-X -->
    <section class="about-section">
      <h2>{{ $t('aboutPage.platform.title') }}</h2>

      <p>
        {{ $t('aboutPage.platform.description') }}
      </p>

      <div class="two-col-list">
        <div>
          <h3>{{ $t('aboutPage.coreCapabilities.title') }}</h3>
          <ul>
            <li>SHAP, LIME, and DiCE-Extended counterfactual explanations</li>
            <li>Bias detection and mitigation algorithms</li>
            <li>Drift detection (PSI, KS, ADWIN)</li>
            <li>Calibration monitoring (ECE, Brier, Platt Scaling)</li>
            <li>EU AI Act compliant technical documentation</li>
            <li>Automated audit trail and reporting</li>
          </ul>
        </div>

        <div>
          <h3>{{ $t('aboutPage.platform.title') }}</h3>
          <ul>
            <li>MLOps-native</li>
            <li>Container-based</li>
            <li>API-first</li>
            <li>Kubernetes compatible</li>
            <li>On-Prem / SaaS / Hybrid deployable</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- SCIENTIFIC FOUNDATION -->
    <section class="about-section subtle">
      <h2>{{ $t('aboutPage.scientific.title') }}</h2>

      <p>
        {{ $t('aboutPage.scientific.p1') }}
      </p>

      <p>
       {{ $t('aboutPage.scientific.p2') }}
      </p>

      <p>
       {{ $t('aboutPage.scientific.p3') }}
      </p>
    </section>

    <!-- REGULATORY ALIGNMENT -->
    <section class="about-section">
      <h2>{{ $t('aboutPage.regulatory.title') }}</h2>

      <p>
        {{ $t('aboutPage.regulatory.p1') }}
      </p>

      <ul class="grid-list">
        <li>EU AI Act (2024/1689)</li>
        <li>ISO/IEC 42001:2023</li>
        <li>ISO/IEC 24029</li>
        <li>NIST AI Risk Management Framework</li>
        <li>National AI Strategy (2021–2025)</li>
        <li>KVKK transparency requirements</li>
      </ul>

      <p>
         {{ $t('aboutPage.regulatory.p2') }}
      </p>
    </section>

    <!-- TARGET SECTORS -->
    <section class="about-section subtle">
      <h2> {{ $t('aboutPage.sectors.title') }}</h2>

      <p>
        {{ $t('aboutPage.sectors.p1') }}
      </p>

      <p>
       {{ $t('aboutPage.sectors.p2') }}
      </p>
    </section>

    <!-- TEAM -->
    <!-- <section class="about-section">
      <h2> {{ $t('aboutPage.team.title') }}</h2>

      <p>
        {{ $t('aboutPage.team.p1') }}
      </p>

      <p>
        {{ $t('aboutPage.team.p2') }}
      </p>
    </section> -->

    <!-- CLOSING -->
    <section class="about-section center closing-block">
      <p>
         {{ $t('aboutPage.closing.statement') }}
      </p>

      <h3> {{ $t('aboutPage.closing.highlight') }}</h3>
    </section>

  </div>
</template>

<style scoped>

section {
  padding: 30px 8%;
}

.about-page {
  /* background: white; */
}

/* HERO */
.about-hero {
  background: #142355;
  color: white;
  /* padding: 120px 80px; */
  text-align: center;
  height:200px;
}


.about-hero h1 {
  font-size: 46px;
  font-weight: 800;
  margin-bottom: 18px;
}

.about-hero p {
  font-size: 18px;
  max-width: 820px;
  margin: auto;
  line-height: 1.7;
  
}

@media (max-width: 1024px) {
  .about-hero   {
   height:250px;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .about-hero  {
     height:250px;
  }
}

/* SECTIONS */
.about-section {
  /* padding: 100px 80px; */
  max-width: 1000px;
  margin: auto;
  border-bottom: 1px solid #f0f0f0;
}

.about-section:last-child {
  border-bottom: none;
}

.about-section h2 {
  font-size: 32px;
  font-weight: 700;
  color: #142355;
  margin-bottom: 24px;
}

.about-section p {
  font-size: 16px;
  line-height: 1.9;
  margin-bottom: 20px;
  color: #333;
}

/* SUBTLE ALT BACKGROUND */
.subtle {
  /* background: #184bb1; */
}


/* SPLIT */
.split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
}

/* Tablet */
@media (max-width: 1024px) {
  .split {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 10px;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .split {
    grid-template-columns: 1fr;
    padding: 0px 0px;
    gap: 10px;
  }
}

/* LISTS */
.about-section ul {
  padding-left: 18px;
  margin-bottom: 20px;
}

.about-section li {
  margin-bottom: 10px;
  line-height: 1.7;
}

/* TWO COLUMN LIST */
.two-col-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-top: 30px;
}

.two-col-list h3 {
  font-size: 18px;
  color: #142355;
  margin-bottom: 12px;
}

/* GRID LIST */
.grid-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 12px 30px;
}

/* CLOSING */
.center {
  text-align: center;
}

.closing-block p {
  font-size: 20px;
  line-height: 2;
  color: #142355;
  margin-bottom: 30px;
}

.closing-block h3 {
  font-size: 24px;
  font-weight: 700;
  color: rgba(236,189,90,1.0);
}
</style>