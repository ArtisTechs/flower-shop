import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { ScrollToTop } from './components/layout/ScrollToTop'
import { CartProvider } from './context/CartContext'
import { Cart } from './pages/Cart'
import { Contact } from './pages/Contact'
import { CreateAccount } from './pages/CreateAccount'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { NotFound } from './pages/NotFound'
import { ProductDetails } from './pages/ProductDetails'
import { Shop } from './pages/Shop'

function App() {
  const location = useLocation()

  return (
    <CartProvider>
      <ScrollToTop />
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </CartProvider>
  )
}

export default App
