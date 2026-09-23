type SectionHeadingProps = {
  eyebrow: string
  title: string
  accent: string
  description?: string
}

export function SectionHeading({ eyebrow, title, accent, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <div className="mb-5 flex items-center gap-3">
        <span className="h-px w-8 bg-gradient-to-r from-cyan-300 to-cyan-300/10" />
        <p className="font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-cyan-200/70 sm:text-xs">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-display text-[clamp(2.75rem,7vw,5.5rem)] font-black leading-[0.9] tracking-[-0.055em] text-white">
        {title} <span className="text-cyan-300">{accent}</span>
      </h2>
      {description && <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">{description}</p>}
    </div>
  )
}
