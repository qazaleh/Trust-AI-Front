<script setup>
import OfferDetailPage from './OfferDetailPage.vue'
</script>

<template>
  <OfferDetailPage
    hero-label-key="productsPage.hero.label"
    title-key="navbar.trustaiX"
    category-key="productsPage.trustaiX.category"
    overview-key="productsPage.trustaiX.overview"
    primary-title-key="productsPage.trustaiX.whatItDoesTitle"
    primary-list-path="productsPage.trustaiX.whatItDoes"
    secondary-title-key="productsPage.trustaiX.featuresTitle"
    secondary-list-path="productsPage.trustaiX.features"
    value-title-key="productsPage.trustaiX.valueTitle"
    value-list-path="productsPage.trustaiX.value"
    hero-surface-class="bg-[linear-gradient(135deg,#e6f2f3_0%,#f2f9f9_55%,#ffffff_100%)]"
    primary-band-class="bg-[linear-gradient(90deg,#ffffff_0%,#fbfbfb_100%)]"
    secondary-band-class="bg-[linear-gradient(90deg,#ffffff_0%,#fbfbfb_100%)]"
  />
</template>
