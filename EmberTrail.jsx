/**
 * The site's signature visual motif: a small trail of dots that mimics
 * scattered spice or dying embers, fading from gold to ember-orange.
 * Used as a section divider instead of a generic horizontal rule.
 */
export default function EmberTrail({ className = '' }) {
  const dots = [
    { size: 5, opacity: 0.4 },
    { size: 7, opacity: 0.6 },
    { size: 10, opacity: 0.85 },
    { size: 7, opacity: 0.6 },
    { size: 5, opacity: 0.4 },
  ]
  return (
    <div className={`ember-trail ${className}`} aria-hidden="true">
      {dots.map((dot, i) => (
        <span
          key={i}
          style={{ width: dot.size, height: dot.size, opacity: dot.opacity }}
        />
      ))}
    </div>
  )
}
