import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import blushBouquet from '../../assets/images/photo-blush-bouquet.png'
import deepRose from '../../assets/images/photo-deep-rose.png'
import heroBouquet from '../../assets/images/photo-hero-bouquet.png'
import ivoryWedding from '../../assets/images/photo-ivory-wedding.png'
import sageBasket from '../../assets/images/photo-sage-basket.png'
import { Button } from '../ui/Button'

const heroImages = [
  { src: heroBouquet, alt: 'Elegant blush and ivory bouquet', label: 'Signature bouquet' },
  { src: blushBouquet, alt: 'Soft blush bouquet arrangement', label: 'Blush florals' },
  { src: deepRose, alt: 'Deep rose floral arrangement', label: 'Rose edit' },
  { src: ivoryWedding, alt: 'Ivory wedding floral arrangement', label: 'Wedding stems' },
  { src: sageBasket, alt: 'Sage basket flower arrangement', label: 'Garden basket' },
]

const scrollViewport = { once: false, amount: 0.32 }
const imageEase = [0.22, 1, 0.36, 1] as const

const heroImageVariants = {
  enter: {
    opacity: 0,
    scale: 1.12,
    rotate: 1.1,
    clipPath: 'polygon(74% 0%, 100% 0%, 100% 100%, 54% 100%)',
    filter: 'blur(8px) saturate(0.92) contrast(0.98)',
  },
  center: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    filter: 'blur(0px) saturate(1.04) contrast(1.01)',
  },
  exit: {
    opacity: 0,
    scale: 1.03,
    rotate: -0.8,
    clipPath: 'polygon(0% 0%, 42% 0%, 24% 100%, 0% 100%)',
    filter: 'blur(5px) saturate(0.9) contrast(0.96)',
  },
}

export function HeroSection() {
  const [activeImage, setActiveImage] = useState(0)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length)
    }, 3600)

    return () => window.clearInterval(intervalId)
  }, [])

  useEffect(() => {
    heroImages.forEach(({ src }) => {
      const image = new Image()
      image.src = src
    })
  }, [])

  const scrollToCustom = () => {
    document.getElementById('custom-bouquet')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero section-shell">
      <motion.div
        className="hero__copy"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={scrollViewport}
        transition={{ duration: 0.7 }}
      >
        <p className="eyebrow">Modern floral boutique</p>
        <h1>Fresh Florals, Designed With Meaning</h1>
        <p>
          Elegant bouquets, curated arrangements, and custom floral pieces for gifts, weddings, events, and everyday moments.
        </p>
        <div className="hero__actions">
          <Button to="/shop">Shop Flowers</Button>
          <Button type="button" variant="secondary" onClick={scrollToCustom}>
            Create Custom Bouquet
          </Button>
        </div>
      </motion.div>
      <motion.div
        className="hero__visual"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={scrollViewport}
        transition={{ duration: 0.8 }}
      >
        <div className="floating-petal petal-one" />
        <div className="floating-petal petal-two" />
        <div className="hero__image-frame">
          <AnimatePresence initial={false}>
            <motion.img
              key={heroImages[activeImage].src}
              src={heroImages[activeImage].src}
              alt={heroImages[activeImage].alt}
              variants={prefersReducedMotion ? undefined : heroImageVariants}
              initial={prefersReducedMotion ? { opacity: 0 } : 'enter'}
              animate={prefersReducedMotion ? { opacity: 1 } : 'center'}
              exit={prefersReducedMotion ? { opacity: 0 } : 'exit'}
              transition={{ duration: prefersReducedMotion ? 0.2 : 1.15, ease: imageEase }}
            />
          </AnimatePresence>
          {!prefersReducedMotion && (
            <motion.div
              key={`glimmer-${activeImage}`}
              className="hero__image-glimmer"
              initial={{ opacity: 0, x: '-135%', skewX: -18 }}
              animate={{ opacity: [0, 0.48, 0], x: '135%', skewX: -18 }}
              transition={{ duration: 1.25, ease: imageEase }}
              aria-hidden="true"
            />
          )}
        </div>
        <div className="hero-note glass-card">
          <AnimatePresence mode="wait" initial={false}>
            <motion.strong
              key={heroImages[activeImage].label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.34, ease: 'easeOut' }}
            >
              {heroImages[activeImage].label}
            </motion.strong>
          </AnimatePresence>
          <span>Curated seasonal stems, wrapped gift-ready.</span>
        </div>
      </motion.div>
    </section>
  )
}
