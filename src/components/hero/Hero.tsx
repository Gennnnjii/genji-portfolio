import { motion, useReducedMotion } from 'motion/react'
import { siteConfig } from '../../data/site'
import { Icon } from '../ui/Icon'
import { ProfileVisual } from './ProfileVisual'
import { SocialLinks } from './SocialLinks'

const revealItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

function ResumeAction() {
  const shouldReduceMotion = useReducedMotion()
  const resumeUrl: string | null = siteConfig.resumeUrl
  const className =
    'group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl border border-white/[0.1] bg-white/[0.035] px-5 text-sm font-semibold text-slate-300 transition-colors hover:border-white/20 hover:bg-white/[0.065] hover:text-white disabled:cursor-not-allowed disabled:opacity-55'

  if (resumeUrl) {
    return (
      <motion.a
        href={resumeUrl}
        download
        className={className}
        whileHover={shouldReduceMotion ? undefined : { y: -2 }}
        whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
      >
        <Icon name="download" className="h-4 w-4" />
        Download Resume
      </motion.a>
    )
  }

  return (
    <button
      type="button"
      disabled
      className={className}
      title="Resume will be available soon"
      aria-label="Download Resume — coming soon"
    >
      <Icon name="download" className="h-4 w-4" />
      Download Resume
      <span className="rounded-md bg-white/[0.06] px-1.5 py-0.5 font-mono text-[8px] tracking-wider text-slate-500">
        SOON
      </span>
    </button>
  )
}

export function Hero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-svh max-w-7xl items-center px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:px-10 lg:pb-12 lg:pt-36"
      aria-labelledby="hero-title"
    >
      <div className="grid w-full items-center gap-16 lg:grid-cols-[1.18fr_0.82fr] lg:gap-12 xl:gap-24">
        <motion.div
          className="relative z-10 max-w-3xl"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.11 } },
          }}
          initial={shouldReduceMotion ? false : 'hidden'}
          animate="visible"
        >
          <motion.div
            variants={revealItem}
            transition={{ duration: 0.55 }}
            className="mb-5 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-gradient-to-r from-cyan-300 to-cyan-300/10" />
            <p className="font-mono text-xs font-medium tracking-[0.2em] text-cyan-200/80">
              Hello, I&apos;m
            </p>
          </motion.div>

          <motion.h1
            id="hero-title"
            variants={
              shouldReduceMotion
                ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
                : { hidden: { opacity: 1, y: 20 }, visible: { opacity: 1, y: 0 } }
            }
            transition={{ duration: shouldReduceMotion ? 0 : 0.65 }}
            className="hero-name font-display text-[clamp(4.35rem,15vw,8.5rem)] font-black leading-[0.78] tracking-[-0.075em] text-white"
          >
            GENJI
            <span className="bg-gradient-to-b from-cyan-200 to-blue-500 bg-clip-text text-transparent">
              .
            </span>
          </motion.h1>

          <motion.div variants={revealItem} transition={{ duration: 0.65 }} className="mt-8 sm:mt-10">
            <h2 className="max-w-2xl text-[clamp(1.45rem,3vw,2.25rem)] font-semibold leading-[1.16] tracking-[-0.035em] text-slate-100">
              Early-Career IT Professional
            </h2>
            <p className="mt-3 flex max-w-2xl flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500 sm:text-xs sm:tracking-[0.2em]">
              <span>Aspiring Network Engineer &amp; Cybersecurity Professional</span>
              <span className="text-cyan-400/50" aria-hidden="true">|</span>
              <span>Full-Stack Developer</span>
            </p>
          </motion.div>

          <motion.p
            variants={revealItem}
            transition={{ duration: 0.65 }}
            className="mt-6 max-w-2xl text-[0.94rem] leading-7 text-slate-400 sm:text-base sm:leading-7"
          >
            Early-career IT professional and 4th-year BS Information Technology student at National
            University with hands-on project and laboratory experience in networking, cybersecurity
            fundamentals, full-stack development, system integration, REST APIs, databases, testing,
            and technical troubleshooting.
          </motion.p>

          <motion.div
            variants={revealItem}
            transition={{ duration: 0.65 }}
            className="mt-8 flex flex-col gap-3 min-[430px]:flex-row sm:mt-9"
          >
            <motion.a
              href="#projects"
              className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-cyan-300 to-sky-500 px-5 text-sm font-bold text-[#021017] shadow-[0_10px_34px_rgba(30,174,219,0.18)] transition-[filter,box-shadow] hover:brightness-110 hover:shadow-[0_12px_40px_rgba(30,174,219,0.28)]"
              whileHover={shouldReduceMotion ? undefined : { y: -2 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
            >
              View My Work
              <Icon
                name="arrow-down"
                className="h-4 w-4 transition-transform group-hover:translate-y-0.5"
              />
            </motion.a>
            <ResumeAction />
          </motion.div>

          <motion.div variants={revealItem} transition={{ duration: 0.65 }} className="mt-8 sm:mt-10">
            <SocialLinks />
          </motion.div>
        </motion.div>

        <div className="relative z-10 mx-auto w-full max-w-[28rem] lg:mx-0 lg:justify-self-end">
          <ProfileVisual imageSrc={siteConfig.profileImageUrl} name={siteConfig.name} />
        </div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to the About section"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-3 font-mono text-[9px] tracking-[0.2em] text-slate-600 xl:flex"
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span>SCROLL TO EXPLORE</span>
        <motion.span
          className="grid h-7 w-7 place-items-center rounded-full border border-white/[0.08]"
          animate={shouldReduceMotion ? undefined : { y: [0, 3, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Icon name="arrow-down" className="h-3 w-3" />
        </motion.span>
      </motion.a>
    </section>
  )
}
