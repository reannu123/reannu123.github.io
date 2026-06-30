export type Project = {
  name: string
  summary: string
  stack: readonly string[]
  href: string
  demoHref?: string
  kind: string
}

export const projects: readonly Project[] = [
  {
    name: 'PayMongo API Dashboard',
    summary:
      'A payment-operations dashboard with safe demo mode, webhooks, checkout-session workflows, tests, and Docker delivery.',
    stack: ['Next.js', 'TypeScript', 'Docker'],
    href: 'https://github.com/reannu123/paymongo-api-dashboard',
    demoHref: 'https://paymongo.reannu.dev/',
    kind: 'Operations dashboard',
  },
  {
    name: 'Workout Tracker',
    summary:
      'A self-hostable full-stack workout logger with seeded data, progress analytics, tested business logic, and Docker Compose.',
    stack: ['React', 'Express', 'Postgres'],
    href: 'https://github.com/reannu123/workout-tracker',
    demoHref: 'https://workout.reannu.dev/',
    kind: 'Full-stack application',
  },
  {
    name: 'Rock Paper Scissors Remaster',
    summary:
      'A realtime multiplayer remaster with session-based authentication, Socket.IO, persistent matches, and a local-first Docker setup.',
    stack: ['React', 'Socket.IO', 'Postgres'],
    href: 'https://github.com/reannu123/rock-paper-scissors-remaster',
    demoHref: 'https://rps.reannu.dev/',
    kind: 'Realtime web application',
  },
  {
    name: 'Event Countdown',
    summary:
      'A compact, installable PWA for themed, shareable countdowns that works without a backend and is verified in production-like Docker.',
    stack: ['React', 'PWA', 'Docker'],
    href: 'https://github.com/reannu123/event-countdown',
    demoHref: 'https://countdown.reannu.dev/',
    kind: 'Product-focused frontend',
  },
]
