import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { navLinks } from '../../data/navLinks'
import { useCart } from '../../hooks/useCart'
import { Button } from '../ui/Button'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { itemCount } = useCart()
  const navigate = useNavigate()
  const location = useLocation()

  const handleNav = (to: string) => {
    setIsOpen(false)
    const [path, hash] = to.split('#')
    if (hash) {
      const target = `${path || location.pathname}#${hash}`
      if (location.pathname !== path && path) {
        navigate(target)
        window.setTimeout(() => document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' }), 80)
        return
      }
      navigate(target)
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
      return
    }
    navigate(to)
  }

  const isNavActive = (to: string) => {
    const [path, hash] = to.split('#')
    if (hash) {
      return location.pathname === (path || '/') && location.hash === `#${hash}`
    }

    if (to === '/') {
      return location.pathname === '/' && !location.hash
    }

    return location.pathname === to
  }

  return (
    <header className="navbar">
      <Link className="brand" to="/" onClick={() => setIsOpen(false)}>
        <span className="brand-mark" aria-hidden="true">
          <span />
        </span>
        <span>Flower</span> Shop
      </Link>
      <nav className={`nav-panel ${isOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
        <div className="nav-links">
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.label}
              className={isNavActive(link.to) ? 'is-active' : ''}
              aria-current={isNavActive(link.to) ? 'page' : undefined}
              onClick={() => handleNav(link.to)}
            >
              {link.label}
            </button>
          ))}
        </div>
        <div className="nav-actions">
          <Button
            to="/login"
            variant="secondary"
            className={`login-button ${location.pathname === '/login' ? 'is-active' : ''}`}
            aria-current={location.pathname === '/login' ? 'page' : undefined}
            onClick={() => setIsOpen(false)}
          >
            Login
          </Button>
        </div>
      </nav>
      <div className="header-actions">
        <Button
          to="/cart"
          data-cart-target="true"
          className={`cart-icon-button ${location.pathname === '/cart' ? 'is-active' : ''}`}
          aria-current={location.pathname === '/cart' ? 'page' : undefined}
          aria-label={`Cart with ${itemCount} items`}
          onClick={() => setIsOpen(false)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7 8h13l-1.4 7.2a2 2 0 0 1-2 1.6H9.1a2 2 0 0 1-2-1.7L5.8 5.8H3" />
            <circle cx="9.5" cy="20" r="1.2" />
            <circle cx="17" cy="20" r="1.2" />
          </svg>
          {itemCount > 0 && <span>{itemCount}</span>}
        </Button>
        <button className="menu-button" type="button" aria-label="Toggle navigation menu" onClick={() => setIsOpen((value) => !value)}>
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
