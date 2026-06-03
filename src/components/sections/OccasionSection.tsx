import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { occasions } from '../../data/occasions'
import { Button } from '../ui/Button'
import { SectionHeader } from '../ui/SectionHeader'

const occasionDetails: Record<string, string> = {
  Birthday: 'Bright, celebratory stems',
  Anniversary: 'Romantic keepsakes',
  Wedding: 'Ceremony-ready florals',
  Graduation: 'Polished congratulations',
  "Valentine's": 'Rose-led gestures',
  Condolence: 'Quiet, graceful comfort',
  'Corporate Gifts': 'Refined client gifting',
}

const occasionIcons: Record<string, string[]> = {
  Birthday: ['M4 21h16', 'M6 21v-8h12v8', 'M8 13V9h8v4', 'M9 6c0-1.2 1-2 2-2s2 .8 2 2v3', 'M15 6c0-1.2 1-2 2-2s2 .8 2 2v3'],
  Anniversary: ['M12 21s-7-4.5-9.2-8.8C.9 8.5 3.1 5 6.8 5c2 0 3.3 1.1 4.2 2.3C11.9 6.1 13.2 5 15.2 5c3.7 0 5.9 3.5 4 7.2C17 16.5 12 21 12 21Z'],
  Wedding: ['M8.5 14.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z', 'M15.5 18.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z', 'M8.5 5.5 10 3h4l1.5 2.5'],
  Graduation: ['M3 8.5 12 4l9 4.5-9 4.5-9-4.5Z', 'M7 11v4.2c0 1.3 2.2 2.8 5 2.8s5-1.5 5-2.8V11', 'M20 9v5'],
  "Valentine's": ['M12 21s-6.4-4.1-8.4-8.1C1.8 9.5 4 6 7.2 6c1.8 0 3 1 3.8 2.1C11.8 7 13.2 6 14.8 6 18 6 20.2 9.5 18.4 12.9 16.4 16.9 12 21 12 21Z', 'M12 8.8v7.5'],
  Condolence: ['M19 4C11.5 4 6 8.9 6 15.2V20', 'M6 15.2C11.1 15.2 17 11.2 19 4', 'M6 20h10'],
  'Corporate Gifts': ['M7 7V6a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1', 'M4 7h16v13H4V7Z', 'M4 12h16', 'M12 7v13'],
}

const gridVariants = {
  visible: { transition: { staggerChildren: 0.06 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
}

export function OccasionSection() {
  const navigate = useNavigate()

  return (
    <section className="section-shell section-band">
      <SectionHeader eyebrow="Occasions" title="Send the right feeling" text="Choose a moment and browse arrangements that match its tone." />
      <motion.div className="occasion-grid" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.16 }} variants={gridVariants}>
        {occasions.map((occasion) => (
          <motion.article className="occasion-card" key={occasion} variants={itemVariants}>
            <span className="occasion-card__mark" aria-hidden="true">
              <svg viewBox="0 0 24 24" focusable="false">
                {occasionIcons[occasion].map((path) => (
                  <path d={path} key={path} />
                ))}
              </svg>
            </span>
            <div>
              <h3>{occasion}</h3>
              <p>{occasionDetails[occasion]}</p>
            </div>
            <Button
              type="button"
              variant="ghost"
              className="occasion-card__button"
              onClick={() => navigate(`/shop?occasion=${encodeURIComponent(occasion)}`)}
            >
              Shop <span aria-hidden="true">-&gt;</span>
            </Button>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
