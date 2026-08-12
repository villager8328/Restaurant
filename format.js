import restaurantConfig from '../config/restaurantConfig'

/** Formats a number as currency using the configured currency symbol. */
export function formatPrice(amount) {
  return `${restaurantConfig.currency}${Number(amount).toFixed(0)}`
}
