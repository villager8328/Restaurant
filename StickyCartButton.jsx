import { useLocation, useNavigate } from 'react-router-dom'
import { ShoppingBag, ChevronRight } from 'lucide-react'
import { useCart } from './CartContext.jsx'
import { formatPrice } from './format.js'

const HIDDEN_ON = ['/cart', '/checkout', '/order-confirmation']

export default function StickyCartButton() {
  const { itemCount, total } = useCart()
  const location = useLocation()
  const navigate = useNavigate()

  if (itemCount === 0 || HIDDEN_ON.includes(location.pathname)) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 px-4 pb-4 md:hidden animate-slideUp">
      <button
        onClick={() => navigate('/cart')}
        className="flex w-full items-center justify-between rounded-2xl bg-ember px-5 py-4 shadow-glow transition-transform active:scale-[0.98]"
      >
        <span className="flex items-center gap-2 text-sm font-semibold text-charcoal-dark">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-charcoal-dark text-ember">
            <ShoppingBag size={15} />
          </span>
          {itemCount} item{itemCount > 1 ? 's' : ''} · {formatPrice(total)}
        </span>
        <span className="flex items-center gap-1 text-sm font-semibold text-charcoal-dark">
          View cart <ChevronRight size={16} />
        </span>
      </button>
    </div>
  )
}
