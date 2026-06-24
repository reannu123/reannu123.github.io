import { Capabilities } from '../../../widgets/capabilities/ui/Capabilities'
import { ContactCta } from '../../../widgets/contact-cta/ui/ContactCta'
import { Hero } from '../../../widgets/hero/ui/Hero'
import { ProfileNote } from '../../../widgets/profile-note/ui/ProfileNote'
import { ProjectShowcase } from '../../../widgets/project-showcase/ui/ProjectShowcase'
import { SiteHeader } from '../../../widgets/site-header/ui/SiteHeader'

export function HomePage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <Hero />
        <ProjectShowcase />
        <Capabilities />
        <ProfileNote />
        <ContactCta />
      </main>
      <footer>
        <span>© {new Date().getFullYear()} Reannu Instrella</span>
        <a href="#top">Back to top</a>
      </footer>
    </div>
  )
}
