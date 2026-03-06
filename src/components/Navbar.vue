<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Menu, X, Globe } from 'lucide-vue-next'
import { useRoute, useRouter } from 'vue-router'


import { useI18n } from 'vue-i18n'
import { watch } from 'vue'


/* ---------- STATE ---------- */
const isOpen = ref(false)
const isScrolled = ref(false)

/* ---------- SCROLL EFFECT ---------- */
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

/* ---------- ROUTE / LOCALE ---------- */
const route = useRoute()
const router = useRouter()

// reactive locale
const locale = computed(() => route.params.locale || 'en')

const { locale: i18nLocale } = useI18n()

watch(locale, (newLocale) => {
  i18nLocale.value = newLocale
}, { immediate: true })


// determine next language
const nextLocale = computed(() =>
  locale.value === 'en' ? 'tr' : 'en'
)

// language switch
const switchLanguage = () => {
  // const currentPath = route.fullPath

  // // replace current locale with next locale
  // const newPath = currentPath.replace(
  //   `/${locale.value}`,
  //   `/${nextLocale.value}`
  // )

  // router.push(newPath)


  const segments = route.fullPath.split('/')
  segments[1] = nextLocale.value
  router.push(segments.join('/'))
}
</script>

<template>
  <header :class="['navbar', { shrink: isScrolled }]">

    <div class="nav-inner">

      <!-- Logo -->
       <div style="align-items: center;display: flex;">
         <div class="logo">
            <img src="/logo.png" alt="TrustAI" />
        </div>
         <div class="lang-toggle" @click="switchLanguage">
            <Globe size="20" />
             <span class="lang-code">
                {{ locale.toUpperCase() }}
             </span>
        </div>
       </div>

     
    

      <!-- Desktop Menu -->
      <nav class="nav-links">
        <router-link :to="`/${locale}`">
            {{ $t('navbar.home') }}
        </router-link>
        <router-link :to="`/${locale}/aboutUs`">
            {{ $t('navbar.about') }}
        </router-link>
        <router-link :to="`/${locale}/ai-governance`">
            {{ $t('navbar.governance') }}
        </router-link>
        <router-link :to="`/${locale}/research`">
            {{ $t('navbar.research') }}
        </router-link>
        <router-link :to="`/${locale}/privacy`">
            {{ $t('navbar.privacy') }}
        </router-link>
        <router-link :to="`/${locale}/our-teams`">
            {{ $t('navbar.ourTeams') }}
        </router-link>
       
      </nav>
      <div class="menu-toggle" @click="isOpen = !isOpen">
        <Menu v-if="!isOpen" size="26" />
        <X v-else size="26" />
      </div>
      

    </div>

    <!-- Mobile Menu -->
    <transition name="mobile-slide">
    <div v-if="isOpen" class="mobile-menu">
        <router-link :to="`/${locale}`" @click="isOpen = false">
            {{ $t('navbar.home') }}
        </router-link>

        <router-link :to="`/${locale}/aboutUs`" @click="isOpen = false">
            {{ $t('navbar.about') }}
        </router-link>

        <router-link :to="`/${locale}/ai-governance`" @click="isOpen = false">
            {{ $t('navbar.governance') }}
        </router-link>

        <router-link :to="`/${locale}/research`" @click="isOpen = false">
            {{ $t('navbar.research') }}
        </router-link>

        <router-link :to="`/${locale}/privacy`" @click="isOpen = false">
             {{ $t('navbar.privacy') }}
        </router-link>
        <router-link :to="`/${locale}/our-teams`" @click="isOpen = false">
             {{ $t('navbar.ourTeams') }}
        </router-link>
    </div>
    </transition> 

  </header>
</template>


<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: rgba(236,189,90,1.0);
  transition: all 0.3s ease;
}

.navbar.shrink {
  background: #f8f9fc;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
}

.nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 18px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* LOGO */
.logo img {
  height: 42px;
  transition: 0.3s ease;
}

.navbar.shrink .logo img {
  height: 32px;
}

/* DESKTOP MENU */
.nav-links {
  display: flex;
  gap: 28px;
  font-weight: 600;
}

.nav-links a {
  text-decoration: none;
  color: #142355;
  transition: 0.2s;
}

.nav-links a:hover {
  color: white;
}

.navbar.shrink .nav-links a:hover {
  color: rgba(236,189,90,1.0);
}

/* MENU BUTTON */
.menu-toggle {
  display: none;
  cursor: pointer;
  color: #142355;
}

/* MOBILE */
@media (max-width: 992px) {

  .nav-links {
    display: none;
  }

  .menu-toggle {
    display: block;
  }

  .mobile-menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: white;
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 18px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.08);
  }

  .mobile-menu a {
    text-decoration: none;
    color: #142355;
    font-weight: 600;
  }
}


/* TRANSITION */
.mobile-slide-enter-active,
.mobile-slide-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.mobile-slide-enter-from,
.mobile-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.mobile-slide-enter-to,
.mobile-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}


.lang-toggle {
  margin-left: 20px;
  cursor: pointer;
  color: #142355;
  display: flex;
  align-items: center;
}

.lang-toggle:hover {
  opacity: 0.7;
}

.lang-toggle-mobile {
  cursor: pointer;
  color: #142355;
  /* margin-top: -5 px; */
  margin-right:20px;

}
.lang-toggle {
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
}

.lang-code {
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
}
</style>
