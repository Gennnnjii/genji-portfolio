import { motion, useReducedMotion } from 'motion/react'
import { siteConfig } from '../../data/site'
import { Icon } from '../ui/Icon'

export function SocialLinks() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="flex items-center gap-3" role="group" aria-label="Social links">
      <span className="mr-1 hidden font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600 sm:block">
        Connect
      </span>
      <span className="mr-1 hidden h-px w-8 bg-white/10 sm:block" aria-hidden="true" />
      {siteConfig.socialLinks.map((link) => (
        <motion.a
          key={link.label}
          href={link.href}
          target={link.external ? '_blank' : undefined}
          rel={link.external ? 'noopener noreferrer' : undefined}
          aria-label={link.external ? `${link.label} (opens in a new tab)` : link.label}
          title={link.label}
          className="group grid h-11 w-11 place-items-center rounded-xl border border-white/[0.09] bg-white/[0.025] text-slate-400 transition-colors hover:border-cyan-300/25 hover:bg-cyan-300/[0.06] hover:text-cyan-100"
          whileHover={shouldReduceMotion ? undefined : { y: -3 }}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
        >
          <Icon name={link.icon} className="h-[18px] w-[18px]" />
        </motion.a>
      ))}
    </div>
  )
}
