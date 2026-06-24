import type { ReactNode } from 'react'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  children?: ReactNode
}

export function SectionHeading({ eyebrow, title, children }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children ? <div className="section-heading__body">{children}</div> : null}
    </div>
  )
}
