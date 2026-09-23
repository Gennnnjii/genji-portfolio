import { motion, useReducedMotion } from 'motion/react'
import type { FeaturedProjectData } from '../../data/projects'
import { ProjectMedia } from './ProjectMedia'
import { ProjectWorkflow } from './ProjectWorkflow'

type FeaturedProjectProps = {
  project: FeaturedProjectData
}

const revealItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function FeaturedProject({ project }: FeaturedProjectProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <article aria-labelledby={`${project.id}-title`}>
      <motion.div
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.09 } },
        }}
        initial={shouldReduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          variants={revealItem}
          transition={{ duration: 0.55 }}
          className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-5"
        >
          <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.22em]">
            <span className="text-cyan-200/65">Project / {project.index}</span>
            <span className="h-px w-8 bg-cyan-200/20" aria-hidden="true" />
            <span className="text-slate-600">Featured case study</span>
          </div>
          <span className="rounded-full border border-cyan-200/15 bg-cyan-300/[0.045] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.2em] text-cyan-100/65">
            {project.status}
          </span>
        </motion.div>

        <motion.h3
          id={`${project.id}-title`}
          variants={revealItem}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="font-display mt-8 break-words text-[clamp(2rem,10vw,7.6rem)] font-black leading-[0.82] tracking-[-0.065em] text-white"
        >
          {project.name}
        </motion.h3>

        <motion.div
          variants={revealItem}
          transition={{ duration: 0.65 }}
          className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_21rem] lg:items-end"
        >
          <p className="max-w-4xl text-xl font-medium leading-8 tracking-[-0.025em] text-slate-200 sm:text-2xl sm:leading-9 lg:text-3xl lg:leading-11">
            {project.subtitle}
          </p>
          <dl className="grid grid-cols-2 gap-4 border-l border-cyan-200/15 pl-5 sm:pl-7 lg:grid-cols-1">
            <div>
              <dt className="font-mono text-[8px] uppercase tracking-[0.2em] text-slate-700">
                Project type
              </dt>
              <dd className="mt-2 text-xs font-semibold leading-5 text-slate-300">
                {project.type}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[8px] uppercase tracking-[0.2em] text-slate-700">Role</dt>
              <dd className="mt-2 text-xs font-semibold leading-5 text-slate-300">
                {project.role}
              </dd>
            </div>
          </dl>
        </motion.div>
      </motion.div>

      <div className="mt-12 lg:mt-16">
        <ProjectMedia projectName={project.name} media={project.media} />
      </div>

      <div className="mt-16 grid gap-5 lg:mt-24 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          className="project-panel rounded-[1.6rem] border border-white/[0.075] p-6 sm:p-8"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-cyan-200/55">
            Overview / Context
          </p>
          <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">{project.overview}</p>
          <p className="mt-7 border-l border-cyan-200/20 pl-5 text-xs leading-6 text-slate-500">
            {project.ownershipNote}
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {project.roleFocus.map((focus) => (
              <span
                key={focus}
                className="rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 py-2 font-mono text-[8px] uppercase tracking-[0.16em] text-slate-500"
              >
                {focus}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="project-panel rounded-[1.6rem] border border-white/[0.075] p-6 sm:p-8"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: shouldReduceMotion ? 0 : 0.08, ease: 'easeOut' }}
        >
          <div className="flex items-center justify-between gap-4">
            <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-cyan-200/55">
              Technical stack
            </p>
            <span className="font-mono text-[8px] tracking-[0.16em] text-slate-800">05 LAYERS</span>
          </div>
          <div className="mt-6 space-y-5">
            {project.technology.map((group, groupIndex) => (
              <motion.div
                key={group.label}
                className="grid gap-3 border-t border-white/[0.06] pt-4 sm:grid-cols-[7.5rem_1fr]"
                initial={shouldReduceMotion ? false : { opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.45,
                  delay: shouldReduceMotion ? 0 : groupIndex * 0.05,
                  ease: 'easeOut',
                }}
              >
                <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-slate-600">
                  {group.label}
                </p>
                <ul className="flex min-w-0 flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-cyan-200/[0.08] bg-cyan-300/[0.025] px-2.5 py-1.5 text-[10px] text-slate-400 sm:text-[11px]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <p className="mt-6 font-mono text-[8px] leading-5 tracking-[0.11em] text-slate-700">
            Nexia and Gemini-powered functionality belong to the wider team-built system; this case
            study does not claim sole ownership of that AI work.
          </p>
        </motion.div>
      </div>

      <div className="mt-20 lg:mt-28">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-cyan-200/55">
              Contribution map / Selected work
            </p>
            <h4 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl">
              Built across workflows, roles, and runtime states.
            </h4>
          </div>
          <p className="max-w-sm text-xs leading-6 text-slate-600 sm:text-right">
            Focused contribution areas—not a claim of ownership over the full platform.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {project.contributions.map((group, index) => (
            <motion.div
              key={group.code}
              className="project-panel group relative overflow-hidden rounded-[1.5rem] border border-white/[0.075] p-6 sm:p-7"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.16 }}
              transition={{
                duration: 0.6,
                delay: shouldReduceMotion ? 0 : index * 0.08,
                ease: 'easeOut',
              }}
            >
              <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-cyan-200/50">
                {group.code}
              </p>
              <h5 className="mt-4 text-lg font-bold tracking-[-0.02em] text-slate-100">
                {group.title}
              </h5>
              <p className="mt-3 text-xs leading-6 text-slate-500">{group.summary}</p>
              <ul className="mt-6">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 border-t border-white/[0.055] py-3 text-xs leading-5 text-slate-400"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-300/55" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <span
                className="absolute inset-x-7 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-cyan-300/60 to-transparent transition-transform duration-500 group-hover:scale-x-100"
                aria-hidden="true"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-20 lg:mt-28">
        <ProjectWorkflow steps={project.workflow} />
      </div>

      <motion.div
        className="mt-20 grid gap-8 border-y border-white/[0.08] py-10 lg:mt-28 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16 lg:py-16"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-cyan-200/55">
            Engineering challenge / System integration
          </p>
          <h4 className="mt-5 text-3xl font-bold leading-tight tracking-[-0.045em] text-white sm:text-4xl">
            {project.integration.title}
          </h4>
          <p className="mt-6 text-sm leading-7 text-slate-400">{project.integration.summary}</p>

          <ul className="mt-8 grid gap-3">
            {project.integration.checkpoints.map((checkpoint) => (
              <li
                key={checkpoint}
                className="flex items-start gap-3 font-mono text-[9px] leading-5 tracking-[0.05em] text-slate-600"
              >
                <span className="mt-2 h-1 w-1 shrink-0 bg-cyan-300/60" aria-hidden="true" />
                <span>{checkpoint}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid content-start gap-3">
          {project.integration.layers.map((layer, index) => (
            <div key={layer.code}>
              <div className="project-layer grid gap-4 rounded-2xl border border-white/[0.07] p-5 sm:grid-cols-[7rem_1fr] sm:items-center sm:p-6">
                <div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-cyan-200/50">
                    {layer.code}
                  </p>
                  <p className="mt-2 text-sm font-bold text-slate-200">{layer.title}</p>
                </div>
                <p className="text-xs leading-6 text-slate-500">{layer.detail}</p>
              </div>
              {index < project.integration.layers.length - 1 && (
                <div
                  className="mx-8 flex h-7 items-center gap-3 font-mono text-[8px] tracking-[0.18em] text-cyan-200/30"
                  aria-hidden="true"
                >
                  <span className="h-full w-px bg-gradient-to-b from-cyan-300/30 to-blue-400/10" />
                  <span>CONTRACT / STATE</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-slate-700">
            Repository status
          </p>
          <p className="mt-2 text-sm font-semibold text-slate-300">{project.repository.label}</p>
          <p className="mt-1 text-xs leading-5 text-slate-600">{project.repository.note}</p>
        </div>
        <span className="inline-flex w-fit cursor-not-allowed items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3 font-mono text-[8px] uppercase tracking-[0.18em] text-slate-600">
          Case study / This section
          <span className="text-cyan-200/35" aria-hidden="true">↗</span>
        </span>
      </div>
    </article>
  )
}
