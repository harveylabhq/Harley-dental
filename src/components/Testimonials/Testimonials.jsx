import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TESTIMONIALS } from '../../constants/data'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import styles from './Testimonials.module.css'

export default function Testimonials() {
  const [active, setActive]      = useState(0)
  const [direction, setDirection] = useState(1)
  const [paused, setPaused]      = useState(false)
  const { ref, visible }         = useScrollAnimation(0.1)
  const total                    = TESTIMONIALS.length

  // auto-advance every 5s unless paused
  useEffect(() => {
    if (!visible || paused) return
    const id = setInterval(() => {
      setDirection(1)
      setActive(a => (a + 1) % total)
    }, 5000)
    return () => clearInterval(id)
  }, [visible, paused, total])

  const goTo = (i) => {
    setDirection(i > active ? 1 : -1)
    setActive(i)
  }

  const prev = () => {
    setDirection(-1)
    setActive(a => (a - 1 + total) % total)
  }

  const next = () => {
    setDirection(1)
    setActive(a => (a + 1) % total)
  }

  const slideVariants = {
    enter:  (d) => ({ opacity: 0, x: d > 0 ?  60 : -60 }),
    center:       ({ opacity: 1, x: 0 }),
    exit:   (d) => ({ opacity: 0, x: d > 0 ? -60 :  60 }),
  }

  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.container}>

        {/* ── HEADER ── */}
        <div className={styles.header} ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className={styles.eyebrow}>Patient Stories</p>
            <h2 className={styles.title}>
              Told in Their<br />
              <em>Own Words</em>
            </h2>
          </motion.div>

          {/* nav arrows */}
          <motion.div
            className={styles.navArrows}
            initial={{ opacity: 0 }}
            animate={visible ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button
              className={styles.arrowBtn}
              onClick={prev}
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <button
              className={styles.arrowBtn}
              onClick={next}
              aria-label="Next testimonial"
            >
              →
            </button>
          </motion.div>
        </div>

        {/* ── MAIN SLIDER ── */}
        <motion.div
          className={styles.sliderWrap}
          initial={{ opacity: 0, y: 40 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* large quote mark */}
          <div className={styles.bigQuote}>"</div>

          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={active}
              className={styles.slide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              {/* stars */}
              <div className={styles.stars}>
                {'★'.repeat(TESTIMONIALS[active].rating)}
              </div>

              {/* quote text */}
              <p className={styles.quoteText}>
                {TESTIMONIALS[active].text}
              </p>

              {/* author */}
              <div className={styles.author}>
                <div className={styles.authorAvatar}>
                  {TESTIMONIALS[active].name.charAt(0)}
                </div>
                <div className={styles.authorInfo}>
                  <span className={styles.authorName}>
                    {TESTIMONIALS[active].name}
                  </span>
                  <span className={styles.authorDetail}>
                    {TESTIMONIALS[active].detail} · Verified Patient
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* ── DOTS + MINI CARDS ── */}
        <motion.div
          className={styles.bottom}
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* dot indicators */}
          <div className={styles.dots}>
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                className={[
                  styles.dot,
                  i === active ? styles.dotActive : '',
                ].join(' ')}
                onClick={() => goTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          {/* mini preview cards */}
          <div className={styles.miniCards}>
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.id}
                className={[
                  styles.miniCard,
                  i === active ? styles.miniCardActive : '',
                ].join(' ')}
                onClick={() => goTo(i)}
              >
                <div className={styles.miniAvatar}>
                  {t.name.charAt(0)}
                </div>
                <div className={styles.miniInfo}>
                  <span className={styles.miniName}>{t.name}</span>
                  <span className={styles.miniDetail}>{t.detail}</span>
                </div>
              </button>
            ))}
          </div>
        </motion.div>

        {/* ── GOOGLE BADGE ── */}
        <motion.div
          className={styles.googleBadge}
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className={styles.googleIcon}>G</div>
          <div className={styles.googleInfo}>
            <div className={styles.googleStars}>★★★★★</div>
            <div className={styles.googleText}>
              4.9 rating · 340+ reviews on Google
            </div>
          </div>
          <div className={styles.googleLabel}>Verified Reviews</div>
        </motion.div>

      </div>
    </section>
  )
}