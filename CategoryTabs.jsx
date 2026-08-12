export default function CategoryTabs({ categories, activeCategory, onSelect }) {
  return (
    <div className="scrollbar-none -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
      <button
        onClick={() => onSelect('all')}
        className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
          activeCategory === 'all'
            ? 'border-ember bg-ember text-charcoal-dark'
            : 'border-white/10 text-ink-muted hover:border-white/30 hover:text-ink'
        }`}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelect(cat.id)}
          className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
            activeCategory === cat.id
              ? 'border-ember bg-ember text-charcoal-dark'
              : 'border-white/10 text-ink-muted hover:border-white/30 hover:text-ink'
          }`}
        >
          <span className="mr-1.5">{cat.icon}</span>
          {cat.label}
        </button>
      ))}
    </div>
  )
}
