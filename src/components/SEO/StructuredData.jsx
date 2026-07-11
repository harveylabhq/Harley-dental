import { useEffect } from 'react'
import { CONTACT_DETAILS } from '../../constants/data'

export default function StructuredData() {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Harley Dental Studio',
      image: 'https://harleydentalstudio.co.uk/og-image.png',
      description: 'Award-winning dental care in London',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '12 Harley Street',
        addressLocality: 'London',
        addressRegion: 'England',
        postalCode: 'W1G 9PQ',
        addressCountry: 'GB',
      },
      telephone: CONTACT_DETAILS.phoneDisplay,
      email: CONTACT_DETAILS.email,
      url: 'https://harleydentalstudio.co.uk',
      priceRange: '£95 - £3500',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '19:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '09:00',
          closes: '16:00',
        },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '340',
      },
      sameAs: [
        'https://www.google.com/maps/place/Harley+Dental+Studio',
        'https://www.facebook.com/harleydentalstudio',
      ],
    }

    let scriptTag = document.querySelector('script[type="application/ld+json"]')
    if (!scriptTag) {
      scriptTag = document.createElement('script')
      scriptTag.setAttribute('type', 'application/ld+json')
      document.head.appendChild(scriptTag)
    }
    scriptTag.innerHTML = JSON.stringify(schema)
  }, [])

  return null
}