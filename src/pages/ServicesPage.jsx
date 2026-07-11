import { motion } from 'framer-motion'
import Services from '../components/Services/Services'
import Testimonials from '../components/Testimonials/Testimonials'
import Pricing from '../components/Pricing/Pricing'
import MetaHead from '../components/SEO/MetaHead'
import { SEO_CONFIG } from './SEO'


export default function ServicesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >

     <MetaHead 
        title={SEO_CONFIG.pages.services.title}
        description={SEO_CONFIG.pages.services.description}
        keywords={SEO_CONFIG.pages.services.keywords}
        url={`${SEO_CONFIG.site.url}/services`}
        image={SEO_CONFIG.site.image}
      />
      
      <div style={{ paddingTop: '80px' }}>
        <Services />
        <Testimonials />
        <Pricing />
      </div>
    </motion.div>
  )
}