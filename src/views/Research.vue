<script setup>
import { BookOpen, FileText, Link2, ExternalLink } from 'lucide-vue-next'

// You can add more papers here later
const publications = [
  {
    title: "DiCE-Extended: A Robust Approach to Counterfactual Explanations in Machine Learning",
    description: "DiCE-Extended enhances counterfactual explanation generation by integrating multi-objective optimization to improve robustness while preserving interpretability. It introduces a novel stability metric and weighted loss design to produce more reliable, valid, and decision-aligned explanations across diverse machine learning models.",
    link: "https://link.springer.com/chapter/10.1007/978-3-032-08384-5_25",
    hasLink: true,
  },
   {
    title: "Trustworthy and Responsible AI for High-Stakes Decision Environments",
    description: "This work designs an optimization-based ensemble pruning approach that strengthens model stability, interpretability, and robustness, fostering transparent and accountable AI systems in decision support.",
    link: "",
    hasLink: false,
  }
]
</script>

<template>
  <div class="research-page">

    <!-- HERO -->
    <section class="research-hero">
      <!-- <div class="hero-inner"> -->
        <h1>{{ $t('researchReferences.title') }}</h1>
        <p>
         {{ $t('researchReferences.description') }}
        </p>
      <!-- </div> -->
    </section>

    <!-- PUBLICATIONS GRID -->
    <section class="research-section">
      <h2> {{ $t('researchReferences.subtitle') }}</h2>

      <div class="pub-grid">
        <div
          v-for="pub in publications"
          :key="pub.title"
          class="pub-card"
        >

          <h3>{{ pub.title }}</h3>
          <p>{{ pub.description }}</p>

          <a 

            :href="pub.link"
            target="_blank"
            class="pub-btn"
            v-if="pub.hasLink == true"
          >
            <ExternalLink size="16" stroke="#142355"  />
            {{ $t('researchSection.publicationBtn') }}
          </a>
        </div>
      </div>
    </section>

    <!-- FUTURE RESEARCH CALL -->
    <!-- <section class="research-call">
      <h2>Expanding Our Research Portfolio</h2>
      <p>
        As TrustAI grows, we aim to expand our research repository with additional
        peer-reviewed work, technical reports, case studies, and governance frameworks.
        If you would like to collaborate or submit a reference for inclusion, please
        contact us.
      </p>
      <a href="mailto:info@trustai.com.tr" class="research-cta">
        Submit a Reference
      </a>
    </section> -->

  </div>
</template>

<style scoped>
section {
  padding: 30px 8%;
}
.research-page {
  /* background: white; */
}

/* HERO */
.research-hero {
  background: #142355;
  color: white;
  text-align: center;
  height:200px;
}
@media (max-width: 1024px) {
  .research-hero   {
   height:300px;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .research-hero {
     height:300px;
  }
}
.research-hero h1 {
  font-size: 44px;
  font-weight: 800;
  margin-bottom: 15px;
}

.research-hero p {
  font-size: 18px;
  max-width: 820px;
  margin: auto;
  line-height: 1.7;
  opacity: 0.9;
}

/* SECTION */
.research-section {
  padding: 90px 80px;
  max-width: 1080px;
  margin: auto;
}
/* Tablet */
@media (max-width: 1024px) {
  .research-section {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 20px;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .research-section {
    grid-template-columns: 1fr;
    padding: 20px 20px;
    gap: 20px;
  }
}
.research-section h2 {
  font-size: 32px;
  font-weight: 700;
  color: #142355;
  margin-bottom: 28px;
}

/* GRID */
.pub-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 34px;
}

/* CARD */
.pub-card {
  padding: 28px 22px;
  border: 1px solid #ececec;
  border-radius: 18px;
  background: white;
  /* transition: 0.3s ease; */
}

.pub-card:hover {
  /* transform: translateY(-6px); */
  /* box-shadow: 0 14px 36px rgba(0, 0, 0, 0.07); */
}

.pub-icon {
  margin-bottom: 14px;
}

.pub-card h3 {
  font-size: 20px;
  color: #142355;
  margin-bottom: 14px;
  line-height: 1.4;
}

.pub-card p {
  font-size: 15px;
  color: #444;
  line-height: 1.75;
  margin-bottom: 22px;
}

/* BUTTON */
.pub-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 28px;
  border: 2px solid #142355;
  color: #142355;
  text-decoration: none;
  font-weight: 600;
  /* transition: 0.3s ease; */
}

.pub-btn:hover {
  background: #142355;
  color: white;
}

/* CALL SECTION */
.research-call {
  padding: 100px 80px;
  text-align: center;
  background: rgba(236,189,90,0.08);
}

.research-call h2 {
  font-size: 30px;
  font-weight: 700;
  color: #142355;
  margin-bottom: 18px;
}

.research-call p {
  font-size: 16px;
  color: #333;
  line-height: 1.7;
  max-width: 780px;
  margin: auto;
  margin-bottom: 28px;
}

.research-cta {
  display: inline-block;
  padding: 14px 36px;
  border-radius: 34px;
  background: rgba(236,189,90,1.0);
  color: #142355;
  font-weight: 600;
  text-decoration: none;
  /* transition: 0.3s ease; */
}

.research-cta:hover {
  opacity: 0.85;
}
</style>