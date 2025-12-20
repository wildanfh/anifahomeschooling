import React, { useState, useEffect } from 'react'

interface GalleryItem {
  src: string
  title: string
  alt: string
  type: 'image' | 'video'
}

const Gallery: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  // All gallery items from the assets folder (excluding logo.png)
  const galleryItems: GalleryItem[] = [
    {
      src: '/assets/setoran-tahfidz.jpeg',
      title: 'Setoran Tahfidz',
      alt: 'Kegiatan setoran hafalan Al-Quran',
      type: 'image'
    },
    {
      src: '/assets/tk-a.jpeg',
      title: 'Kegiatan TK A',
      alt: 'Aktivitas pembelajaran TK A',
      type: 'image'
    },
    {
      src: '/assets/tk-b.jpeg',
      title: 'Kegiatan TK B',
      alt: 'Aktivitas pembelajaran TK B',
      type: 'image'
    },
    {
      src: '/assets/menggambar-gerhana-matahari.jpeg',
      title: 'Menggambar Gerhana Matahari',
      alt: 'Kegiatan menggambar gerhana matahari',
      type: 'image'
    },
    {
      src: '/assets/pelajaran-bhs-arab.jpeg',
      title: 'Pelajaran Bahasa Arab',
      alt: 'Sesi pembelajaran bahasa Arab',
      type: 'image'
    },
    {
      src: '/assets/praktek-STEaM-membuat-nasi-kepal.jpeg',
      title: 'Praktek STEAM - Nasi Kepal',
      alt: 'Anak-anak praktek membuat nasi kepal',
      type: 'image'
    },
    {
      src: '/assets/praktek-STEaM-membuat-sup-buah.jpeg',
      title: 'Praktek STEAM - Sup Buah',
      alt: 'Kegiatan membuat sup buah',
      type: 'image'
    },
    {
      src: '/assets/praktek-STEam-membuat-teh-tarik.jpeg',
      title: 'Praktek STEAM - Teh Tarik',
      alt: 'Praktek membuat teh tarik',
      type: 'image'
    },
    {
      src: '/assets/praktek-gerhana-matahari.jpeg',
      title: 'Praktek Gerhana Matahari',
      alt: 'Praktek pembelajaran gerhana matahari',
      type: 'image'
    },
    {
      src: '/assets/praktek-melipat-selimut.mp4',
      title: 'Praktek Melipat Selimut',
      alt: 'Video praktek melipat selimut',
      type: 'video'
    },
    {
      src: '/assets/praktek-membuat-es-lilin.jpeg',
      title: 'Praktek Membuat Es Lilin',
      alt: 'Kegiatan membuat es lilin',
      type: 'image'
    },
    {
      src: '/assets/presentasi-mind-mapping-2.jpeg',
      title: 'Presentasi Mind Mapping',
      alt: 'Siswa presentasi mind mapping',
      type: 'image'
    },
    {
      src: '/assets/presentasi-pelajaran-bhs-indo-mind-mapping.jpeg',
      title: 'Mind Mapping Bahasa Indonesia',
      alt: 'Presentasi mind mapping bahasa Indonesia',
      type: 'image'
    },
    {
      src: '/assets/tk-a-praktek-buat-teh.jpeg',
      title: 'TK A - Praktek Buat Teh',
      alt: 'TK A praktek membuat teh',
      type: 'image'
    },
    {
      src: '/assets/tugas-buku-bergambar-1.jpeg',
      title: 'Tugas Buku Bergambar',
      alt: 'Hasil tugas buku bergambar siswa',
      type: 'image'
    },
    {
      src: '/assets/tugas-buku-bergambar-2.jpeg',
      title: 'Tugas Buku Bergambar',
      alt: 'Hasil tugas buku bergambar siswa',
      type: 'image'
    },
    {
      src: '/assets/tugas-buku-bergambar-3.jpeg',
      title: 'Tugas Buku Bergambar',
      alt: 'Hasil tugas buku bergambar siswa',
      type: 'image'
    },
    {
      src: '/assets/tugas-buku-bergambar-4.jpeg',
      title: 'Tugas Buku Bergambar',
      alt: 'Hasil tugas buku bergambar siswa',
      type: 'image'
    }
  ]

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return

      if (e.key === 'Escape') {
        setSelectedIndex(null)
      } else if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) => (prev! > 0 ? prev! - 1 : galleryItems.length - 1))
      } else if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) => (prev! < galleryItems.length - 1 ? prev! + 1 : 0))
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedIndex, galleryItems.length])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [selectedIndex])

  const goToPrevious = () => {
    setSelectedIndex((prev) => (prev! > 0 ? prev! - 1 : galleryItems.length - 1))
  }

  const goToNext = () => {
    setSelectedIndex((prev) => (prev! < galleryItems.length - 1 ? prev! + 1 : 0))
  }

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
                {galleryItems.map((item, index) => (
                  <div
                    key={index}
                    className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer flex-shrink-0 w-[300px] md:w-[350px]"
                    onClick={() => setSelectedIndex(index)}
                  >
                    <div className="aspect-[4/3] w-full bg-accent-cream relative">
                      {item.type === 'video' ? (
                        <div className="w-full h-full flex items-center justify-center bg-black/20">
                          <video
                            className="w-full h-full object-cover"
                            src={item.src}
                            preload="metadata"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                              <span className="material-symbols-outlined text-4xl text-primary-dark">play_arrow</span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <img
                          alt={item.alt}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          src={item.src}
                          loading="lazy"
                        />
                      )}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <span className="text-white font-bold text-lg">{item.title}</span>
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

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
            onClick={() => setSelectedIndex(null)}
            aria-label="Close"
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>

          {/* Previous button */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
            aria-label="Previous"
          >
            <span className="material-symbols-outlined text-3xl">chevron_left</span>
          </button>

          {/* Next button */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
            aria-label="Next"
          >
            <span className="material-symbols-outlined text-3xl">chevron_right</span>
          </button>

          {/* Content */}
          <div
            className="relative max-w-6xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {galleryItems[selectedIndex].type === 'video' ? (
              <video
                className="w-full h-auto max-h-[85vh] rounded-lg shadow-2xl"
                src={galleryItems[selectedIndex].src}
                controls
                autoPlay
              />
            ) : (
              <img
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
                src={galleryItems[selectedIndex].src}
                alt={galleryItems[selectedIndex].alt}
              />
            )}

            {/* Title */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h4 className="text-white text-xl font-bold">{galleryItems[selectedIndex].title}</h4>
              <p className="text-white/70 text-sm mt-1">
                {selectedIndex + 1} / {galleryItems.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery
