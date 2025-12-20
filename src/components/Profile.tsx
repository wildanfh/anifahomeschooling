import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Profile: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Image and Content reveal
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      })

      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        },
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      })

      // Cards stagger reveal
      if (cardsRef.current) {
        gsap.from(cardsRef.current.children, {
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out"
        })
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="w-full py-20 bg-white overflow-hidden" id="profil">
      <div className="px-4 md:px-10 lg:px-40 flex justify-center">
        <div className="max-w-[1200px] w-full flex flex-col gap-16">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div ref={imageRef} className="flex-1 order-2 md:order-1 relative">
              <div className="absolute -z-10 top-5 left-5 w-full h-full bg-accent-pink rounded-xl"></div>
              <img
                alt="Anak anak belajar bersama dengan ceria dalam suasana islami"
                className="rounded-xl shadow-lg w-full object-cover aspect-[4/3] border-2 border-primary/20"
                src="assets/profile.jpeg"
              />
            </div>
            <div ref={contentRef} className="flex-1 order-1 md:order-2 flex flex-col gap-6">
              <div>
                <h2 className="text-primary-dark text-sm font-bold uppercase tracking-widest mb-2">
                  Tentang Kami
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
                  Profil Anifa Homeschooling
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Anifa Homeschooling adalah lembaga pendidikan berbasis <span className="font-bold text-primary-dark">akidah Islam</span> yang hadir sebagai solusi pendidikan modern dengan landasan akidah Islam yang kuat.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Kami berkomitmen mendampingi anak dan keluarga dalam menghadirkan proses belajar yang bermakna, aman, fleksibel, dan terarah, sesuai dengan fitrah serta potensi unik setiap peserta didik.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Di tengah tantangan dunia pendidikan saat ini, tekanan akademik, lingkungan kurang kondusif, hingga maraknya <span className="italic">bullying</span>, kami hadir dengan sistem belajar dari rumah yang aman dan nyaman, memungkinkan anak tumbuh dengan rasa percaya diri dan fokus pada pengembangan potensinya.
              </p>
            </div>
          </div>

          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-accent-cream p-8 rounded-2xl border border-[#ebdcb2] hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white mb-6 shadow-sm">
                <span className="material-symbols-outlined text-2xl">visibility</span>
              </div>
              <h4 className="text-xl font-bold text-text-dark mb-3">Visi Kami</h4>
              <p className="text-[#5d4d44]">
                Mewujudkan generasi pemimpin yang memiliki kemampuan bahasa berpengaruh dan kemampuan sains kuat.
              </p>
            </div>

            <div className="bg-accent-pink p-8 rounded-2xl border border-primary/20 hover:shadow-lg transition-shadow md:col-span-2">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white mb-6 shadow-sm">
                <span className="material-symbols-outlined text-2xl">flag</span>
              </div>
              <h4 className="text-xl font-bold text-text-dark mb-3">Misi Kami</h4>
              <ul className="text-[#5d4d44] space-y-2 list-disc list-inside">
                <li>Menyelenggarakan pendidikan <span className="font-italic">homeschooling</span> berbasis akidah Islam yang menyeluruh.</li>
                <li>Menghadirkan sistem pembelajaran online yang fleksibel, terarah, dan berkualitas.</li>
                <li>Menguatkan peran orang tua sebagai pendidik utama dalam tumbuh kembang anak.</li>
                <li>Menjadikan pembelajaran bahasa sebagai pembentuk kekuatan berpikir.</li>
                <li>Menjadikan pelajaran sains dan teknologi untuk menguatkan kemampuan berkarya mengeksplorasi alam.</li>
                <li>Menguatkan kemampuan berpengaruh untuk menjadi pemimpin umat.</li>
                <li>Menyiapkan peserta didik agar mampu melanjutkan pendidikan ke jenjang lebih tinggi (dalam/luar negeri: Mesir, Jerman).</li>
              </ul>
            </div>

            <div className="bg-[#eafdf6] p-8 rounded-2xl border border-secondary/30 hover:shadow-lg transition-shadow md:col-span-3">
              <div className="w-12 h-12 bg-[#5fb996] rounded-full flex items-center justify-center text-white mb-6 shadow-sm">
                <span className="material-symbols-outlined text-2xl">psychology</span>
              </div>
              <h4 className="text-xl font-bold text-text-dark mb-3">Filosofi Pendidikan</h4>
              <p className="text-[#5d4d44]">
                Anifa <span className="italic">Homeschooling</span> meyakini bahwa pendidikan bukan sekadar transfer ilmu, tetapi proses pembentukan manusia seutuhnya. Kami mengembangkan <strong>pembelajaran terintegrasi</strong>, di mana satu mata pelajaran saling terhubung dengan mata pelajaran lainnya. Anak tidak belajar secara terpisah-pisah, melainkan memahami keterkaitan ilmu dalam kehidupan nyata, sehingga pembelajaran menjadi lebih bermakna.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile

