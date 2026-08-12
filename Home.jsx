import { useNavigate } from 'react-router-dom'
import { Flame, Truck, Leaf, Clock3 } from 'lucide-react'
import Hero from '../components/Hero.jsx'
import FeaturedDishes from '../components/FeaturedDishes.jsx'
import EmberTrail from '../components/EmberTrail.jsx'
import restaurantConfig from '../config/restaurantConfig'

const highlights = [
  {
    icon: Flame,
    title: 'Live tandoor',
    text: 'Every kebab and naan finished over real charcoal, not a gas flame.',
  },
  {
    icon: Leaf,
    title: 'Fresh, daily',
    text: 'Gravies and marinades made from scratch each morning — nothing frozen.',
  },
  {
    icon: Clock3,
    title: '35-min delivery',
    text: 'Hot food, quick — our kitchen fires the moment your order confirms.',
  },
  {
    icon: Truck,
    title: 'Track by WhatsApp',
    text: 'Your order summary and updates land straight in your WhatsApp chat.',
  },
]

export default function Home() {
  const navigate = useNavigate()

  return (
    <div>
      <Hero />

      {/* Restaurant description strip */}
      <section className="border-y border-white/5 bg-charcoal-dark">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:grid-cols-2 sm:px-6 md:grid-cols-4">
          {highlights.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex flex-col items-start gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-ember/10 text-ember">
                <Icon size={20} />
              </span>
              <h3 className="font-display text-base font-semibold text-ink">{title}</h3>
              <p className="text-sm leading-relaxed text-ink-muted">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <FeaturedDishes />

      {/* CTA banner */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="grain-overlay relative overflow-hidden rounded-3xl bg-gradient-to-br from-maroon via-charcoal-light to-charcoal-dark px-6 py-14 text-center sm:px-12">
          <div
            aria-hidden="true"
            className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-ember/30 blur-[90px]"
          />
          <h2 className="relative font-display text-2xl font-semibold text-ink sm:text-3xl">
            Hungry already? The full menu is one tap away.
          </h2>
          <p className="relative mx-auto mt-3 max-w-md text-sm text-ink-muted">
            Browse all {restaurantConfig.name} categories — starters to dessert — and
            build your order in minutes.
          </p>
          <EmberTrail className="relative mt-6" />
          <button
            onClick={() => navigate('/menu')}
            className="relative mt-7 rounded-full bg-ember px-8 py-3.5 text-sm font-semibold text-charcoal-dark shadow-glow transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Browse the Menu
          </button>
        </div>
      </section>
    </div>
  )
}
