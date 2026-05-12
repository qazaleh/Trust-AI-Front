<script setup>
import OfferDetailPage from './OfferDetailPage.vue'
</script>

<template>
  <OfferDetailPage
    hero-label-key="productsPage.hero.label"
    title-key="navbar.trustaiUX"
    category-key="productsPage.trustaiUX.category"
    overview-key="productsPage.trustaiUX.overview"
    primary-title-key="productsPage.trustaiUX.whatItDoesTitle"
    primary-list-path="productsPage.trustaiUX.whatItDoes"
    secondary-title-key="productsPage.trustaiUX.featuresTitle"
    secondary-list-path="productsPage.trustaiUX.features"
    value-title-key="productsPage.trustaiUX.valueTitle"
    value-list-path="productsPage.trustaiUX.value"
    hero-surface-class="bg-[linear-gradient(135deg,#e6f2f3_0%,#f2f9f9_55%,#ffffff_100%)]"
    primary-band-class="bg-[linear-gradient(90deg,#ffffff_0%,#fbfbfb_100%)]"
    secondary-band-class="bg-[linear-gradient(90deg,#ffffff_0%,#fbfbfb_100%)]"
  />
</template>
