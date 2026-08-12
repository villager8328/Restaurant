import { useState } from 'react'
import { Plus } from 'lucide-react'
import { useCart } from './CartContext.jsx'
import { formatPrice } from './format.js'
import QuantityControl from './QuantityControl.jsx'

export default function MenuItemCard({ item }) {
  const { cartItems, addToCart, updateQuantity } = useCart()
  const [imgError, setImgError] = useState(false)
  const lineItem = cartItems.find((line) => line.id === item.id)

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-charcoal-light shadow-card transition-transform duration-300 hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden bg-charcoal-dark">
        {!imgError ? (
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            onError={() => setImgError(true)}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="grid h-full w-full place-items-center bg-gradient-to-br from-charcoal-light to-charcoal-dark text-4xl">
            🍽️
          </div>
        )}
        <span
          className={`absolute left-3 top-3 grid h-5 w-5 place-items-center rounded-sm border-2 bg-charcoal-dark/80 ${
            item.veg ? 'border-emerald-500' : 'border-red-500'
          }`}
          title={item.veg ? 'Vegetarian' : 'Non-vegetarian'}
        >
          <span
            className={`h-2 w-2 rounded-full ${item.veg ? 'bg-emerald-500' : 'bg-red-500'}`}
          />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-display text-base font-semibold text-ink">{item.name}</h3>
        <p className="mt-1 flex-1 text-sm leading-relaxed text-ink-muted">{item.description}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="font-mono text-base font-semibold text-gold">
            {formatPrice(item.price)}
          </span>

          {lineItem ? (
            <QuantityControl
              quantity={lineItem.quantity}
              onIncrease={() => addToCart(item)}
              onDecrease={() => updateQuantity(item.id, lineItem.quantity - 1)}
              size="sm"
            />
          ) : (
            <button
              onClick={() => addToCart(item)}
              className="flex items-center gap-1 rounded-full bg-ember/10 px-3 py-2 text-sm font-semibold text-ember transition-colors hover:bg-ember hover:text-charcoal-dark"
            >
              <Plus size={15} /> Add
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
