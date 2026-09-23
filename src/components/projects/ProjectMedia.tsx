import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import type { ProjectMediaItem } from '../../data/projects'

type ProjectMediaProps = {
  projectName: string
  media: readonly ProjectMediaItem[]
}

function MediaPlaceholder({ item }: { item: ProjectMediaItem }) {
  return (
    <div className="absolute inset-0 grid place-items-center overflow-hidden px-6 py-12 text-center">
      <svg
        className="absolute inset-0 h-full w-full opacity-75"
        viewBox="0 0 900 560"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 118h168l65 76h176l82-88h178l66 82h165M0 438h146l83-86h170l73 72h189l64-92h175"
          fill="none"
          stroke="rgba(75, 213, 243, 0.12)"
          strokeWidth="1"
        />
        <path
          d="M154 0v118M409 194v158M725 188v144M229 352v208M661 424v136"
          fill="none"
          stroke="rgba(70, 139, 235, 0.08)"
          strokeWidth="1"
          strokeDasharray="5 9"
        />
        <circle cx="168" cy="118" r="4" fill="#43d9f5" fillOpacity=".48" />
        <circle cx="409" cy="194" r="4" fill="#43d9f5" fillOpacity=".38" />
        <circle cx="725" cy="188" r="4" fill="#4f8dff" fillOpacity=".42" />
        <circle cx="229" cy="352" r="4" fill="#43d9f5" fillOpacity=".38" />
        <circle cx="661" cy="424" r="4" fill="#4f8dff" fillOpacity=".42" />
      </svg>

      <div className="relative max-w-md">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-cyan-200/20 bg-cyan-300/[0.045] shadow-[0_0_45px_rgba(27,173,220,0.1)]">
          <span className="font-mono text-xs font-bold tracking-[0.16em] text-cyan-100/75">A/H</span>
        </div>
        <p className="mt-7 font-mono text-[9px] uppercase tracking-[0.26em] text-cyan-200/55">
          {item.code} / Media slot
        </p>
        <p className="mt-3 text-xl font-bold tracking-[-0.025em] text-slate-100 sm:text-2xl">
          {item.label}
        </p>
        <p className="mx-auto mt-3 max-w-xs text-xs leading-6 text-slate-500 sm:text-sm">
          {item.description}
        </p>
        <p className="mt-6 font-mono text-[8px] uppercase tracking-[0.2em] text-slate-700">
          Project capture reserved
        </p>
      </div>
    </div>
  )
}

export function ProjectMedia({ projectName, media }: ProjectMediaProps) {
  const shouldReduceMotion = useReducedMotion()
  const [selectedMediaId, setSelectedMediaId] = useState(media[0]?.id ?? '')
  const selectedMedia = media.find((item) => item.id === selectedMediaId) ?? media[0]
  const availableMediaCount = media.filter((item) => item.src).length
  const reservedMediaCount = media.length - availableMediaCount

  if (!selectedMedia) return null

  return (
    <motion.figure
      className="project-media-shell overflow-hidden rounded-[1.75rem] border border-white/[0.085]"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.07] px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-cyan-300/80 shadow-[0_0_12px_rgba(103,232,249,.48)]" />
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-500">
            Media showcase / Interface captures
          </span>
        </div>
        <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-slate-700">
          {String(media.length).padStart(2, '0')} interface views
        </span>
      </div>

      <div className="grid lg:grid-cols-[minmax(0,1fr)_17rem]">
        <div className="project-media-surface relative min-h-[24rem] overflow-hidden sm:min-h-[32rem] lg:min-h-[38rem]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={selectedMedia.id}
              className="absolute inset-0"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.25, ease: 'easeOut' }}
            >
              {selectedMedia.src ? (
                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.alt}
                  className="h-full w-full object-contain object-center"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <MediaPlaceholder item={selectedMedia} />
              )}
            </motion.div>
          </AnimatePresence>

          <span className="absolute left-4 top-4 h-5 w-5 border-l border-t border-cyan-200/25" aria-hidden="true" />
          <span className="absolute bottom-4 right-4 h-5 w-5 border-b border-r border-cyan-200/25" aria-hidden="true" />
        </div>

        <div className="border-t border-white/[0.07] bg-[#040b10]/90 p-3 lg:border-l lg:border-t-0">
          <p className="px-2 pb-3 pt-1 font-mono text-[8px] uppercase tracking-[0.2em] text-slate-700">
            Capture directory
          </p>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-1">
            {media.map((item, index) => {
              const isSelected = item.id === selectedMedia.id

              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={isSelected}
                  aria-label={`Preview ${item.label}`}
                  data-planned-source={item.plannedSource}
                  onClick={() => setSelectedMediaId(item.id)}
                  className={`group min-w-0 rounded-xl border px-3 py-3 text-left transition-colors sm:px-4 ${
                    isSelected
                      ? 'border-cyan-200/20 bg-cyan-300/[0.06]'
                      : 'border-white/[0.055] bg-white/[0.018] hover:border-white/10 hover:bg-white/[0.035]'
                  }`}
                >
                  <span className="flex items-center justify-between gap-2">
                    <span
                      className={`font-mono text-[8px] tracking-[0.18em] ${
                        isSelected ? 'text-cyan-200/65' : 'text-slate-700'
                      }`}
                    >
                      {item.code}
                    </span>
                    <span className="font-mono text-[8px] text-slate-800">0{index + 1}</span>
                  </span>
                  <span
                    className={`mt-2 block truncate text-[11px] font-semibold sm:text-xs ${
                      isSelected ? 'text-slate-100' : 'text-slate-500 group-hover:text-slate-300'
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <figcaption className="border-t border-white/[0.07] px-4 py-3 font-mono text-[8px] leading-5 tracking-[0.12em] text-slate-700 sm:px-6">
        {projectName} / {availableMediaCount} real interface captures integrated
        {reservedMediaCount > 0
          ? `; ${reservedMediaCount} planned media slots remain intentionally reserved.`
          : '.'}
      </figcaption>
    </motion.figure>
  )
}
