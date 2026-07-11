import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import WhyUs from '../components/WhyUs/WhyUs'
import Team from '../components/Team/Team'
import Testimonials from '../components/Testimonials/Testimonials'
import Pricing from '../components/Pricing/Pricing'
import BookingCTA from '../components/BookingCTA/BookingCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <Team />
      <Testimonials />
      <Pricing />
      <BookingCTA />
    </>
  )
}