import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import loginFlowers from '../assets/images/photo-blush-bouquet.png'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'

export function Login() {
  const [values, setValues] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [success, setSuccess] = useState(false)

  const submit = (event: React.FormEvent) => {
    event.preventDefault()
    const nextErrors: Record<string, string> = {}
    if (!values.email.trim()) nextErrors.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) nextErrors.email = 'Enter a valid email address.'
    if (!values.password) nextErrors.password = 'Password is required.'
    setErrors(nextErrors)
    setSuccess(Object.keys(nextErrors).length === 0)
  }

  return (
    <motion.section className="auth-page" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
      <div className="auth-shell">
        <aside className="auth-visual">
          <img src={loginFlowers} alt="Blush and ivory bouquet" />
          <div className="auth-visual__content">
            <p className="eyebrow">Member access</p>
            <h2>Fresh blooms, saved favorites, and smoother gifting.</h2>
            <span>Curated floral moments in one soft place.</span>
          </div>
        </aside>
        <form className="auth-card glass-card" onSubmit={submit} noValidate>
          <div className="auth-card__header">
            <p className="eyebrow">Welcome back</p>
            <h1>Login to Flower Shop</h1>
            <p>Access your cart, custom bouquet requests, and saved floral preferences.</p>
          </div>
          <Input label="Email" name="email" type="email" value={values.email} error={errors.email} onChange={(event) => setValues({ ...values, email: event.target.value })} />
          <Input label="Password" name="password" type="password" value={values.password} error={errors.password} onChange={(event) => setValues({ ...values, password: event.target.value })} />
          <div className="auth-options">
            <label>
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <Link to="/contact">Need help?</Link>
          </div>
          <Button type="submit" className="auth-submit">Login</Button>
          {success && <p className="success-message">Login successful.</p>}
          <p className="auth-switch">New here? <Link to="/create-account">Create an account</Link></p>
          <Link className="auth-home-link" to="/">Back to Home</Link>
        </form>
      </div>
    </motion.section>
  )
}
