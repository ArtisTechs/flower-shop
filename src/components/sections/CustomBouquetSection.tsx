import { useState } from 'react'
import { motion } from 'framer-motion'
import customBouquet from '../../assets/images/photo-deep-rose.png'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
}

export function CustomBouquetSection() {
  const [values, setValues] = useState({ occasion: 'Wedding', colors: 'Blush, ivory, sage', budget: 'PHP 2,000-PHP 4,000', date: '' })

  return (
    <motion.section className="section-shell custom-section" id="custom-bouquet" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.25 }}>
      <motion.div className="custom-section__content" variants={itemVariants}>
        <p className="eyebrow">Custom bouquet</p>
        <h2>Design a Bouquet That Feels Personal</h2>
        <p>
          Choose the occasion, color story, budget, and delivery date. We will shape a floral arrangement that feels considered,
          romantic, and made for the moment.
        </p>
        <div className="custom-preview-card">
          <img src={customBouquet} alt="Deep rose custom bouquet inspiration" />
          <div>
            <strong>Styled around your story</strong>
            <span>Palette, message, wrap, and delivery details refined before arranging.</span>
          </div>
        </div>
        <Button to="/contact">Request Custom Bouquet</Button>
      </motion.div>
      <motion.form className="glass-card custom-form" variants={itemVariants}>
        <div className="custom-form__header">
          <span>01</span>
          <div>
            <h3>Bouquet preferences</h3>
            <p>Start with a few details. We will finish the floral direction with care.</p>
          </div>
        </div>
        <div className="custom-form__grid">
          <Input label="Occasion" name="occasion" value={values.occasion} onChange={(event) => setValues({ ...values, occasion: event.target.value })} />
          <Input label="Preferred Colors" name="colors" value={values.colors} onChange={(event) => setValues({ ...values, colors: event.target.value })} />
          <Input label="Budget Range" name="budget" value={values.budget} onChange={(event) => setValues({ ...values, budget: event.target.value })} />
          <Input label="Delivery Date" name="date" type="date" value={values.date} onChange={(event) => setValues({ ...values, date: event.target.value })} />
        </div>
      </motion.form>
    </motion.section>
  )
}
