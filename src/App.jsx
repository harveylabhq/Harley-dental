import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ui/ScrollToTop/ScrollToTop'
import Home from './pages/Home'
import ServicesPage from './pages/ServicesPage'
import TeamPage from './pages/TeamPage'
import PricingPage from './pages/PricingPage'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import MetaHead from './components/SEO/MetaHead'
import StructuredData from './components/SEO/StructuredData'
import { SEO_CONFIG } from './pages/SEO'
import Blog from './pages/Blog'



function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"         element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/team"     element={<TeamPage />} />
        <Route path="/pricing"  element={<PricingPage />} />
        <Route path="/contact"  element={<Contact />} />
        <Route path="/blog/:slug" element={<Blog />} />
        <Route path="*"         element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  )
}




export default function App() {
  return (
    <BrowserRouter>
      <MetaHead 
        title={SEO_CONFIG.pages.home.title}
        description={SEO_CONFIG.pages.home.description}
        keywords={SEO_CONFIG.pages.home.keywords}
        url={SEO_CONFIG.site.url}
        image={SEO_CONFIG.site.image}
      />
      <StructuredData />
        <ScrollToTop />
      <Navbar />
      <main>
        <AnimatedRoutes />
      </main>
      <Footer />
      {/* rest of app */}
    </BrowserRouter>
  )
}