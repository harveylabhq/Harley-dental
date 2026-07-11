import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import ContactForm from '../components/ContactForm/ContactForm'
import { CONTACT_DETAILS } from '../constants/data'
import styles from './Contact.module.css'

// src/pages/PricingPage.jsx
import MetaHead from '../components/SEO/MetaHead'
import { SEO_CONFIG } from './SEO'


     





export default function Contact() {
  const location = useLocation()
  const planData = location.state || {}
  const [formOpen, setFormOpen] = useState(true)

  useEffect(() => {
    const onEscape = (e) => {
      if (e.key === 'Escape') setFormOpen(false)
    }
    window.addEventListener('keydown', onEscape)
    return () => window.removeEventListener('keydown', onEscape)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
     <MetaHead 
        title={SEO_CONFIG.pages.contact.title}
        description={SEO_CONFIG.pages.contact.description}
        keywords={SEO_CONFIG.pages.contact.keywords}
        url={`${SEO_CONFIG.site.url}/contact`}
        image={SEO_CONFIG.site.image}
      />
     
 
      <section className={styles.page}>
        <div className={styles.container}>
          <motion.div
            className={styles.content}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className={styles.title}>Get In Touch</h1>
            <p className={styles.body}>
              We're here to answer your questions and help you get started on
              your smile journey. Reach out in any way that's convenient for
              you.
            </p>

            <div className={styles.contacts}>
              <div className={styles.contactBox}>
                <span className={styles.icon}>📞</span>
                <div>
                  <h3 className={styles.contactTitle}>Phone</h3>
                  <a href={`tel:${CONTACT_DETAILS.phone}`}>{CONTACT_DETAILS.phoneDisplay}</a>
                  <p className={styles.contactSub}>
                    Available Mon–Fri 8am–7pm, Sat 9am–4pm
                  </p>
                </div>
              </div>

              <div className={styles.contactBox}>
                <span className={styles.icon}>✉️</span>
                <div>
                  <h3 className={styles.contactTitle}>Email</h3>
                  <a href={`mailto:${CONTACT_DETAILS.email}`}>{CONTACT_DETAILS.email}</a>
                  <p className={styles.contactSub}>
                    We respond within 2 business hours
                  </p>
                </div>
              </div>

              <div className={styles.contactBox}>
                <span className={styles.icon}>📍</span>
                <div>
                  <h3 className={styles.contactTitle}>Visit Us</h3>
                  <p>12 Harley Street, London W1G 9PQ</p>
                  <p className={styles.contactSub}>Harley Street, London</p>
                </div>
              </div>
            </div>

            <motion.button
              className={styles.openFormBtn}
              onClick={() => setFormOpen(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Book Free Consultation →
            </motion.button>
          </motion.div>
          
        </div>
 <a 
  href="https://g.page/harleydentalstudio/review" 
  target="_blank" 
  rel="noopener noreferrer"
  className={styles.reviewBtnPremium}
>
  <svg className={styles.starIcon} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
  </svg>
  <span>Leave us a Google Review</span>
  <span className={styles.rating}>4.9 ★★★★★</span>
</a>
      </section>

      <ContactForm 
        isOpen={formOpen} 
        onClose={() => setFormOpen(false)}
        selectedService={planData.selectedPlan || null}
        initialConsultationType={planData.consultationType || null}
      />
    </motion.div>
  )
}