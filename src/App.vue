<script setup>
// import ContactFormModal from './components/ContactFormModal.vue'
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="min-h-screen">
    <Navbar />

    <main class="px-4 pb-16 pt-8 sm:px-6 sm:pt-10 lg:px-8 lg:pt-36">
      <router-view />
    </main>

    <Footer />
    <!-- <ContactFormModal /> -->
  </div>
</template>
