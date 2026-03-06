import { createRouter, createWebHistory } from 'vue-router'
import i18n from '../i18n'

import Home from '../views/Home.vue'
import AIGovernance from '../views/AIGovernance.vue'
import Privacy from '../views/Privacy.vue'
import Research from '../views/Research.vue'
import About from '../views/About.vue'
import LocaleLayout from '../views/LocaleLayout.vue'
import OurTeams from '../views/OurTeams.vue'

const supportedLocales = ['en', 'tr']

const routes = [
  {
    path: '/:locale(en|tr)',
    component: LocaleLayout,
    children: [
      { 
        path: '', 
        component: Home, 
        meta: { hideNavbar: false, hideFooter: false } 
      },
      { 
        path: 'ai-governance', 
        component: AIGovernance, 
        meta: { hideNavbar: false, hideFooter: true } 
      },
      { 
        path: 'privacy', 
        component: Privacy, 
        meta: { hideNavbar: false, hideFooter: true } 
      },
      { 
        path: 'research', 
        component: Research, 
        meta: { hideNavbar: false, hideFooter: true } 
      },
      { 
        path: 'aboutUs', 
        component: About, 
        meta: { hideNavbar: false, hideFooter: true } 
      },
       { 
        path: 'our-teams', 
        component: OurTeams, 
        meta: { hideNavbar: false, hideFooter: true } 
      }
    ]
  },

  // redirect root → default locale
  {
    path: '/',
    redirect: () => {
      const saved = localStorage.getItem('locale') || 'en'
      return `/${saved}`
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

router.beforeEach((to) => {
  const locale = to.params.locale

  if (!locale) {
    return '/en'
  }

  if (!['en', 'tr'].includes(locale)) {
    return '/en'
  }
})

export default router