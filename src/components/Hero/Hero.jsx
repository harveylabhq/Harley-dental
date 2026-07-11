import { useEffect,  useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import useLiveClock from '../../hooks/useLiveClock'
import { TEAM } from '../../constants/data'
import Button from '../ui/Button/Button'
import styles from './Hero.module.css'




// ── animation variants ──────────────────────
const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 30 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.7, ease: 'easeOut', delay },
})

const fadeIn = (delay = 0) => ({
  initial:    { opacity: 0 },
  animate:    { opacity: 1 },
  transition: { duration: 0.8, ease: 'easeOut', delay },
})

export default function Hero() {
  const time              = useLiveClock('Europe/London')
  const [activeDoc, setActiveDoc] = useState(0)
  const doctors           = TEAM.slice(0, 2)

  // auto-cycle doctor cards every 4 seconds
  useEffect(() => {
    const id = setInterval(() => {
      setActiveDoc(d => (d + 1) % doctors.length)
    }, 4000)
    return () => clearInterval(id)
  }, [doctors.length])

  return (
    <section className={styles.hero}>

<div className={styles.bg}>



<div className={styles.bg}>
  <img 
    src="/src/assets/doctors/image copy.png"
    alt=""
    className={styles.implantSvg}
    aria-hidden="true"
  />
  <div className={styles.bgOverlay} />
</div>



  <div className={styles.bgOverlay} />
</div>   

      {/* ── NAVBAR SPACER ── */}
      <div className={styles.spacer} />

      {/* ── TOP ROW — eyebrow left + tagline right ── */}
      <div className={styles.topRow}>
        <motion.p className={styles.eyebrow} {...fadeIn(0.3)}>
          From preventive care<br />
          to complex restorations,<br />
          a comprehensive approach<br />
          to your dental health.
        </motion.p>

        <motion.p className={styles.taglineRight} {...fadeIn(0.5)}>
          Select from our team<br />
          of highly skilled and<br />
          experienced dentists
        </motion.p>
      </div>

      {/* ── MAIN HEADLINE ── */}
      <div className={styles.headlineWrap}>
        <motion.h1 className={styles.headline} {...fadeUp(0.2)}>
          <span className={styles.headlineLine}>Modern</span>
          <span className={styles.headlineLine}>Care for</span>
          <span className={styles.headlineAccent}>
            a <em>Perfect</em>
          </span>
          <span className={styles.headlineLine}>Smile</span>
        </motion.h1>
      </div>

      {/* ── BOTTOM BAR ── */}
      <motion.div className={styles.bottomBar} {...fadeIn(0.8)}>
        {/* left meta */}
        <div className={styles.bottomLeft}>
          <div className={styles.metaBlock}>
            <span className={styles.metaLabel}>Best Dentistry</span>
            <span className={styles.metaValue}>2025</span>
          </div>
          <div className={styles.metaDivider} />
          <div className={styles.metaBlock}>
            <span className={styles.metaLabel}>London, United Kingdom</span>
            <span className={styles.metaValue}>{time} GMT</span>
          </div>
        </div>

        {/* right — doctor cards + CTA */}
        <div className={styles.bottomRight}>
          <div className={styles.metaBlock}>
            <span className={styles.metaLabel}>Advanced Dental</span>
            <span className={styles.metaValue}>Technologies</span>
          </div>

          {/* doctor cards */}
          <div className={styles.doctorCards}>
            <button
              className={styles.nextBtn}
              onClick={() => setActiveDoc(d => (d + 1) % doctors.length)}
              aria-label="Next doctor"
            >
              Next &rsaquo;
            </button>
            {doctors.map((doc, i) => (
              <motion.div
                key={doc.id}
                className={[
                  styles.doctorCard,
                  i === activeDoc ? styles.doctorCardActive : styles.doctorCardPeek,
                ].join(' ')}
                animate={{
                  x:       i === activeDoc ? 0 : 60,
                  opacity: i === activeDoc ? 1 : 0.5,
                  scale:   i === activeDoc ? 1 : 0.94,
                  zIndex:  i === activeDoc ? 2 : 1,
                }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                {/* avatar placeholder — replace with <img> when you have photos */}
                <div className={styles.doctorAvatar}>
                  {doc.initials}
                </div>
                <div className={styles.doctorInfo}>
                  <span className={styles.doctorName}>{doc.name}</span>
                  <span className={styles.doctorRole}>{doc.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── FLOATING CTA ── */}
      <motion.div className={styles.floatingCta} {...fadeUp(1.0)}>
        <Link to="/contact">
          <Button variant="outline" size="md">
            Book Free Consultation
          </Button>
        </Link>
        <Link to="/services">
          <Button variant="ghost" size="md">
            View Services →
          </Button>
        </Link>
      </motion.div>

      {/* ── SCROLL INDICATOR ── */}
      <motion.div
        className={styles.scrollIndicator}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
      >
        <span className={styles.scrollLine} />
        <span className={styles.scrollText}>Scroll</span>
      </motion.div>

    </section>
  )
}