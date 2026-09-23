import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import type {
  SelectedProjectData,
  SelectedProjectMediaComposition,
  SelectedProjectMediaItem,
} from '../../data/projects'

type SelectedProjectVisualProps = {
  project: SelectedProjectData
}

type SelectedProjectGalleryProps = {
  projectId: string
  projectTitle: string
  media: readonly SelectedProjectMediaItem[]
  composition: SelectedProjectMediaComposition
}

function SelectedProjectGallery({
  projectId,
  projectTitle,
  media,
  composition,
}: SelectedProjectGalleryProps) {
  const shouldReduceMotion = useReducedMotion()
  const [selectedMediaId, setSelectedMediaId] = useState(media[0]?.id ?? '')
  const selectedIndex = Math.max(
    0,
    media.findIndex((item) => item.id === selectedMediaId),
  )
  const selectedMedia = media[selectedIndex]
  const panelId = `${projectId}-selected-media`
  const labelId = `${projectId}-selected-media-label`
  const isPortraitShowcase = composition === 'portrait-showcase'

  if (!selectedMedia) {
    return null
  }

  return (
    <figure
      className="relative z-10 flex h-full min-h-0 flex-col p-3 sm:p-4"
      aria-label={`${projectTitle} screenshot gallery`}
    >
      <figcaption className="mb-3 flex items-end justify-between gap-4">
        <div>
          <p className="font-mono text-[8px] uppercase tracking-[0.22em] text-slate-600">
            Interface capture / {String(selectedIndex + 1).padStart(2, '0')}
          </p>
          <p
            id={labelId}
            className="mt-1 min-h-8 text-xs font-semibold leading-4 text-slate-300 sm:min-h-0 sm:text-sm sm:leading-5"
          >
            {selectedMedia.label}
          </p>
        </div>
        <p className="shrink-0 font-mono text-[8px] uppercase tracking-[0.18em] text-slate-700">
          {String(media.length).padStart(2, '0')} captures
        </p>
      </figcaption>

      <div
        id={panelId}
        className="relative grid h-[22rem] shrink-0 place-items-center overflow-hidden rounded-2xl border border-white/[0.07] bg-[#02070b]/75 p-3 sm:h-[26rem] sm:p-4"
        aria-labelledby={labelId}
      >
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={selectedMedia.id}
            className={
              isPortraitShowcase
                ? 'absolute left-0 top-0 isolate grid h-full w-full place-items-center overflow-hidden'
                : 'absolute left-3 right-3 top-3 grid h-[calc(100%-1.5rem)] place-items-center sm:left-4 sm:right-4 sm:top-4 sm:h-[calc(100%-2rem)]'
            }
            initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2, ease: 'easeOut' }}
          >
            {isPortraitShowcase && (
              <>
                <img
                  src={selectedMedia.src}
                  alt=""
                  width={selectedMedia.width}
                  height={selectedMedia.height}
                  className="absolute -inset-8 h-[calc(100%+4rem)] w-[calc(100%+4rem)] max-w-none object-cover opacity-[0.28] blur-xl saturate-[0.85] sm:opacity-[0.32] sm:blur-2xl"
                  loading="lazy"
                  decoding="async"
                  aria-hidden="true"
                />
                <span className="absolute inset-0 bg-[#02070b]/40" aria-hidden="true" />
                <span
                  className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(7,18,28,0.04),rgba(2,7,11,0.72)_82%)]"
                  aria-hidden="true"
                />
              </>
            )}

            <div
              className={
                isPortraitShowcase
                  ? 'relative z-10 h-[21.25rem] max-w-[calc(100%-1rem)] overflow-hidden rounded-[1.2rem] border border-white/15 bg-[#02070b]/70 shadow-[0_26px_70px_rgba(0,0,0,0.58),0_0_0_1px_rgba(103,232,249,0.04)] backdrop-blur-md sm:h-[25rem] sm:max-w-[calc(100%-1.5rem)]'
                  : 'grid place-items-center'
              }
              style={
                isPortraitShowcase
                  ? { aspectRatio: `${selectedMedia.width} / ${selectedMedia.height}` }
                  : undefined
              }
            >
              <img
                src={selectedMedia.src}
                alt={selectedMedia.alt}
                width={selectedMedia.width}
                height={selectedMedia.height}
                className={
                  isPortraitShowcase
                    ? 'h-full w-full object-contain'
                    : 'h-auto w-auto max-h-80 max-w-full rounded-xl object-contain drop-shadow-[0_22px_28px_rgba(0,0,0,0.42)] sm:max-h-[23rem]'
                }
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>
        </AnimatePresence>

        <span
          className="absolute left-3 top-3 h-4 w-4 border-l border-t border-current/20"
          aria-hidden="true"
        />
        <span
          className="absolute bottom-3 right-3 h-4 w-4 border-b border-r border-current/20"
          aria-hidden="true"
        />
      </div>

      <div
        className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3"
        role="group"
        aria-label="Choose a screenshot"
      >
        {media.map((item, index) => {
          const isSelected = item.id === selectedMedia.id

          return (
            <button
              key={item.id}
              type="button"
              className={`group flex min-h-16 items-center gap-2 rounded-xl border px-2.5 py-2 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#03090d] ${
                isSelected
                  ? 'border-cyan-300/40 bg-cyan-300/[0.08] text-slate-100'
                  : 'border-white/[0.07] bg-white/[0.025] text-slate-500 hover:border-white/15 hover:text-slate-300'
              }`}
              aria-label={`View ${item.label} screenshot`}
              aria-pressed={isSelected}
              aria-controls={panelId}
              onClick={() => setSelectedMediaId(item.id)}
            >
              <span className="grid h-12 w-7 shrink-0 place-items-center overflow-hidden rounded-md border border-white/10 bg-black/30">
                <img
                  src={item.src}
                  alt=""
                  width={item.width}
                  height={item.height}
                  className="h-full w-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </span>
              <span>
                <span className="block font-mono text-[7px] uppercase tracking-[0.16em] opacity-60">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="mt-0.5 block text-[10px] font-semibold leading-tight sm:text-[11px]">
                  {item.label}
                </span>
              </span>
            </button>
          )
        })}
      </div>
    </figure>
  )
}

