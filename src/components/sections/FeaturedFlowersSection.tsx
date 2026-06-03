import { motion } from 'framer-motion'
import { flowers } from '../../data/flowers'
import { FlowerCard } from '../ui/FlowerCard'
import { SectionHeader } from '../ui/SectionHeader'

const gridVariants = {
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
}

export function FeaturedFlowersSection() {
  return (
    <section className="section-shell">
      <SectionHeader eyebrow="Featured florals" title="Garden-led arrangements with a polished finish" text="A considered edit of bouquets, preserved pieces, and gift-ready florals." />
      <motion.div className="product-grid" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={gridVariants}>
        {flowers.slice(0, 4).map((flower) => (
          <motion.div key={flower.id} variants={itemVariants}>
            <FlowerCard flower={flower} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
