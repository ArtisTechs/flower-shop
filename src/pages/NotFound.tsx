import { Button } from '../components/ui/Button'

export function NotFound() {
  return (
    <section className="page section-shell empty-state">
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p>This page has no arrangement attached to it.</p>
      <Button to="/">Back to Home</Button>
    </section>
  )
}
