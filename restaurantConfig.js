/**
 * ============================================================
 *  RESTAURANT CONFIGURATION
 * ============================================================
 *  This is the ONLY file you need to edit to rebrand this site
 *  for a different restaurant: name, logo, contact details,
 *  WhatsApp number, opening hours and delivery charge all live
 *  here. Menu items live separately in `src/data/menuData.js`.
 * ============================================================
 */

const restaurantConfig = {
  // ---- Identity -------------------------------------------------
  name: 'Ember & Spice',
  tagline: 'Tandoor fire, slow spice, fast delivery',
  logoEmoji: '🔥', // swap for a real logo file path if you have one, e.g. '/logo.png'

  // ---- Contact ----------------------------------------------------
  phone: '+91 98765 43210',
  address: '14 Residency Road, Indiranagar, Bengaluru, KA 560038',

  // ---- WhatsApp ordering -------------------------------------------
  // IMPORTANT: This is the ONLY place the WhatsApp number is set.
  // Use the full number with country code, digits only (no + or spaces).
  // Example: for +91 98765 43210 use "919876543210"
  whatsappNumber: '919876543210',

  // ---- Hours ------------------------------------------------------
  openingHours: [
    { days: 'Monday – Friday', hours: '12:00 PM – 11:00 PM' },
    { days: 'Saturday – Sunday', hours: '11:30 AM – 11:30 PM' },
  ],

  // ---- Ordering economics ------------------------------------------
  currency: '₹',
  deliveryCharge: 49,
  freeDeliveryAbove: 999, // set to 0 to disable free-delivery threshold
  minimumOrder: 149,

  // ---- Social / extra links (optional, shown in footer) -----------
  social: {
    instagram: 'https://instagram.com',
    maps: 'https://maps.google.com',
  },
}

export default restaurantConfig
