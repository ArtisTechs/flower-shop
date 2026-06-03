import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setSuccess(false)
    if (!email.trim()) {
      setError('Email is required.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Enter a valid email address.')
      return
    }
    setError('')
    setSuccess(true)
    setEmail('')
  }

  return (
    <motion.section className="newsletter section-shell" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}>
      <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
        <p className="eyebrow">Seasonal letters</p>
        <h2>Receive floral edits, care notes, and studio offers.</h2>
      </motion.div>
      <motion.form onSubmit={handleSubmit} noValidate variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
        <Input label="Email address" name="newsletter-email" type="email" value={email} error={error} onChange={(event) => setEmail(event.target.value)} />
        <Button type="submit">Subscribe</Button>
        <AnimatePresence>
          {success && (
            <motion.p className="success-message" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              You’re on the list.
            </motion.p>
          )}
        </AnimatePresence>
      </motion.form>
    </motion.section>
  )
}
