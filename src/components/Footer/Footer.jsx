import { Link } from 'react-router-dom'
import { SITE,  } from '../../constants/data'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* ── TOP GRID ── */}
        <div className={styles.grid}>

          {/* brand column */}
          <div className={styles.brandCol}>
            <Link to="/" className={styles.logo}>
              <span className={styles.logoSquare}>H</span>
              <span className={styles.logoText}>
                Harley <strong>Dental</strong>
              </span>
            </Link>
            <p className={styles.brandBody}>
              Award-winning dental care in the heart of London. GDC
              registered, CQC regulated, and committed to excellence in
              every appointment.
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.socialIcon} aria-label="Instagram">◎</a>
              <a href="#" className={styles.socialIcon} aria-label="Facebook">▣</a>
              <a href="#" className={styles.socialIcon} aria-label="LinkedIn">◈</a>
            </div>
          </div>

          {/* treatments column */}
          <div className={styles.linkCol}>
            <h4 className={styles.colHeading}>Treatments</h4>
            <ul className={styles.linkList}>
              <li><Link to="/services#smile-design">Smile Design</Link></li>
              <li><Link to="/services#implants">Dental Implants</Link></li>
              <li><Link to="/services#invisalign">Invisalign</Link></li>
              <li><Link to="/services#veneers">Porcelain Veneers</Link></li>
              <li><Link to="/services#whitening">Teeth Whitening</Link></li>
            </ul>
          </div>

          {/* practice column */}
          <div className={styles.linkCol}>
            <h4 className={styles.colHeading}>Practice</h4>
            <ul className={styles.linkList}>
              <li><Link to="/team">Our Team</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/#testimonials">Patient Reviews</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/contact">Emergency Care</Link></li>
            </ul>
          </div>

          {/* contact column */}
          <div className={styles.linkCol}>
            <h4 className={styles.colHeading}>Get In Touch</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                {SITE.address}
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}>✉️</span>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}>📞</span>
                <a href={`tel:${SITE.phone}`}>{SITE.phone}</a>
              </li>
            </ul>

            <div className={styles.hours}>
              <h4 className={styles.colHeading} style={{ marginTop: '24px' }}>
                Opening Hours
              </h4>
              <ul className={styles.hoursList}>
                <li>{SITE.hours.weekday}</li>
                <li>{SITE.hours.saturday}</li>
                <li>{SITE.hours.sunday}</li>
              </ul>
            </div>
          </div>

        </div>

        {/* ── BOTTOM BAR ── */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {year} {SITE.name} Ltd. All rights reserved.{' '}
            <span className={styles.gdc}>{SITE.gdc}</span>
          </p>
          <div className={styles.badges}>
            <span className={styles.badge}>CQC Registered</span>
            <span className={styles.badgeDot} />
            <span className={styles.badge}>ICO Compliant</span>
            <span className={styles.badgeDot} />
            <span className={styles.badge}>GDC Practice</span>
          </div>
        </div>

      </div>
    </footer>
  )
}