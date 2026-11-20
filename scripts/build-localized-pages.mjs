import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'
import { localizedPageHtml } from '../src/lib/pageMetadata.js'

const root = fileURLToPath(new URL('../', import.meta.url))
const html = await readFile(resolve(root, 'dist/index.html'), 'utf8')
for (const locale of ['en', 'tr']) {
  const messages = JSON.parse(await readFile(resolve(root, `src/i18n/${locale}.json`), 'utf8'))
  const directory = resolve(root, `dist/${locale}/use-cases`)
  await mkdir(directory, { recursive: true })
  const entryHtml = localizedPageHtml(html, {
    locale,
    path: `/${locale}/use-cases`,
    title: `${messages.lab.title} | TrustAI`,
    description: messages.lab.metaDescription,
  })
  // Vite resolves extensionless URLs through .html; directory entries support slash URLs.
  await writeFile(resolve(directory, 'index.html'), entryHtml)
  await writeFile(resolve(root, `dist/${locale}/use-cases.html`), entryHtml)
}
console.log('Generated English and Turkish lab entry documents with localized metadata.')
