import { motion, useReducedMotion } from 'motion/react'
import { siteConfig } from '../../data/site'
import { Icon } from '../ui/Icon'
import { SectionHeading } from '../ui/SectionHeading'

const channelOrder = ['Email', 'GitHub', 'LinkedIn'] as const

const contactChannels = channelOrder.flatMap((label) => {
  const channel = siteConfig.socialLinks.find((link) => link.label === label)
  return channel ? [channel] : []
})

const directions = [
  'Network Engineering / Administration',
  'Cybersecurity / Network Security',
  'Full-Stack Development',
  'AI-Assisted Systems / Exploration',
] as const

export function ContactSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40"
      aria-labelledby="contact-title"
    >
      <div className="contact-section-grid pointer-events-none absolute inset-0 -z-20" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-56 top-[18%] -z-10 h-[36rem] w-[36rem] rounded-full bg-cyan-500/[0.045] blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-56 bottom-[6%] -z-10 h-[38rem] w-[38rem] rounded-full bg-blue-600/[0.05] blur-[135px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div id="contact-title">
            <SectionHeading
              eyebrow="CONTACT / 005"
              title="Let's"
              accent="Connect."
              description="I'm an early-career IT professional interested in opportunities and conversations around network engineering, cybersecurity, full-stack development, and practical IT systems."
            />
          </div>
        </motion.div>

        <div className="mt-16 grid gap-5 lg:mt-24 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
          <motion.article
            className="contact-panel relative min-w-0 overflow-hidden rounded-[1.8rem] border border-white/[0.08] p-6 sm:p-8 lg:p-10"
            initial={shouldReduceMotion ? false : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            aria-labelledby="contact-direction-title"
          >
            <div className="relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.07] pb-5">
                <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-cyan-200/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.65)]" aria-hidden="true" />
                  Connection status / Open
                </div>
                <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-slate-700">
                  Mabalacat · PH
                </span>
              </div>

              <p className="mt-8 font-mono text-[9px] uppercase tracking-[0.2em] text-cyan-200/50">
                Current direction
              </p>
              <h3
                id="contact-direction-title"
                className="mt-3 max-w-xl text-3xl font-bold leading-tight tracking-[-0.045em] text-white sm:text-4xl"
              >
                Practical systems, secure networks, and thoughtful software.
              </h3>
              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
                {siteConfig.name} is an early-career IT professional completing his BS Information
                Technology degree at National University, focused on networking and security while
                continuing to build full-stack capability.
              </p>

              <ul className="mt-8 grid gap-2 sm:grid-cols-2" aria-label="Professional interests">
                {directions.map((direction) => (
                  <li
                    key={direction}
                    className="flex min-w-0 items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.018] px-3.5 py-3 text-xs leading-5 text-slate-500"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-300/60" aria-hidden="true" />
                    <span>{direction}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-9 border-t border-white/[0.07] pt-6">
                <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-slate-700">
                  Location
                </p>
                <p className="mt-2 text-sm text-slate-300">{siteConfig.contact.location}</p>
              </div>
            </div>
          </motion.article>

          <motion.div
            className="grid min-w-0 gap-4 sm:grid-cols-2"
            initial={shouldReduceMotion ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.09 } },
            }}
            role="group"
            aria-label="Contact channels"
          >
            {contactChannels.map((channel) => {
              const isEmail = channel.label === 'Email'

              return (
                <motion.a
                  key={channel.label}
                  href={channel.href}
                  target={channel.external ? '_blank' : undefined}
                  rel={channel.external ? 'noopener noreferrer' : undefined}
                  aria-label={channel.external ? `${channel.label} (opens in a new tab)` : 'Send Email'}
                  className={`contact-channel group relative min-w-0 overflow-hidden rounded-[1.6rem] border border-white/[0.08] p-6 sm:p-7 ${
                    isEmail ? 'sm:col-span-2 sm:min-h-72' : 'sm:min-h-64'
                  }`}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
                  data-primary={isEmail ? 'true' : 'false'}
                >
                  <div className="relative z-10 flex h-full min-h-40 flex-col justify-between gap-8">
                    <div className="flex items-center justify-between gap-4">
                      <span className="grid h-11 w-11 place-items-center rounded-xl border border-current/20 bg-current/[0.04] text-cyan-200/80">
                        <Icon name={channel.icon} className="h-[18px] w-[18px]" />
                      </span>
                      <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-slate-700">
                        {isEmail ? 'Primary channel' : 'Professional profile'}
                      </span>
                    </div>

                    <div className="min-w-0">
                      <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-cyan-200/50">
                        {isEmail ? 'Direct contact' : `Connect / ${channel.label}`}
                      </p>
                      <h3 className={`mt-3 font-bold tracking-[-0.04em] text-white ${isEmail ? 'text-3xl sm:text-4xl' : 'text-2xl'}`}>
                        {isEmail ? 'Send Email' : channel.label}
                      </h3>
                      <p className={`mt-3 min-w-0 text-sm leading-6 text-slate-500 ${isEmail ? 'break-all sm:break-normal' : 'break-words'}`}>
                        {channel.display}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.18em] text-cyan-200/55">
                      <span>{isEmail ? 'Open email application' : 'Open profile'}</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                        ↗
                      </span>
                    </div>
                  </div>
                </motion.a>
              )
            })}
          </motion.div>
        </div>

        <motion.div
          className="mt-16 grid grid-cols-[auto_1fr_auto_1fr_auto_1fr_auto] items-center gap-2 font-mono text-[7px] uppercase tracking-[0.14em] text-slate-700 sm:mt-20 sm:gap-4 sm:text-[8px] sm:tracking-[0.2em]"
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          aria-hidden="true"
        >
          <span>GENJI</span>
          <span className="h-px bg-gradient-to-r from-cyan-300/25 to-blue-400/10" />
          <span>EMAIL</span>
          <span className="h-px bg-gradient-to-r from-cyan-300/25 to-blue-400/10" />
          <span>GITHUB</span>
          <span className="h-px bg-gradient-to-r from-cyan-300/25 to-blue-400/10" />
          <span>LINKEDIN</span>
        </motion.div>
      </div>
    </section>
  )
}
