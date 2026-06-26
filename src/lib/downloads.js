export const governancePlaybookFileName = 'TrustAI_governancePlaybook.pdf'
export const governancePlaybookUrl = `${import.meta.env.BASE_URL}${governancePlaybookFileName}`

export function openGovernancePlaybook() {
  const openedWindow = window.open(governancePlaybookUrl, '_blank', 'noopener,noreferrer')

  if (openedWindow) {
    return
  }

  const link = document.createElement('a')

  link.href = governancePlaybookUrl
  link.target = '_blank'
  link.rel = 'noopener noreferrer'
  document.body.append(link)
  link.click()
  link.remove()
}
