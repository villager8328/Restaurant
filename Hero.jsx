import { useNavigate } from 'react-router-dom'
import { Flame, ArrowRight } from 'lucide-react'
import restaurantConfig from '../config/restaurantConfig'

export default function Hero() {
  const navigate = useNavigate()

  return (
    <section className="grain-overlay relative overflow-hidden bg-charcoal">
      {/* Ambient ember glow behind the headline */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-ember/25 blur-[110px] animate-emberPulse"
      />
      <div
        aria-hidden="true"
        className="absolute -right-20 bottom-0 h-[300px] w-[300px] rounded-full bg-maroon/30 blur-[100px]"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-20 text-center sm:px-6 sm:py-28">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold">
          <Flame size={13} /> Fired fresh, delivered fast
        </span>

        <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.1] text-ink sm:text-6xl">
          {restaurantConfig.name}
        </h1>
        <p className="mt-4 max-w-xl text-balance font-display text-lg italic text-gold sm:text-xl">
          {restaurantConfig.tagline}
        </p>
        <p className="mt-5 max-w-lg text-sm leading-relaxed text-ink-muted sm:text-base">
          From smoky tandoor classics to dum-cooked biryani, wood-fired pizza and
          double-stacked burgers — real ingredients, slow spice, and a kitchen that
          never cuts corners.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={() => navigate('/menu')}
            className="group flex items-center justify-center gap-2 rounded-full bg-ember px-8 py-3.5 text-sm font-semibold text-charcoal-dark shadow-glow transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Order Now
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </button>
          <a
            href="#featured"
            className="flex items-center justify-center gap-2 rounded-full border border-white/15 px-8 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-white/30"
          >
            See what's popular
          </a>
        </div>
      </div>
    </section>
  )
}
