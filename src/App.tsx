import { HelmetProvider, Helmet } from 'react-helmet-async'
import Header from './components/Header'
import Hero from './components/Hero'
import Profile from './components/Profile'
import Curriculum from './components/Curriculum'
import Facilities from './components/Facilities'
import Testimonial from './components/Testimonial'
import Gallery from './components/Gallery'
import CTA from './components/CTA'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

function App() {
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

      <div className="bg-background-light text-text-dark font-display antialiased overflow-x-hidden selection:bg-secondary selection:text-white">
        <Header />
        <main>
          <Hero />
          <Profile />
          <Curriculum />
          <Facilities />
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
