import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CheckCircle2, MessageCircle, Home } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'
import { formatPrice } from '../utils/format.js'
import { buildWhatsAppOrderLink } from '../utils/whatsapp.js'

export default function OrderConfirmation() {
  const navigate = useNavigate()
  const { lastOrder } = useCart()

  useEffect(() => {
    if (!lastOrder) navigate('/')
  }, [lastOrder, navigate])

  if (!lastOrder) return null

  const { orderNumber, customer, items, subtotal, deliveryCharge, total } = lastOrder

  function handleSendWhatsApp() {
    const link = buildWhatsAppOrderLink({ orderNumber, customer, items, subtotal, deliveryCharge, total })
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="mx-auto max-w-xl px-4 py-14 sm:px-6">
      <div className="flex flex-col items-center text-center">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-emerald-500/10 text-emerald-400">
          <CheckCircle2 size={32} />
        </span>
        <h1 className="mt-5 font-display text-2xl font-semibold text-ink sm:text-3xl">
          Order received!
        </h1>
        <p className="mt-2 text-sm text-ink-muted">
          One last step — send it to us on WhatsApp so our kitchen can start cooking.
        </p>
        <span className="mt-4 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 font-mono text-sm font-semibold text-gold">
          {orderNumber}
        </span>
      </div>

      <div className="mt-8 rounded-2xl border border-white/5 bg-charcoal-light p-5">
        <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-gold">
          Order details
        </h2>
        <ul className="mt-3 space-y-1.5 text-sm text-ink-muted">
          {items.map((item) => (
            <li key={item.id} className="flex justify-between">
              <span>
                {item.name} × {item.quantity}
              </span>
              <span className="font-mono text-ink">{formatPrice(item.price * item.quantity)}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 space-y-1.5 border-t border-white/5 pt-4 text-sm">
          <div className="flex justify-between text-ink-muted">
            <span>Subtotal</span>
            <span className="font-mono text-ink">{formatPrice(subtotal)}</span>
          </div>
          <div className="flex justify-between text-ink-muted">
            <span>Delivery</span>
            <span className="font-mono text-ink">
              {deliveryCharge === 0 ? 'Free' : formatPrice(deliveryCharge)}
            </span>
          </div>
          <div className="flex justify-between pt-1 font-display text-base font-semibold text-ink">
            <span>Total</span>
            <span className="font-mono text-gold">{formatPrice(total)}</span>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-white/5 bg-charcoal-light p-5">
        <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-gold">
          Delivering to
        </h2>
        <div className="mt-3 space-y-1 text-sm text-ink-muted">
          <p className="text-ink">{customer.name}</p>
          <p>{customer.phone}</p>
          <p>{customer.address}</p>
          {customer.instructions && <p className="italic">"{customer.instructions}"</p>}
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        <button
          onClick={handleSendWhatsApp}
          className="flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-charcoal-dark shadow-glow transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          <MessageCircle size={18} /> Send Order on WhatsApp
        </button>
        <button
          onClick={() => navigate('/')}
          className="flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-white/30"
        >
          <Home size={16} /> Back to home
        </button>
      </div>
    </div>
  )
}
