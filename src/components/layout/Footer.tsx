import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__topline">
        <span>Soft florals</span>
        <span>Same-day options</span>
        <span>Gift-ready wrapping</span>
      </div>
      <div className="footer__brand">
        <Link className="footer__logo" to="/">
          <span className="brand-mark" aria-hidden="true">
            <span />
          </span>
          <span>Flower Shop</span>
        </Link>
        <p>Premium floral design for meaningful gifts, weddings, events, and custom arrangements with a softer modern touch.</p>
        <div className="footer__note">
          <strong>Fresh daily blooms</strong>
          <span>Styled with soft romance, modern color, and gift-ready detail.</span>
        </div>
      </div>
      <div className="footer__group">
        <h3>Navigate</h3>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Custom Bouquet</Link>
        <Link to="/cart">Cart</Link>
      </div>
      <div className="footer__group">
        <h3>Customer Care</h3>
        <Link to="/contact">Delivery Support</Link>
        <Link to="/contact">Event Inquiry</Link>
        <Link to="/login">Account</Link>
      </div>
      <div className="footer__group footer__contact">
        <h3>Shop</h3>
        <p>hello@flowershop.test</p>
        <p>+63 912 555 0188</p>
        <p>Mon-Sat - 9:00 AM-7:00 PM</p>
        <div className="social-links">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://pinterest.com" target="_blank" rel="noreferrer">Pinterest</a>
        </div>
      </div>
      <div className="footer__copy">
        <p>(c) 2026 Flower Shop. Crafted for demo ecommerce.</p>
        <p>Designed for bouquets, events, gifts, and everyday moments.</p>
      </div>
    </footer>
  )
}
