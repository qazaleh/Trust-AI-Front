import { createRouter, createWebHistory } from 'vue-router'

import i18n from '../i18n'
import { getSavedLocale, normalizeLocale, supportedLocales } from '../lib/site'
import About from '../views/About.vue'
import AIGovernance from '../views/AIGovernance.vue'
import Home from '../views/Home.vue'
import LocaleLayout from '../views/LocaleLayout.vue'
import OurTeams from '../views/OurTeams.vue'
import Privacy from '../views/Privacy.vue'
import Products from '../views/products.vue'
import Research from '../views/Research.vue'
import Services from '../views/services.vue'

const routes = [
  {
    path: '/:locale(en|tr)',
    component: LocaleLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: Home,
      },
      {
        path: 'about',
        name: 'about',
        component: About,
      },
      {
        path: 'governance',
        name: 'governance',
        component: AIGovernance,
      },
      {
        path: 'research',
        name: 'research',
        component: Research,
      },
      {
        path: 'services',
        name: 'services',
        component: Services,
      },
      {
        path: 'products',
        name: 'products',
        component: Products,
      },
      {
        path: 'privacy',
        name: 'privacy',
        component: Privacy,
      },
      {
        path: 'team',
        name: 'team',
        component: OurTeams,
      },
      {
        path: 'aboutUs',
        redirect: to => ({ name: 'about', params: to.params }),
      },
      {
        path: 'ai-governance',
        redirect: to => ({ name: 'governance', params: to.params }),
      },
      {
        path: 'our-teams',
        redirect: to => ({ name: 'team', params: to.params }),
      },
    ],
  },
  {
    path: '/',
    redirect: () => `/${getSavedLocale()}`,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: () => `/${getSavedLocale()}`,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

router.beforeEach((to) => {
  const locale = to.params.locale

  if (!locale) {
    return `/${getSavedLocale()}`
  }

  if (!supportedLocales.includes(locale)) {
    return '/en'
  }

  const validLocale = normalizeLocale(locale)
  i18n.global.locale.value = validLocale
  localStorage.setItem('locale', validLocale)

  return true
})

export default router
