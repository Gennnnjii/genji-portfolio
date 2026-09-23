export type IconName =
  | 'arrow-down'
  | 'download'
  | 'email'
  | 'github'
  | 'linkedin'

const email = 'genjitolentino@gmail.com'
const githubUrl = 'https://github.com/Gennnnjii'
const linkedInUrl = 'https://www.linkedin.com/in/kevin-tolentino-46182a33a'

export const siteConfig = {
  name: 'Kevin T. Tolentino',
  brand: 'GENJI',
  contact: {
    email,
    location: 'Mabalacat City, Pampanga, Philippines',
  },
  profileImageUrl: '/images/profile/genji-profile.jpg' as string | null,
  resumeUrl: '/resume/Kevin-Tolentino-Resume.pdf' as string | null,
  navigation: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ],
  socialLinks: [
    {
      label: 'GitHub',
      href: githubUrl,
      display: 'github.com/Gennnnjii',
      icon: 'github' as IconName,
      external: true,
    },
    {
      label: 'LinkedIn',
      href: linkedInUrl,
      display: 'linkedin.com/in/kevin-tolentino-46182a33a',
      icon: 'linkedin' as IconName,
      external: true,
    },
    {
      label: 'Email',
      href: `mailto:${email}`,
      display: email,
      icon: 'email' as IconName,
      external: false,
    },
  ],
} as const
