import { motion, useReducedMotion } from 'motion/react'
import {
  academicRecognition,
  education,
  type AcademicRecognition,
  type EducationRecord,
} from '../../data/education'

type EducationPanelProps = {
  record?: EducationRecord
  recognition?: AcademicRecognition
}

export function EducationPanel({
  record = education,
  recognition = academicRecognition,
}: EducationPanelProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.article
      className="education-panel relative overflow-hidden rounded-[1.8rem] border border-white/[0.08] p-5 sm:p-8 lg:p-10"
      aria-labelledby="education-heading"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      <div className="relative z-10 flex flex-col gap-5 border-b border-white/[0.075] pb-7 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-cyan-200/60">
            Education / Current academic position
          </p>
          <h3
            id="education-heading"
            className="mt-4 text-3xl font-bold tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl"
          >
            {record.institution}
          </h3>
        </div>
        <span className="w-fit rounded-full border border-cyan-200/15 bg-cyan-300/[0.045] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.2em] text-cyan-100/65">
          In progress
        </span>
      </div>

      <div className="relative z-10 mt-8 grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
        <div>
          <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-slate-700">Program</p>
          <p className="mt-3 text-xl font-semibold leading-8 tracking-[-0.025em] text-slate-100 sm:text-2xl">
            {record.degree}
          </p>

          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.018] p-4">
              <dt className="font-mono text-[8px] uppercase tracking-[0.18em] text-slate-700">
                Current level
              </dt>
              <dd className="mt-2 text-sm font-semibold leading-6 text-slate-300">
                {record.currentLevel}
              </dd>
            </div>
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.018] p-4">
              <dt className="font-mono text-[8px] uppercase tracking-[0.18em] text-slate-700">
                Expected graduation
              </dt>
              <dd className="mt-2 text-sm font-semibold leading-6 text-slate-300">
                {record.expectedGraduation}
              </dd>
            </div>
          </dl>

          <div className="mt-7 border-l border-cyan-200/20 pl-5">
            <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-slate-700">
              Professional direction
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              {record.professionalDirection}
            </p>
          </div>
        </div>

        <div className="academic-track rounded-2xl border border-white/[0.07] p-5 sm:p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-cyan-200/50">
                Recognition record
              </p>
              <h4 className="mt-3 text-lg font-bold leading-7 text-slate-100 sm:text-xl">
                {recognition.title}
              </h4>
            </div>
            <span className="shrink-0 font-mono text-[9px] tracking-[0.18em] text-slate-600">
              07 TERMS
            </span>
          </div>

          <p className="mt-4 text-xs leading-6 text-slate-500">{recognition.summary}</p>

          <ol
            className="mt-7 grid grid-cols-4 gap-x-2 gap-y-6 sm:grid-cols-7"
            aria-label="Seven recorded terms of academic recognition"
          >
            {recognition.recordedTerms.map((term, index) => (
              <motion.li
                key={term}
                className="relative text-center"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{
                  duration: 0.4,
                  delay: shouldReduceMotion ? 0 : index * 0.06,
                  ease: 'easeOut',
                }}
              >
                <span
                  className="relative z-10 mx-auto block h-3 w-3 rounded-full border border-cyan-200/35 bg-[#07131a] shadow-[0_0_13px_rgba(63,211,241,.14)]"
                  aria-hidden="true"
                />
                <span className="mt-3 block font-mono text-[7px] uppercase tracking-[0.12em] text-slate-600 sm:text-[8px]">
                  {term}
                </span>
                {index < recognition.recordedTerms.length - 1 && (
                  <span
                    className="absolute left-1/2 top-[5px] hidden h-px w-full bg-gradient-to-r from-cyan-300/25 to-blue-400/10 sm:block"
                    aria-hidden="true"
                  />
                )}
              </motion.li>
            ))}
          </ol>

          <p className="mt-8 border-t border-white/[0.06] pt-5 font-mono text-[8px] leading-5 tracking-[0.08em] text-slate-600">
            {recognition.verificationNote}
          </p>
        </div>
      </div>

      <div className="relative z-10 mt-10 grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center" aria-hidden="true">
        <span className="h-px bg-gradient-to-r from-transparent to-cyan-300/20" />
        <div className="flex items-center gap-3 font-mono text-[8px] uppercase tracking-[0.18em] text-slate-700">
          <span>BSIT</span>
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-300/60" />
          <span>Current / 4th year</span>
          <span className="h-1.5 w-1.5 rounded-full border border-blue-300/50" />
          <span>Expected / 2027</span>
        </div>
        <span className="h-px bg-gradient-to-r from-cyan-300/20 to-transparent" />
      </div>

      <div
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-cyan-500/[0.055] blur-[110px]"
        aria-hidden="true"
      />
    </motion.article>
  )
}
