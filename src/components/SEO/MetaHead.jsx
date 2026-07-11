import { useEffect } from 'react'

export default function MetaHead({ title, description, keywords, url, image }) {
  useEffect(() => {
    // Update document title
    document.title = title

    // Update or create meta tags
    const updateMeta = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', name)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', content)
    }

    updateMeta('description', description)
    updateMeta('keywords', keywords)
    updateMeta('viewport', 'width=device-width, initial-scale=1.0')
    updateMeta('robots', 'index, follow')
    updateMeta('author', 'Harley Dental Studio')

    // Open Graph (for social sharing)
    const updateOG = (property, content) => {
      let tag = document.querySelector(`meta[property="${property}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('property', property)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', content)
    }

    updateOG('og:title', title)
    updateOG('og:description', description)
    updateOG('og:url', url)
    updateOG('og:image', image)
    updateOG('og:type', 'website')
    updateOG('og:site_name', 'Harley Dental Studio')

    // Twitter Card
    updateMeta('twitter:card', 'summary_large_image')
    updateMeta('twitter:title', title)
    updateMeta('twitter:description', description)
    updateMeta('twitter:image', image)

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', url)
  }, [title, description, keywords, url, image])

  return null
}