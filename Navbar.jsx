import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Menu as MenuIcon, X, ShoppingBag } from 'lucide-react'
import restaurantConfig from './restaurantConfig'
import { useCart } from '../context/CartContext.jsx'

const links = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { itemCount } = useCart()
  const navigate = useNavigate()

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-charcoal/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <NavLink to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-gold to-ember text-lg shadow-glow">
            {restaurantConfig.logoEmoji}
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-ink">
            {restaurantConfig.name}
          </span>
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `font-body text-sm font-medium tracking-wide transition-colors ${
                  isActive ? 'text-ember' : 'text-ink-muted hover:text-ink'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate('/cart')}
            className="relative hidden items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-ember hover:text-ember md:flex"
            aria-label="View cart"
          >
            <ShoppingBag size={17} />
            Cart
            {itemCount > 0 && (
              <span className="ml-1 grid h-5 min-w-5 place-items-center rounded-full bg-ember px-1 text-xs font-semibold text-charcoal-dark">
                {itemCount}
              </span>
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-ink md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile nav panel */}
      {open && (
        <nav className="border-t border-white/5 bg-charcoal-dark px-4 py-4 md:hidden animate-fadeUp">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-3 text-base font-medium ${
                    isActive ? 'bg-white/5 text-ember' : 'text-ink-muted'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/cart"
              onClick={() => setOpen(false)}
              className="mt-1 flex items-center justify-between rounded-lg bg-white/5 px-3 py-3 text-base font-medium text-ink"
            >
              <span className="flex items-center gap-2">
                <ShoppingBag size={18} /> View cart
              </span>
              {itemCount > 0 && (
                <span className="grid h-6 min-w-6 place-items-center rounded-full bg-ember px-1.5 text-xs font-semibold text-charcoal-dark">
                  {itemCount}
                </span>
              )}
            </NavLink>
          </div>
        </nav>
      )}
    </header>
  )
}
