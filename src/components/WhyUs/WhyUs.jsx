import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { STATS } from '../../constants/data'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import styles from './WhyUs.module.css'

// ── animated counter hook ──────────────────
function useCounter(target, duration = 2000, started = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!started) return
    let startTime = null
    const isDecimal = !Number.isInteger(target)
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased    = 1 - Math.pow(1 - progress, 3) // ease-out cubic
      const current  = eased * target
      setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(target)
    }
    requestAnimationFrame(step)
  }, [started, target, duration])

  return count
}

// ── single stat counter ────────────────────
function StatCounter({ stat, started }) {
  const count = useCounter(stat.value, 2000, started)
  return (
    <div className={styles.stat}>
      <div className={styles.statNum}>
        {count}{stat.suffix}
      </div>
      <div className={styles.statLabel}>{stat.label}</div>
    </div>
  )
}

// ── why points data ────────────────────────
const WHY_POINTS = [
  {
    icon: '🎓',
    title: 'Specialist-led team',
    body: 'Every clinician holds postgraduate qualifications from UK universities. Your care is never delegated to the least experienced person in the room.',
  },
  {
    icon: '💷',
    title: 'Transparent pricing',
    body: 'Full written quote before any treatment begins. 0% finance available on treatments over £500. No surprise costs — ever.',
  },
  {
    icon: '⏱️',
    title: 'Respect for your time',
    body: 'Appointments start on time. Digital records mean no repetitive forms. Evening and Saturday appointments available every week.',
  },
  {
    icon: '🛡️',
    title: 'GDC & CQC regulated',
    body: 'Fully registered with the General Dental Council and regulated by the Care Quality Commission — the highest standard of clinical governance.',
  },
]

export default function WhyUs() {
  const { ref, visible } = useScrollAnimation(0.15)

  return (
    <section className={styles.section} id="why-us">

      {/* ── STATS BAR ── */}
      <div className={styles.statsBar} ref={ref}>
        <div className={styles.statsInner}>
          {STATS.map((stat, i) => (
            <StatCounter key={i} stat={stat} started={visible} />
          ))}
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className={styles.container}>
        <div className={styles.grid}>

          {/* LEFT — heading + quote */}
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -40 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          >
            <p className={styles.eyebrow}>Why Choose Us</p>
            <h2 className={styles.title}>
              Dentistry That<br />
              <em>Respects Your</em><br />
              Intelligence
            </h2>
            <p className={styles.body}>
              We believe you deserve complete transparency — about your
              treatment options, their costs, and what to expect at every
              step. No upselling. No pressure. Just excellent clinical care
              and honest conversation.
            </p>

            {/* testimonial pull-quote */}
            <div className={styles.pullQuote}>
              <div className={styles.quoteBar} />
              <div>
                <p className={styles.quoteText}>
                  "I came in terrified. I left feeling completely at ease.
                  The team genuinely listened — I've never experienced
                  dental care like it."
                </p>
                <div className={styles.quoteAuthor}>
                  <div className={styles.quoteAvatar}>S</div>
                  <div>
                    <span className={styles.quoteName}>Sarah M.</span>
                    <span className={styles.quoteRole}>Smile Design Patient, 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — why points */}
          <div className={styles.right}>
            {WHY_POINTS.map((point, i) => (
              <motion.div
                key={i}
                className={styles.point}
                initial={{ opacity: 0, x: 40 }}
                animate={visible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 + i * 0.12 }}
              >
                <div className={styles.pointIcon}>{point.icon}</div>
                <div className={styles.pointContent}>
                  <h3 className={styles.pointTitle}>{point.title}</h3>
                  <p className={styles.pointBody}>{point.body}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

    </section>
  )
}