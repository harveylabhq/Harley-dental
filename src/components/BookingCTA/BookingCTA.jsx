import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import Button from '../ui/Button/Button'
import styles from './BookingCTA.module.css'

export default function BookingCTA() {
  const { ref, visible } = useScrollAnimation(0.2)
  const navigate          = useNavigate()

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.bg}>
        <div className={styles.bgGlow} />
      </div>

      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 40 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className={styles.eyebrow}>Ready When You Are</p>
          <h2 className={styles.title}>
            Your Perfect Smile<br />
            Starts With <em>One Conversation</em>
          </h2>
          <p className={styles.body}>
            Book a completely free consultation — no obligation, no pressure.
            Just an honest conversation about what's possible for your smile.
          </p>

          <div className={styles.actions}>
            <Button
              variant="accent"
              size="lg"
              onClick={() => navigate('/contact')}
            >
              Book Free Consultation
            </Button>
            <a href="tel:+442079460000" className={styles.phoneLink}>
              <span className={styles.phoneIcon}>📞</span>
              020 7946 0000
            </a>
          </div>
        </motion.div>

        {/* trust row */}
        <motion.div
          className={styles.trustRow}
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className={styles.trustItem}>
            <span className={styles.trustNum}>Free</span>
            <span className={styles.trustLabel}>Consultation</span>
          </div>
          <div className={styles.trustDivider} />
          <div className={styles.trustItem}>
            <span className={styles.trustNum}>Same Week</span>
            <span className={styles.trustLabel}>Appointments</span>
          </div>
          <div className={styles.trustDivider} />
          <div className={styles.trustItem}>
            <span className={styles.trustNum}>0%</span>
            <span className={styles.trustLabel}>Finance Options</span>
          </div>
          <div className={styles.trustDivider} />
          <div className={styles.trustItem}>
            <span className={styles.trustNum}>2hr</span>
            <span className={styles.trustLabel}>Response Time</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}