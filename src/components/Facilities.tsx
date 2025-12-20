import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Facilities: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const leftColRef = useRef<HTMLDivElement>(null)
  const rightColRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (leftColRef.current) {
        gsap.from(leftColRef.current.children, {
          scrollTrigger: {
            trigger: leftColRef.current,
            start: "top 85%",
          },
          x: -50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.3,
          ease: "power2.out"
        })
      }

      gsap.from(rightColRef.current, {
        scrollTrigger: {
          trigger: rightColRef.current,
          start: "top 80%",
        },
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="w-full py-20 bg-white overflow-hidden" id="fasilitas">
      <div className="px-4 md:px-10 lg:px-40 flex justify-center">
        <div className="max-w-[1200px] w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div ref={leftColRef} className="flex flex-col gap-8">
              <div>
                <h3 className="text-2xl font-bold text-text-dark mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-dark">settings_accessibility</span>
                  Sistem Pembelajaran
                </h3>
                <p className="text-gray-600 mb-3">
                  Sistem pembelajaran di Anifa Homeschooling dilaksanakan secara <strong>online, Senin sampai Sabtu</strong>.
                </p>
                <p className="text-gray-600 mb-3">
                  Fleksibilitas ini memberikan ruang bagi keluarga untuk menyesuaikan waktu belajar dengan kondisi anak, ritme keluarga, serta kebutuhan khusus yang dimiliki peserta didik.
                </p>
                <p className="text-gray-600">
                  Meskipun fleksibel, pembelajaran tetap <strong>terarah</strong>, didampingi oleh guru yang kompeten dan berpengalaman di bidangnya.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-text-dark mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-dark">diversity_1</span>
                  Peran Orang Tua
                </h3>
                <p className="text-gray-600 mb-3">
                  Keunggulan utama sistem kami adalah <strong>keterlibatan aktif orang tua</strong>. Orang tua tidak hanya menjadi pendamping, tetapi juga dapat memantau langsung proses belajar anak, materi yang diajarkan, serta kinerja guru.
                </p>
                <p className="text-gray-600 mb-3">
                  Anifa Homeschooling memberikan ruang yang luas bagi orang tua untuk mengembangkan potensi anak secara penuh di rumah.
                </p>
                <p className="text-gray-600">
                  Dengan bimbingan dari guru, orang tua dapat menyesuaikan metode belajar sesuai gaya belajar anak, baik visual, auditori, maupun kinestetik.
                </p>
              </div>
            </div>

            <div ref={rightColRef} className="bg-accent-pink/30 p-8 rounded-3xl border border-primary/10">
              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-text-dark mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary-dark">verified_user</span>
                    Legalitas & Pendidikan Lanjut
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Untuk menjamin masa depan akademik peserta didik, Anifa Homeschooling mendaftarkan siswa ke <strong>PKBM</strong>, sehingga peserta didik mendapatkan <strong>ijazah Kejar Paket A, B, atau C</strong> sesuai jenjangnya.
                  </p>
                  <p className="text-gray-600 mb-3">
                    Ijazah ini diakui secara resmi dan dapat digunakan untuk melanjutkan pendidikan ke jenjang yang lebih tinggi, baik di sekolah formal, perguruan tinggi, maupun ke luar negeri.
                  </p>
                  <p className="text-gray-600 font-semibold text-primary-dark">
                    ✨ Menyediakan bimbingan untuk siswa yang ingin melanjutkan ke Mesir atau Jerman.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-text-dark mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary-dark">nest_cam_iq_outdoor</span>
                    Lingkungan Belajar Aman
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Belajar dari rumah memberikan rasa <strong>aman dan nyaman</strong> bagi anak. Sistem ini secara efektif meminimalkan risiko <em>bullying</em> dan tekanan sosial yang sering terjadi di lingkungan sekolah konvensional.
                  </p>
                  <p className="text-gray-600">
                    Anak dapat belajar dengan suasana yang lebih tenang, fokus, dan sesuai dengan nilai-nilai keluarga.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Facilities

