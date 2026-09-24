import { motion, useReducedMotion } from 'motion/react'
import type { Certification } from '../../data/certifications'
import { CertificationVisual } from './CertificationVisual'

type CertificationCardProps = {
  certification: Certification
  index: number
}

const columnClasses = {
  standard: 'lg:col-span-4',
  feature: 'lg:col-span-8',
  wide: 'lg:col-span-12',
  foundation: 'lg:col-span-12',
} as const

export function CertificationCard({ certification, index }: CertificationCardProps) {
  const shouldReduceMotion = useReducedMotion()
  const isWide = certification.prominence === 'wide' || certification.prominence === 'foundation'

  return (
    <motion.article
      className={`credential-card group relative min-w-0 overflow-hidden rounded-[1.6rem] border border-white/[0.075] p-4 sm:p-5 ${columnClasses[certification.prominence]}`}
      data-accent={certification.accent}
      data-prominence={certification.prominence}
      aria-labelledby={`${certification.id}-title`}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.6,
        delay: shouldReduceMotion ? 0 : index * 0.065,
        ease: 'easeOut',
      }}
      whileHover={shouldReduceMotion ? undefined : { y: -3 }}
    >
      <div className="relative z-10 flex items-center justify-between gap-4 px-1 pb-4">
        <div className="flex items-center gap-3">
          <span className="credential-status h-1.5 w-1.5 rounded-full bg-current shadow-[0_0_10px_currentColor]" aria-hidden="true" />
          <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-slate-600">
            {certification.code}
          </p>
        </div>
        <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-slate-700">
          Recorded credential
        </p>
      </div>

      <div className={isWide ? 'relative z-10 grid gap-5 md:grid-cols-[16rem_minmax(0,1fr)]' : 'relative z-10'}>
        <CertificationVisual certification={certification} />

        <div className={isWide ? 'flex min-w-0 flex-col justify-center px-1 py-2 md:px-4' : 'px-1 pb-2 pt-6'}>
          <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-cyan-200/50">
            {certification.issuer}
          </p>
          <h4
            id={`${certification.id}-title`}
            className={`mt-3 font-bold leading-tight tracking-[-0.03em] text-slate-100 ${
              certification.prominence === 'feature' || isWide
                ? 'text-xl sm:text-2xl'
                : 'text-lg sm:text-xl'
            }`}
          >
            {certification.title}
          </h4>
          <p className="mt-4 text-xs leading-5 text-slate-500">{certification.category}</p>

          <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/[0.06] pt-4">
            {certification.issued && (
              <div>
                <dt className="font-mono text-[8px] uppercase tracking-[0.18em] text-slate-700">
                  Issued
                </dt>
                <dd className="mt-1.5 text-xs font-semibold text-slate-300">
                  {certification.issued}
                </dd>
              </div>
            )}
            {certification.expires && (
              <div>
                <dt className="font-mono text-[8px] uppercase tracking-[0.18em] text-slate-700">
                  Expiration
                </dt>
                <dd className="mt-1.5 text-xs font-semibold text-slate-300">
                  {certification.expires}
                </dd>
              </div>
            )}
            {certification.score && (
              <div>
                <dt className="font-mono text-[8px] uppercase tracking-[0.18em] text-slate-700">
                  Score
                </dt>
                <dd className="mt-1.5 text-xs font-semibold text-slate-300">
                  {certification.score}
                </dd>
              </div>
            )}
            {certification.credentialId && (
              <div>
                <dt className="font-mono text-[8px] uppercase tracking-[0.18em] text-slate-700">
                  Credential ID
                </dt>
                <dd className="mt-1.5 text-xs font-semibold text-slate-300">
                  {certification.credentialId}
                </dd>
              </div>
            )}
          </dl>

          {certification.certificateUrl && (
            <a
              href={certification.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View certificate for ${certification.title} (opens in a new tab)`}
              className="mt-6 inline-flex min-h-11 w-fit items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.025] px-3.5 font-mono text-[9px] uppercase tracking-[0.16em] text-cyan-200/65 transition-colors hover:border-cyan-200/20 hover:bg-cyan-300/[0.05] hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07131b]"
            >
              View Certificate
              <span className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">
                ↗
              </span>
            </a>
          )}
        </div>
      </div>

      <span
        className="absolute inset-x-5 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-cyan-300/60 to-transparent transition-transform duration-500 group-hover:scale-x-100"
        aria-hidden="true"
      />
    </motion.article>
  )
}
