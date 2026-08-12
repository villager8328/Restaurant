import restaurantConfig from './restaurantConfig'
import { formatPrice } from './format'

/**
 * Builds the full WhatsApp order message and the wa.me link to open it.
 * The restaurant's WhatsApp number is read from `restaurantConfig` —
 * change it there, not here.
 */
export function buildWhatsAppOrderLink({ orderNumber, customer, items, subtotal, deliveryCharge, total }) {
  const lines = []

  lines.push(`*New Order — ${restaurantConfig.name}*`)
  lines.push(`Order No: *${orderNumber}*`)
  lines.push('')
  lines.push('*Customer Details*')
  lines.push(`Name: ${customer.name}`)
  lines.push(`Phone: ${customer.phone}`)
  lines.push(`Address: ${customer.address}`)
  if (customer.instructions?.trim()) {
    lines.push(`Instructions: ${customer.instructions.trim()}`)
  }
  lines.push('')
  lines.push('*Order Items*')
  items.forEach((item) => {
    lines.push(`• ${item.name} x${item.quantity} — ${formatPrice(item.price * item.quantity)}`)
  })
  lines.push('')
  lines.push(`Subtotal: ${formatPrice(subtotal)}`)
  lines.push(`Delivery: ${deliveryCharge === 0 ? 'Free' : formatPrice(deliveryCharge)}`)
  lines.push(`*Total: ${formatPrice(total)}*`)
  lines.push('')
  lines.push('Please confirm this order. Thank you!')

  const message = encodeURIComponent(lines.join('\n'))
  return `https://wa.me/${restaurantConfig.whatsappNumber}?text=${message}`
}
