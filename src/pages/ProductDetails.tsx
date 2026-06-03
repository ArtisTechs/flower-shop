import { useRef, useState, type MouseEvent } from 'react'
import { AnimatePresence, motion, type Variants } from 'framer-motion'
import { useNavigate, useParams } from 'react-router-dom'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { flowers } from '../data/flowers'
import { useCart } from '../hooks/useCart'
import { animateToCart } from '../utils/cartFlyAnimation'

const detailVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: 'easeOut',
      staggerChildren: 0.08,
    },
  },
  exit: { opacity: 0, y: -10 },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.42, ease: 'easeOut' } },
}

export function ProductDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const imageRef = useRef<HTMLImageElement>(null)
  const flower = flowers.find((item) => item.id === Number(id))

  if (!flower) {
    return (
      <motion.section className="page section-shell empty-state" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
        <h1>Arrangement not found</h1>
        <p>The product may be unavailable or the link is incorrect.</p>
        <Button to="/shop">Back to Shop</Button>
      </motion.section>
    )
  }

  const handleAdd = (event: MouseEvent<HTMLButtonElement>) => {
    addToCart(flower, quantity)
    animateToCart({ sourceImage: imageRef.current, trigger: event.currentTarget })
    setAdded(true)
  }

  return (
    <motion.section className="product-detail section-shell" variants={detailVariants} initial="hidden" animate="visible" exit="exit">
      <motion.div className="product-detail__media" variants={itemVariants}>
        <motion.img
          ref={imageRef}
          src={flower.image}
          alt={`${flower.name} floral arrangement`}
          initial={{ opacity: 0, scale: 0.96, clipPath: 'inset(8% round 36px)' }}
          animate={{ opacity: 1, scale: 1, clipPath: 'inset(0% round 36px)' }}
          transition={{ duration: 0.72, ease: 'easeOut' }}
        />
      </motion.div>
      <motion.div className="product-detail__content" variants={detailVariants}>
        <motion.div variants={itemVariants}>
          <Button type="button" variant="ghost" onClick={() => navigate('/shop')}>Back to Shop</Button>
        </motion.div>
        <motion.p className="meta" variants={itemVariants}>{flower.category} - {flower.occasion}</motion.p>
        <motion.h1 variants={itemVariants}>{flower.name}</motion.h1>
        <motion.p variants={itemVariants}>{flower.description}</motion.p>
        <motion.div className="price-row price-row--large" variants={itemVariants}>
          <strong>PHP {flower.price.toLocaleString()}</strong>
          <span>PHP {flower.originalPrice.toLocaleString()}</span>
          <Badge>{flower.discount}</Badge>
        </motion.div>
        <motion.p className="rating" variants={itemVariants}>Rated {flower.rating} / 5 - {flower.available ? 'Available today' : 'Currently sold out'}</motion.p>
        <motion.div className="detail-list" variants={itemVariants}>
          <p><strong>Colors:</strong> {flower.colors.join(', ')}</p>
          <p><strong>Size:</strong> {flower.size}</p>
          <p><strong>Occasion:</strong> {flower.occasion}</p>
        </motion.div>
        <motion.div className="quantity-control" aria-label="Quantity selector" variants={itemVariants}>
          <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))}>-</button>
          <span>{quantity}</span>
          <button type="button" onClick={() => setQuantity((value) => value + 1)}>+</button>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Button type="button" onClick={handleAdd} disabled={!flower.available}>
            {flower.available ? 'Add to Cart' : 'Sold Out'}
          </Button>
        </motion.div>
        <AnimatePresence>
          {added && (
            <motion.p className="success-message" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              Added to cart.
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  )
}
