import { ArrowUpRight, Mail } from 'lucide-react'
import { portfolio } from '../../../shared/config/portfolio'

export function ContactCta() {
  return (
    <section className="contact-cta" aria-labelledby="contact-heading">
      <p className="eyebrow">A practical next step</p>
      <h2 id="contact-heading">Have a workflow that needs a better home?</h2>
      <p>
        Tell me what is slowing the work down. We can start with the smallest
        useful change and make the delivery path clear.
      </p>
      <a className="button button--primary" href={`mailto:${portfolio.email}`}>
        Email {portfolio.name} <ArrowUpRight aria-hidden="true" size={17} />
      </a>
      <div className="social-links">
        <a href={portfolio.githubUrl} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={portfolio.linkedInUrl} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={`mailto:${portfolio.email}`}>
          <Mail aria-hidden="true" size={18} /> {portfolio.email}
        </a>
      </div>
    </section>
  )
}
