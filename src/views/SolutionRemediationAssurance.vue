<script setup>
import OfferDetailPage from './OfferDetailPage.vue'
</script>

<template>
  <OfferDetailPage
    hero-label-key="servicesPage.hero.label"
    title-key="navbar.remediationAssurance"
    category-key="servicesPage.assurance.category"
    overview-key="servicesPage.assurance.overview"
    primary-title-key="servicesPage.assurance.whatWeDoTitle"
    primary-list-path="servicesPage.assurance.whatWeDo"
    secondary-title-key="servicesPage.assurance.capabilitiesTitle"
    secondary-list-path="servicesPage.assurance.capabilities"
    value-title-key="servicesPage.assurance.valueTitle"
    value-list-path="servicesPage.assurance.value"
    hero-surface-class="bg-[linear-gradient(135deg,#e6f2f3_0%,#f2f9f9_55%,#ffffff_100%)]"
    primary-band-class="bg-[linear-gradient(90deg,#ffffff_0%,#fbfbfb_100%)]"
    secondary-band-class="bg-[linear-gradient(90deg,#ffffff_0%,#fbfbfb_100%)]"
  />
</template>
