import React from 'react'

const CTA: React.FC = () => {
  return (
    <div className="w-full py-20 bg-gradient-to-r from-[#B8DB80] to-[#a5c96d] text-white">
      <div className="px-4 md:px-10 lg:px-40 flex justify-center text-center">
        <div className="max-w-[800px] flex flex-col gap-8 items-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#2c3e18]">
            Mari Bersinergi untuk Masa Depan Ananda
          </h2>
          <p className="text-lg text-[#3e5226] font-medium max-w-2xl">
            Setiap detik masa kecil adalah emas. Jangan biarkan berlalu tanpa makna. Bergabunglah bersama keluarga besar Anifa Homeschooling sekarang juga.
          </p>
          <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl w-full max-w-md border border-white/30">
            <p className="mb-4 text-[#2c3e18] font-bold">Konsultasi & Pendaftaran:</p>
            <a
              className="flex items-center justify-center gap-3 rounded-full h-14 px-8 bg-white text-[#3e5226] text-xl font-bold shadow-xl hover:bg-[#f0f9e8] hover:scale-105 transition-all w-full"
              href="https://wa.me/6285640374042?text=Assalamualaikum%20bunda%20Zulfa%2C%20saya%20ingin%20informasi%20lebih%20lanjut%20mengenai%20program%20Anifa%20Homeschooling"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-3xl text-green-600">chat</span>
              <span>Chat WhatsApp</span>
            </a>
            <p className="text-sm text-[#2c3e18]/70 mt-3 font-medium">0856-4037-4042 (Zulfa Alya)</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTA
