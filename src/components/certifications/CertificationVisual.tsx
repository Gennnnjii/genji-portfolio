import { motion, useReducedMotion } from 'motion/react'
import type { Certification } from '../../data/certifications'

type CertificationVisualProps = {
  certification: Certification
}

export function CertificationVisual({ certification }: CertificationVisualProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div
      className="credential-visual relative grid min-h-44 place-items-center overflow-hidden rounded-2xl border border-white/[0.07]"
      data-accent={certification.accent}
    >
      {certification.badgeSrc ? (
        <img
          src={certification.badgeSrc}
          alt={certification.badgeAlt}
          className="h-full max-h-48 w-full object-contain p-6"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center" aria-hidden="true">
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 420 220"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M0 55h88l42 34h156l44-34h90M0 168h104l38-31h132l45 31h101"
              fill="none"
              stroke="currentColor"
              strokeOpacity=".12"
              strokeWidth="1"
              initial={shouldReduceMotion ? false : { pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: 'easeOut' }}
            />
            <circle cx="130" cy="89" r="3" fill="currentColor" fillOpacity=".35" />
            <circle cx="286" cy="89" r="3" fill="currentColor" fillOpacity=".25" />
            <circle cx="142" cy="137" r="3" fill="currentColor" fillOpacity=".25" />
            <circle cx="274" cy="137" r="3" fill="currentColor" fillOpacity=".35" />
          </svg>

          <div className="relative text-center">
            <div className="credential-mark relative mx-auto grid h-20 w-20 place-items-center rounded-[1.35rem] border border-current/20 bg-current/[0.035] sm:h-24 sm:w-24">
              <span className="absolute inset-2 rotate-45 border border-current/[0.08]" />
              <span className="relative font-mono text-[11px] font-bold tracking-[0.14em]">
                {certification.mark}
              </span>
            </div>
            <p className="mt-4 font-mono text-[8px] uppercase tracking-[0.22em] text-slate-700">
              Badge artwork / Reserved
            </p>
          </div>

          <span className="absolute left-3 top-3 h-4 w-4 border-l border-t border-current/20" />
          <span className="absolute bottom-3 right-3 h-4 w-4 border-b border-r border-current/20" />
        </div>
      )}
    </div>
  )
}
