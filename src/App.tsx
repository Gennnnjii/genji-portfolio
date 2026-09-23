import { AnimatedBackground } from './components/background/AnimatedBackground'
import { AboutSection } from './components/about/AboutSection'
import { CertificationsSection } from './components/certifications/CertificationsSection'
import { ContactSection } from './components/contact/ContactSection'
import { Hero } from './components/hero/Hero'
import { Footer } from './components/layout/Footer'
import { Navigation } from './components/navigation/Navigation'
import { ProjectsSection } from './components/projects/ProjectsSection'
import { SkillsSection } from './components/skills/SkillsSection'

function App() {
  return (
    <div className="relative min-h-svh overflow-hidden bg-[#020508] text-white">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <AnimatedBackground />
      <Navigation />
      <main id="main-content" tabIndex={-1} className="relative z-10">
        <Hero />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
