import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'
import { localizedPageHtml } from '../src/lib/pageMetadata.js'

const root = fileURLToPath(new URL('../', import.meta.url))
const html = await readFile(resolve(root, 'dist/index.html'), 'utf8')

// A static host needs an entry document for direct requests to history-mode routes.
// Vite preview resolves extensionless paths through .html; other hosts use index.html.
const pagePaths = [
  '',
  'solutions/ai-governance',
  'solutions/readiness-compliance',
  'solutions/remediation-assurance',
  'products/trustai-x',
  'products/trustai-ux',
  'research-insights',
  'use-cases',
  'about',
]

for (const locale of ['en', 'tr']) {
  const messages = JSON.parse(await readFile(resolve(root, `src/i18n/${locale}.json`), 'utf8'))
  for (const pagePath of pagePaths) {
    const path = `/${locale}${pagePath ? `/${pagePath}` : '/'}`
    const isLab = pagePath === 'use-cases'
    const entryHtml = localizedPageHtml(html, {
      locale,
      path,
      title: isLab ? `${messages.lab.title} | TrustAI` : messages.pageMetadata.title,
      description: isLab ? messages.lab.metaDescription : messages.pageMetadata.description,
    })
    const directory = resolve(root, 'dist', locale, pagePath)
    await mkdir(directory, { recursive: true })
    await writeFile(resolve(directory, 'index.html'), entryHtml)
    if (pagePath) await writeFile(resolve(root, 'dist', locale, `${pagePath}.html`), entryHtml)
  }
}
console.log('Generated localized entry documents for all primary routes.')
