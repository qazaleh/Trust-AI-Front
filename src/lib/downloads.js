export const governancePlaybookFileName = 'TrustAI_governancePlaybook.pdf'
export const governancePlaybookUrl = `${import.meta.env.BASE_URL}${governancePlaybookFileName}`

export const agenticGovernancePlaybookFileName = 'TrustAI_Agentic_Governance_Playbook.pdf'
export const agenticGovernancePlaybookUrl = `${import.meta.env.BASE_URL}${agenticGovernancePlaybookFileName}`

function openInNewTab(url) {
  const openedWindow = window.open(url, '_blank', 'noopener,noreferrer')

  if (openedWindow) {
    return
  }

  const link = document.createElement('a')

  link.href = url
  link.target = '_blank'
  link.rel = 'noopener noreferrer'
  document.body.append(link)
  link.click()
  link.remove()
}

export function openGovernancePlaybook() {
  openInNewTab(governancePlaybookUrl)
}

export function openAgenticGovernancePlaybook() {
  openInNewTab(agenticGovernancePlaybookUrl)
}