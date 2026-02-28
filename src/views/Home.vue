<script setup>
    import { Search, Network, ShieldCheck, FileText, Eye, GitBranch, ClipboardCheck, FileSearch } from 'lucide-vue-next'

    import { useRoute, useRouter } from 'vue-router'

    const router = useRouter()
    const route = useRoute()

    const locale = route.params.locale || 'en'
    const goToResearch = () => {
        router.push(`/${locale}/research`)
    }
</script>

<template>
  <section class="hero">
    <div class="hero-left">
      <p class="small-title">
        {{ $t('researchHero.label') }}
      </p>

      <h1 class="main-title">
       {{ $t('researchHero.title') }}
      </h1>

      <p class="description">
        {{ $t('researchHero.description') }}
      </p>
    </div>

    <div class="hero-right">
      <button class="hero-btn" @click="goToResearch">
        {{ $t('researchHero.button') }} →
      </button>
    </div>
  </section>
<section class="what-we-do">
  <div class="section-header">
            <p class="small-title"> {{ $t('whatWeDo.label') }}</p>
            <h1 class="main-title">
               {{ $t('whatWeDo.title') }}
            </h1>
        </div>
  <div class="what-container">

    <!-- LEFT CONTENT -->
     
    <div class="what-left">

        <div class="cards">

        <div class="card">
           <div class="pillar-icon">
            <Eye/>
           </div>
          <h3>{{ $t('whatWeDo.explainability.title') }}</h3>
          <p>
           {{ $t('whatWeDo.explainability.description') }}
          </p>
        </div>

        <div class="card">
            <div class="pillar-icon">
                <GitBranch/>
            </div>
            <h3>{{ $t('whatWeDo.traceability.title') }}</h3>
            <p>
                {{ $t('whatWeDo.traceability.description') }}
            </p>
            </div>

            <div class="card">
            <div class="pillar-icon">
                <ClipboardCheck/>
            </div>
            <h3>{{ $t('whatWeDo.workflows.title') }}</h3>
            <p>
                {{ $t('whatWeDo.workflows.description') }}
            </p>
            </div>

            <div class="card">
            <div class="pillar-icon">
                <FileSearch/>
            </div>
            <h3>{{ $t('whatWeDo.audit.title') }}</h3>
            <p>
               {{ $t('whatWeDo.audit.description') }}
            </p>
            </div>

        </div>

        </div>

    <!-- RIGHT IMAGE -->
        <div class="what-right">
        <img src="/whatwedo.png" alt="What We Do" />
        </div>

    </div>

    </section>
<section class="about-section">

  <div class="about-container">

    <!-- LEFT SIDE -->
    <div class="about-left">
      <p class="small-title">{{ $t('about.label') }}</p>
      <h1 class="main-title">
       {{ $t('about.title') }}
      </h1>

      <p class="description">
       {{ $t('about.intro') }}
      </p>
    </div>

    <!-- RIGHT SIDE -->
    <div class="about-right">

      <p>
         {{ $t('about.sectorFocus') }}
      </p>

      <p>
         {{ $t('about.approach') }}
      </p>

      <p>
         {{ $t('about.team') }}
      </p>

    </div>

  </div>

