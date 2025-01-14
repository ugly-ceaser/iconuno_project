import Layout from './components/layout'
import HeroSection from './components/hero-section'
import AboutSection from './components/about-section'
import PortfolioSection from './components/portfolio-section'
import ServicesSection from './components/services-section'
import TestimonialsSection from './components/testimonials-section'
import ContactSection from './components/contact-section'

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </Layout>
  )
}

