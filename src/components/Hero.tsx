import React from 'react'

const Hero: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-accent-cream to-accent-pink">
      <div className="px-4 md:px-10 lg:px-40 py-12 md:py-24 flex justify-center">
        <div className="max-w-[1200px] flex-1">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex flex-col gap-6 flex-1 text-center md:text-left z-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-primary/30 text-primary-dark font-bold text-xs uppercase tracking-wider w-fit mx-auto md:mx-0 shadow-sm">
                Homeschooling Berbasis Aqidah Islam
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-[#4a403a]">
                Mencetak Generasi <span className="text-primary-dark">Rabbani</span> yang Cerdas & Berakhlak
              </h1>
              <p className="text-lg text-[#6b584e] font-medium leading-relaxed max-w-2xl mx-auto md:mx-0">
                Anifa Homeschooling menghadirkan pendidikan personal yang hangat, fokus pada penanaman aqidah, serta pengembangan potensi unik setiap anak dalam lingkungan yang aman dan nyaman.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-2">
                <a
                  className="flex items-center justify-center gap-2 rounded-full h-12 px-8 bg-primary text-white text-base font-bold shadow-lg hover:bg-primary-dark transition-all transform hover:-translate-y-1"
                  href="https://wa.me/6285640374042"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined">chat</span>
                  <span>Konsultasi Gratis</span>
                </a>
                <a
                  className="flex items-center justify-center gap-2 rounded-full h-12 px-8 bg-white border-2 border-[#ebdcb2] text-[#4a403a] text-base font-bold hover:bg-[#fffdf5] hover:border-primary transition-colors"
                  href="#profil"
                >
                  Kenali Kami
                </a>
              </div>
            </div>
            <div className="flex-1 w-full relative">
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-secondary rounded-full opacity-30 blur-3xl animate-pulse"></div>
              <div className="absolute bottom-10 -left-10 w-40 h-40 bg-primary rounded-full opacity-30 blur-3xl"></div>
              <div className="absolute inset-0 border-4 border-white/50 rounded-[2rem] transform rotate-3 z-0"></div>
              <img
                alt="Ibu muslimah mendampingi anak belajar mengaji di rumah"
                className="rounded-[2rem] shadow-xl w-full h-auto object-cover aspect-[4/3] relative z-10 border-4 border-white"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC92cKVsvCM6LrqJIn0jQYpt3dvbLme2SGKmWlgmMxVT74BzHlNNwtpXyjj27fgIroehKA0qai49x5Cs5aSib8yPKddHvemAMcsnSJOHZ5r1HOem1PqUokqaQzMdUvP6b8RXpjpPxjcBLMAAPBDPeNta7B61PWrlv5UuLv8eYDJn2jrjvPZyzgruBxwJRvo0b8vQlq3GZwCs5AaJsMFZtv7o7Pw36OJSUx671Vay0zIzQZp3Ur2ywLA6F0b5pa2GuB6YgMgTil0053m"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