</section>
<section class="why-section">

    <div>
        <div class="why-header">
    <p class="small-title">{{ $t('why.label') }}</p>
    <h1 class="main-title">
      {{ $t('about.title') }}
    </h1>
  </div>

  <div class="why-pillars">

    <div class="pillar">
      <div class="pillar-icon">
        <Search />
      </div>
      <div>
        <h3> {{ $t('why.foundation.title') }}</h3>
        <p>
          {{ $t('why.foundation.description') }}
        </p>
      </div>
    </div>

    <div class="pillar">
      <div class="pillar-icon">
        <Network />
      </div>  
      <div>
        <h3> {{ $t('why.sector.title') }}</h3>
        <p>
          {{ $t('why.sector.description') }}
        </p>
      </div>
    </div>

    <div class="pillar">
      <div class="pillar-icon">
        <ShieldCheck/>
      </div>  
      <div>
        <h3> {{ $t('why.governance.title') }}</h3>
        <p>
         {{ $t('why.governance.description') }}
        </p>
      </div>
    </div>

    <div class="pillar">
      <div class="pillar-icon">
        <FileText/>
      </div>  
      <div>
        <h3> {{ $t('why.audit.title') }}</h3>
        <p>
          {{ $t('why.audit.description') }}
        </p>
      </div>
    </div>

  </div>
    </div>


   <!-- RIGHT IMAGE -->
        <div class="why-right">
        <img src="/why.png" alt="Why Trust AI" />
        </div>

    </section>


    <section class="research-section">

  <div class="research-header">
    <p class="small-title"> {{ $t('researchSection.title') }}</p>
    <h1 class="main-title">
        {{ $t('researchSection.subtitle') }}
    </h1>
  </div>

  <div class="research-grid">
 <div class="research-card">

  <div class="research-content">
    <h3>
      DiCE-Extended: A Robust Approach to Counterfactual Explanations in Machine Learning
    </h3>

    <p>
    DiCE-Extended enhances counterfactual explanation generation by integrating multi-objective optimization to improve robustness while preserving interpretability.

    It introduces a novel stability metric and weighted loss design to produce more reliable, valid, and decision-aligned explanations across diverse machine learning models.
    </p>
  </div>
  <!-- HOVER OVERLAY -->
  <div class="research-overlay">
    <a
      href="https://link.springer.com/chapter/10.1007/978-3-032-08384-5_25"
      target="_blank"
      class="overlay-btn"
    >
     {{ $t('researchSection.publicationBtn') }}
    </a>
  </div>

</div>

<!-- 2 -->
  <div class="research-card">

  <div class="research-content">
    <h3>
      Trustworthy and Responsible AI for High-Stakes Decision Environments
    </h3>

    <p>
        This work designs an optimization-based ensemble pruning approach that strengthens model stability, interpretability, and robustness, fostering transparent and accountable AI systems in decision support.
    </p>
  </div>
  <!-- HOVER OVERLAY -->
  <!-- <div class="research-overlay">
    <a
      href="https://link.springer.com/chapter/10.1007/978-3-032-08384-5_25"
      target="_blank"
      class="overlay-btn"
    >
      View Publication
    </a>
  </div> -->

</div>

  </div>

</section>

<!-- what we do section -->

 <section class="process-section">

  <div class="process-header">
    <p class="small-title">Our Work Process</p>
     <h1 class="main-title"> Structured Governance Implementation Roadmap</h1>
  </div>

  <div class="process-roadmap">

    <div class="process-step">
      <div class="step-dot"></div>
      <h3>Discovery</h3>
      <p>Understand model scope, risk level, and regulatory context.</p>
    </div>

    <div class="process-step">
      <div class="step-dot"></div>
      <h3>Assessment</h3>
      <p>Evaluate explainability, governance, and compliance gaps.</p>
    </div>

    <div class="process-step">
      <div class="step-dot"></div>
      <h3>Intervention</h3>
      <p>Implement structured governance and documentation workflows.</p>
    </div>

    <div class="process-step">
      <div class="step-dot"></div>
      <h3>Assurance</h3>
      <p>Provide audit-ready reporting and validation.</p>
    </div>

    <div class="process-step">
      <div class="step-dot"></div>
      <h3>Monitoring</h3>
      <p>Track model changes and ongoing compliance.</p>
    </div>

  </div>

</section>

<!-- final cta section -->

 <section class="final-cta">

  <div class="cta-box">

    <h2>
      {{ $t('cta.title') }}
    </h2>

    <p>
      {{ $t('cta.description') }}
    </p>

    <div class="cta-actions">
      <a
        href="mailto:info@trustai.com.tr"
        class="cta-primary"
      >
        {{ $t('cta.contact') }}
      </a>

      <router-link :to="`/${locale}/research`" class="cta-secondary">
        {{ $t('cta.research') }}
      </router-link >
    </div>

  </div>

</section>
</template>

<style scoped>

section {
  padding: 30px 8%;
}

.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-top:-30px;
}

