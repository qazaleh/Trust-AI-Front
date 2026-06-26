export const governancePlaybookFileName = 'TrustAI_governancePlaybook.pdf'
export const governancePlaybookUrl = `${import.meta.env.BASE_URL}${governancePlaybookFileName}`

export function downloadGovernancePlaybook() {
  const link = document.createElement('a')

  link.href = governancePlaybookUrl
  link.download = governancePlaybookFileName
  link.rel = 'noopener'
  document.body.append(link)
  link.click()
  link.remove()
}
