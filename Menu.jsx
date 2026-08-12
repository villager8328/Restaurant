import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { categories, menuItems } from '../data/menuData.js'
import CategoryTabs from '../components/CategoryTabs.jsx'
import MenuItemCard from '../components/MenuItemCard.jsx'

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [query, setQuery] = useState('')

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory
      const matchesQuery = item.name.toLowerCase().includes(query.trim().toLowerCase())
      return matchesCategory && matchesQuery
    })
  }, [activeCategory, query])

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="text-center">
        <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">Our Menu</h1>
        <p className="mx-auto mt-3 max-w-md text-sm text-ink-muted">
          Pick a category or search for a dish — everything's made fresh to order.
        </p>
      </div>

      <div className="relative mx-auto mt-8 max-w-md">
        <Search size={17} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a dish..."
          className="w-full rounded-full border border-white/10 bg-charcoal-light py-3 pl-11 pr-4 text-sm text-ink placeholder:text-ink-muted focus:border-ember"
        />
      </div>

      <div className="mt-8">
        <CategoryTabs
          categories={categories}
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
        />
      </div>

      {filteredItems.length === 0 ? (
        <div className="mt-16 flex flex-col items-center text-center">
          <span className="text-4xl">🔍</span>
          <h2 className="mt-4 font-display text-lg font-semibold text-ink">
            No dishes match "{query}"
          </h2>
          <p className="mt-1 max-w-xs text-sm text-ink-muted">
            Try a different search term, or clear it to browse the full menu.
          </p>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  )
}
