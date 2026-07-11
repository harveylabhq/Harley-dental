import { motion } from 'framer-motion'
import Team from '../components/Team/Team'
import Testimonials from '../components/Testimonials/Testimonials'

import MetaHead from '../components/SEO/MetaHead'
import { SEO_CONFIG } from './SEO'




export default function TeamPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >




      <MetaHead 
        title={SEO_CONFIG.pages.Team.title}
        description={SEO_CONFIG.pages.Team.description}
        keywords={SEO_CONFIG.pages.Team.keywords}
        url={`${SEO_CONFIG.site.url}/Team`}
        image={SEO_CONFIG.site.image}
      />
      {/* Your Pricing component */}
  

      <div style={{ paddingTop: '80px' }}>
        <Team />
        <Testimonials />
      </div>
    </motion.div>
  )
}