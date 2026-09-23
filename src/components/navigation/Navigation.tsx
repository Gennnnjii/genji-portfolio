import { useCallback, useEffect, useRef, useState, type MouseEvent } from 'react'
import {
  AnimatePresence,
  motion,
  useAnimationControls,
  useReducedMotion,
} from 'motion/react'
import { siteConfig } from '../../data/site'
import { useActiveSection } from '../../hooks/useActiveSection'

const navigationSectionIds = siteConfig.navigation.map((item) => item.href.slice(1))

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const activeSection = useActiveSection(navigationSectionIds)
  const indicatorControls = useAnimationControls()
  const desktopNavRef = useRef<HTMLDivElement>(null)
  const desktopLinkRefs = useRef(new Map<string, HTMLAnchorElement>())
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null)

  const closeMobileMenuAndRestoreFocus = useCallback(() => {
    setIsOpen(false)
    window.requestAnimationFrame(() => mobileMenuButtonRef.current?.focus())
  }, [])

  const handleNavigation = useCallback(
    (event: MouseEvent<HTMLAnchorElement>, href: string) => {
      const target = document.getElementById(href.slice(1))
      if (!target) return

      event.preventDefault()
      setIsOpen(false)
      window.requestAnimationFrame(() => {
        target.scrollIntoView({
          behavior: shouldReduceMotion ? 'auto' : 'smooth',
          block: 'start',
        })
      })

      if (window.location.hash !== href) window.history.pushState(null, '', href)
    },
    [shouldReduceMotion],
  )

  const measureActiveIndicator = useCallback(() => {
    const navigation = desktopNavRef.current
    const activeLink = desktopLinkRefs.current.get(activeSection)

    if (!navigation || !activeLink || navigation.offsetParent === null) {
      indicatorControls.set({ opacity: 0 })
      return
    }

    const navigationBounds = navigation.getBoundingClientRect()
    const activeLinkBounds = activeLink.getBoundingClientRect()
    const horizontalInset = 12

    void indicatorControls.start({
      x: activeLinkBounds.left - navigationBounds.left + horizontalInset,
      width: Math.max(0, activeLinkBounds.width - horizontalInset * 2),
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.3,
        ease: 'easeOut',
      },
    })
  }, [activeSection, indicatorControls, shouldReduceMotion])

  useEffect(() => {
    let frameId: number | null = null

    const scheduleMeasurement = () => {
      if (frameId !== null) return
      frameId = window.requestAnimationFrame(() => {
        frameId = null
        measureActiveIndicator()
      })
    }

    scheduleMeasurement()
    window.addEventListener('resize', scheduleMeasurement)

    const resizeObserver = new ResizeObserver(scheduleMeasurement)
    if (desktopNavRef.current) resizeObserver.observe(desktopNavRef.current)

    return () => {
      if (frameId !== null) window.cancelAnimationFrame(frameId)
      window.removeEventListener('resize', scheduleMeasurement)
      resizeObserver.disconnect()
    }
  }, [measureActiveIndicator])

  useEffect(() => {
    const desktopMediaQuery = window.matchMedia('(min-width: 768px)')
    const closeMenuAtDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setIsOpen(false)
    }

    desktopMediaQuery.addEventListener('change', closeMenuAtDesktop)
    return () => desktopMediaQuery.removeEventListener('change', closeMenuAtDesktop)
  }, [])

  return (
    <header
      data-site-header
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5"
    >
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        onKeyDown={(event) => {
          if (event.key === 'Escape' && isOpen) {
            event.preventDefault()
            closeMobileMenuAndRestoreFocus()
          }
        }}
        className="relative mx-auto max-w-7xl rounded-2xl border border-white/[0.08] bg-[#050a0f]/75 shadow-[0_14px_50px_rgba(0,0,0,0.25)] backdrop-blur-xl"
      >
        <nav
          className="flex h-15 items-center justify-between px-4 sm:h-16 sm:px-6"
          aria-label="Main navigation"
        >
          <a
            href="#home"
            className="group inline-flex min-h-11 items-center gap-3 rounded-lg text-white"
            aria-label="Genji — home"
            onClick={(event) => handleNavigation(event, '#home')}
          >
            <span className="relative grid h-8 w-8 place-items-center overflow-hidden rounded-lg border border-cyan-300/25 bg-cyan-300/[0.05] font-mono text-[11px] font-bold text-cyan-200">
              <span className="absolute inset-x-1 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
              G/
            </span>
            <span className="font-display text-sm font-bold tracking-[0.3em]">{siteConfig.brand}</span>
          </a>

          <div ref={desktopNavRef} className="relative hidden items-center gap-1 md:flex">
            <motion.span
              aria-hidden="true"
              initial={{ opacity: 0, width: 0, x: 0 }}
              animate={indicatorControls}
              className="pointer-events-none absolute -bottom-[17px] left-0 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent"
            />
            {siteConfig.navigation.map((item) => {
              const sectionId = item.href.slice(1)

              return (
                <a
                  key={item.label}
                  ref={(node) => {
                    if (node) desktopLinkRefs.current.set(sectionId, node)
                    else desktopLinkRefs.current.delete(sectionId)
                  }}
                  href={item.href}
                  onClick={(event) => handleNavigation(event, item.href)}
                  aria-current={activeSection === sectionId ? 'page' : undefined}
                  className="group relative inline-flex min-h-11 items-center rounded-lg px-3.5 py-2 text-[13px] font-medium text-slate-400 transition-colors duration-200 hover:text-white"
                >
                  {item.label}
                  <span className="absolute inset-x-3 -bottom-[17px] h-px origin-center scale-x-0 bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              )
            })}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
            <span className="font-mono text-[10px] tracking-[0.16em] text-slate-500">
              EARLY CAREER // IT
            </span>
          </div>

          <button
            ref={mobileMenuButtonRef}
            type="button"
            className="relative grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-white md:hidden"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
            <span className="relative h-4 w-5">
              <motion.span
                className="absolute left-0 top-1 block h-px w-5 bg-current"
                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 3.5 : 0 }}
              />
              <motion.span
                className="absolute bottom-1 left-0 block h-px w-5 bg-current"
                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -3.5 : 0 }}
              />
            </span>
          </button>
        </nav>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id="mobile-navigation"
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
              transition={{ duration: 0.24, ease: 'easeOut' }}
              className="overflow-hidden border-t border-white/[0.07] md:hidden"
            >
              <div className="grid gap-1 p-3">
                {siteConfig.navigation.map((item, index) => {
                  const sectionId = item.href.slice(1)

                  return (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      onClick={(event) => handleNavigation(event, item.href)}
                      aria-current={activeSection === sectionId ? 'page' : undefined}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm transition-colors ${
                        activeSection === sectionId
                          ? 'bg-cyan-300/[0.07] text-cyan-100'
                          : 'text-slate-400 hover:bg-white/[0.04] hover:text-white'
                      }`}
                      initial={shouldReduceMotion ? false : { opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: shouldReduceMotion ? 0 : index * 0.035 }}
                    >
                      <span>{item.label}</span>
                      <span className="font-mono text-[10px] text-slate-600">
                        0{index + 1}
                      </span>
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  )
}
