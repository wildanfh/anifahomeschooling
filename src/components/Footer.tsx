import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(footerRef.current, {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 95%",
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div ref={footerRef} className="w-full py-8 bg-[#F7F6D3] border-t border-[#ebdcb2] overflow-hidden">
      <div className="px-4 text-center">
        <p className="text-sm text-[#6b584e]">
          © 2025 Anifa Homeschooling. Membangun Peradaban dari Rumah.
        </p>
      </div>
    </div>
  )
}

export default Footer

