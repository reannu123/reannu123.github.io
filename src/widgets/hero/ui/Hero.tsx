import { ArrowDown, ArrowUpRight } from 'lucide-react'
import profileImage from '../../../shared/assets/reannu-profile.jpg'
import { portfolio } from '../../../shared/config/portfolio'

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__content">
        <p className="eyebrow">{portfolio.role}</p>
        <h1>{portfolio.headline}</h1>
        <p className="hero__intro">{portfolio.introduction}</p>
        <div className="hero__actions">
          <a className="button button--primary" href="#work">
            See selected work <ArrowDown aria-hidden="true" size={17} />
          </a>
          <a className="button button--quiet" href={`mailto:${portfolio.email}`}>
            Get in touch <ArrowUpRight aria-hidden="true" size={17} />
          </a>
        </div>
      </div>

      <div className="hero__portrait-wrap">
        <div className="hero__portrait-ring">
          <img
            className="hero__portrait"
            src={profileImage}
            alt={`Portrait of ${portfolio.name}`}
          />
        </div>
        <p className="hero__note">Legacy portfolio revival · 2026</p>
      </div>
    </section>
  )
}
