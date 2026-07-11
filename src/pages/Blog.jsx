import { useState } from 'react'
import { useParams } from 'react-router-dom'
import MetaHead from '../components/SEO/MetaHead'

export default function Blog() {
  const { slug } = useParams()
  
  const posts = [
    {
      id: 1,
      slug: "dental-implants-london",
      title:" 5 Benefits of Dental Implants: Why They re Worth the Investment",
      date : '2025-01-20',
      author: 'Dr Clara Collins',
      image: '/src/assets/doctors/clara2.jpeg',
      excerpt: 'Dental implants are the gold standard for tooth replacement. Here\'s why.',
      content: `
        <h2>What Are Dental Implants?</h2>
        <p>Dental implants are artificial tooth roots made of titanium that are surgically placed into the jawbone...</p>
        
        <h2>Benefit 1: Look Natural</h2>
        <p>Unlike dentures, implants look and feel like real teeth...</p>
        
        <h2>Benefit 2: Last Decades</h2>
        <p>With proper care, dental implants can last 25+ years, even a lifetime...</p>
        
        <h2>Benefit 3: Preserve Jawbone</h2>
        <p>When you lose a tooth, your jawbone starts to deteriorate...</p>
        
        <h2>Benefit 4: Eat Whatever You Want</h2>
        <p>Unlike dentures, implants don't restrict your diet...</p>
        
        <h2>Benefit 5: Boost Confidence</h2>
        <p>A complete smile changes everything...</p>
      `,
      keywords: 'dental implants London, tooth replacement, implant cost',
    },
    {
      id: 2,
      slug: 'invisalign-vs-braces',
      title: 'Invisalign vs Braces: Which is Right for You?',
      date: '2025-01-18',
      author: 'Dr Priya Sharma',
      image: 'https://images.unsplash.com/photo-1588776814546-25c2e37ddef0?w=800',
      excerpt: 'Straightening your teeth has never been easier. Compare your options.',
      content: `<p>Content here...</p>`,
      keywords: 'Invisalign London, braces, teeth straightening',
    },
  ]

  const post = posts.find(p => p.slug === slug)

  if (!post) return <div>Post not found</div>

  return (
    <>
      <MetaHead 
        title={post.title}
        description={post.excerpt}
        keywords={post.keywords}
        url={`https://harleydentalstudio.co.uk/blog/${slug}`}
        image={post.image}
      />
      
      <article style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 20px' }}>
        <h1>{post.title}</h1>
        <p style={{ color: '#888', fontSize: '14px' }}>
          By {post.author} • {post.date}
        </p>
        <img src={post.image} alt={post.title} style={{ width: '100%', borderRadius: '8px' }} />
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </>
  )
}