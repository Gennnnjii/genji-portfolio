export type CredentialAccent = 'cyan' | 'blue'
export type CredentialProminence = 'standard' | 'feature' | 'wide' | 'foundation'

export type Certification = {
  id: string
  code: string
  title: string
  issuer: string
  category: string
  issued?: string
  expires?: string
  mark: string
  accent: CredentialAccent
  prominence: CredentialProminence
  badgeAlt: string
  badgeSrc: string | null
  plannedBadgeSource: string
  certificateUrl: string | null
  verificationUrl: string | null
}

export const certifications: readonly Certification[] = [
  {
    id: 'cisco-networking-devices',
    code: 'CRED / 01',
    title: 'Cisco Networking Devices and Initial Configuration',
    issuer: 'Cisco',
    category: 'Networking',
    issued: 'Jul 19, 2026',
    mark: 'CFG',
    accent: 'cyan',
    prominence: 'standard',
    badgeAlt: 'Cisco Networking Devices and Initial Configuration badge',
    badgeSrc: '/images/certifications/cisco-networking-devices.png',
    plannedBadgeSource: '/images/certifications/cisco-networking-devices.png',
    certificateUrl: '/certifications/cisco-networking-devices-initial-configuration.pdf',
    verificationUrl: null,
  },
  {
    id: 'cisco-network-technician',
    code: 'CRED / 02',
    title: 'Cisco Network Technician Career Path',
    issuer: 'Cisco',
    category: 'Networking / Career Path',
    issued: 'Jul 19, 2026',
    mark: 'PATH',
    accent: 'blue',
    prominence: 'feature',
    badgeAlt: 'Cisco Network Technician Career Path badge',
    badgeSrc: '/images/certifications/cisco-network-technician.png',
    plannedBadgeSource: '/images/certifications/cisco-network-technician.png',
    certificateUrl: '/certifications/cisco-network-technician-career-path.pdf',
    verificationUrl: null,
  },
  {
    id: 'cisco-network-addressing',
    code: 'CRED / 03',
    title: 'Cisco Network Addressing and Basic Troubleshooting',
    issuer: 'Cisco',
    category: 'Networking',
    issued: 'Jul 17, 2026',
    mark: 'ADDR',
    accent: 'cyan',
    prominence: 'standard',
    badgeAlt: 'Cisco Network Addressing and Basic Troubleshooting badge',
    badgeSrc: '/images/certifications/cisco-network-addressing.png',
    plannedBadgeSource: '/images/certifications/cisco-network-addressing.png',
    certificateUrl: '/certifications/cisco-network-addressing-basic-troubleshooting.pdf',
    verificationUrl: null,
  },
  {
    id: 'cisco-network-support-security',
    code: 'CRED / 04',
    title: 'Cisco Network Support and Security',
    issuer: 'Cisco',
    category: 'Networking / Security',
    issued: 'Jul 15, 2026',
    mark: 'SEC',
    accent: 'blue',
    prominence: 'standard',
    badgeAlt: 'Cisco Network Support and Security badge',
    badgeSrc: '/images/certifications/cisco-network-support-security.png',
    plannedBadgeSource: '/images/certifications/cisco-network-support-security.png',
    certificateUrl: '/certifications/cisco-network-support-security.pdf',
    verificationUrl: null,
  },
  {
    id: 'cisco-networking-basics',
    code: 'CRED / 05',
    title: 'Cisco Networking Basics',
    issuer: 'Cisco',
    category: 'Networking Fundamentals',
    issued: 'Jul 13, 2026',
    mark: 'NET',
    accent: 'cyan',
    prominence: 'standard',
    badgeAlt: 'Cisco Networking Basics badge',
    badgeSrc: '/images/certifications/cisco-networking-basics.png',
    plannedBadgeSource: '/images/certifications/cisco-networking-basics.png',
    certificateUrl: '/certifications/cisco-networking-basics.pdf',
    verificationUrl: null,
  },
  {
    id: 'it-specialist-networking',
    code: 'CRED / 06',
    title: 'IT Specialist – Networking',
    issuer: 'Certiport / Pearson VUE',
    category: 'Networking Certification',
    issued: 'Oct 15, 2025',
    expires: 'Oct 15, 2030',
    mark: 'ITS',
    accent: 'blue',
    prominence: 'wide',
    badgeAlt: 'IT Specialist – Networking badge',
    badgeSrc: '/images/certifications/it-specialist-networking.png',
    plannedBadgeSource: '/images/certifications/it-specialist-networking.png',
    certificateUrl: '/certifications/IT%20SPECIALIST%20-%20NETWORKING.pdf',
    verificationUrl: null,
  },
  {
    id: 'comptia-itf-plus',
    code: 'CRED / 07',
    title: 'CompTIA IT Fundamentals+ (ITF+) Certification',
    issuer: 'CompTIA',
    category: 'IT Fundamentals',
    issued: 'Jul 1, 2024',
    mark: 'ITF+',
    accent: 'cyan',
    prominence: 'foundation',
    badgeAlt: 'CompTIA IT Fundamentals+ (ITF+) Certification badge',
    badgeSrc: '/images/certifications/comptia-itf-plus.png',
    plannedBadgeSource: '/images/certifications/comptia-itf-plus.png',
    certificateUrl:
      '/certifications/CompTIA%20IT%20Fundamentals%20(ITF+)%20Certification%20certificate.pdf',
    verificationUrl: null,
  },
]
