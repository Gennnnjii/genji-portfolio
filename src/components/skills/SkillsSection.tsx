import type { PointerEvent } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { skillDomains, type SkillDomain, type SkillGroup } from '../../data/skills'
import { SectionHeading } from '../ui/SectionHeading'

type SkillModuleProps = {
  domain: SkillDomain
  index: number
  featured?: boolean
  wide?: boolean
  reducedMotion: boolean | null
}

type SkillGroupHeaderProps = {
  code: string
  title: string
  description: string
}

const domainsByGroup = (group: SkillGroup) =>
  skillDomains.filter((domain) => domain.group === group)

function SkillGroupHeader({ code, title, description }: SkillGroupHeaderProps) {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div className="flex items-center gap-3">
        <span className="font-mono text-[9px] tracking-[0.2em] text-cyan-200/50">{code}</span>
        <span className="h-px w-10 bg-cyan-200/15" aria-hidden="true" />
        <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-200">{title}</h3>
      </div>
      <p className="max-w-md text-xs leading-5 text-slate-600 sm:text-right">{description}</p>
    </div>
  )
}

function SkillModule({
  domain,
  index,
  featured = false,
  wide = false,
  reducedMotion,
}: SkillModuleProps) {
  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType !== 'mouse') return

    const bounds = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty('--spot-x', `${event.clientX - bounds.left}px`)
    event.currentTarget.style.setProperty('--spot-y', `${event.clientY - bounds.top}px`)
  }

  const columnClass = wide
    ? 'sm:grid-cols-2 lg:grid-cols-4'
    : featured
      ? 'sm:grid-cols-2'
      : 'sm:grid-cols-2'

  return (
    <motion.article

      data-accent={domain.accent}
      aria-labelledby={`${domain.id}-title`}
      className={`skill-module group relative min-w-0 overflow-hidden rounded-[1.6rem] border border-white/[0.075] p-5 sm:p-7 ${
        featured ? 'h-full' : ''
      }`}
      initial={reducedMotion ? false : { opacity: 0, y: 30, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.65, delay: reducedMotion ? 0 : index * 0.07, ease: 'easeOut' }}
      whileHover={reducedMotion ? undefined : { y: -4 }}
      onPointerMove={handlePointerMove}
    >
      <div className="relative z-10 flex items-start justify-between gap-5">
        <div className="flex min-w-0 items-start gap-4">
          <div className="skill-symbol grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-current/15 bg-current/[0.035] font-mono text-[11px] font-bold">
            {domain.symbol}
          </div>
          <div className="min-w-0">
            <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-slate-600">{domain.code}</p>
            <h4
              id={`${domain.id}-title`}
              className="mt-2 text-lg font-bold tracking-[-0.025em] text-slate-100 sm:text-xl"
            >
              {domain.title}
            </h4>
          </div>
        </div>
        <span className="rounded-md border border-white/[0.06] px-2 py-1 font-mono text-[8px] tracking-[0.16em] text-slate-600">
          {String(domain.items.length).padStart(2, '0')} ITEMS
        </span>
      </div>

      <p className="relative z-10 mt-6 max-w-2xl text-sm leading-6 text-slate-400">
        {domain.description}
      </p>

      <div className="relative z-10 my-6 flex items-center gap-3" aria-hidden="true">
        <span className="skill-module-line h-px w-10 bg-cyan-300/35 transition-[width] duration-500 group-hover:w-16" />
        <span className="h-px flex-1 bg-white/[0.055]" />
      </div>

      <ul className={`relative z-10 grid gap-x-6 ${columnClass}`}>
        {domain.items.map((item) => (
          <li
            key={item}
            className="flex min-w-0 items-start gap-2.5 border-t border-white/[0.055] py-2.5 text-[11px] leading-5 text-slate-400 sm:text-xs"
          >
            <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-cyan-300/55" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {domain.note && (
        <p className="relative z-10 mt-5 border-l border-cyan-300/20 pl-4 font-mono text-[9px] leading-5 text-slate-600">
          {domain.note}
        </p>
      )}

      <span
        className="absolute bottom-0 right-0 h-16 w-16 border-b border-r border-cyan-200/[0.08]"
        aria-hidden="true"
      />
    </motion.article>
  )
}

export function SkillsSection() {
  const shouldReduceMotion = useReducedMotion()
  const primaryDomains = domainsByGroup('primary')
  const developmentDomains = domainsByGroup('development')
  const foundationDomains = domainsByGroup('foundation')

  return (
    <section
      id="skills"
      className="relative isolate overflow-hidden px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40"
      aria-labelledby="skills-title"
    >
      <div className="skills-section-grid pointer-events-none absolute inset-0 -z-20" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-60 top-[18%] -z-10 h-[38rem] w-[38rem] rounded-full bg-blue-600/[0.06] blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-56 bottom-[10%] -z-10 h-[34rem] w-[34rem] rounded-full bg-cyan-500/[0.045] blur-[120px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div id="skills-title">
            <SectionHeading
              eyebrow="CAPABILITIES / 002"
              title="Technical"
              accent="Skills."
              description="A practical map of technologies and concepts developed through coursework, laboratories, and project experience — organized by domain, not arbitrary ratings."
            />
          </div>
        </motion.div>

        <div className="mt-16 space-y-20 lg:mt-24 lg:space-y-28">
          <div>
            <SkillGroupHeader
              code="DIRECTION / 01"
              title="Primary Career Directions"
              description="The two areas Kevin is intentionally developing toward as long-term career paths."
            />
            <div className="grid items-stretch gap-5 lg:grid-cols-2">
              {primaryDomains.map((domain, index) => (
                <SkillModule
                  key={domain.id}
                  domain={domain}
                  index={index}
                  featured
                  reducedMotion={shouldReduceMotion}
                />
              ))}
            </div>
          </div>

          <div>
            <SkillGroupHeader
              code="BUILD / 02"
              title="Development & Integration"
              description="Project experience connecting interfaces, APIs, validation, storage, and application states."
            />
            <div className="grid items-stretch gap-5 lg:grid-cols-2">
              {developmentDomains.map((domain, index) => (
                <SkillModule
                  key={domain.id}
                  domain={domain}
                  index={index}
                  reducedMotion={shouldReduceMotion}
                />
              ))}
            </div>
          </div>

          <div>
            <SkillGroupHeader
              code="FOUNDATION / 03"
              title="Data, Programming & Tooling"
              description="Supporting technologies used across development work, coursework, and technical laboratories."
            />
            <div className="grid items-stretch gap-5 lg:grid-cols-2">
              {foundationDomains.map((domain, index) => (
                <div key={domain.id} className={domain.id === 'tools-platforms' ? 'lg:col-span-2' : ''}>
                  <SkillModule
                    domain={domain}
                    index={index}
                    wide={domain.id === 'tools-platforms'}
                    reducedMotion={shouldReduceMotion}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          className="mt-20 flex items-center gap-4 font-mono text-[9px] uppercase tracking-[0.22em] text-slate-700 lg:mt-28"
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          aria-hidden="true"
        >
          <span>Learning is continuous</span>
          <span className="h-px flex-1 bg-gradient-to-r from-white/[0.08] to-transparent" />
          <span>Next / Projects</span>
        </motion.div>
      </div>
    </section>
  )
}
