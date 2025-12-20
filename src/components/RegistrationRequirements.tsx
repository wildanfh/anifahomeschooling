import React from 'react'

const RegistrationRequirements: React.FC = () => {
  const requirements = [
    {
      icon: 'family_restroom',
      title: 'KK',
      description: 'Fotokopi Kartu Keluarga terbaru.'
    },
    {
      icon: 'badge',
      title: 'KTP Orang Tua',
      description: 'Fotokopi KTP kedua orang tua (Ayah & Ibu).'
    },
    {
      icon: 'description',
      title: 'Akte Kelahiran',
      description: 'Fotokopi Akte Kelahiran anak.'
    },
    {
      icon: 'add_a_photo',
      title: 'Foto Anak',
      description: 'Pas foto terbaru anak.'
    }
  ]

  return (
    <div className="w-full py-20 bg-white" id="pendaftaran">
      <div className="px-4 md:px-10 lg:px-40 flex justify-center">
        <div className="max-w-[1200px] w-full flex flex-col gap-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-secondary text-sm font-bold uppercase tracking-widest mb-2">
              Pendaftaran
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
              Syarat Pendaftaran
            </h3>
            <p className="text-gray-600">
              Lengkapi dokumen berikut untuk proses pendaftaran Anifa Homeschooling.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {requirements.map((req, index) => (
              <div key={index} className="bg-accent-cream p-6 rounded-xl border-b-4 border-secondary hover:-translate-y-1 transition-transform shadow-sm flex flex-col items-center text-center">
                <div className="p-4 bg-white rounded-full text-secondary mb-4 shadow-inner">
                  <span className="material-symbols-outlined text-4xl">{req.icon}</span>
                </div>
                <h4 className="text-xl font-bold text-text-dark mb-2">{req.title}</h4>
                <p className="text-gray-600 text-sm">{req.description}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-6 mt-8">
            <p className="text-lg font-medium text-text-dark text-center">
              Sudah siap bergabung dengan kami? Silakan isi formulir pendaftaran di bawah ini:
            </p>
            <a
              href="https://forms.gle/FXGvqg5DKMjx5qS79"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              <span>Form Pendaftaran Anifa Homeschooling</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegistrationRequirements
