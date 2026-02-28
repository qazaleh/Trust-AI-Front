<script setup>
</script>

<template>
  <div class="privacy-page">

    <!-- HERO -->
    <section class="privacy-hero">
      <div class="hero-inner">
        <h1> {{ $t('privacyPage.hero.title') }}</h1>
        <p>
         {{ $t('privacyPage.hero.subtitle') }}
        </p>
      </div>
    </section>

    <!-- GENERAL PRINCIPLES -->
    <section class="privacy-section">
      <h2> {{ $t('privacyPage.generalPrinciples.title') }}</h2>
      <p>
        {{ $t('privacyPage.generalPrinciples.p1') }}
      </p>

      <p>
       {{ $t('privacyPage.generalPrinciples.p2') }}
      </p>
    </section>

    <!-- WHAT WE COLLECT -->
    <section class="privacy-section light">
      <h2> {{ $t('privacyPage.whatWeCollect.title') }}</h2>

      <p>
       {{ $t('privacyPage.whatWeCollect.intro') }}
      </p>

      <ul>
        <li><strong>{{ $t('privacyPage.whatWeCollect.items.contact-title') }}</strong>{{ $t('privacyPage.whatWeCollect.items.contact') }}</li>
        <li><strong>{{ $t('privacyPage.whatWeCollect.items.usage-title') }}</strong> {{ $t('privacyPage.whatWeCollect.items.usage') }}</li>
        <li><strong>{{ $t('privacyPage.whatWeCollect.items.communications-title') }}</strong> {{ $t('privacyPage.whatWeCollect.items.communications') }}</li>
      </ul>
    </section>

    <!-- HOW WE USE IT -->
    <section class="privacy-section">
      <h2>{{ $t('privacyPage.howWeUse.title') }}</h2>

      <p>
       {{ $t('privacyPage.howWeUse.intro') }}
      </p>

      <ul>
        <li>{{ $t('privacyPage.howWeUse.items[0]') }}</li>
        <li>{{ $t('privacyPage.howWeUse.items[1]') }}</li>
        <li>{{ $t('privacyPage.howWeUse.items[2]') }}</li>
        <li>{{ $t('privacyPage.howWeUse.items[3]') }}</li>
      </ul>
    </section>

    <!-- DATA SECURITY -->
    <section class="privacy-section light">
      <h2>{{ $t('privacyPage.dataSecurity.title') }}</h2>

      <p>
        {{ $t('privacyPage.dataSecurity.description') }}
      </p>
    </section>

    <!-- YOUR RIGHTS -->
    <section class="privacy-section">
      <h2>{{ $t('privacyPage.yourRights.title') }}</h2>

      <p>
        {{ $t('privacyPage.yourRights.intro') }}
      </p>

      <ul>
        <li>{{ $t('privacyPage.yourRights.items[0]') }}</li>
        <li>{{ $t('privacyPage.yourRights.items[1]') }}</li>
        <li>{{ $t('privacyPage.yourRights.items[2]') }}</li>
        <li>{{ $t('privacyPage.yourRights.items[3]') }}</li>
      </ul>

      <p>
        {{ $t('privacyPage.yourRights.contact') }}
        <a href="mailto:info@trustai.com.tr">info@trustai.com.tr</a>.
      </p>
    </section>

    <!-- COOKIES -->
    <section class="privacy-section light">
      <h2>{{ $t('privacyPage.cookies.title') }}</h2>

      <p>
        {{ $t('privacyPage.cookies.description') }}
      </p>
    </section>

    <!-- POLICY UPDATES -->
    <section class="privacy-section">
      <h2>{{ $t('privacyPage.updates.title') }}</h2>

      <p>
        {{ $t('privacyPage.updates.description') }}
      </p>
    </section>

  </div>
</template>

<style scoped>
section {
  padding: 30px 8%;
}
.privacy-page {
  background: white;
}

/* HERO */
.privacy-hero {
  background: #142355;
  color: white;
  text-align: center;
  height: 200px;
}
@media (max-width: 1024px) {
  .privacy-hero  {
   height:250px;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .privacy-hero {
     height:250px;
  }
}
.privacy-hero h1 {
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 16px;
}

.privacy-hero p {
  font-size: 18px;
  max-width: 860px;
  margin: auto;
  line-height: 1.6;
}

/* SECTIONS */
.privacy-section {
  /* padding: 90px 80px; */
  max-width: 960px;
  margin: auto;
}

.privacy-section h2 {
  font-size: 30px;
  font-weight: 700;
  color: #142355;
  margin-bottom: 18px;
}

.privacy-section p,
.privacy-section ul {
  font-size: 15px;
  color: #333;
  line-height: 1.7;
  margin-bottom: 16px;
}

.privacy-section ul {
  padding-left: 20px;
}

.privacy-section ul li {
  margin-bottom: 10px;
}

.privacy-section.light {
  background: #f9fafc;
}

/* CENTER CTA */
.privacy-section.center {
  text-align: center;
}

.privacy-cta {
  display: inline-block;
  padding: 14px 32px;
  margin-top: 18px;
  background: rgba(236,189,90,1.0);
  color: #142355;
  font-weight: 600;
  border-radius: 28px;
  text-decoration: none;
  transition: 0.3s ease;
}

.privacy-cta:hover {
  opacity: 0.85;
}
</style>