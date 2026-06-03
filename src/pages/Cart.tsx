import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Button } from '../components/ui/Button'
import { useCart } from '../hooks/useCart'

const deliveryFee = 180

export function Cart() {
  const { items, subtotal, increaseQuantity, decreaseQuantity, removeItem, clearCart } = useCart()
  const [success, setSuccess] = useState(false)
  const [isCheckingOut, setIsCheckingOut] = useState(false)
  const [completedTotal, setCompletedTotal] = useState(0)
  const checkoutTimer = useRef<number | undefined>(undefined)
  const total = subtotal + (items.length ? deliveryFee : 0)

  useEffect(() => {
    return () => {
      if (checkoutTimer.current) {
        window.clearTimeout(checkoutTimer.current)
      }
    }
  }, [])

  const handleCheckout = () => {
    if (isCheckingOut) return

    setCompletedTotal(total)
    setIsCheckingOut(true)

    checkoutTimer.current = window.setTimeout(() => {
      clearCart()
      setIsCheckingOut(false)
      setSuccess(true)
    }, 1250)
  }

  if (!items.length && !success) {
    return (
      <section className="page section-shell empty-state">
        <h1>Your cart is empty</h1>
        <p>Choose a floral arrangement and it will appear here.</p>
        <Button to="/shop">Return to Shop</Button>
      </section>
    )
  }

  return (
    <motion.section className="cart-page section-shell" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
      <header className="page-header">
        <p className="eyebrow">Cart</p>
        <h1>Your floral order</h1>
        <p>Review your selections, adjust quantities, and prepare your blooms for delivery.</p>
      </header>

      {items.length > 0 && (
        <div className="cart-layout">
          <div className="cart-items" aria-busy={isCheckingOut}>
            <AnimatePresence>
              {items.map((item, index) => (
                <motion.article
                  className="cart-item"
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ delay: index * 0.04 }}
                >
                  <div className="cart-item__media">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="cart-item__details">
                    <span className="cart-item__tag">Fresh arrangement</span>
                    <h2>{item.name}</h2>
                    <p>Hand-prepared bouquet with premium seasonal stems.</p>
                    <strong>₱{item.price.toLocaleString()}</strong>
                  </div>
                  <div className="cart-item__actions">
                    <div className="quantity-control" aria-label={`Quantity for ${item.name}`}>
                      <button type="button" onClick={() => decreaseQuantity(item.id)} disabled={isCheckingOut}>-</button>
                      <span>{item.quantity}</span>
                      <button type="button" onClick={() => increaseQuantity(item.id)} disabled={isCheckingOut}>+</button>
                    </div>
                    <Button type="button" variant="ghost" onClick={() => removeItem(item.id)} disabled={isCheckingOut}>Remove</Button>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          <aside className="summary-card glass-card">
            <div className="summary-card__header">
              <p className="eyebrow">Order Summary</p>
              <h2>Checkout</h2>
            </div>
            <div className="summary-card__rows">
              <p><span>Subtotal</span><strong>₱{subtotal.toLocaleString()}</strong></p>
              <p><span>Delivery</span><strong>₱{deliveryFee.toLocaleString()}</strong></p>
              <p><span>Gift wrapping</span><strong>Included</strong></p>
              <p className="summary-card__total"><span>Total</span><strong>₱{total.toLocaleString()}</strong></p>
            </div>
            <div className="summary-card__note">
              <strong>Delivery window</strong>
              <span>Same-day dispatch available for Metro Manila orders placed before 3 PM.</span>
            </div>
            <Button type="button" className="checkout-button" onClick={handleCheckout} disabled={isCheckingOut}>
              {isCheckingOut ? (
                <>
                  <span className="checkout-loader" aria-hidden="true" />
                  Preparing order
                </>
              ) : (
                'Checkout'
              )}
            </Button>
          </aside>
        </div>
      )}

      <AnimatePresence>
        {success && (
          <motion.div
            className="checkout-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="checkout-success-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="checkout-modal__card glass-card"
              initial={{ opacity: 0, y: 28, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            >
              <motion.div
                className="checkout-modal__mark"
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.16, type: 'spring', stiffness: 320, damping: 16 }}
                aria-hidden="true"
              >
                <motion.svg viewBox="0 0 24 24">
                  <motion.path
                    d="M5 12.6 9.2 17 19 7"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.7"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.32, duration: 0.46, ease: 'easeOut' }}
                  />
                </motion.svg>
              </motion.div>
              <p className="eyebrow">Successful Checkout</p>
              <h2 id="checkout-success-title">Your bouquet is reserved</h2>
              <p>We received your order request for ₱{completedTotal.toLocaleString()}. Our florist will prepare your blooms and confirm delivery shortly.</p>
              <div className="checkout-modal__actions">
                <Button type="button" onClick={() => setSuccess(false)}>Close</Button>
                <Button to="/shop" variant="secondary" onClick={() => setSuccess(false)}>Continue shopping</Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  )
}
