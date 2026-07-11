import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS, SITE } from '../../constants/data'
import Button from '../ui/Button/Button'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const navigate                  = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleBooking = () => {
    setMenuOpen(false)
    navigate('/contact')
  }

  return (
    <>
      <motion.nav
        className={[styles.nav, scrolled ? styles.scrolled : ''].join(' ')}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* ── LOGO ── */}
        <NavLink to="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
          <span className={styles.logoSquare}>H</span>
          <span className={styles.logoText}>
            Harley <strong>Dental</strong>
          </span>
        </NavLink>

        {/* ── DESKTOP LINKS ── */}
        <ul className={styles.links}>
          {NAV_LINKS.map(link => (
            <li key={link.label}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  [styles.link, isActive ? styles.linkActive : ''].join(' ')
                }
              >
                <span className={styles.linkDot} />
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ── DESKTOP CTA ── */}
        <div className={styles.cta}>
          <Button variant="outline" size="sm" onClick={handleBooking}>
            Health Check
          </Button>
        </div>

        {/* ── HAMBURGER ── */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={[styles.bar, menuOpen ? styles.barTop    : ''].join(' ')} />
          <span className={[styles.bar, menuOpen ? styles.barHidden : ''].join(' ')} />
          <span className={[styles.bar, menuOpen ? styles.barBot    : ''].join(' ')} />
        </button>
      </motion.nav>

      {/* ── MOBILE MENU ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{    opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <ul className={styles.mobileLinks}>
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0  }}
                  transition={{ delay: i * 0.07 }}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      [styles.mobileLink, isActive ? styles.mobileLinkActive : ''].join(' ')
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>

            <div className={styles.mobileCta}>
              <Button variant="accent" size="lg" fullWidth onClick={handleBooking}>
                Book Free Consultation
              </Button>
              <p className={styles.mobileContact}>
                <a href={`tel:${SITE.phone}`}>{SITE.phone}</a>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── BACKDROP ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{    opacity: 0 }}
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}