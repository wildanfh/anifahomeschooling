import React from 'react'

const Profile: React.FC = () => {
  return (
    <div className="w-full py-20 bg-white" id="profil">
      <div className="px-4 md:px-10 lg:px-40 flex justify-center">
        <div className="max-w-[1200px] w-full flex flex-col gap-16">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 order-2 md:order-1 relative">
              <div className="absolute -z-10 top-5 left-5 w-full h-full bg-accent-pink rounded-xl"></div>
              <img
                alt="Anak anak belajar bersama dengan ceria dalam suasana islami"
                className="rounded-xl shadow-lg w-full object-cover aspect-[4/3] border-2 border-primary/20"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKna2uQA3gDfea4D3fVG_RYmIUpRmrytYSEU750J8J138vbNe7wk812GAAelb0rZp5-Iqmgp8oaqic0A-arVOl_TLhapvQM-6EkT2G-7mAeAbra5Ko6mR64uIarsgKP8uAPI-YAp-UmJiugm9T6hRTl8k8vyFuaQ8rqK5Kj8o2MCm50Se09TVd-sNZBJMGH4o3Ol26F0rdZb-JYxnID_7fcmiZbU7TNjdCF0hKWeQf8nYID0tJW_KpnaCvkTslwQZ80cGQu5DXhFbA"
              />
            </div>
            <div className="flex-1 order-1 md:order-2 flex flex-col gap-6">
              <div>
                <h2 className="text-primary-dark text-sm font-bold uppercase tracking-widest mb-2">
                  Tentang Kami
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
                  Profil Anifa Homeschooling
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Anifa Homeschooling adalah lembaga pendidikan berbasis <span className="font-bold text-primary-dark">aqidah Islam</span> yang hadir sebagai solusi pendidikan modern dengan landasan aqidah Islam yang kuat.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Kami berkomitmen mendampingi anak dan keluarga dalam menghadirkan proses belajar yang bermakna, aman, fleksibel, dan terarah, sesuai dengan fitrah serta potensi unik setiap peserta didik.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Di tengah tantangan dunia pendidikan saat ini, tekanan akademik, lingkungan kurang kondusif, hingga maraknya bullying, kami hadir dengan sistem belajar dari rumah yang aman dan nyaman, memungkinkan anak tumbuh dengan rasa percaya diri dan fokus pada pengembangan potensinya.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-accent-cream p-8 rounded-2xl border border-[#ebdcb2] hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white mb-6 shadow-sm">
                <span className="material-symbols-outlined text-2xl">visibility</span>
              </div>
              <h4 className="text-xl font-bold text-text-dark mb-3">Visi Kami</h4>
              <p className="text-[#5d4d44]">
                Mewujudkan generasi pemimpin yang punya kemampuan bahasa berpengaruh dan kemampuan sains yang kuat.
              </p>
            </div>

            <div className="bg-accent-pink p-8 rounded-2xl border border-primary/20 hover:shadow-lg transition-shadow md:col-span-2">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white mb-6 shadow-sm">
                <span className="material-symbols-outlined text-2xl">flag</span>
              </div>
              <h4 className="text-xl font-bold text-text-dark mb-3">Misi Kami</h4>
              <ul className="text-[#5d4d44] space-y-2 list-disc list-inside">
                <li>Menyelenggarakan pendidikan homeschooling berbasis aqidah Islam yang menyeluruh</li>
                <li>Menghadirkan sistem pembelajaran online yang fleksibel, terarah, dan berkualitas</li>
                <li>Menguatkan peran orang tua sebagai pendidik utama dalam tumbuh kembang anak</li>
                <li>Menjadikan pembelajaran bahasa sebagai pembentuk kekuatan berpikir</li>
                <li>Menjadikan pelajaran sains dan teknologi untuk menguatkan kemampuan berkarya mengeksplorasi alam</li>
                <li>Menguatkan kemampuan berpengaruh untuk menjadi pemimpin umat</li>
                <li>Menyiapkan peserta didik agar mampu melanjutkan pendidikan ke jenjang lebih tinggi (dalam/luar negeri: Mesir, Jerman)</li>
              </ul>
            </div>

            <div className="bg-[#eafdf6] p-8 rounded-2xl border border-secondary/30 hover:shadow-lg transition-shadow md:col-span-3">
              <div className="w-12 h-12 bg-[#5fb996] rounded-full flex items-center justify-center text-white mb-6 shadow-sm">
                <span className="material-symbols-outlined text-2xl">psychology</span>
              </div>
              <h4 className="text-xl font-bold text-text-dark mb-3">Filosofi Pendidikan</h4>
              <p className="text-[#5d4d44]">
                Anifa Homeschooling meyakini bahwa pendidikan bukan sekadar transfer ilmu, tetapi proses pembentukan manusia seutuhnya. Kami mengembangkan <strong>pembelajaran terintegrasi</strong>, di mana satu mata pelajaran saling terhubung dengan mata pelajaran lainnya. Anak tidak belajar secara terpisah-pisah, melainkan memahami keterkaitan ilmu dalam kehidupan nyata, sehingga pembelajaran menjadi lebih bermakna.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
