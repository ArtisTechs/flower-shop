import { motion } from 'framer-motion'
import { CollectionsSection } from '../components/sections/CollectionsSection'
import { CustomBouquetSection } from '../components/sections/CustomBouquetSection'
import { FeaturedFlowersSection } from '../components/sections/FeaturedFlowersSection'
import { HeroSection } from '../components/sections/HeroSection'
import { NewsletterSection } from '../components/sections/NewsletterSection'
import { OccasionSection } from '../components/sections/OccasionSection'
import { TestimonialsSection } from '../components/sections/TestimonialsSection'
import { WhyChooseUsSection } from '../components/sections/WhyChooseUsSection'

export function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <HeroSection />
      <FeaturedFlowersSection />
      <CollectionsSection />
      <OccasionSection />
      <CustomBouquetSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <NewsletterSection />
    </motion.div>
  )
}
