import { motion, useReducedMotion } from 'motion/react'
import type { SelectedProjectData } from '../../data/projects'
import { Icon } from '../ui/Icon'
import { SelectedProjectVisual } from './SelectedProjectVisual'

type SelectedProjectCardProps = {
  project: SelectedProjectData
  index: number
}

export function SelectedProjectCard({ project, index }: SelectedProjectCardProps) {
  const shouldReduceMotion = useReducedMotion()
  const isPrimary = project.prominence === 'primary'

  return (
    <motion.article
      className={`selected-project-card group relative min-w-0 overflow-hidden rounded-[1.65rem] border border-white/[0.075] p-5 sm:p-7 ${
        isPrimary ? 'lg:col-span-12' : 'lg:col-span-6'
      }`}
      data-accent={project.accent}
      data-prominence={project.prominence}
      aria-labelledby={`${project.id}-title`}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.65,
        delay: shouldReduceMotion ? 0 : index * 0.08,
        ease: 'easeOut',
      }}
      whileHover={shouldReduceMotion ? undefined : { y: -3 }}
    >
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.065] pb-4">
        <div className="flex items-center gap-3 font-mono text-[8px] uppercase tracking-[0.2em]">
          <span className="selected-project-node h-1.5 w-1.5 rounded-full bg-current shadow-[0_0_10px_currentColor]" aria-hidden="true" />
          <span className="text-cyan-200/55">Project / {project.index}</span>
        </div>
        <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-slate-600">
          {project.context}
        </span>
      </div>

      <div
        className={`relative z-10 mt-6 grid gap-7 ${
          isPrimary ? 'lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)] lg:items-stretch' : ''
        }`}
      >
        <div className="min-w-0">
          <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-cyan-200/50">
            {project.category}
          </p>
          <h4
            id={`${project.id}-title`}
            className={`mt-3 font-bold leading-tight tracking-[-0.04em] text-white ${
              isPrimary ? 'text-2xl sm:text-3xl lg:text-4xl' : 'text-xl sm:text-2xl'
            }`}
          >
            {project.title}
          </h4>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400">{project.description}</p>

          <div className="mt-6 flex items-center gap-3">
            <span className="h-px w-8 bg-cyan-300/25" aria-hidden="true" />
            <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-slate-500">
              {project.focus}
            </p>
          </div>

          <ul className={`mt-6 grid gap-x-6 ${isPrimary ? 'sm:grid-cols-2' : ''}`}>
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-3 border-t border-white/[0.055] py-3 text-xs leading-5 text-slate-500"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-300/55" aria-hidden="true" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <SelectedProjectVisual project={project} />
      </div>

      <div className="relative z-10 mt-7 border-t border-white/[0.065] pt-6">
        <ol className="flex flex-wrap items-center gap-2" aria-label={`${project.title} technical workflow`}>
          {project.workflow.map((step, stepIndex) => (
            <li key={step} className="flex items-center gap-2">
              <span className="rounded-md border border-white/[0.065] bg-white/[0.02] px-2.5 py-1.5 font-mono text-[8px] uppercase tracking-[0.12em] text-slate-500">
                {step}
              </span>
              {stepIndex < project.workflow.length - 1 && (
                <span className="text-[9px] text-cyan-200/25" aria-hidden="true">→</span>
              )}
            </li>
          ))}
        </ol>

        {project.endpoints && (
          <div
            className="mt-5 flex flex-wrap gap-2"
            role="group"
            aria-label="Example REST endpoints"
          >
            {project.endpoints.map((endpoint) => (
              <code
                key={endpoint}
                className="rounded-md border border-blue-300/[0.1] bg-blue-400/[0.035] px-2.5 py-1.5 font-mono text-[9px] text-blue-200/55"
              >
                {endpoint}
              </code>
            ))}
          </div>
        )}

        <ul className="mt-5 flex min-w-0 flex-wrap gap-2" aria-label={`${project.title} technologies`}>
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-lg border border-cyan-200/[0.08] bg-cyan-300/[0.025] px-2.5 py-1.5 text-[10px] text-slate-400"
            >
              {technology}
            </li>
          ))}
        </ul>

        {project.repositoryUrl && (
          <a
            href={project.repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View source code for ${project.title} on GitHub (opens in a new tab)`}
            className="mt-5 inline-flex min-h-11 w-fit items-center gap-2.5 rounded-lg border border-white/[0.08] bg-white/[0.025] px-3.5 font-mono text-[9px] uppercase tracking-[0.16em] text-cyan-200/65 transition-colors hover:border-cyan-200/20 hover:bg-cyan-300/[0.05] hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#03090d]"
          >
            <Icon name="github" className="h-4 w-4" />
            Source Code
            <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>

      <span
        className="absolute inset-x-6 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-cyan-300/55 to-transparent transition-transform duration-500 group-hover:scale-x-100"
        aria-hidden="true"
      />
    </motion.article>
  )
}
