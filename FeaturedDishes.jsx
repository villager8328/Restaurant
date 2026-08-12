import { featuredItems } from '../data/menuData.js'
import MenuItemCard from './MenuItemCard.jsx'
import EmberTrail from './EmberTrail.jsx'

export default function FeaturedDishes() {
  return (
    <section id="featured" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="text-center">
        <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
          Guest favourites
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-ink-muted">
          The dishes our regulars reorder every week — a good place to start if it's
          your first time.
        </p>
        <EmberTrail className="mt-6" />
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {featuredItems.map((item, i) => (
          <div key={item.id} style={{ animationDelay: `${i * 80}ms` }} className="animate-fadeUp">
            <MenuItemCard item={item} />
          </div>
        ))}
      </div>
    </section>
  )
}
