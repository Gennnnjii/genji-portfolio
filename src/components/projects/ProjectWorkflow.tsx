import { motion, useReducedMotion } from 'motion/react'
import type { ProjectWorkflowStep } from '../../data/projects'

type ProjectWorkflowProps = {
  steps: readonly ProjectWorkflowStep[]
}

export function ProjectWorkflow({ steps }: ProjectWorkflowProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      className="project-workflow relative overflow-hidden rounded-[1.75rem] border border-cyan-200/[0.1] p-5 sm:p-8 lg:p-10"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="relative z-10 flex flex-col gap-4 border-b border-white/[0.07] pb-7 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-cyan-200/60">
            Flagship workflow / End to end
          </p>
          <h4 className="mt-3 text-2xl font-bold tracking-[-0.035em] text-white sm:text-3xl">
            From first inquiry to a complete CAS record.
          </h4>
        </div>
        <p className="max-w-sm text-xs leading-6 text-slate-500 sm:text-right">
          A cross-role flow Kevin is especially proud to have implemented and integrated.
        </p>
      </div>

      <ol className="relative z-10 mt-8 grid gap-4 md:grid-cols-4 md:gap-3">
        {steps.map((step, index) => (
          <motion.li
            key={step.code}
            className="group relative min-w-0 rounded-2xl border border-white/[0.07] bg-[#061018]/80 p-5 md:min-h-48"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.5,
              delay: shouldReduceMotion ? 0 : index * 0.1,
              ease: 'easeOut',
            }}
          >
            <div className="flex items-center gap-3">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-cyan-200/25 bg-cyan-300/[0.055] font-mono text-[9px] text-cyan-100/80 shadow-[0_0_20px_rgba(44,191,230,.08)]">
                {step.code}
              </span>
              {index < steps.length - 1 && (
                <span
                  className="h-px flex-1 bg-gradient-to-r from-cyan-300/35 to-blue-400/10 md:absolute md:left-[calc(50%+1rem)] md:top-9 md:z-20 md:w-[calc(100%-1.25rem)]"
                  aria-hidden="true"
                />
              )}
            </div>
            <h5 className="mt-6 text-base font-bold text-slate-100">{step.title}</h5>
            <p className="mt-3 text-xs leading-6 text-slate-500">{step.description}</p>
            <span
              className="absolute inset-x-5 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-cyan-300/55 to-transparent transition-transform duration-500 group-hover:scale-x-100"
              aria-hidden="true"
            />
          </motion.li>
        ))}
      </ol>

      <div
        className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-cyan-500/[0.06] blur-[90px]"
        aria-hidden="true"
      />
    </motion.div>
  )
}
