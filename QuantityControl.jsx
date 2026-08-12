import { Minus, Plus } from 'lucide-react'

export default function QuantityControl({ quantity, onIncrease, onDecrease, size = 'md' }) {
  const isSmall = size === 'sm'
  const btnSize = isSmall ? 'h-7 w-7' : 'h-8 w-8'

  return (
    <div className="flex items-center gap-3 rounded-full border border-white/10 bg-charcoal-dark px-1 py-1">
      <button
        onClick={onDecrease}
        aria-label="Decrease quantity"
        className={`${btnSize} grid place-items-center rounded-full text-ink transition-colors hover:bg-white/10`}
      >
        <Minus size={isSmall ? 13 : 15} />
      </button>
      <span className="w-4 text-center font-mono text-sm font-medium text-ink">{quantity}</span>
      <button
        onClick={onIncrease}
        aria-label="Increase quantity"
        className={`${btnSize} grid place-items-center rounded-full bg-ember text-charcoal-dark transition-transform hover:scale-105`}
      >
        <Plus size={isSmall ? 13 : 15} />
      </button>
    </div>
  )
}
