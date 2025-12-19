import React from 'react'

const Facilities: React.FC = () => {
  return (
    <div className="w-full py-20 bg-white" id="fasilitas">
      <div className="px-4 md:px-10 lg:px-40 flex justify-center">
        <div className="max-w-[1200px] w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="text-2xl font-bold text-text-dark mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-dark">settings_accessibility</span>
                  Sistem Pembelajaran
                </h3>
                <p className="text-gray-600 mb-4">
                  Kami menerapkan sistem <strong>Blended Learning</strong> yang fleksibel. Anak belajar di rumah dengan panduan modul terstruktur, dikombinasikan dengan sesi tatap muka (home visit atau kelas kecil) untuk sosialisasi dan evaluasi.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-text-dark mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-dark">diversity_1</span>
                  Peran Orang Tua
                </h3>
                <p className="text-gray-600 mb-4">
                  Di Anifa Homeschooling, orang tua adalah partner utama. Kami menyediakan sesi <strong>Parenting Class</strong> rutin agar Ayah dan Bunda memiliki bekal ilmu yang cukup untuk mendampingi Ananda di rumah. Sinergi ini kunci keberhasilan.
                </p>
              </div>
            </div>

            <div className="bg-accent-pink/30 p-8 rounded-3xl border border-primary/10">
              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-text-dark mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary-dark">verified_user</span>
                    Legalitas & Pendidikan Lanjut
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Khawatir soal ijazah? Anifa Homeschooling bernaung di bawah payung hukum PKBM resmi. Siswa akan mendapatkan NISN dan Ijazah Paket A/B/C yang setara dengan sekolah formal, sehingga aman untuk melanjutkan ke jenjang berikutnya (SMP/SMA/Kuliah).
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-text-dark mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary-dark">nest_cam_iq_outdoor</span>
                    Lingkungan Belajar Aman
                  </h3>
                  <p className="text-gray-600">
                    Kami berkomitmen menciptakan <em>Safe Zone</em> bagi anak. Bebas bullying, pergaulan yang terjaga, serta penanaman adab dalam berinteraksi. Belajar menjadi proses yang menenangkan hati dan pikiran.
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
