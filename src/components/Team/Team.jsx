import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { TEAM } from '../../constants/data'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import styles from './Team.module.css'

const container = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.12 } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Team() {
  const [hovered, setHovered]    = useState(null)
  const { ref, visible }         = useScrollAnimation(0.1)
  const navigate                 = useNavigate()

  return (
    <section className={styles.section} id="team">
      <div className={styles.container}>

        {/* ── HEADER ── */}
        <div className={styles.header} ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className={styles.eyebrow}>Meet the Team</p>
            <h2 className={styles.title}>
              Experts Behind<br />
              <em>Every Smile</em>
            </h2>
          </motion.div>

          <motion.div
            className={styles.headerRight}
            initial={{ opacity: 0, y: 30 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          >
            <p className={styles.headerBody}>
              Every clinician on our team holds postgraduate qualifications
              and specialist training. You will always be treated by the most
              qualified person for your specific needs.
            </p>
            <button
              className={styles.allBtn}
              onClick={() => navigate('/team')}
            >
              View full team →
            </button>
          </motion.div>
        </div>

        {/* ── CARDS GRID ── */}
        <motion.div
          className={styles.grid}
          variants={container}
          initial="hidden"
          animate={visible ? 'show' : 'hidden'}
        >
          {TEAM.map((member) => (
            <motion.div
              key={member.id}
              className={styles.card}
              variants={cardVariant}
              onMouseEnter={() => setHovered(member.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => navigate('/team')}
            >
              {/* avatar / photo area */}
              
                



    <div className={styles.avatarWrap}>
      <div className={styles.avatar}>
        {member.image ? (
          <img src={member.image} alt={member.name} className={styles.avatarImg} />
        ) : (
          <span className={styles.avatarInitials}>
            {member.initials}
          </span>
        )}
      </div>
   

                {/* hover overlay */}
                <motion.div
                  className={styles.avatarOverlay}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hovered === member.id ? 1 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <span className={styles.overlayText}>View Profile →</span>
                </motion.div>

                {/* speciality pill */}
                <div className={styles.specialityPill}>
                  {member.speciality}
                </div>
              </div>

              {/* info */}
              <div className={styles.info}>
                <div className={styles.infoTop}>
                  <h3 className={styles.name}>{member.name}</h3>
                  <p className={styles.role}>{member.role}</p>
                </div>
                <p className={styles.bio}>{member.bio}</p>

                {/* bottom row */}
                <div className={styles.cardFooter}>
                  <div className={styles.rating}>
                    {'★★★★★'.split('').map((s, j) => (
                      <span key={j} className={styles.star}>{s}</span>
                    ))}
                  </div>
                  <motion.span
                    className={styles.cardArrow}
                    animate={{
                      x: hovered === member.id ? 6 : 0,
                      color: hovered === member.id
                        ? 'var(--brand-accent)'
                        : 'rgba(255,255,255,0.2)',
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    →
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── BOTTOM TRUST STRIP ── */}
        <motion.div
          className={styles.trustStrip}
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {[
            'GDC Registered Practice',
            'CQC Regulated',
            'Invisalign Diamond Provider',
            'ITI Member Implantologists',
            'BDA Good Practice',
          ].map((item, i) => (
            <div key={i} className={styles.trustItem}>
              <span className={styles.trustDot} />
              {item}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}