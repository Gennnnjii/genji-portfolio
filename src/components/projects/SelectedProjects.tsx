import { motion, useReducedMotion } from 'motion/react'
import type { SelectedProjectData } from '../../data/projects'
import { SelectedProjectCard } from './SelectedProjectCard'

type SelectedProjectsProps = {
  projects: readonly SelectedProjectData[]
}

export function SelectedProjects({ projects }: SelectedProjectsProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      className="selected-projects relative mt-28 border-t border-white/[0.08] pt-20 lg:mt-40 lg:pt-28"
      aria-labelledby="selected-projects-title"
    >
      <motion.div
        className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-cyan-300 to-transparent" aria-hidden="true" />
            <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-cyan-200/60">
              Selected work / Supporting projects
            </p>
          </div>
          <h3
            id="selected-projects-title"
            className="mt-5 text-3xl font-bold tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl"
          >
            Additional Academic Projects
          </h3>
        </div>
        <p className="max-w-md text-xs leading-6 text-slate-600 sm:text-right">
          Focused academic work across networking, security, and mobile Firebase
          development—supporting the flagship case study above.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-4 lg:mt-14 lg:grid-cols-12">
        {projects.map((project, index) => (
          <SelectedProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <div
        className="pointer-events-none absolute -right-24 top-20 -z-10 h-80 w-80 rounded-full bg-cyan-500/[0.035] blur-[100px]"
        aria-hidden="true"
      />
    </section>
  )
}
