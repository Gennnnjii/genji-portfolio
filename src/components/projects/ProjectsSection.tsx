import { motion, useReducedMotion } from 'motion/react'
import { featuredProjects, selectedProjects } from '../../data/projects'
import { SectionHeading } from '../ui/SectionHeading'
import { FeaturedProject } from './FeaturedProject'
import { SelectedProjects } from './SelectedProjects'

export function ProjectsSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40"
      aria-labelledby="projects-title"
    >
      <div className="projects-section-grid pointer-events-none absolute inset-0 -z-20" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-64 top-[12%] -z-10 h-[42rem] w-[42rem] rounded-full bg-cyan-500/[0.045] blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-64 top-[48%] -z-10 h-[44rem] w-[44rem] rounded-full bg-blue-600/[0.05] blur-[140px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div id="projects-title">
            <SectionHeading
              eyebrow="PORTFOLIO / 003"
              title="Featured"
              accent="Project."
              description="A recruiter-focused look at the workflows, integration work, and runtime quality behind Kevin’s flagship academic build."
            />
          </div>
        </motion.div>

        <div className="mt-16 lg:mt-24">
          {featuredProjects.map((project) => (
            <FeaturedProject key={project.id} project={project} />
          ))}
        </div>

        <SelectedProjects projects={selectedProjects} />

        <motion.div
          className="mt-24 flex items-center gap-4 font-mono text-[9px] uppercase tracking-[0.22em] text-slate-700 lg:mt-32"
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          aria-hidden="true"
        >
          <span>Selected work / {String(selectedProjects.length).padStart(2, '0')} modules</span>
          <span className="h-px flex-1 bg-gradient-to-r from-white/[0.08] to-transparent" />
          <span>Next / Certifications</span>
        </motion.div>
      </div>
    </section>
  )
}
