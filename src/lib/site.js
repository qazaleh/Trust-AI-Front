export const supportedLocales = ['en', 'tr']

export const navigationItems = [
  { name: 'home', labelKey: 'navbar.home' },
  { name: 'about', labelKey: 'navbar.about' },
  { name: 'governance', labelKey: 'navbar.governance' },
  { name: 'research', labelKey: 'navbar.research' },
  { name: 'services', labelKey: 'navbar.services' },
  { name: 'products', labelKey: 'navbar.products' },
  { name: 'privacy', labelKey: 'navbar.privacy' },
  { name: 'team', labelKey: 'navbar.ourTeams' },
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
    initials: 'SA',
  },
  {
    name: 'Qazaleh Afrough',
    roleKey: 'teamMembers.qazaleh.role',
    bioKey: 'teamMembers.qazaleh.bio',
    image: '/QA.JPG',
    initials: 'QA',
  },
  {
    name: 'Faramarz Mehrnami',
    roleKey: 'teamMembers.faramarz.role',
    bioKey: 'teamMembers.faramarz.bio',
    image: '/FM.JPG',
    initials: 'FM',
  },
  {
    name: 'Dilara Karaduman',
    roleKey: 'teamMembers.dilara.role',
    bioKey: 'teamMembers.dilara.bio',
    image: '/DL.JPG',
    initials: 'DK',
  },
  {
    name: 'Nisa Yegin',
    roleKey: 'teamMembers.nisa.role',
    bioKey: 'teamMembers.nisa.bio',
    image: '/NY.JPG',
    initials: 'NY',
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
