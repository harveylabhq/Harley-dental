import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SERVICES, CONTACT_DETAILS, CONSULTATION_TYPES } from '../../constants/data'
import Button from '../ui/Button/Button'
import styles from './ContactForm.module.css'

export default function ContactForm({ 
  isOpen, 
  onClose, 
  selectedService = null,
  initialConsultationType = null 
}) {
  const [step, setStep] = useState(1)
  const [consultationType, setConsultationType] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    treatment: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  // ✅ FIX #1: Sync with props when modal opens/selectedService changes
  useEffect(() => {
    if (isOpen) {
      // If coming from Pricing with consultation type, skip to step 2 with it pre-selected
      if (initialConsultationType) {
        setConsultationType(initialConsultationType)
        setStep(2)
      } else {
        setStep(selectedService ? 2 : 1)
      }
      
      setFormData(prev => ({
        ...prev,
        treatment: selectedService || '',
      }))
      setSubmitted(false)
    }
  }, [isOpen, selectedService, initialConsultationType])

  // ✅ FIX #7: Lock background scroll + Esc key to close
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      
      const handleEscape = (e) => {
        if (e.key === 'Escape') {
          resetForm()
        }
      }
      
      window.addEventListener('keydown', handleEscape)
      return () => {
        window.removeEventListener('keydown', handleEscape)
        document.body.style.overflow = 'unset'
      }
    }
  }, [isOpen])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleConsultationSelect = (type) => {
    setConsultationType(type)
    setStep(2)
  }

  // ✅ FIX #4: Form validation with email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const isFormValid =
    formData.name.trim() !== '' &&
    emailRegex.test(formData.email) &&
    formData.phone.trim() !== ''

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!isFormValid) {
      alert('Please fill in all required fields with valid data')
      return
    }

    setLoading(true)

    setTimeout(() => {
      setSubmitted(true)
      setLoading(false)
    }, 800)
  }

  // ✅ FIX #3: Back button resets consultation type
  const handleBack = () => {
    setStep(1)
    setConsultationType(null)
  }

  const generateWhatsAppMessage = () => {
    const consultationLabel = consultationType?.label || 'General Inquiry'
    const message = `
Hi Harley Dental,

I would like to book a: ${consultationLabel}

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
${formData.treatment ? `Interested in: ${formData.treatment}` : ''}

${formData.message ? `Additional notes: ${formData.message}` : 'Looking forward to hearing from you!'}
    `.trim()
    return message
  }

  const generateEmailBody = () => {
    const consultationLabel = consultationType?.label || 'General Inquiry'
    const body = `
Consultation Type: ${consultationLabel}

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
${formData.treatment ? `Interested in: ${formData.treatment}` : ''}

${formData.message ? `Additional notes: ${formData.message}` : ''}
    `.trim()
    return body
  }

  // ✅ FIX #5 & #6: Remove auto-reset + add safety checks
  const handleWhatsAppClick = () => {
    const phoneNumber = CONTACT_DETAILS.whatsapp?.replace(/\D/g, '')
    
    if (!phoneNumber) {
      alert('WhatsApp number not configured. Please email us instead.')
      return
    }

    const message = generateWhatsAppMessage()
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  const handleEmailClick = () => {
    const emailAddress = CONTACT_DETAILS.email?.trim()
    
    if (!emailAddress) {
      alert('Email address not configured. Please call us instead.')
      return
    }

    const body = generateEmailBody()
    const encodedBody = encodeURIComponent(body)
    const subject = encodeURIComponent(`Consultation Booking - ${formData.name}`)
    const emailUrl = `mailto:${emailAddress}?subject=${subject}&body=${encodedBody}`
    window.location.href = emailUrl
  }

  const handleCallClick = () => {
    const phone = CONTACT_DETAILS.phone?.trim()
    
    if (!phone) {
      alert('Phone number not configured.')
      return
    }

    window.location.href = `tel:${phone}`
  }

  const resetForm = () => {
    onClose()
    setStep(1)
    setSubmitted(false)
    setConsultationType(null)
    setFormData({ name: '', email: '', phone: '', treatment: '', message: '' })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* ✅ FIX #2: Backdrop clickable to close */}
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetForm}
            aria-hidden="true"
          />

          {/* ✅ FIX #2: Stop propagation so clicks inside don't close modal */}
          <motion.div
            className={styles.modal}
           initial={{ opacity: 0, scale: 0.9 }}  // ← Remove y: 40
animate={{ opacity: 1, scale: 1 }}     // ← Remove y: 0
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* ✅ Close button with proper event handling */}
            <button
              type="button"
              className={styles.closeBtn}
              onClick={(e) => {
                e.stopPropagation()
                resetForm()
              }}
              aria-label="Close modal"
            >
              ✕
            </button>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div
                  key={`step-${step}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.25 }}
                >
                  {/* STEP 1: CONSULTATION TYPE */}
                  {step === 1 && (
                    <div className={styles.step}>
                      <div className={styles.header}>
                        <h2 className={styles.title} id="modal-title">
                          What's Your Consultation?
                        </h2>
                        <p className={styles.subtitle}>
                          Choose the type that best fits your needs
                        </p>
                      </div>

                      <div className={styles.consultationGrid}>
                        {CONSULTATION_TYPES.map(type => (
                          <motion.button
                            key={type.id}
                            className={styles.consultationCard}
                            onClick={() => handleConsultationSelect(type)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="button"
                          >
                            <h3 className={styles.consultationTitle}>
                              {type.label}
                            </h3>
                            <p className={styles.consultationDesc}>
                              {type.desc}
                            </p>
                            <span className={styles.consultationArrow}>→</span>
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* STEP 2: FORM */}
                  {step === 2 && (
                    <div className={styles.step}>
                      <button
                        className={styles.backBtn}
                        onClick={handleBack}
                        type="button"
                        aria-label="Go back to consultation type selection"
                      >
                        ← Back
                      </button>

                      <div className={styles.header}>
                        <h2 className={styles.title} id="modal-title">
                          Your Details
                        </h2>
                        <p className={styles.subtitle}>
                          {consultationType?.label || 'Complete your booking'}
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.formRow}>
                          <div className={styles.formGroup}>
                            <label htmlFor="name" className={styles.label}>
                              Full Name *
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              placeholder="Sarah Richardson"
                              className={styles.input}
                              autoComplete="name"
                            />
                          </div>
                          <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.label}>
                              Email *
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              placeholder="sarah@example.com"
                              className={styles.input}
                              autoComplete="email"
                            />
                          </div>
                        </div>

                        <div className={styles.formRow}>
                          <div className={styles.formGroup}>
                            <label htmlFor="phone" className={styles.label}>
                              Phone *
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                              placeholder="+44 7700 000000"
                              inputMode="tel"
                              pattern="[0-9+ \-]*"
                              className={styles.input}
                              autoComplete="tel"
                            />
                          </div>
                          <div className={styles.formGroup}>
                            <label htmlFor="treatment" className={styles.label}>
                              Treatment Interest
                            </label>
                            <select
                              id="treatment"
                              name="treatment"
                              value={formData.treatment}
                              onChange={handleChange}
                              className={styles.input}
                            >
                              <option value="">Select treatment</option>
                              {SERVICES.map(service => (
                                <option key={service.id} value={service.title}>
                                  {service.title}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className={styles.formGroup}>
                          <label htmlFor="message" className={styles.label}>
                            Additional Notes (Optional)
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell us more..."
                            rows="3"
                            className={styles.textarea}
                          />
                        </div>

                        <Button
                          type="submit"
                          variant="accent"
                          size="lg"
                          fullWidth
                          disabled={!isFormValid || loading}
                        >
                          {loading ? 'Preparing...' : 'Continue'}
                        </Button>
                      </form>
                    </div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  className={styles.success}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className={styles.successIcon}>✓</div>
                  <h3 className={styles.successTitle}>Ready to Send!</h3>
                  <p className={styles.successBody}>
                    Your booking request is prepared. Send it via:
                  </p>

                  <div className={styles.successActions}>
                    <button
                      type="button"
                      className={styles.successLink}
                      onClick={handleWhatsAppClick}
                    >
                      <span className={styles.actionIcon}>💬</span>
                      WhatsApp
                    </button>
                    <button
                      type="button"
                      className={styles.successLink}
                      onClick={handleEmailClick}
                    >
                      <span className={styles.actionIcon}>✉️</span>
                      Email
                    </button>
                    <button
                      type="button"
                      className={styles.successLink}
                      onClick={handleCallClick}
                    >
                      <span className={styles.actionIcon}>📞</span>
                      Call Now
                    </button>
                  </div>

                  <div className={styles.contactInfo}>
                    <p className={styles.contactLabel}>Direct Contact:</p>
                    <p><strong>{CONTACT_DETAILS.phoneDisplay}</strong></p>
                    <p><strong>{CONTACT_DETAILS.email}</strong></p>
                  </div>

                  <p className={styles.successFooter}>
                    Response within 2 hours
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}