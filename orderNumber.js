/**
 * Generates a short, human-friendly order number, e.g. "ES-4K92P7".
 * Not a database ID — just a reference the customer and restaurant
 * can both read out over WhatsApp or phone.
 */
export function generateOrderNumber() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789' // no 0/O/1/I to avoid confusion
  let suffix = ''
  for (let i = 0; i < 6; i++) {
    suffix += chars[Math.floor(Math.random() * chars.length)]
  }
  return `ES-${suffix}`
}
