import { motion, useReducedMotion } from 'motion/react'
import { siteConfig } from '../../data/site'

export function Footer() {
  const shouldReduceMotion = useReducedMotion()
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      className="relative z-10 border-t border-white/[0.07] bg-[#020508]/95 px-5 py-8 sm:px-8 lg:px-10"
      initial={shouldReduceMotion ? false : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="font-display text-sm font-black tracking-[0.28em] text-white">
              {siteConfig.brand}
            </span>
            <span className="h-px w-8 bg-gradient-to-r from-cyan-300/50 to-transparent" aria-hidden="true" />
          </div>
          <p className="mt-2 text-xs text-slate-600">
            {siteConfig.name} · BS Information Technology
          </p>
        </div>

        <div className="flex flex-col gap-5 sm:items-end">
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-3" aria-label="Footer links">
            {siteConfig.socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                aria-label={link.external ? `${link.label} (opens in a new tab)` : link.label}
                className="inline-flex min-h-11 min-w-11 items-center justify-center text-xs text-slate-500 transition-colors hover:text-cyan-100"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#home"
              className="inline-flex min-h-11 items-center gap-2 text-xs text-slate-400 transition-colors hover:text-cyan-100"
              aria-label="Back to top"
            >
              Back to top <span aria-hidden="true">↑</span>
            </a>
          </nav>
          <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-slate-700">
            © {currentYear} {siteConfig.brand} · Built with React, TypeScript &amp; Vite
          </p>
        </div>
      </div>
    </motion.footer>
  )
}
