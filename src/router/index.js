import { createRouter, createWebHistory } from 'vue-router'

import i18n from '../i18n'
import { getSavedLocale, normalizeLocale, supportedLocales } from '../lib/site'
import About from '../views/About.vue'
import AIGovernance from '../views/AIGovernance.vue'
import Home from '../views/Home.vue'
import LocaleLayout from '../views/LocaleLayout.vue'
import ProductTrustAIX from '../views/ProductTrustAIX.vue'
import ProductTrustAIUX from '../views/ProductTrustAIUX.vue'
import Research from '../views/Research.vue'
import SolutionReadinessCompliance from '../views/SolutionReadinessCompliance.vue'
import SolutionRemediationAssurance from '../views/SolutionRemediationAssurance.vue'

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
        path: 'solutions/ai-governance',
        name: 'solution-governance',
        component: AIGovernance,
      },
      {
        path: 'solutions/readiness-compliance',
        name: 'solution-readiness',
        component: SolutionReadinessCompliance,
      },
      {
        path: 'solutions/remediation-assurance',
        name: 'solution-remediation',
        component: SolutionRemediationAssurance,
      },
      {
        path: 'products/trustai-x',
        name: 'product-trustaix',
        component: ProductTrustAIX,
      },
      {
        path: 'products/trustai-ux',
        name: 'product-trustaiux',
        component: ProductTrustAIUX,
      },
      {
        path: 'research-insights',
        name: 'research-insights',
        component: Research,
      },
      {
        path: 'about',
        name: 'about',
        component: About,
      },
      {
        path: 'privacy',
        redirect: to => ({ name: 'home', params: to.params }),
      },
      {
        path: 'team',
        redirect: to => ({ name: 'about', params: to.params }),
      },
      {
        path: 'aboutUs',
        redirect: to => ({ name: 'about', params: to.params }),
      },
      {
        path: 'ai-governance',
        redirect: to => ({ name: 'solution-governance', params: to.params }),
      },
      {
        path: 'our-teams',
        redirect: to => ({ name: 'about', params: to.params }),
      },
      {
        path: 'governance',
        redirect: to => ({ name: 'solution-governance', params: to.params }),
      },
      {
        path: 'services',
        redirect: to => ({ name: 'solution-readiness', params: to.params }),
      },
      {
        path: 'products',
        redirect: to => ({ name: 'product-trustaix', params: to.params }),
      },
      {
        path: 'research',
        redirect: to => ({ name: 'research-insights', params: to.params }),
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
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 120,
        behavior: 'smooth',
      }
    }

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
