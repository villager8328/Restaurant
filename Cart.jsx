import { useNavigate } from 'react-router-dom'
import { Trash2, ArrowRight, ShoppingBag } from 'lucide-react'
import { useCart } from './CartContext.jsx'
import { formatPrice } from './format.js'
import QuantityControl from './QuantityControl.jsx'
import restaurantConfig from './restaurantConfig'

export default function Cart() {
  const navigate = useNavigate()
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    subtotal,
    deliveryCharge,
    total,
    meetsMinimumOrder,
  } = useCart()

  if (cartItems.length === 0) {
    return (
      <div className="mx-auto flex max-w-md flex-col items-center px-4 py-24 text-center">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-charcoal-light text-3xl">
          🛒
        </span>
        <h1 className="mt-5 font-display text-2xl font-semibold text-ink">Your cart is empty</h1>
        <p className="mt-2 text-sm text-ink-muted">
          Add something delicious from the menu to get started.
        </p>
        <button
          onClick={() => navigate('/menu')}
          className="mt-7 flex items-center gap-2 rounded-full bg-ember px-7 py-3 text-sm font-semibold text-charcoal-dark shadow-glow transition-transform hover:scale-105"
        >
          Browse the menu <ArrowRight size={16} />
        </button>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-ember/10 text-ember">
          <ShoppingBag size={18} />
        </span>
        <h1 className="font-display text-2xl font-semibold text-ink sm:text-3xl">Your Cart</h1>
      </div>

      <div className="mt-8 divide-y divide-white/5 rounded-2xl border border-white/5 bg-charcoal-light">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center gap-4 p-4 sm:p-5">
            <img
              src={item.image}
              alt={item.name}
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
              className="h-16 w-16 shrink-0 rounded-xl object-cover"
            />
            <div className="min-w-0 flex-1">
              <h3 className="truncate font-display text-sm font-semibold text-ink sm:text-base">
                {item.name}
              </h3>
              <p className="mt-1 font-mono text-sm text-gold">{formatPrice(item.price)}</p>
            </div>

            <div className="flex flex-col items-end gap-2">
              <QuantityControl
                quantity={item.quantity}
                onIncrease={() => updateQuantity(item.id, item.quantity + 1)}
                onDecrease={() => updateQuantity(item.id, item.quantity - 1)}
                size="sm"
              />
              <button
                onClick={() => removeFromCart(item.id)}
                className="flex items-center gap-1 text-xs font-medium text-ink-muted transition-colors hover:text-red-400"
              >
                <Trash2 size={13} /> Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Totals */}
      <div className="mt-6 rounded-2xl border border-white/5 bg-charcoal-light p-5">
        <div className="flex items-center justify-between text-sm text-ink-muted">
          <span>Subtotal</span>
          <span className="font-mono text-ink">{formatPrice(subtotal)}</span>
        </div>
        <div className="mt-2 flex items-center justify-between text-sm text-ink-muted">
          <span>Delivery charge</span>
          <span className="font-mono text-ink">
            {deliveryCharge === 0 ? 'Free' : formatPrice(deliveryCharge)}
          </span>
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4">
          <span className="font-display text-base font-semibold text-ink">Grand Total</span>
          <span className="font-mono text-lg font-semibold text-gold">{formatPrice(total)}</span>
        </div>

        {!meetsMinimumOrder && (
          <p className="mt-3 rounded-lg bg-gold/10 px-3 py-2 text-xs text-gold">
            Add {formatPrice(restaurantConfig.minimumOrder - subtotal)} more to reach the{' '}
            {formatPrice(restaurantConfig.minimumOrder)} minimum order.
          </p>
        )}

        <button
          onClick={() => navigate('/checkout')}
          disabled={!meetsMinimumOrder}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-ember px-6 py-3.5 text-sm font-semibold text-charcoal-dark shadow-glow transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
        >
          Proceed to Checkout <ArrowRight size={16} />
        </button>
      </div>
    </div>
  )
}
