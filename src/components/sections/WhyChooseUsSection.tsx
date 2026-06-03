import { motion } from 'framer-motion'
import { CalendarCheck, CreditCard, Flower2, Gift, PackageCheck, Sparkles } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'

const reasons = [
  {
    title: 'Fresh Daily Blooms',
    description: 'Seasonal stems selected each morning for freshness, tone, and graceful longevity.',
    Icon: Flower2,
  },
  {
    title: 'Curated Floral Design',
    description: 'Balanced color, texture, and shape composed with a polished studio eye.',
    Icon: Sparkles,
  },
  {
    title: 'Same-Day Delivery Option',
    description: 'Reliable local delivery windows for thoughtful gestures that cannot wait.',
    Icon: CalendarCheck,
  },
  {
    title: 'Custom Arrangements',
    description: 'Bespoke bouquets tailored to the occasion, palette, message, and recipient.',
    Icon: Gift,
  },
  {
    title: 'Secure Checkout',
    description: 'A smooth protected checkout flow with clear totals and simple confirmation.',
    Icon: CreditCard,
  },
  {
    title: 'Gift-Ready Packaging',
    description: 'Refined wrap, ribbon, and care details prepared for a memorable handoff.',
    Icon: PackageCheck,
  },
]

const gridVariants = {
  visible: { transition: { staggerChildren: 0.07 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
}

export function WhyChooseUsSection() {
  return (
    <section className="section-shell">
      <SectionHeader eyebrow="Why Flower Shop" title="Thoughtful service from stem to doorstep" />
      <motion.div className="reason-grid" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={gridVariants}>
        {reasons.map(({ title, description, Icon }) => (
          <motion.article className="reason-card" key={title} variants={itemVariants}>
            <span className="reason-card__icon" aria-hidden="true">
              <Icon size={24} strokeWidth={1.8} />
            </span>
            <h3>{title}</h3>
            <p>{description}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
