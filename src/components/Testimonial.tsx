import React from 'react'

const Testimonial: React.FC = () => {
  return (
    <div className="w-full py-16 bg-[#fffcf5] border-y border-[#ebdcb2]/30">
      <div className="px-4 md:px-10 lg:px-40 flex justify-center">
        <div className="max-w-[1000px] w-full text-center">
          <div className="relative bg-white p-10 rounded-3xl shadow-lg border border-primary/20">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white shadow-md">
                <span className="material-symbols-outlined text-2xl">format_quote</span>
              </div>
            </div>
            <p className="text-xl md:text-2xl text-[#6b584e] font-medium italic leading-relaxed pt-4 mb-6">
              "Program ini sangat membantu saya mendampingi anak belajar di rumah. Anak jadi lebih fokus dan ceria. Terima kasih!"
            </p>
            <div className="flex flex-col items-center justify-center gap-3">
              <div className="size-16 rounded-full overflow-hidden border-2 border-secondary shadow-sm">
                <img
                  alt="Foto Ibu Rina"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuALrx1dzeCf0IvxfL6cIz80bAJCPvWzhzFCsvFcnarJeX3D_SBkFVZWpG5viaPtRGytwwQ1EGk7U9zc6FqMpi4_fkFGVmB0hcaNg56rskqb1Ai3wvIGWGx1dIhJ6o_833wdBEaW6toE0FrIfI6FdZ3A01pZyuPzhXZL36ZQoDmRakBiBqv_Pw4QJkgkqVy4eM3Z5Iyw1iWTvtnw9XXYaf3537NvmeOU6Z6TGmWjI7uCM3MIDP13V_ttX_g7CCwreuOk4Q-cKCewty9k"
                />
              </div>
              <div className="text-center">
                <h5 className="text-lg font-bold text-text-dark">Ibu Rina</h5>
                <p className="text-sm text-primary-dark font-semibold">Jakarta</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
