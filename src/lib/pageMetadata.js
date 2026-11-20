const siteOrigin = 'https://trustai.com.tr'

// Shared by client navigation and the generated localized entry documents.
export function pageMetadata({ locale, path, title, description }) {
  const suffix = path.replace(/^\/(en|tr)(?=\/|$)/, '').replace(/\/$/, '')
  const localizedUrl = language => `${siteOrigin}/${language}${suffix || '/'}`
  return [
    ['link', 'rel', 'canonical', 'href', localizedUrl(locale)],
    ...['en', 'tr', 'x-default'].map(language => [
      'link', 'hreflang', language, 'href', localizedUrl(language === 'x-default' ? 'en' : language),
    ]),
    ['meta', 'name', 'description', 'content', description],
    ['meta', 'property', 'og:title', 'content', title],
    ['meta', 'property', 'og:description', 'content', description],
    ['meta', 'property', 'og:url', 'content', localizedUrl(locale)],
    ['meta', 'property', 'og:locale', 'content', locale === 'tr' ? 'tr_TR' : 'en_US'],
    ['meta', 'property', 'og:locale:alternate', 'content', locale === 'tr' ? 'en_US' : 'tr_TR'],
    ['meta', 'name', 'twitter:title', 'content', title],
    ['meta', 'name', 'twitter:description', 'content', description],
  ]
}

export function updatePageMetadata(options) {
  document.documentElement.lang = options.locale
  document.title = options.title
  for (const [tag, key, name, attribute, value] of pageMetadata(options)) {
    let element = document.head.querySelector(`${tag}[${key}="${name}"]`)
    if (!element) {
      element = document.createElement(tag)
      element.setAttribute(key, name)
      if (key === 'hreflang') element.setAttribute('rel', 'alternate')
      document.head.appendChild(element)
    }
    element.setAttribute(attribute, value)
  }
}

export function localizedPageHtml(html, options) {
  const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
  let result = html.replace(/<html\s+lang="[^"]*"/, `<html lang="${options.locale}"`)
    .replace(/<title>[^<]*<\/title>/, `<title>${escape(options.title)}</title>`)
  for (const [tag, key, name, attribute, value] of pageMetadata(options)) {
    const pattern = new RegExp(`<${tag}\\s[^>]*${key}="${name}"[^>]*>`, 'g')
    const node = `<${tag} ${key}="${name}"${key === 'hreflang' ? ' rel="alternate"' : ''} ${attribute}="${escape(value)}">`
    result = result.replace(pattern, node)
  }
  return result
}
