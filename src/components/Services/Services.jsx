import { useState } from 'react'
import { motion } from 'framer-motion'
import { SERVICES } from '../../constants/data'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import ContactForm from '../ContactForm/ContactForm'
import styles from './Services.module.css'

// stagger children
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Services() {
  const { ref, visible } = useScrollAnimation(0.1)
  const [contactOpen, setContactOpen] = useState(false)
  const [selectedService, setSelectedService] = useState(null)

  // Handle service card click — open modal with service pre-selected
  const handleServiceClick = (service) => {
    setSelectedService(service.title)
    setContactOpen(true)
  }

  return (
    <>
      <section className={styles.section} id="services">
        <div className={styles.container}>

          {/* ── HEADER ── */}
          <div className={styles.header} ref={ref}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={visible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <p className={styles.eyebrow}>What We Offer</p>
              <h2 className={styles.title}>
                A Complete Range of<br />
                <em>Dental Excellence</em>
              </h2>
            </motion.div>

            <motion.p
              className={styles.headerBody}
              initial={{ opacity: 0, x: 30 }}
              animate={visible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
            >
              Every treatment — from a routine check-up to a full smile
              transformation — is delivered with the same standard of precision
              and care. No shortcuts. No compromises.
            </motion.p>
          </div>

          {/* ── GRID ── */}
          <motion.div
            className={styles.grid}
            variants={container}
            initial="hidden"
            animate={visible ? 'show' : 'hidden'}
          >
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.id}
                className={styles.card}
                variants={cardVariant}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onClick={() => handleServiceClick(service)}
                style={{ cursor: 'pointer' }}
              >
                {/* image */}
                {service.image && (
                  <div className={styles.cardImage}>
                    <img src={service.image} alt={service.title} />
                  </div>
                )}

                {/* number */}
                <span className={styles.cardNum}>
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* icon */}
                <div className={styles.iconWrap}>
                  <span className={styles.icon}>{service.icon}</span>
                </div>

                {/* content */}
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardBody}>{service.short}</p>

                {/* price + arrow */}
                <div className={styles.cardFooter}>
                  <span className={styles.price}>{service.price}</span>
                  <span className={styles.arrow}>→</span>
                </div>

                {/* hover border glow */}
                <div className={styles.glowBorder} />
              </motion.div>
            ))}
          </motion.div>

          {/* ── BOTTOM CTA ── */}
          <motion.div
            className={styles.bottomCta}
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <button
              className={styles.ctaBtn}
              onClick={() => {
                setSelectedService(null)
                setContactOpen(true)
              }}
            >
              Book a consultation
              <span className={styles.ctaArrow}>→</span>
            </button>
          </motion.div>

        </div>
      </section>

      {/* ── CONTACT FORM MODAL ── */}
      <ContactForm 
        isOpen={contactOpen} 
        onClose={() => setContactOpen(false)}
        selectedService={selectedService}
      />
    </>
  )
}