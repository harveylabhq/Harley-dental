import { motion } from 'framer-motion'
import Pricing from '../components/Pricing/Pricing'
// src/pages/PricingPage.jsx
import MetaHead from '../components/SEO/MetaHead'
import { SEO_CONFIG } from './SEO'





export default function PricingPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
       <MetaHead 
        title={SEO_CONFIG.pages.pricing.title}
        description={SEO_CONFIG.pages.pricing.description}
        keywords={SEO_CONFIG.pages.pricing.keywords}
        url={`${SEO_CONFIG.site.url}/pricing`}
        image={SEO_CONFIG.site.image}
      />
      <Pricing />
    </motion.div>
  )
}