import type { ReactNode, SVGProps } from 'react'
import type { IconName } from '../../data/site'

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName
}

export function Icon({ name, ...props }: IconProps) {
  const paths: Record<IconName, ReactNode> = {
    github: (
      <path
        fill="currentColor"
        d="M12 .8a11.4 11.4 0 0 0-3.6 22.2c.6.1.8-.2.8-.5v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.7-1.3-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6A4.7 4.7 0 0 1 5.8 8c-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.5 1.3a12 12 0 0 1 6.3 0c2.4-1.6 3.5-1.3 3.5-1.3.6 1.7.2 3 .1 3.3a4.7 4.7 0 0 1 1.2 3.3c0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.3v3c0 .3.2.6.8.5A11.4 11.4 0 0 0 12 .8Z"
      />
    ),
    linkedin: (
      <path
        fill="currentColor"
        d="M5.3 7.8H.7V23h4.6V7.8ZM3 1a2.7 2.7 0 1 0 0 5.4A2.7 2.7 0 0 0 3 1Zm10 6.8H8.6V23H13v-7.5c0-2 .4-3.9 2.8-3.9s2.4 2.2 2.4 4V23h4.6v-8.3c0-4.1-.9-7.3-5.7-7.3-2.3 0-3.8 1.3-4.4 2.5H13V7.8Z"
      />
    ),
    email: (
      <path d="m3 6 9 6 9-6M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z" />
    ),
    'arrow-down': <path d="M12 4v15m0 0 6-6m-6 6-6-6" />,
    download: <path d="M12 3v12m0 0 5-5m-5 5-5-5M5 21h14" />,
  }

  return (
    <svg
      aria-hidden="true"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {paths[name]}
    </svg>
  )
}
