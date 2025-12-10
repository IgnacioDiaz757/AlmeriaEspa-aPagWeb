'use client';

import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-black shadow-lg z-50 font-oswald">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-2 sm:py-4">
        <div className="flex items-center justify-between">
          <a href="#inicio" className="flex items-center space-x-2 sm:space-x-3 hover:opacity-80 transition-opacity duration-200">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full -z-10"></div>
              <img 
                src="/Copia de Copia de Riveras del sur- Isologo colores.png" 
                alt="Riveras del Suquía" 
                className="h-10 w-auto sm:h-12 relative z-10"
              />
            </div>
            <h1 className="text-sm sm:text-lg md:text-xl font-bold text-white uppercase tracking-wide">RIVERAS DEL SUQUÍA</h1>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-4 xl:space-x-6 font-oswald">
            <a href="#inicio" className="text-sm xl:text-base text-white hover:text-blue-400 transition-colors duration-200 uppercase tracking-wide font-semibold">INICIO</a>
            <a href="#por-que-almeria" className="text-sm xl:text-base text-white hover:text-blue-400 transition-colors duration-200 uppercase tracking-wide font-semibold">¿POR QUÉ ALMERÍA?</a>
            <a href="#requisitos" className="text-sm xl:text-base text-white hover:text-blue-400 transition-colors duration-200 uppercase tracking-wide font-semibold">REQUISITOS</a>
            <a href="#trabajos" className="text-sm xl:text-base text-white hover:text-blue-400 transition-colors duration-200 uppercase tracking-wide font-semibold">TRABAJOS</a>
            <a href="#contacto" className="text-sm xl:text-base text-white hover:text-blue-400 transition-colors duration-200 uppercase tracking-wide font-semibold">CONTACTO</a>
          </nav>
          
          <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
            <a
              href="https://www.riverasdelsuquia.com.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-block bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors duration-200 uppercase tracking-wide"
            >
              CONÓCENOS
            </a>
            <a
              href="https://wa.me/5493512429578?text=Hola,%20me%20interesa%20aplicar%20para%20trabajos%20en%20Almería"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors duration-200 uppercase tracking-wide"
            >
              WHATSAPP
            </a>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white hover:text-blue-400 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 pb-3 border-t border-gray-700">
            <nav className="flex flex-col space-y-2 pt-3">
              <a 
                href="#inicio" 
                className="text-sm text-white hover:text-blue-400 transition-colors duration-200 py-2 px-2 uppercase tracking-wide font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                INICIO
              </a>
              <a 
                href="#por-que-almeria" 
                className="text-sm text-white hover:text-blue-400 transition-colors duration-200 py-2 px-2 uppercase tracking-wide font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ¿POR QUÉ ALMERÍA?
              </a>
              <a 
                href="#requisitos" 
                className="text-sm text-white hover:text-blue-400 transition-colors duration-200 py-2 px-2 uppercase tracking-wide font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                REQUISITOS
              </a>
              <a 
                href="#trabajos" 
                className="text-sm text-white hover:text-blue-400 transition-colors duration-200 py-2 px-2 uppercase tracking-wide font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                TRABAJOS
              </a>
              <a 
                href="#contacto" 
                className="text-sm text-white hover:text-blue-400 transition-colors duration-200 py-2 px-2 uppercase tracking-wide font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CONTACTO
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

