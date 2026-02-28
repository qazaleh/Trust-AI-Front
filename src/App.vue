<script setup>
import { useRoute } from 'vue-router'
import { computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'

import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const route = useRoute()
const { locale } = useI18n()

// Keep your existing meta logic
const showNavbar = computed(() => !route.meta.hideNavbar)
const showFooter = computed(() => !route.meta.hideFooter)

// Ensure locale updates if route param changes
watch(
  () => route.params.locale,
  (newLocale) => {
    if (newLocale) {
      locale.value = newLocale
    }
  }
)
</script>

<template>
  <Navbar v-if="showNavbar" class="nunito"/>

  <main class="page nunito">
    <router-view />
  </main>

  <Footer v-if="showFooter" class="nunito"/>
</template>

<style>
.page {
  padding-top: 100px;
  background: #f8f9fc;
}
.nunito {
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
}
</style>