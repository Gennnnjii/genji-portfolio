import { motion, useReducedMotion } from 'motion/react'
import { certifications } from '../../data/certifications'
import { SectionHeading } from '../ui/SectionHeading'
import { CertificationCard } from './CertificationCard'
import { EducationPanel } from './EducationPanel'

export function CertificationsSection() {
  const shouldReduceMotion = useReducedMotion()
  const networkCredentials = certifications.filter(
    (certification) => certification.prominence !== 'foundation',
  )
  const foundationCredentials = certifications.filter(
    (certification) => certification.prominence === 'foundation',
  )

  return (
    <section
      id="certifications"
      className="relative isolate overflow-hidden px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40"
      aria-labelledby="certifications-title"
    >
      <div className="credentials-section-grid pointer-events-none absolute inset-0 -z-20" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-56 top-[18%] -z-10 h-[38rem] w-[38rem] rounded-full bg-blue-600/[0.05] blur-[125px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-56 bottom-[18%] -z-10 h-[40rem] w-[40rem] rounded-full bg-cyan-500/[0.045] blur-[130px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div id="certifications-title">
            <SectionHeading
              eyebrow="CREDENTIALS / 004"
              title="Certifications"
              accent="& Education."
              description="Credential evidence supporting Kevin’s developing direction in networking, network security, and information technology—paired with his current academic position."
            />
          </div>
        </motion.div>

        <div className="mt-16 lg:mt-24">
          <div className="flex flex-col gap-4 border-b border-white/[0.08] pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-cyan-200/55">
                Credential matrix / Network track
              </p>
              <h3 className="mt-3 text-2xl font-bold tracking-[-0.035em] text-white sm:text-3xl">
                Networking-aligned credentials
              </h3>
            </div>
            <p className="max-w-md text-xs leading-6 text-slate-600 sm:text-right">
              Five Cisco learning credentials and one networking certification supporting Kevin’s
              primary professional direction.
            </p>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-12">
            {networkCredentials.map((certification, index) => (
              <CertificationCard
                key={certification.id}
                certification={certification}
                index={index}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 lg:mt-20">
          <div className="mb-6 flex items-center gap-3">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-cyan-200/50">
              Foundation / IT
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-cyan-300/15 to-transparent" aria-hidden="true" />
          </div>
          <div className="grid gap-4 lg:grid-cols-12">
            {foundationCredentials.map((certification, index) => (
              <CertificationCard
                key={certification.id}
                certification={certification}
                index={networkCredentials.length + index}
              />
            ))}
          </div>
        </div>

        <div className="mt-24 lg:mt-32">
          <EducationPanel />
        </div>

        <motion.div
          className="mt-24 flex items-center gap-4 font-mono text-[9px] uppercase tracking-[0.22em] text-slate-700 lg:mt-32"
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          aria-hidden="true"
        >
          <span>Credentials / Recorded</span>
          <span className="h-px flex-1 bg-gradient-to-r from-white/[0.08] to-transparent" />
          <span>Next / Contact</span>
        </motion.div>
      </div>
    </section>
  )
}