export function SelectedProjectVisual({ project }: SelectedProjectVisualProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div
      className="selected-project-visual relative min-h-40 overflow-hidden rounded-2xl border border-white/[0.07]"
      data-accent={project.accent}
      data-prominence={project.prominence}
      data-planned-source={project.media.plannedSource}
    >
      {project.media.items?.length ? (
        <SelectedProjectGallery
          projectId={project.id}
          projectTitle={project.title}
          media={project.media.items}
          composition={project.media.composition ?? 'standard'}
        />
      ) : project.media.src ? (
        <figure
          className="relative z-10 flex h-full min-h-0 flex-col p-3 sm:p-4"
          aria-label={`${project.title} topology overview`}
        >
          <figcaption className="mb-3 flex items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[8px] uppercase tracking-[0.22em] text-cyan-200/60">
                Network topology / Cisco Packet Tracer
              </p>
              <p className="mt-1 text-xs font-semibold leading-4 text-slate-300 sm:text-sm sm:leading-5">
                Enterprise Multi-Site Architecture
              </p>
            </div>
            <p className="shrink-0 font-mono text-[8px] uppercase tracking-[0.18em] text-slate-700">
              Topology View
            </p>
          </figcaption>

          <div className="relative flex flex-1 min-h-[18rem] sm:min-h-[22rem] lg:min-h-0 w-full items-center justify-center overflow-hidden rounded-2xl border border-white/[0.07] bg-[#02070b]/75 p-2 sm:p-3">
            <img
              src={project.media.src}
              alt={project.media.alt}
              className="h-full w-full object-contain object-center drop-shadow-[0_20px_28px_rgba(0,0,0,0.55)]"
              loading="lazy"
              decoding="async"
            />

            <span
              className="absolute left-3 top-3 h-4 w-4 border-l border-t border-current/20"
              aria-hidden="true"
            />
            <span
              className="absolute bottom-3 right-3 h-4 w-4 border-b border-r border-current/20"
              aria-hidden="true"
            />
          </div>
        </figure>
      ) : (
        <div className="absolute inset-0 grid place-items-center px-5 py-8 text-center" aria-hidden="true">
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 620 340"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M0 84h108l58 52h110l49-44h142l49 48h104M0 268h124l48-46h136l55 40h132l47-50h78"
              fill="none"
              stroke="currentColor"
              strokeOpacity=".13"
              strokeWidth="1"
              initial={shouldReduceMotion ? false : { pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            />
            <path
              d="M166 136v86M325 92v170M495 140v72"
              fill="none"
              stroke="currentColor"
              strokeOpacity=".08"
              strokeDasharray="5 8"
            />
            <circle cx="166" cy="136" r="3" fill="currentColor" fillOpacity=".4" />
            <circle cx="325" cy="92" r="3" fill="currentColor" fillOpacity=".3" />
            <circle cx="495" cy="140" r="3" fill="currentColor" fillOpacity=".4" />
          </svg>

          <div className="relative z-10">
            <div className="selected-project-mark mx-auto grid h-16 min-w-16 place-items-center rounded-[1.15rem] border border-current/20 bg-current/[0.035] px-3 font-mono text-[9px] font-bold tracking-[0.14em] sm:h-20 sm:min-w-20">
              {project.media.mark}
            </div>
            <p className="mt-4 font-mono text-[8px] uppercase tracking-[0.22em] text-slate-700">
              Project media / Reserved
            </p>
          </div>

          <span className="absolute left-3 top-3 h-4 w-4 border-l border-t border-current/20" />
          <span className="absolute bottom-3 right-3 h-4 w-4 border-b border-r border-current/20" />
        </div>
      )}
    </div>
  )
}
