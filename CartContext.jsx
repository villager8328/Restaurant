import { createContext, useContext, useMemo } from 'react'
import { useLocalStorage } from './useLocalStorage'
import restaurantConfig from '../config/restaurantConfig'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useLocalStorage('emberSpice.cart', [])
  const [lastOrder, setLastOrder] = useLocalStorage('emberSpice.lastOrder', null)

  function addToCart(item) {
    setCartItems((prev) => {
      const existing = prev.find((line) => line.id === item.id)
      if (existing) {
        return prev.map((line) =>
          line.id === item.id ? { ...line, quantity: line.quantity + 1 } : line
        )
      }
      return [...prev, { ...item, quantity: 1 }]
    })
  }

  function removeFromCart(itemId) {
    setCartItems((prev) => prev.filter((line) => line.id !== itemId))
  }

  function updateQuantity(itemId, quantity) {
    if (quantity <= 0) {
      removeFromCart(itemId)
      return
    }
    setCartItems((prev) =>
      prev.map((line) => (line.id === itemId ? { ...line, quantity } : line))
    )
  }

  function clearCart() {
    setCartItems([])
  }

  const itemCount = useMemo(
    () => cartItems.reduce((sum, line) => sum + line.quantity, 0),
    [cartItems]
  )

  const subtotal = useMemo(
    () => cartItems.reduce((sum, line) => sum + line.price * line.quantity, 0),
    [cartItems]
  )

  const deliveryCharge = useMemo(() => {
    if (cartItems.length === 0) return 0
    if (
      restaurantConfig.freeDeliveryAbove > 0 &&
      subtotal >= restaurantConfig.freeDeliveryAbove
    ) {
      return 0
    }
    return restaurantConfig.deliveryCharge
  }, [subtotal, cartItems.length])

  const total = subtotal + deliveryCharge

  const meetsMinimumOrder = subtotal === 0 || subtotal >= restaurantConfig.minimumOrder

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    itemCount,
    subtotal,
    deliveryCharge,
    total,
    meetsMinimumOrder,
    lastOrder,
    setLastOrder,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
