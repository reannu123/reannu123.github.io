import { Boxes, Gauge, Workflow } from 'lucide-react'
import { SectionHeading } from '../../../shared/ui/SectionHeading/SectionHeading'

const capabilities = [
  {
    icon: Boxes,
    title: 'Web applications',
    description:
      'Focused product surfaces with clear workflows, durable data models, and a sensible path from first release to ongoing improvement.',
  },
  {
    icon: Gauge,
    title: 'Dashboards & internal tools',
    description:
      'Operational software that makes payment, inventory, reporting, and day-to-day decision work easier to see and manage.',
  },
  {
    icon: Workflow,
    title: 'Automation & delivery',
    description:
      'Repeatable Dockerized delivery, verification, and maintenance-friendly handoff for teams that value ownership.',
  },
]

export function Capabilities() {
  return (
    <section className="section section--services" id="services">
      <SectionHeading eyebrow="How I help" title="Useful software, delivered with care." />
      <div className="capability-grid">
        {capabilities.map((capability) => {
          const Icon = capability.icon

          return (
            <article className="capability" key={capability.title}>
              <Icon aria-hidden="true" size={24} strokeWidth={1.5} />
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
