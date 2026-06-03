import { useRef, type MouseEvent } from 'react'
import { motion } from 'framer-motion'
import { Button } from './Button'
import { Badge } from './Badge'
import type { Flower } from '../../data/flowers'
import { useCart } from '../../hooks/useCart'
import { animateToCart } from '../../utils/cartFlyAnimation'

type FlowerCardProps = {
  flower: Flower
}

export function FlowerCard({ flower }: FlowerCardProps) {
  const { addToCart } = useCart()
  const imageRef = useRef<HTMLImageElement>(null)

  const handleAddToCart = (event: MouseEvent<HTMLButtonElement>) => {
    addToCart(flower)
    animateToCart({ sourceImage: imageRef.current, trigger: event.currentTarget })
  }

  return (
    <motion.article className="flower-card" whileHover={{ y: -6 }} transition={{ duration: 0.2 }}>
      <div className="flower-card__media">
        <img ref={imageRef} src={flower.image} alt={`${flower.name} floral arrangement`} loading="lazy" />
        <Badge>{flower.tag}</Badge>
      </div>
      <div className="flower-card__body">
        <div>
          <p className="meta">{flower.category} - {flower.occasion}</p>
          <h3>{flower.name}</h3>
          <p className="flower-card__description">{flower.description}</p>
        </div>
        <div className="price-row">
          <strong>PHP {flower.price.toLocaleString()}</strong>
          <span>PHP {flower.originalPrice.toLocaleString()}</span>
          <Badge>{flower.discount}</Badge>
        </div>
        <p className="rating" aria-label={`Rated ${flower.rating} out of 5`}>
          Rated {flower.rating}
        </p>
        <div className="card-actions">
          <Button to={`/product/${flower.id}`} variant="secondary" className="flower-card__button flower-card__button--details">
            View Details
          </Button>
          <Button type="button" className="flower-card__button flower-card__button--cart" onClick={handleAddToCart} disabled={!flower.available}>
            {flower.available ? 'Add to Cart' : 'Sold Out'}
          </Button>
        </div>
      </div>
    </motion.article>
  )
}
