import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLSpanElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const desc1Ref = useRef<HTMLParagraphElement>(null)
  const desc2Ref = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const imageContainerRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay: 0.1 // Small delay to ensure refs are ready
      })

      tl.from(badgeRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.8,
      })
        .from(titleRef.current, {
          y: 30,
          opacity: 0,
          duration: 1,
        }, "-=0.6")
        .from([desc1Ref.current, desc2Ref.current], {
          y: 20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
        }, "-=0.8")
        .from(buttonsRef.current?.children || [], {
          y: 20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          clearProps: "all" // Ensure no leftover styles
        }, "-=0.6")
        .from(imageContainerRef.current, {
          x: 50,
          opacity: 0,
          duration: 1.2,
          ease: "power2.out"
        }, "-=1")
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden bg-gradient-to-b from-accent-cream to-accent-pink">
      <div className="px-4 md:px-10 lg:px-40 py-12 md:py-24 flex justify-center">
        <div className="max-w-[1200px] flex-1">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex flex-col gap-6 flex-1 text-center md:text-left z-10">
              <span ref={badgeRef} className="inline-block px-4 py-1.5 rounded-full bg-white border border-primary/30 text-primary-dark font-bold text-xs uppercase tracking-wider w-fit mx-auto md:mx-0 shadow-sm">
                Pendidikan Berbasis Akidah Islam
              </span>
              <h1 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-[#4a403a]">
                Mewujudkan Generasi <span className="text-primary-dark">Pemimpin</span> dengan Bahasa yang Berpengaruh & Sains yang Kuat
              </h1>
              <p ref={desc1Ref} className="text-lg text-[#6b584e] font-bold leading-relaxed max-w-2xl mx-auto md:mx-0">
                <span className="text-primary-dark">Penerimaan Murid Baru:</span> PAUD • TK • SD • SMP • SMA
              </p>
              <p ref={desc2Ref} className="text-base text-[#6b584e] leading-relaxed max-w-2xl mx-auto md:mx-0">
                Anifa Homeschooling hadir sebagai solusi pendidikan modern dengan sistem belajar dari rumah yang aman, nyaman, dan bermakna. Dengan kurikulum terintegrasi berbasis akidah Islam, kami mendampingi anak tumbuh sesuai fitrah dan potensi uniknya, bebas dari tekanan akademik dan risiko <span className="italic">bullying</span>.
              </p>
              <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-2">
                <a
                  className="flex items-center justify-center gap-2 rounded-full h-12 px-8 bg-primary text-white text-base font-bold shadow-lg hover:bg-primary-dark transition-all transform hover:-translate-y-1"
                  href="https://wa.me/6285640374042?text=Assalamualaikum%20bunda%20Zulfa%2C%20saya%20ingin%20informasi%20lebih%20lanjut%20mengenai%20program%20Anifa%20Homeschooling"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined">chat</span>
                  <span>Info & Pendaftaran</span>
                </a>
                <a
                  className="flex items-center justify-center gap-2 rounded-full h-12 px-8 bg-white border-2 border-[#ebdcb2] text-[#4a403a] text-base font-bold hover:bg-[#fffdf5] hover:border-primary transition-colors"
                  href="#profil"
                >
                  Kenali Kami
                </a>
              </div>
            </div>
            <div ref={imageContainerRef} className="flex-1 w-full relative">
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-secondary rounded-full opacity-30 blur-3xl animate-pulse"></div>
              <div className="absolute bottom-10 -left-10 w-40 h-40 bg-primary rounded-full opacity-30 blur-3xl"></div>
              <div className="absolute inset-0 border-4 border-white/50 rounded-[2rem] transform rotate-3 z-0"></div>
              <img
                alt="Ibu muslimah mendampingi anak belajar mengaji di rumah"
                className="rounded-[2rem] shadow-xl w-full h-auto object-cover aspect-[4/3] relative z-10 border-4 border-white"
                src="assets/hero.jpeg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

