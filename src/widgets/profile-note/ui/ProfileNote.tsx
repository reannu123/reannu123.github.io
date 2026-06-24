import { FileText } from 'lucide-react'
import { portfolio } from '../../../shared/config/portfolio'
import { SectionHeading } from '../../../shared/ui/SectionHeading/SectionHeading'

export function ProfileNote() {
  return (
    <section className="section profile-note" id="about">
      <SectionHeading eyebrow="About this revival" title="A cleaner bridge, not a rewritten past.">
        <p>
          The original public portfolio had useful history, but its structure and
          project proof had fallen behind the work. This refreshed version keeps
          the story honest while putting current delivery evidence first.
        </p>
      </SectionHeading>

      <aside className="temporary-note" aria-label="Temporary profile details notice">
        <FileText aria-hidden="true" size={22} />
        <div>
          <strong>Temporary profile and résumé details</strong>
          <p>{portfolio.temporaryProfileNotice}</p>
          <p>
            Update visible copy in <code>src/shared/config/portfolio.ts</code> and
            replace <code>public/resume/Reannu_Instrella_Resume.pdf</code> with the
            current file.
          </p>
          <a href={portfolio.resumeUrl} target="_blank" rel="noreferrer">
            Open the temporary résumé
          </a>
        </div>
      </aside>
    </section>
  )
}
