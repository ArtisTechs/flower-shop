import { useMemo, useState, type ReactNode } from 'react'
import type { Flower } from '../data/flowers'
import { CartContext, type CartItem } from './cart-context'

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  const addToCart = (flower: Flower, quantity = 1) => {
    setItems((current) => {
      const existing = current.find((item) => item.id === flower.id)
      if (existing) {
        return current.map((item) => (item.id === flower.id ? { ...item, quantity: item.quantity + quantity } : item))
      }
      return [...current, { ...flower, quantity }]
    })
  }

  const increaseQuantity = (id: number) => {
    setItems((current) => current.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)))
  }

  const decreaseQuantity = (id: number) => {
    setItems((current) =>
      current
        .map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0),
    )
  }

  const removeItem = (id: number) => {
    setItems((current) => current.filter((item) => item.id !== id))
  }

  const clearCart = () => setItems([])

  const value = useMemo(
    () => ({
      items,
      itemCount: items.reduce((sum, item) => sum + item.quantity, 0),
      subtotal: items.reduce((sum, item) => sum + item.price * item.quantity, 0),
      addToCart,
      increaseQuantity,
      decreaseQuantity,
      removeItem,
      clearCart,
    }),
    [items],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
