import React from 'react'

const Gallery: React.FC = () => {
  // All gallery images from the assets folder (excluding logo.png)
  const galleryImages = [
    {
      src: '/assets/menggambar-gerhana-matahari.jpeg',
      title: 'Menggambar Gerhana Matahari',
      alt: 'Kegiatan menggambar gerhana matahari'
    },
    {
      src: '/assets/pelajaran-bhs-arab.jpeg',
      title: 'Pelajaran Bahasa Arab',
      alt: 'Sesi pembelajaran bahasa Arab'
    },
    {
      src: '/assets/praktek-STEaM-membuat-nasi-kepal.jpeg',
      title: 'Praktek STEAM - Nasi Kepal',
      alt: 'Anak-anak praktek membuat nasi kepal'
    },
    {
      src: '/assets/praktek-STEaM-membuat-sup-buah.jpeg',
      title: 'Praktek STEAM - Sup Buah',
      alt: 'Kegiatan membuat sup buah'
    },
    {
      src: '/assets/praktek-STEam-membuat-teh-tarik.jpeg',
      title: 'Praktek STEAM - Teh Tarik',
      alt: 'Praktek membuat teh tarik'
    },
    {
      src: '/assets/praktek-gerhana-matahari.jpeg',
      title: 'Praktek Gerhana Matahari',
      alt: 'Praktek pembelajaran gerhana matahari'
    },
    {
      src: '/assets/praktek-membuat-es-lilin.jpeg',
      title: 'Praktek Membuat Es Lilin',
      alt: 'Kegiatan membuat es lilin'
    },
    {
      src: '/assets/presentasi-mind-mapping-2.jpeg',
      title: 'Presentasi Mind Mapping',
      alt: 'Siswa presentasi mind mapping'
    },
    {
      src: '/assets/presentasi-pelajaran-bhs-indo-mind-mapping.jpeg',
      title: 'Mind Mapping Bahasa Indonesia',
      alt: 'Presentasi mind mapping bahasa Indonesia'
    },
    {
      src: '/assets/setoran-tahfidz.jpeg',
      title: 'Setoran Tahfidz',
      alt: 'Kegiatan setoran hafalan Al-Quran'
    },
    {
      src: '/assets/tk-a-praktek-buat-teh.jpeg',
      title: 'TK A - Praktek Buat Teh',
      alt: 'TK A praktek membuat teh'
    },
    {
      src: '/assets/tk-a.jpeg',
      title: 'Kegiatan TK A',
      alt: 'Aktivitas pembelajaran TK A'
    },
    {
      src: '/assets/tk-b.jpeg',
      title: 'Kegiatan TK B',
      alt: 'Aktivitas pembelajaran TK B'
    },
    {
      src: '/assets/tugas-buku-bergambar-1.jpeg',
      title: 'Tugas Buku Bergambar',
      alt: 'Hasil tugas buku bergambar siswa'
    },
    {
      src: '/assets/tugas-buku-bergambar-2.jpeg',
      title: 'Tugas Buku Bergambar',
      alt: 'Hasil tugas buku bergambar siswa'
    },
    {
      src: '/assets/tugas-buku-bergambar-3.jpeg',
      title: 'Tugas Buku Bergambar',
      alt: 'Hasil tugas buku bergambar siswa'
    },
    {
      src: '/assets/tugas-buku-bergambar-4.jpeg',
      title: 'Tugas Buku Bergambar',
      alt: 'Hasil tugas buku bergambar siswa'
    }
  ]

  return (
    <div className="w-full py-20 bg-white" id="galeri">
      <div className="px-4 md:px-10 lg:px-40 flex justify-center">
        <div className="max-w-[1200px] w-full flex flex-col gap-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-primary-dark text-sm font-bold uppercase tracking-widest mb-2">
              Dokumentasi
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
              Galeri Kegiatan
            </h3>
            <p className="text-gray-600">
              Intip keseruan aktivitas belajar dan bermain ananda di Anifa Homeschooling.
            </p>
          </div>

          {/* Horizontal scrollable gallery */}
          <div className="relative">
            <div className="overflow-x-auto pb-4 -mx-4 px-4">
              <div className="flex gap-6 w-max">
                {galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer flex-shrink-0 w-[300px] md:w-[350px]"
                  >
                    <div className="aspect-[4/3] w-full bg-accent-cream relative">
                      <img
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        src={image.src}
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <span className="text-white font-bold text-lg">{image.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="text-center mt-4">
              <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-lg">swipe</span>
                Geser untuk melihat lebih banyak
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
