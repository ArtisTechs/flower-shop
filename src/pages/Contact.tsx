import { useState } from 'react'
import { AnimatePresence, motion, type Variants } from 'framer-motion'
import contactFlowers from '../assets/images/photo-sage-basket.png'
import { Button } from '../components/ui/Button'
import { Input, Textarea } from '../components/ui/Input'

const pageVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: 'easeOut',
      staggerChildren: 0.08,
    },
  },
  exit: { opacity: 0 },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: 'easeOut' },
  },
}

export function Contact() {
  const [values, setValues] = useState({ name: '', email: '', occasion: '', budget: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [success, setSuccess] = useState(false)

  const submit = (event: React.FormEvent) => {
    event.preventDefault()
    const nextErrors: Record<string, string> = {}
    Object.entries(values).forEach(([key, value]) => {
      if (!value.trim()) nextErrors[key] = 'This field is required.'
    })
    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) nextErrors.email = 'Enter a valid email address.'
    setErrors(nextErrors)
    setSuccess(Object.keys(nextErrors).length === 0)
  }

  return (
    <motion.section className="contact-page section-shell" variants={pageVariants} initial="hidden" animate="visible" exit="exit">
      <motion.div className="contact-intro" variants={pageVariants}>
        <motion.p className="eyebrow" variants={itemVariants}>Contact</motion.p>
        <motion.h1 variants={itemVariants}>Tell us what the flowers need to say</motion.h1>
        <motion.p variants={itemVariants}>
          Share the occasion, palette, budget, and message. We will shape the arrangement around the feeling you want to send.
        </motion.p>
        <motion.div className="contact-hero-card" variants={itemVariants} whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
          <img src={contactFlowers} alt="Sage and ivory flower basket" />
          <div>
            <strong>Custom floral guidance</strong>
            <span>Replies are handled during shop hours for gifts, weddings, events, and same-day requests.</span>
          </div>
        </motion.div>
        <motion.div className="contact-details" variants={pageVariants}>
          <motion.article className="glass-card" variants={itemVariants} whileHover={{ y: -4 }}>
            <span>Email</span>
            <strong>hello@flowershop.test</strong>
          </motion.article>
          <motion.article className="glass-card" variants={itemVariants} whileHover={{ y: -4 }}>
            <span>Phone</span>
            <strong>+63 912 555 0188</strong>
          </motion.article>
          <motion.article className="glass-card" variants={itemVariants} whileHover={{ y: -4 }}>
            <span>Hours</span>
            <strong>Mon-Sat, 9:00 AM-7:00 PM</strong>
          </motion.article>
        </motion.div>
        <motion.div className="map-card" variants={itemVariants}>
          <span>Delivery coverage</span>
          <strong>Metro floral delivery, events, and gift drop-offs</strong>
        </motion.div>
      </motion.div>
      <motion.form className="contact-form glass-card" onSubmit={submit} noValidate variants={pageVariants}>
        <motion.div className="contact-form__header" variants={itemVariants}>
          <p className="eyebrow">Inquiry form</p>
          <h2>Request a bouquet</h2>
          <p>We will respond with suggested stems, pricing, and delivery options.</p>
        </motion.div>
        <div className="contact-form__grid">
          <motion.div variants={itemVariants}>
            <Input label="Name" name="name" value={values.name} error={errors.name} onChange={(event) => setValues({ ...values, name: event.target.value })} />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Input label="Email" name="email" type="email" value={values.email} error={errors.email} onChange={(event) => setValues({ ...values, email: event.target.value })} />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Input label="Occasion" name="occasion" value={values.occasion} error={errors.occasion} onChange={(event) => setValues({ ...values, occasion: event.target.value })} />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Input label="Budget" name="budget" value={values.budget} error={errors.budget} onChange={(event) => setValues({ ...values, budget: event.target.value })} />
          </motion.div>
        </div>
        <motion.div variants={itemVariants}>
          <Textarea label="Message" name="message" rows={6} value={values.message} error={errors.message} onChange={(event) => setValues({ ...values, message: event.target.value })} />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Button type="submit">Send Inquiry</Button>
        </motion.div>
        <AnimatePresence>
          {success && (
            <motion.p className="success-message" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              Inquiry sent for this demo.
            </motion.p>
          )}
        </AnimatePresence>
      </motion.form>
    </motion.section>
  )
}
