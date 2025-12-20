import React from 'react'

interface ProgramCardProps {
  icon: string
  title: string
  description: string | string[]
  bgColor: string
  iconBgColor: string
  iconColor: string
  borderColor: string
}

const ProgramCard: React.FC<ProgramCardProps> = ({ icon, title, description, bgColor, iconBgColor, iconColor, borderColor }) => {
  return (
    <div className={`${bgColor} p-6 rounded-xl border-b-4 ${borderColor} hover:-translate-y-1 transition-transform shadow-sm`}>
      <div className="flex items-center gap-4 mb-4">
        <div className={`p-3 ${iconBgColor} rounded-lg ${iconColor}`}>
          <span className="material-symbols-outlined text-3xl">{icon}</span>
        </div>
        <h4 className="text-xl font-bold text-text-dark">{title}</h4>
      </div>
      {Array.isArray(description) ? (
        <ul className="text-gray-600 text-sm space-y-2">
          {description.map((item, idx) => (
            <li key={idx} className="flex gap-2">
              <span className="text-primary-dark">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600 text-sm">{description}</p>
      )}
    </div>
  )
}

const Curriculum: React.FC = () => {
  const programs: ProgramCardProps[] = [
    {
      icon: 'auto_stories',
      title: 'Tahfidz Al-Qur\'an',
      description: [
        'Menanamkan kecintaan anak terhadap Al-Qur\'an sejak dini.',
        'Mengasah kecerdasan dan konsentrasi anak.',
        'Target hafalan disesuaikan dengan jenjang dan kemampuan.',
        'Metode yang menyenangkan dan tidak membebani.'
      ],
      bgColor: 'bg-white',
      iconBgColor: 'bg-accent-pink',
      iconColor: 'text-primary-dark',
      borderColor: 'border-primary'
    },
    {
      icon: 'science',
      title: 'STEAM (Sains, Matematika, Geografi, Praktek Sains)',
      description: [
        'Melatih kemampuan berpikir kritis, kreatif, kolaboratif, dan problem solving.',
        'Memahami konsep sains dan teknologi melalui pendekatan proyek.',
        'Praktik sederhana yang aplikatif.',
        'Eksplorasi alam untuk menghasilkan karya.'
      ],
      bgColor: 'bg-white',
      iconBgColor: 'bg-[#eafdf6]',
      iconColor: 'text-green-700',
      borderColor: 'border-secondary'
    },
    {
      icon: 'mosque',
      title: 'Tsaqofah Islam',
      description: [
        'Memperkuat pemahaman anak tentang Islam, meliputi akidah, akhlak, ibadah, muamalah dan sejarah Islam.',
        'Menerapkan nilai-nilai Islam dalam kehidupan sehari-hari.'
      ],
      bgColor: 'bg-white',
      iconBgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600',
      borderColor: 'border-yellow-400'
    },
    {
      icon: 'translate',
      title: 'Bahasa Arab',
      description: [
        'Mendukung pemahaman Al-Qur\'an dan literatur Islam.',
        'Pengenalan kosa kata dan percakapan dasar.',
        'Struktur bahasa secara bertahap.',
        'Aplikasi dalam kehidupan sehari-hari.'
      ],
      bgColor: 'bg-white',
      iconBgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-400'
    },
    {
      icon: 'language',
      title: 'Bahasa Inggris',
      description: [
        'Bahasa internasional untuk menghadapi dunia global.',
        'Disesuaikan dengan usia dan level.',
        'Menekankan pada komunikasi aktif.',
        'Pemahaman konteks dalam penggunaan bahasa.'
      ],
      bgColor: 'bg-white',
      iconBgColor: 'bg-red-50',
      iconColor: 'text-red-600',
      borderColor: 'border-red-400'
    },
    {
      icon: 'menu_book',
      title: 'Bahasa Indonesia',
      description: [
        'Fokus pada kemampuan berkomunikasi secara percaya diri.',
        'Menguatkan kemampuan berpikir.',
        'Mempunyai bahasa berpengaruh.',
        'Siap menjadi generasi pemimpin.'
      ],
      bgColor: 'bg-white',
      iconBgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      borderColor: 'border-purple-400'
    }
  ]

  return (
    <div className="w-full py-20 bg-accent-cream" id="kurikulum">
      <div className="px-4 md:px-10 lg:px-40 flex justify-center">
        <div className="max-w-[1200px] w-full flex flex-col gap-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-primary-dark text-sm font-bold uppercase tracking-widest mb-2">
              Program Kami
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
              Kurikulum & Program Unggulan
            </h3>
            <p className="text-gray-600">
              Kurikulum terintegrasi dengan memasukkan unsur aqidah Islam ke seluruh materi pembelajaran.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <ProgramCard key={index} {...program} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Curriculum
