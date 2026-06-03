import { createContext } from 'react'
import type { Flower } from '../data/flowers'

export type CartItem = Flower & { quantity: number }

export type CartContextValue = {
  items: CartItem[]
  itemCount: number
  subtotal: number
  addToCart: (flower: Flower, quantity?: number) => void
  increaseQuantity: (id: number) => void
  decreaseQuantity: (id: number) => void
  removeItem: (id: number) => void
  clearCart: () => void
}

export const CartContext = createContext<CartContextValue | undefined>(undefined)
