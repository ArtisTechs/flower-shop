import { motion } from 'framer-motion'
import { collections } from '../../data/collections'
import { CollectionCard } from '../ui/CollectionCard'
import { SectionHeader } from '../ui/SectionHeader'

const gridVariants = {
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
}

export function CollectionsSection() {
  return (
    <section className="section-shell" id="collections">
      <SectionHeader eyebrow="Collections" title="Florals for every kind of occasion" text="Shop by mood, moment, and floral format." />
      <motion.div className="collection-grid" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={gridVariants}>
        {collections.map((collection) => (
          <motion.div key={collection.title} variants={itemVariants}>
            <CollectionCard {...collection} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
