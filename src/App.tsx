import { useEffect } from 'react'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from './components/Header'
import Hero from './components/Hero'
import Profile from './components/Profile'
import Curriculum from './components/Curriculum'
import Facilities from './components/Facilities'
import Testimonial from './components/Testimonial'
import RegistrationRequirements from './components/RegistrationRequirements'
import Gallery from './components/Gallery'
import CTA from './components/CTA'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    // Global refresh for ScrollTrigger after all components mount
    const timer = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <HelmetProvider>
      <Helmet>
        <title>Anifa Homeschooling - Membangun Generasi Rabbani</title>
        <meta name="description" content="Anifa Homeschooling - Lembaga pendidikan non-formal berbasis Islam untuk anak usia dini dan sekolah dasar. Mewujudkan generasi Rabbani yang beraqidah lurus, berakhlak mulia, cerdas, dan mandiri." />
        <meta name="keywords" content="homeschooling, pendidikan islam, tahfidz quran, STEAM, pendidikan anak, sekolah rumah, jakarta" />

        {/* JSON-LD Structured Data for Local Business */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Anifa Homeschooling",
            "description": "Lembaga pendidikan non-formal berbasis Islam untuk anak usia dini dan sekolah dasar",
            "url": "https://anifahomeschooling.com",
            "logo": "https://anifahomeschooling.com/assets/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+62-856-4037-4042",
              "contactType": "Customer Service",
              "availableLanguage": "Indonesian"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Jakarta",
              "addressCountry": "ID"
            }
          })}
        </script>
      </Helmet>

      <div className="bg-background-light text-text-dark font-display antialiased selection:bg-secondary selection:text-white">
        <Header />
        <main>
          <Hero />
          <Profile />
          <Curriculum />
          <Facilities />
          <RegistrationRequirements />
          <Testimonial />
          <Gallery />
          <CTA />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </HelmetProvider>
  )
}

export default App
