import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { useCart } from './CartContext.jsx'
import { formatPrice } from './format.js'
import { generateOrderNumber } from './orderNumber.js'

const PHONE_REGEX = /^[+]?[\d\s-]{7,15}$/

export default function Checkout() {
  const navigate = useNavigate()
  const { cartItems, subtotal, deliveryCharge, total, setLastOrder, clearCart } = useCart()

  const [form, setForm] = useState({ name: '', phone: '', address: '', instructions: '' })
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (cartItems.length === 0) navigate('/cart')
  }, [cartItems.length, navigate])

  if (cartItems.length === 0) return null

  function handleChange(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: null }))
  }

  function validate() {
    const nextErrors = {}
    if (!form.name.trim() || form.name.trim().length < 2) {
      nextErrors.name = 'Please enter your full name.'
    }
    if (!PHONE_REGEX.test(form.phone.trim())) {
      nextErrors.phone = 'Enter a valid phone number (at least 7 digits).'
    }
    if (!form.address.trim() || form.address.trim().length < 10) {
      nextErrors.address = 'Please enter a complete delivery address.'
    }
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!validate()) return

    const orderNumber = generateOrderNumber()
    setLastOrder({
      orderNumber,
      customer: {
        name: form.name.trim(),
        phone: form.phone.trim(),
        address: form.address.trim(),
        instructions: form.instructions.trim(),
      },
      items: cartItems,
      subtotal,
      deliveryCharge,
      total,
      placedAt: new Date().toISOString(),
    })
    clearCart()
    navigate('/order-confirmation')
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14">
      <button
        onClick={() => navigate('/cart')}
        className="flex items-center gap-1 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
      >
        <ArrowLeft size={15} /> Back to cart
      </button>

      <h1 className="mt-4 font-display text-2xl font-semibold text-ink sm:text-3xl">Checkout</h1>
      <p className="mt-2 text-sm text-ink-muted">
        Tell us where to send your order — we'll confirm everything on WhatsApp.
      </p>

      <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
        <Field
          label="Full name"
          error={errors.name}
          input={
            <input
              type="text"
              value={form.name}
              onChange={(e) => handleChange('name', e.target.value)}
              placeholder="e.g. Aditi Sharma"
              className={inputClass(errors.name)}
            />
          }
        />

        <Field
          label="Phone number"
          error={errors.phone}
          input={
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              placeholder="e.g. 98765 43210"
              className={inputClass(errors.phone)}
            />
          }
        />

        <Field
          label="Delivery address"
          error={errors.address}
          input={
            <textarea
              value={form.address}
              onChange={(e) => handleChange('address', e.target.value)}
              placeholder="House / flat no., street, landmark, area, city, pincode"
              rows={3}
              className={inputClass(errors.address)}
            />
          }
        />

        <Field
          label="Delivery instructions (optional)"
          input={
            <textarea
              value={form.instructions}
              onChange={(e) => handleChange('instructions', e.target.value)}
              placeholder="e.g. Ring the bell, leave at the door, less spicy, etc."
              rows={2}
              className={inputClass()}
            />
          }
        />

        {/* Order summary */}
        <div className="rounded-2xl border border-white/5 bg-charcoal-light p-5">
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-gold">
            Order Summary
          </h2>
          <ul className="mt-3 space-y-1.5 text-sm text-ink-muted">
            {cartItems.map((item) => (
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

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-ember px-6 py-3.5 text-sm font-semibold text-charcoal-dark shadow-glow transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Place Order <ArrowRight size={16} />
        </button>
      </form>
    </div>
  )
}

function Field({ label, input, error }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink">{label}</span>
      {input}
      {error && <span className="mt-1.5 block text-xs text-red-400">{error}</span>}
    </label>
  )
}

function inputClass(error) {
  return `w-full rounded-xl border bg-charcoal-dark px-4 py-3 text-sm text-ink placeholder:text-ink-muted/70 focus:border-ember ${
    error ? 'border-red-400' : 'border-white/10'
  }`
}
