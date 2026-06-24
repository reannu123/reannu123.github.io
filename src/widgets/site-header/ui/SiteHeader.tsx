import { Menu } from 'lucide-react'
import { portfolio } from '../../../shared/config/portfolio'

const navigation = [
  { href: '#work', label: 'Work' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
]

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label={`${portfolio.name} home`}>
        <span className="wordmark__mark">RI</span>
        <span>{portfolio.name}</span>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
        <a className="header-contact" href={`mailto:${portfolio.email}`}>
          Start a conversation
        </a>
      </nav>

      <details className="mobile-nav">
        <summary aria-label="Open navigation">
          <Menu aria-hidden="true" size={20} />
        </summary>
        <nav aria-label="Mobile navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a href={`mailto:${portfolio.email}`}>Start a conversation</a>
        </nav>
      </details>
    </header>
  )
}
