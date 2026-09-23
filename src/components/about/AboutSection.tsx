import { motion, useReducedMotion } from 'motion/react'
import { aboutCopy, aboutDetails } from '../../data/about'
import { SectionHeading } from '../ui/SectionHeading'

const revealItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export function AboutSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="about"
      className="relative isolate overflow-hidden px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40"
      aria-labelledby="about-title"
    >
      <div className="section-grid-fade pointer-events-none absolute inset-0 -z-20" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-cyan-500/[0.055] blur-[100px]"
        aria-hidden="true"
      />
      <motion.div
        className="absolute left-1/2 top-0 h-20 w-px origin-top bg-gradient-to-b from-cyan-300/60 to-transparent"
        initial={shouldReduceMotion ? false : { scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        aria-hidden="true"
      >
        <span className="absolute -bottom-1 -left-[3px] h-[7px] w-[7px] rounded-full border border-cyan-200/50 bg-[#041018] shadow-[0_0_14px_rgba(74,222,255,.5)]" />
      </motion.div>

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div id="about-title">
            <SectionHeading eyebrow="PROFILE / ABOUT" title="About" accent="Me." />
          </div>
        </motion.div>

        <div className="mt-14 grid items-start gap-12 lg:mt-20 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 xl:gap-28">
          <motion.div
            className="relative"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.12 } },
            }}
            initial={shouldReduceMotion ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.p
              variants={revealItem}
              transition={{ duration: 0.65 }}
              className="text-xl font-medium leading-9 tracking-[-0.02em] text-slate-100 sm:text-2xl sm:leading-10"
            >
              {aboutCopy.lead}
            </motion.p>
            <motion.p
              variants={revealItem}
              transition={{ duration: 0.65 }}
              className="mt-7 text-[0.95rem] leading-7 text-slate-400 sm:text-base sm:leading-8"
            >
              {aboutCopy.detail}
            </motion.p>

            <motion.blockquote
              variants={revealItem}
              transition={{ duration: 0.65 }}
              className="relative mt-10 border-l border-cyan-300/35 py-2 pl-6 sm:pl-8"
            >
              <span
                className="absolute -left-[3px] top-0 h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,.65)]"
                aria-hidden="true"
              />
              <p className="text-base italic leading-7 text-cyan-50/75 sm:text-lg sm:leading-8">
                “{aboutCopy.philosophy}”
              </p>
            </motion.blockquote>

            <motion.div
              variants={revealItem}
              transition={{ duration: 0.65 }}
              className="mt-10 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.22em] text-slate-600"
              aria-hidden="true"
            >
              <span>Interface</span>
              <span className="h-px flex-1 bg-gradient-to-r from-cyan-300/20 to-transparent" />
              <span>Infrastructure</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="about-matrix relative rounded-[1.75rem] border border-white/[0.075] p-4 sm:p-6"
            initial={shouldReduceMotion ? false : { opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="mb-4 flex items-center justify-between px-1 font-mono text-[9px] uppercase tracking-[0.2em] text-slate-600">
              <span>Profile Matrix</span>
              <span>06 Nodes / Active</span>
            </div>

            <svg
              className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
              viewBox="0 0 640 560"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <motion.path
                d="M80 102h154l66 84h185l75 96-96 98H282l-74 88H82"
                fill="none"
                stroke="rgba(72,218,245,.11)"
                strokeWidth="1"
                initial={shouldReduceMotion ? false : { pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, delay: 0.25, ease: 'easeOut' }}
              />
            </svg>

            <motion.dl
              className="relative grid gap-3 sm:grid-cols-2"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.08 } },
              }}
              initial={shouldReduceMotion ? false : 'hidden'}
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {aboutDetails.map((detail) => (
                <motion.div
                  key={detail.code}
                  variants={revealItem}
                  transition={{ duration: 0.5 }}
                  className={`group relative min-h-32 overflow-hidden rounded-xl border border-white/[0.07] bg-[#061018]/75 p-5 transition-colors hover:border-cyan-200/20 hover:bg-[#08151e]/90 ${
                    detail.featured ? 'sm:col-span-2' : ''
                  }`}
                >
                  <span className="absolute right-4 top-4 font-mono text-[8px] tracking-[0.18em] text-slate-700">
                    {detail.code}
                  </span>
                  <dt className="pr-14 font-mono text-[9px] uppercase tracking-[0.2em] text-cyan-200/55">
                    {detail.label}
                  </dt>
                  <dd className="mt-5 max-w-md text-sm font-semibold leading-6 text-slate-200 sm:text-base">
                    {detail.value}
                  </dd>
                  <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-cyan-300/60 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                </motion.div>
              ))}
            </motion.dl>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
