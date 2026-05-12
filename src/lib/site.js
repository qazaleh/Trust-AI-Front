export const supportedLocales = ['en', 'tr']

export const navigationItems = [
  {
    type: 'link',
    key: 'home',
    labelKey: 'navbar.home',
    to: { name: 'home' },
  },
  {
    type: 'group',
    key: 'solutions',
    labelKey: 'navbar.solutions',
    matches: ['solution-governance', 'solution-readiness', 'solution-remediation'],
    children: [
      {
        key: 'ai-governance',
        labelKey: 'navbar.aiGovernance',
        to: { name: 'solution-governance' },
      },
      {
        key: 'readiness-compliance',
        labelKey: 'navbar.readinessCompliance',
        to: { name: 'solution-readiness' },
      },
      {
        key: 'remediation-assurance',
        labelKey: 'navbar.remediationAssurance',
        to: { name: 'solution-remediation' },
      },
    ],
  },
  {
    type: 'group',
    key: 'products',
    labelKey: 'navbar.products',
    matches: ['product-trustaix', 'product-trustaiux'],
    children: [
      {
        key: 'trustai-x',
        labelKey: 'navbar.trustaiX',
        to: { name: 'product-trustaix' },
      },
      {
        key: 'trustai-ux',
        labelKey: 'navbar.trustaiUX',
        to: { name: 'product-trustaiux' },
      },
    ],
  },
  {
    type: 'link',
    key: 'research-insights',
    labelKey: 'navbar.researchInsights',
    to: { name: 'research-insights' },
  },
  {
    type: 'link',
    key: 'about',
    labelKey: 'navbar.about',
    to: { name: 'about' },
  },
]

export const footerNavigationItems = [
  { key: 'home', labelKey: 'navbar.home', to: { name: 'home' } },
  { key: 'ai-governance', labelKey: 'navbar.aiGovernance', to: { name: 'solution-governance' } },
  {
    key: 'readiness-compliance',
    labelKey: 'navbar.readinessCompliance',
    to: { name: 'solution-readiness' },
  },
  {
    key: 'remediation-assurance',
    labelKey: 'navbar.remediationAssurance',
    to: { name: 'solution-remediation' },
  },
  { key: 'trustai-x', labelKey: 'navbar.trustaiX', to: { name: 'product-trustaix' } },
  { key: 'trustai-ux', labelKey: 'navbar.trustaiUX', to: { name: 'product-trustaiux' } },
  {
    key: 'research-insights',
    labelKey: 'navbar.researchInsights',
    to: { name: 'research-insights' },
  },
  { key: 'about', labelKey: 'navbar.about', to: { name: 'about' } },
]

export const publications = [
  {
    titleKey: 'publications.diceExtended.title',
    descriptionKey: 'publications.diceExtended.description',
    href: 'https://link.springer.com/chapter/10.1007/978-3-032-08384-5_25',
  },
  {
    titleKey: 'publications.highStakes.title',
    descriptionKey: 'publications.highStakes.description',
    href: '',
  },
]

export const teamMembers = [
  {
    name: 'Prof. Dr. Sureyya Ozogur-Akyuz',
    roleKey: 'teamMembers.sureyya.role',
    bioKey: 'teamMembers.sureyya.bio',
    image: '/SA.JPG',
    imagePosition: 'center top',
    initials: 'SA',
  },
  {
    name: 'Qazaleh Afrough',
    roleKey: 'teamMembers.qazaleh.role',
    bioKey: 'teamMembers.qazaleh.bio',
    image: '/QA.JPG',
    imagePosition: 'center center',
    initials: 'QA',
  },
  {
    name: 'Faramarz Mehrnami',
    roleKey: 'teamMembers.faramarz.role',
    bioKey: 'teamMembers.faramarz.bio',
    image: '/FM.JPG',
    imagePosition: 'center 18%',
    initials: 'FM',
  },
  {
    name: 'Dilara Karaduman',
    roleKey: 'teamMembers.dilara.role',
    bioKey: 'teamMembers.dilara.bio',
    image: '/DL.JPG',
    imagePosition: '43% center',
    initials: 'DK',
  },
  {
    name: 'Nisa Yegin',
    roleKey: 'teamMembers.nisa.role',
    bioKey: 'teamMembers.nisa.bio',
    image: '/NY.JPG',
    imagePosition: 'center center',
    initials: 'NY',
  },
  {
    name: 'Arya Sokhangoo',
    roleKey: 'teamMembers.arya.role',
    bioKey: 'teamMembers.arya.bio',
    image: '/AS.jpeg',
    imagePosition: 'center center',
    initials: 'AS',
  },
]

export function normalizeLocale(locale) {
  return supportedLocales.includes(locale) ? locale : 'en'
}

export function getSavedLocale() {
  if (typeof window === 'undefined') {
    return 'en'
  }

  return normalizeLocale(window.localStorage.getItem('locale') || 'en')
}
