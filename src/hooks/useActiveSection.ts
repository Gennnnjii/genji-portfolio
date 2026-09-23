import { useEffect, useState } from 'react'

const DEFAULT_SECTION = 'home'
const HEADER_SELECTOR = '[data-site-header]'

export function useActiveSection(sectionIds: readonly string[]) {
  const [activeSection, setActiveSection] = useState(DEFAULT_SECTION)
  const sectionKey = sectionIds.join('|')

  useEffect(() => {
    const sections = sectionKey
      .split('|')
      .map((id) => document.getElementById(id))
      .filter(
        (section): section is HTMLElement =>
          section instanceof HTMLElement && section.tagName === 'SECTION',
      )

    if (sections.length === 0) return

    let frameId: number | null = null

    const updateActiveSection = () => {
      frameId = null

      const header = document.querySelector<HTMLElement>(HEADER_SELECTOR)
      const scrollPaddingTop = Number.parseFloat(
        window.getComputedStyle(document.documentElement).scrollPaddingTop,
      )
      const activationPoint = Math.max(
        (header?.getBoundingClientRect().bottom ?? 0) + 12,
        (Number.isFinite(scrollPaddingTop) ? scrollPaddingTop : 0) + 1,
      )
      let nextSection = sections[0].id

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= activationPoint) {
          nextSection = section.id
        } else {
          break
        }
      }

      const reachedPageEnd =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2
      if (reachedPageEnd) nextSection = sections.at(-1)?.id ?? nextSection

      setActiveSection((currentSection) =>
        currentSection === nextSection ? currentSection : nextSection,
      )
    }

    const scheduleUpdate = () => {
      if (frameId !== null) return
      frameId = window.requestAnimationFrame(updateActiveSection)
    }

    scheduleUpdate()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)
    window.addEventListener('hashchange', scheduleUpdate)

    return () => {
      if (frameId !== null) window.cancelAnimationFrame(frameId)
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      window.removeEventListener('hashchange', scheduleUpdate)
    }
  }, [sectionKey])

  return activeSection
}
