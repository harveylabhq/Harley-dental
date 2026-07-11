import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { PRICING } from '../../constants/data'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import Button from '../ui/Button/Button'
import styles from './Pricing.module.css'

const container = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.15 } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Pricing() {
  const { ref, visible }  = useScrollAnimation(0.1)
  const navigate          = useNavigate()

  return (
    <section className={styles.section} id="pricing">
      <div className={styles.container}>

        {/* ── HEADER ── */}
        <div className={styles.header} ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className={styles.eyebrow}>Investment in Your Smile</p>
            <h2 className={styles.title}>
              Simple, Transparent<br />
              <em>Pricing</em>
            </h2>
          </motion.div>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 30 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Every plan includes a free consultation and 0% finance options
            available. No hidden fees. No surprises.
          </motion.p>
        </div>

        {/* ── PRICING CARDS ── */}
        <motion.div
          className={styles.grid}
          variants={container}
          initial="hidden"
          animate={visible ? 'show' : 'hidden'}
        >
          {PRICING.map((plan, i) => (
            <motion.div
              key={plan.id}
              className={[
                styles.card,
                plan.featured ? styles.cardFeatured : '',
              ].join(' ')}
              variants={cardVariant}
              whileHover={{
                y: plan.featured ? -12 : -6,
                transition: { duration: 0.3 },
              }}
            >
              {/* badge */}
              {plan.featured && (
                <div className={styles.badge}>Most Popular</div>
              )}

              {/* header */}
              <div className={styles.cardHeader}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.planDesc}>{plan.description}</p>
              </div>

              {/* price */}
              <div className={styles.priceWrap}>
                <span className={styles.price}>{plan.price}</span>
                <span className={styles.period}>{plan.period}</span>
              </div>

              {/* divider */}
              <div className={styles.divider} />

              {/* features */}
              <ul className={styles.features}>
                {plan.features.map((feature, j) => (
                  <li key={j} className={styles.feature}>
                    <span className={styles.featureCheck}>✓</span>
                    <span className={styles.featureText}>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* spacer to push button down */}
              <div style={{ flex: 1 }} />

              {/* cta button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={visible ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + i * 0.15 }}
              >
    <Button
  variant={plan.featured ? 'accent' : 'outline'}
  size="lg"
  fullWidth
  onClick={() => {
    navigate('/contact', { 
      state: { 
        selectedPlan: plan.name,
        consultationType: {
          id: plan.id,
          label: `${plan.name} Consultation`,
          desc: plan.description,
        },
        whatsappMessage: plan.whatsappMessage,
        emailSubject: plan.emailSubject,
      }
    })
  }}
>
  {plan.cta}
</Button>
              </motion.div>

              {/* border glow on featured */}
              {plan.featured && <div className={styles.glowBorder} />}
            </motion.div>
          ))}
        </motion.div>

        {/* ── BOTTOM INFO ── */}
        <motion.div
          className={styles.bottomInfo}
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className={styles.infoBox}>
            <span className={styles.infoDot} />
            <p>
              <strong>0% Finance</strong> available on treatments over £500.
              Spread payments over 3–24 months with no interest.
            </p>
          </div>
          <div className={styles.infoBox}>
            <span className={styles.infoDot} />
            <p>
              <strong>Payment Plans</strong> can be customised to your needs.
              Call us to discuss flexible options: <strong>020 7946 0000</strong>
            </p>
          </div>
          <div className={styles.infoBox}>
            <span className={styles.infoDot} />
            <p>
              <strong>Prices include</strong> consultation, treatment, and
              post-care follow-up. Prices shown are from — actual cost depends
              on your specific needs.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}