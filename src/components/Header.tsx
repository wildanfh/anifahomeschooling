import React from 'react'

const Header: React.FC = () => {
  return (
    <div className="sticky top-0 z-50 w-full border-b border-[#ebdcb2] bg-[#F7F6D3]/95 backdrop-blur-sm">
      <div className="px-4 md:px-10 lg:px-40 flex justify-center py-4">
        <div className="max-w-[1200px] flex-1 flex items-center justify-between">
          <div className="flex items-center gap-3 text-text-dark">
            <div className="size-12 rounded-full flex items-center justify-center overflow-hidden bg-white shadow-sm border-2 border-primary/20">
              <img
                alt="Anifa Homeschooling Logo"
                className="w-full h-full object-contain p-1"
                src="/assets/logo.png"
              />
            </div>
            <h2 className="text-xl font-bold leading-tight tracking-tight text-[#4a403a]">
              Anifa Homeschooling
            </h2>
          </div>
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex items-center gap-6 text-[#5d4d44]">
              <a className="text-sm font-semibold hover:text-primary-dark transition-colors" href="#profil">
                Profil
              </a>
              <a className="text-sm font-semibold hover:text-primary-dark transition-colors" href="#kurikulum">
                Kurikulum
              </a>
              <a className="text-sm font-semibold hover:text-primary-dark transition-colors" href="#fasilitas">
                Fasilitas
              </a>
            </nav>
            <a
              className="flex items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-secondary text-[#3e5226] text-sm font-bold shadow-md hover:bg-[#a5c96d] transition-colors"
              href="https://wa.me/6285640374042"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="truncate">Hubungi Kami</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
