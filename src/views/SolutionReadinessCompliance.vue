<script setup>
import OfferDetailPage from './OfferDetailPage.vue'
</script>

<template>
  <OfferDetailPage
    hero-label-key="servicesPage.hero.label"
    title-key="navbar.readinessCompliance"
    category-key="servicesPage.framework.category"
    overview-key="servicesPage.framework.overview"
    primary-title-key="servicesPage.framework.whatWeDoTitle"
    primary-list-path="servicesPage.framework.whatWeDo"
    secondary-title-key="servicesPage.framework.deliverablesTitle"
    secondary-list-path="servicesPage.framework.deliverables"
    value-title-key="servicesPage.framework.valueTitle"
    value-list-path="servicesPage.framework.value"
    hero-surface-class="bg-[linear-gradient(135deg,#e6f2f3_0%,#f2f9f9_55%,#ffffff_100%)]"
    primary-band-class="bg-[linear-gradient(90deg,#ffffff_0%,#fbfbfb_100%)]"
    secondary-band-class="bg-[linear-gradient(90deg,#ffffff_0%,#fbfbfb_100%)]"
  />
</template>
