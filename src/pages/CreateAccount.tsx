import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import accountFlowers from '../assets/images/photo-ivory-wedding.png'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'

export function CreateAccount() {
  const [values, setValues] = useState({ fullName: '', email: '', password: '', confirmPassword: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [success, setSuccess] = useState(false)

  const submit = (event: React.FormEvent) => {
    event.preventDefault()
    const nextErrors: Record<string, string> = {}
    if (!values.fullName.trim()) nextErrors.fullName = 'Full name is required.'
    if (!values.email.trim()) nextErrors.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) nextErrors.email = 'Enter a valid email address.'
    if (!values.password) nextErrors.password = 'Password is required.'
    if (!values.confirmPassword) nextErrors.confirmPassword = 'Confirm password is required.'
    else if (values.password !== values.confirmPassword) nextErrors.confirmPassword = 'Passwords must match.'
    setErrors(nextErrors)
    setSuccess(Object.keys(nextErrors).length === 0)
  }

  return (
    <motion.section className="auth-page" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
      <div className="auth-shell auth-shell--reverse">
        <aside className="auth-visual">
          <img src={accountFlowers} alt="Ivory wedding bouquet" />
          <div className="auth-visual__content">
            <p className="eyebrow">New client account</p>
            <h2>Start a softer, easier way to send flowers.</h2>
            <span>Save preferences for gifts, events, and custom bouquet requests.</span>
          </div>
        </aside>
        <form className="auth-card glass-card" onSubmit={submit} noValidate>
          <div className="auth-card__header">
            <p className="eyebrow">Join Flower Shop</p>
            <h1>Create Account</h1>
            <p>Create a demo account for faster gifting and custom floral planning.</p>
          </div>
          <Input label="Full Name" name="fullName" value={values.fullName} error={errors.fullName} onChange={(event) => setValues({ ...values, fullName: event.target.value })} />
          <Input label="Email" name="email" type="email" value={values.email} error={errors.email} onChange={(event) => setValues({ ...values, email: event.target.value })} />
          <Input label="Password" name="password" type="password" value={values.password} error={errors.password} onChange={(event) => setValues({ ...values, password: event.target.value })} />
          <Input label="Confirm Password" name="confirmPassword" type="password" value={values.confirmPassword} error={errors.confirmPassword} onChange={(event) => setValues({ ...values, confirmPassword: event.target.value })} />
          <Button type="submit" className="auth-submit">Create Account</Button>
          {success && <p className="success-message">Account created for this demo.</p>}
          <p className="auth-switch">Already have an account? <Link to="/login">Login</Link></p>
          <Link className="auth-home-link" to="/">Back to Home</Link>
        </form>
      </div>
    </motion.section>
  )
}
