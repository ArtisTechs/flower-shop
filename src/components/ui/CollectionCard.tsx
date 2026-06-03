import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const MotionLink = motion.create(Link)

type CollectionCardProps = {
  title: string
  description: string
  image: string
}

export function CollectionCard({ title, description, image }: CollectionCardProps) {
  return (
    <MotionLink className="collection-card" to="/shop" aria-label={`Explore ${title}`} whileHover={{ y: -6 }} transition={{ duration: 0.2 }}>
      <img src={image} alt={`${title} collection`} loading="lazy" />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <span className="button button--ghost">
          Explore
        </span>
      </div>
    </MotionLink>
  )
}
