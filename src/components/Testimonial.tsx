import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const testimonials = [
  {
    id: 1,
    text: "Program ini sangat membantu saya mendampingi anak belajar di rumah. Anak jadi lebih fokus dan ceria. Terima kasih!",
    name: "Ibu Rina",
    location: "Jakarta",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuALrx1dzeCf0IvxfL6cIz80bAJCPvWzhzFCsvFcnarJeX3D_SBkFVZWpG5viaPtRGytwwQ1EGk7U9zc6FqMpi4_fkFGVmB0hcaNg56rskqb1Ai3wvIGWGx1dIhJ6o_833wdBEaW6toE0FrIfI6FdZ3A01pZyuPzhXZL36ZQoDmRakBiBqv_Pw4QJkgkqVy4eM3Z5Iyw1iWTvtnw9XXYaf3537NvmeOU6Z6TGmWjI7uCM3MIDP13V_ttX_g7CCwreuOk4Q-cKCewty9k"
  },
  {
    id: 2,
    text: "Anak saya sekarang lebih antusias belajar. Kurikulumnya sangat fleksibel dan sesuai dengan kebutuhan perkembangan anak kami.",
    name: "Bapak Budi",
    location: "Bandung",
    image: "https://images.unsplash.com/photo-1581382575275-97901c2635b7?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    text: "Sangat merekomendasikan Anifa Homeschooling bagi orang tua yang ingin memberikan pendidikan terbaik dengan pendekatan personal.",
    name: "Ibu Sarah",
    location: "Surabaya",
    image: null
  }
]

const Testimonial: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const slideRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)

    const nextIndex = (currentIndex + 1) % testimonials.length

    gsap.to(slideRef.current, {
      opacity: 0,
      x: -50,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        setCurrentIndex(nextIndex)
        gsap.fromTo(slideRef.current,
          { opacity: 0, x: 50 },
          { opacity: 1, x: 0, duration: 0.6, ease: "power2.out", onComplete: () => setIsAnimating(false) }
        )
      }
    })
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)

    const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length

    gsap.to(slideRef.current, {
      opacity: 0,
      x: 50,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        setCurrentIndex(prevIndex)
        gsap.fromTo(slideRef.current,
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, duration: 0.6, ease: "power2.out", onComplete: () => setIsAnimating(false) }
        )
      }
    })
  }

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) nextSlide()
    }, 6000)
    return () => clearInterval(timer)
  }, [currentIndex, isAnimating])

  return (
    <div className="w-full py-20 bg-[#fffcf5] border-y border-[#ebdcb2]/30 overflow-hidden" ref={containerRef}>
      <div className="px-4 md:px-10 lg:px-40 flex justify-center relative">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-10 lg:left-20 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 group"
          aria-label="Previous testimonial"
        >
          <span className="material-symbols-outlined group-hover:scale-110 transition-transform">chevron_left</span>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-10 lg:right-20 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 group"
          aria-label="Next testimonial"
        >
          <span className="material-symbols-outlined group-hover:scale-110 transition-transform">chevron_right</span>
        </button>

        <div className="max-w-[1000px] w-full text-center">
          <div ref={slideRef} className="relative bg-white p-10 md:p-16 rounded-[2.5rem] shadow-xl border border-primary/10 mx-4">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center text-white shadow-lg rotate-3">
                <span className="material-symbols-outlined text-3xl -rotate-3">format_quote</span>
              </div>
            </div>

            <p className="text-xl md:text-3xl text-[#6b584e] font-medium italic leading-relaxed pt-6 mb-10">
              "{testimonials[currentIndex].text}"
            </p>

            <div className="flex flex-col items-center justify-center gap-4">
              <div className="size-20 rounded-full overflow-hidden border-4 border-[#fffcf5] shadow-md ring-2 ring-secondary/20 flex items-center justify-center bg-accent-pink">
                {testimonials[currentIndex].image ? (
                  <img
                    alt={`Foto ${testimonials[currentIndex].name}`}
                    className="w-full h-full object-cover"
                    src={testimonials[currentIndex].image}
                  />
                ) : (
                  <span className="material-symbols-outlined text-4xl text-primary">person</span>
                )}
              </div>
              <div className="text-center">
                <h5 className="text-xl font-bold text-text-dark">{testimonials[currentIndex].name}</h5>
                <p className="text-sm text-primary-dark font-bold tracking-wider uppercase">{testimonials[currentIndex].location}</p>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-secondary' : 'w-2 bg-secondary/20'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial

