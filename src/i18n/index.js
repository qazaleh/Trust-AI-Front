// src/i18n/index.js

import { createI18n } from 'vue-i18n'
import en from './compiled/en'
import tr from './compiled/tr'

const getDefaultLocale = () => {
  const saved = localStorage.getItem('locale')
  if (saved) return saved

  const browserLang = navigator.language.split('-')[0]
  return ['en', 'tr'].includes(browserLang) ? browserLang : 'en'
}

const i18n = createI18n({
  legacy: false,
  locale: getDefaultLocale(),
  fallbackLocale: 'en',
  globalInjection: true,
  messages: {
    en,
    tr
  }
})

export default i18n
