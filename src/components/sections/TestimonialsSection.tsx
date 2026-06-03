import { motion } from 'framer-motion'
import { testimonials } from '../../data/testimonials'
import { SectionHeader } from '../ui/SectionHeader'
import { TestimonialCard } from '../ui/TestimonialCard'

const gridVariants = {
  visible: { transition: { staggerChildren: 0.09 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
}

export function TestimonialsSection() {
  return (
    <section className="section-shell testimonials-section">
      <SectionHeader eyebrow="Client notes" title="Florals remembered after the moment passes" />
      <motion.div className="testimonial-grid" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={gridVariants}>
        {testimonials.map((testimonial) => (
          <motion.div key={testimonial.id} variants={itemVariants}>
            <TestimonialCard {...testimonial} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
