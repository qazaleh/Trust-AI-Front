<script setup>
const teamMembers = [
  {
    name: "Prof. Dr. Süreyya Özöğür-Akyüz",
    role: "Founder & CEO, TrustAI",
    bio: "Founder and CEO of TrustAI, driving the development of explainable, reliable, and compliant AI solutions for high-risk systems.",
    image: "/SA.JPG"
  },
   {
    name: "Qazaleh Afrough",
    role: "Researcher, AI & Software Engineer | UI/Web Developer",
    bio: "Designing and building intelligent, reliable, and user-friendly web and software solutions",
    image: "/QA.JPG"
  },
  {
    name: "Faramarz Mehrnami",
    role: "Researcher, AI & Software Engineer | Backend Developer",
    bio: "Designing and building intelligent, reliable, and robust backend and software solutions",
    image: "/FM.JPG"
  },
  {
    name: "Dilara Karaduman",
    role: "Researcher | AI Governance & Ethics",
    bio: "Researching algorithmic fairness, AI governance, and the ethical dimensions of high-risk AI systems at TrustAI, with a background in psychology and Human-Centered AI.",
    image: "/DL.JPG"
  },
  {
    name: "Nisa Yegin",
    role: "Intern",
    bio: "I am an Artificial Intelligence Engineering student and a Trust AI intern, focusing on AI safety, AI governance, and responsible AI systems.",
    image: "/NY.JPG"
  },

]
</script>

<template>
  <div>

    <!-- HERO -->
    <section class="team-hero">
      <h1>{{ $t('ourTeamsPage.hero.title') }}</h1>
      <p>
        {{ $t('ourTeamsPage.hero.subtitle') }}
      </p>
    </section>

    <!-- TEAM GRID -->
    <section class="team-section">
      <div class="team-grid">

        <div
          v-for="member in teamMembers"
          :key="member.name"
          class="team-card"
        >
          <div class="image-wrapper">
            <img :src="member.image" :alt="member.name" />
          </div>

          <div class="card-content">
            <h3>{{ member.name }}</h3>
            <span class="role">{{ member.role }}</span>
            <p>{{ member.bio }}</p>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<style scoped>

section {
  padding: 30px 8%;
}


/* HERO */
.team-hero {
  background: #142355;
  color: white;
  text-align: center;
  height:200px;
}

.team-hero h1 {
  font-size: 46px;
  font-weight: 800;
  margin-bottom: 18px;
}

.team-hero p {
  font-size: 18px;
  max-width: 820px;
  margin: auto;
  line-height: 1.7;
}

@media (max-width: 1024px) {
  .team-hero   {
   height:250px;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .team-hero  {
     height:250px;
  }
}

/* SECTION */
.team-section {
  /* padding: 110px 80px; */
  max-width: 1200px;
  /* margin: auto; */
}

/* GRID */
.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
}

/* CARD */
.team-card {
  background: white;
  border: 1px solid #ececec;
  border-radius: 20px;
  overflow: hidden;
  /* transition: 0.3s ease; */
}

/* IMAGE */
.image-wrapper {
  width: 100%;
  aspect-ratio: 1 / 1;   /* perfect square */
  overflow: hidden;
  border-radius: 16px;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;     /* fills container */
  object-position: center;  /* crop from center */
  display: block;
}

/* CONTENT */
.card-content {
  padding: 28px;
}

.card-content h3 {
  font-size: 20px;
  font-weight: 700;
  color: #142355;
  margin-bottom: 6px;
}

.role {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: rgba(236,189,90,1.0);
  margin-bottom: 14px;
}

.card-content p {
  font-size: 15px;
  line-height: 1.7;
  color: #444;
}
</style>