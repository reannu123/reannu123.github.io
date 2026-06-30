import { ArrowUpRight } from 'lucide-react'
import { projects } from '../../../entities/project/model/project'
import { SectionHeading } from '../../../shared/ui/SectionHeading/SectionHeading'

export function ProjectShowcase() {
  return (
    <section className="section section--work" id="work">
      <SectionHeading eyebrow="Selected work" title="Projects built for real workflows.">
        <p>
          Four shipped flagships, each documented and verified for someone else to
          run—not merely admire from a screenshot.
        </p>
      </SectionHeading>

      <div className="project-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.name}>
            <div className="project-card__meta">
              <span>0{index + 1}</span>
              <span>{project.kind}</span>
            </div>
            <h3>{project.name}</h3>
            <p>{project.summary}</p>
            <ul className="tag-list" aria-label={`${project.name} technologies`}>
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="project-card__links">
              {project.demoHref ? (
                <a href={project.demoHref} target="_blank" rel="noreferrer">
                  Live demo <ArrowUpRight aria-hidden="true" size={17} />
                </a>
              ) : null}
              <a href={project.href} target="_blank" rel="noreferrer">
                Source <ArrowUpRight aria-hidden="true" size={17} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
