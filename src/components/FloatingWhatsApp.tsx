import React from 'react'

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      className="fixed bottom-6 right-6 z-50 md:hidden bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform animate-bounce"
      href="https://wa.me/6285640374042"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
    >
      <span className="material-symbols-outlined text-3xl">chat</span>
    </a>
  )
}

export default FloatingWhatsApp
