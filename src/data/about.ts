export type AboutDetail = {
  label: string
  value: string
  code: string
  featured?: boolean
}

export const aboutDetails: readonly AboutDetail[] = [
  {
    label: 'Primary Direction',
    value: 'Network Engineering / Administration',
    code: 'DIR-01',
    featured: true,
  },
  {
    label: 'Security Direction',
    value: 'Cybersecurity / Network Security',
    code: 'SEC-02',
  },
  {
    label: 'Strong Capability',
    value: 'Full-Stack Web Development',
    code: 'DEV-03',
  },
  {
    label: 'Current Status',
    value: '4th-Year BS Information Technology',
    code: 'EDU-04',
  },
  {
    label: 'University',
    value: 'National University',
    code: 'NU-05',
  },
  {
    label: 'Approach',
    value: 'Build · Integrate · Test · Troubleshoot',
    code: 'OPS-06',
    featured: true,
  },
]

export const aboutCopy = {
  lead:
    'I am an early-career IT professional and 4th-year BS Information Technology student at National University with hands-on experience across networking, cybersecurity fundamentals, full-stack web development, system integration, and database-backed applications.',
  detail:
    'My primary career direction is network engineering and cybersecurity, supported by a strong full-stack development capability and an additional interest in AI-assisted systems. I continue strengthening these skills through practical projects, testing, integration, and technical troubleshooting across frontend interfaces, REST APIs, databases, networks, and security controls.',
  philosophy:
    'I enjoy understanding how systems work together — from interfaces and APIs to databases, networks, and security controls.',
} as const