/* Tablet */
@media (max-width: 1024px) {
  .hero {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 20px;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .hero {
    grid-template-columns: 1fr;
    padding: 20px 20px;
    gap: 20px;
  }
}

/* LEFT SIDE */
.hero-left {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.small-title {
  font-size: 14px;
  font-weight: 600;
  color: #464444;
  margin-bottom: 16px;
  letter-spacing: 1px;
}

.main-title {
  font-size: 28px;
  font-weight: 500;
  color: #090909;
  margin-bottom: 22px;
  line-height: 1.2;
}

.description {
  font-size: 16px;
  color: #555;
  max-width: 500px;
  line-height: 1.6;
}

/* RIGHT SIDE */
.hero-right {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* BUTTON */
.hero-btn {
  /* display: inline-block; */
  padding: 20px 25px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  transition: 0.3s ease;
  background-color:#f8f9fc;
  color:rgba(236,189,90,1.0);
  border: 1px solid rgba(236,189,90,1.0);
}

.hero-btn:hover {
  transform: translateY(-3px);
  border: 3px solid rgba(236,189,90,1.0);
  font-weight:800;
}


button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(22, 30, 84, 0.3);
}

.what-we-do {
  /* nothing here */
}

.what-container {
  display: grid;
  grid-template-columns: 1.5fr 1.5fr;
  gap: 40px;
  align-items: center;
}

/* Tablet */
@media (max-width: 1024px) {
  .what-container {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 10px;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .what-container {
    grid-template-columns: 1fr;
    padding: 0px 0px;
    gap: 20px;
  }
}

/* LEFT SIDE */
.section-header {
  margin-bottom: 50px;
}

.section-label {
  font-size: 14px;
  font-weight: 600;
  color: #161E54;
  margin-bottom: 16px;
  letter-spacing: 1px;
}

.section-header h2 {
  font-size: 34px;
  font-weight: 700;
  color: #161E54;
  line-height: 1.3;
  max-width: 600px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.card {
  padding: 20px;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  background: #ffffff;
  transition: 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(0,0,0,0.06);
}

.icon {
  font-size: 22px;
  margin-bottom: 18px;
}

.card h3 {
  font-size: 16px;
  margin-bottom: 10px;
  color: #161E54;
}

.card p {
  font-size: 14px;
  color: #555;
  line-height: 1.6;
}

/* RIGHT IMAGE */
.what-right img {
  width: 100%;
  /* margin-top: 50px; */
}

.why-section {
  display: grid;
  grid-template-columns: 1.5fr 1.5fr;
  gap: 40px;
  align-items: center;
}

/* Tablet */
@media (max-width: 1024px) {
  .why-section {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 10px;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .why-section {
    grid-template-columns: 1fr;
    padding: 0px 0px;
    gap: 20px;
  }
}
.why-right img {
  width: 100%;
  /* margin-top: 50px; */
}

.why-header {
  max-width: 700px;
  margin-bottom: 60px;
}

.why-label {
  font-size: 14px;
  font-weight: 600;
  color: #161E54;
  margin-bottom: 16px;
  letter-spacing: 1px;
}

.why-header h2 {
  font-size: 32px;
  font-weight: 700;
  color: #161E54;
  line-height: 1.3;
}

.why-pillars {
  display: flex;
  flex-direction: column;
  /* gap: 40px; */
}

.pillar {
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 20px;
  align-items: start;   /* important */
}

.pillar h3 {
  font-size: 16px;
  margin-bottom: 6px;
  color: #161E54;
}

.pillar p {
  font-size: 14px;
  color: #555;
  max-width: 600px;
}

.pillar-icon {
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 16px;  /* small optical adjustment */
}

.pillar-icon svg {
  width: 24px;
  height: 24px;
  stroke: #161E54;
}

.about-section {
  /* background:;; */
}

.about-container {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 50px;
  align-items: center;
}
/* Tablet */
@media (max-width: 1024px) {
  .about-container {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 10px;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .about-container {
    grid-template-columns: 1fr;
    padding: 0px 0px;
    gap: 20px;
  }
}

/* LEFT */
.about-label {
  font-size: 14px;
  font-weight: 600;
  color: #161E54;
  margin-bottom: 18px;
  letter-spacing: 1px;
}

.about-left h2 {
  font-size: 34px;
  font-weight: 700;
  color: #161E54;
  line-height: 1.3;
  margin-bottom: 30px;
}

.about-intro {
  font-size: 17px;
  color: #444;
  line-height: 1.7;
  max-width: 500px;
}

/* RIGHT */
.about-right {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.about-right p {
  font-size: 16px;
  color: #555;
  line-height: 1.8;
}

.research-section {
  /* background: #f8f9fc; */
}

/* HEADER */
.research-header {
  margin-bottom: 70px;
  max-width: 700px;
}

.research-header h2 {
  font-size: 34px;
  font-weight: 700;
  color: #161E54;
  line-height: 1.3;
}

/* GRID */
.research-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 20px;
}
/* Tablet */
@media (max-width: 1024px) {
  .research-grid {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 10px;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .research-grid {
    grid-template-columns: 1fr;
    padding: 0px 0px;
    gap: 20px;
  }
}
/* CARD */

.research-card {
  position: relative;
  padding: 40px;
  border-radius: 18px;
  background: white;
  border: 1px solid #e6e6e6;
  overflow: hidden;
  transition: 0.3s ease;
}

.research-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.08);
}

.research-card h3 {
  font-size: 15px;
  color: #161E54;
  margin-bottom: 10px;
  line-height: 1.4;
}

.research-card p {
  font-size: 15px;
  color: #555;
  line-height: 1.7;
  margin-bottom: 20px;
}
/* CONTENT */
.research-content {
  transition: 0.3s ease;
}

/* OVERLAY */
.research-overlay {
  position: absolute;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #e4e4e423;
   /* rgba(155, 155, 155, 0.06); */
  backdrop-filter: blur(4px);

  opacity: 0;
  transition: 0.3s ease;
}

/* Show overlay on hover */
.research-card:hover .research-overlay {
  opacity: 1;
}

/* Button */
.overlay-btn {
  padding: 14px 28px;
  border-radius: 10px;
  border: 1px solid #ffd06a;
  background: #ffd06a;
  color: white;
  text-decoration: none;
  font-weight: 600;
  transition: 0.2s ease;
}

.process-section {
  background: #ffffff;
}


.process-header {
  text-align: center;
  margin-bottom: 100px;
}

.process-header h2 {
  font-size: 32px;
  font-weight: 700;
  color: #161E54;
}

/* Roadmap container */
.process-roadmap {
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 40px;
}

/* Tablet */
@media (max-width: 1024px) {
  .process-roadmap {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 10px;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .process-roadmap {
    grid-template-columns: 1fr;
    padding: 0px 0px;
    gap: 20px;
  }
}

/* Horizontal line */
.process-roadmap::before {
  content: "";
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  height: 2px;
  background: #e6e6e6;
  z-index: 0;
}

/* Step */
.process-step {
  position: relative;
  text-align: center;
  z-index: 1;
}

.step-dot {
  width: 16px;
  height: 16px;
  background: #161E54;
  border-radius: 50%;
  margin: 0 auto 20px auto;
}

.process-step h3 {
  font-size: 18px;
  color: #161E54;
  margin-bottom: 12px;
}

/* Tablet */
@media (max-width: 1024px) {
  .process-step h3 {
    text-align:center;
  }
}

/* Mobile */
@media (max-width: 768px) {
 .process-step h3 {
    text-align:center;
  }
}

.process-step p {
  font-size: 14px;
  color: #555;
  line-height: 1.6;
  max-width: 220px;
  margin: 0 auto;
}
/* Tablet */
@media (max-width: 1024px) {
  .process-step p  {
    text-align:center;
  }
}

/* Mobile */
@media (max-width: 768px) {
 .process-step p  {
    text-align:center;
  }
}
/* Responsive fallback */
@media (max-width: 992px) {
  .process-roadmap {
    grid-template-columns: 1fr;
  }

  .process-roadmap::before {
    display: none;
  }

  .process-step {
    text-align: left;
  }
}

/* final cta */

.final-cta {
  /* background:#f8f9fc;; */
  display: flex;
  justify-content: center;
  margin-top:20px;
}

.cta-box {
  max-width: 900px;
  text-align: center;
  padding: 70px 60px;
  border-radius: 24px;
  background: rgba(236,189,90,1.0);
  border: 1px solid #e6e6e6;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.06);
}

.cta-box h2 {
  font-size: 34px;
  font-weight: 700;
  color: #161E54;
  margin-bottom: 24px;
}

.cta-box p {
  font-size: 17px;
  color: #555;
  line-height: 1.7;
  margin-bottom: 40px;
}

.cta-actions {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

/* Primary Button */
.cta-primary {
  padding: 14px 34px;
  border-radius: 40px;
  background: #161E54;
  color: white;
  text-decoration: none;
  font-weight: 600;
  transition: 0.3s ease;
}

.cta-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(22, 30, 84, 0.25);
}

/* Secondary Button */
.cta-secondary {
  padding: 14px 34px;
  border-radius: 40px;
  border: 2px solid #161E54;
  color: #161E54;
  text-decoration: none;
  font-weight: 600;
  transition: 0.3s ease;
}

.cta-secondary:hover {
  background: #161E54;
  color: white;
}
</style>