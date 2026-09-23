import { motion, useReducedMotion } from 'motion/react'

type ProfileVisualProps = {
  imageSrc?: string | null
  name: string
}

const focusAreas = [
  { label: 'NETWORK', className: '-left-2 top-[19%] sm:-left-11' },
  { label: 'SECURITY', className: '-right-2 top-[42%] sm:-right-12' },
  { label: 'DEVELOPMENT', className: 'bottom-[14%] -left-3 sm:-left-10' },
]

export function ProfileVisual({ imageSrc, name }: ProfileVisualProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.figure
      className="relative mx-auto w-full max-w-[22rem] sm:max-w-[25rem] lg:max-w-[27rem]"
      initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.94, x: 24 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.28, ease: 'easeOut' }}
    >
      <motion.div
        className="profile-frame relative aspect-[4/5] rounded-[2rem] bg-[#071017]/80 p-2 shadow-[0_30px_90px_rgba(0,0,0,0.52)]"
        animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="relative h-full overflow-hidden rounded-[1.6rem] border border-white/[0.06] bg-[radial-gradient(circle_at_50%_30%,rgba(38,167,212,0.15),transparent_44%),linear-gradient(155deg,#07131b,#03070b_64%)]">
          <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(88,218,245,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(88,218,245,.08)_1px,transparent_1px)] [background-size:32px_32px]" />
          <div className="absolute left-5 top-5 flex items-center gap-2 font-mono text-[9px] tracking-[0.2em] text-cyan-200/55">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
            PROFILE / 001
          </div>
          <div className="absolute right-5 top-5 font-mono text-[9px] text-slate-600">14°35&apos;N</div>

          {imageSrc ? (
            <img
              src={imageSrc}
              alt={name}
              width={1122}
              height={1402}
              className="h-full w-full object-cover object-center"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          ) : (
            <div
              role="img"
              aria-label={`Profile photo placeholder for ${name}`}
              className="absolute inset-0 grid place-items-center"
            >
              <div className="relative grid h-44 w-44 place-items-center rounded-full border border-cyan-200/10 bg-cyan-300/[0.025] sm:h-52 sm:w-52">
                <div className="absolute inset-4 rounded-full border border-dashed border-cyan-200/10" />
                <span className="font-display bg-gradient-to-br from-white via-cyan-100 to-cyan-400 bg-clip-text text-7xl font-black tracking-[-0.1em] text-transparent sm:text-8xl">
                  KT
                </span>
              </div>
            </div>
          )}

          <div className="profile-scan absolute inset-x-0 top-0 h-24" />
          <div className="absolute inset-x-5 bottom-5 flex items-end justify-between border-t border-white/[0.08] pt-4">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-slate-500">Identity</p>
              <p className="mt-1 text-xs font-semibold tracking-[0.16em] text-slate-200">
                KEVIN T. TOLENTINO
              </p>
            </div>
            <div className="mb-1 flex items-center gap-2">
              <span className="node-pulse h-1.5 w-1.5 rounded-full bg-cyan-300" />
              <span className="font-mono text-[9px] text-cyan-200/65">ONLINE</span>
            </div>
          </div>

          <span className="absolute left-4 top-4 h-5 w-5 border-l border-t border-cyan-200/30" />
          <span className="absolute bottom-4 right-4 h-5 w-5 border-b border-r border-cyan-200/30" />
        </div>
      </motion.div>

      {focusAreas.map((area, index) => (
        <motion.div
          key={area.label}
          className={`absolute z-10 flex items-center gap-2 rounded-lg border border-white/[0.08] bg-[#061018]/85 px-3 py-2 shadow-lg backdrop-blur-md ${area.className}`}
          initial={shouldReduceMotion ? false : { opacity: 0, x: index === 1 ? 12 : -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.9 + index * 0.12 }}
        >
          <span className="h-1 w-1 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(103,232,249,.8)]" />
          <span className="font-mono text-[8px] tracking-[0.16em] text-slate-400 sm:text-[9px]">
            {area.label}
          </span>
        </motion.div>
      ))}

      <figcaption className="sr-only">
        {imageSrc ? `Profile photo of ${name}.` : `Reserved profile photo area for ${name}.`}
      </figcaption>
    </motion.figure>
  )
}
