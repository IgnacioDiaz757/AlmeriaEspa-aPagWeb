'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { AlmeriaImage } from './types';

const almeriaImages: AlmeriaImage[] = [
  {
    url: '/almeria.jpg',
    alt: 'Vista panorámica de Almería con puerto y ciudad'
  },
  {
    url: '/almeria (1).jpg',
    alt: 'Cabo de Gata, Almería'
  },
  {
    url: '/experience-almeri-spain-cris-a850e5a0bcd7efc1caae70857c390666.jpg',
    alt: 'Desierto de Tabernas, Almería'
  },
  {
    url: '/7450022540_9eddddea03_h.jpg',
    alt: 'Invernaderos de Almería'
  },
  {
    url: '/Roquetas-de-Mar-Guia-de-Viaje-1536x806.jpg',
    alt: 'Playa de Almería'
  }
];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Cambiar imagen automáticamente cada 5 segundos (solo si no está pausado)
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === almeriaImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleImageChange = (index: number) => {
    if (index === currentImageIndex || isTransitioning) return;
    
    setIsTransitioning(true);
    setIsPaused(true);
    
    // Transición rápida
    setTimeout(() => {
      setCurrentImageIndex(index);
      setTimeout(() => {
        setIsTransitioning(false);
        // Reanudar automáticamente después de 10 segundos
        setTimeout(() => setIsPaused(false), 10000);
      }, 100);
    }, 100);
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {/* Imagen actual */}
        <div 
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-300 ease-in-out ${
            isTransitioning 
              ? 'opacity-0' 
              : 'opacity-100'
          }`}
          style={{
            backgroundImage: `url('${almeriaImages[currentImageIndex].url}')`
          }}
        ></div>
        
        {/* Navigation arrows */}
        <button
          onClick={() => handleImageChange(currentImageIndex === 0 ? almeriaImages.length - 1 : currentImageIndex - 1)}
          className="hidden sm:flex absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-all duration-300 z-20"
          aria-label="Imagen anterior"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={() => handleImageChange(currentImageIndex === almeriaImages.length - 1 ? 0 : currentImageIndex + 1)}
          className="hidden sm:flex absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-all duration-300 z-20"
          aria-label="Siguiente imagen"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button> 

        {/* Image indicators */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {almeriaImages.map((_, index) => (
            <button
              key={index}
              onClick={() => handleImageChange(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Ver imagen ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Dark gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 z-5"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating clouds */}
        <div className="absolute top-20 left-10 w-20 h-10 bg-white/30 rounded-full animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-16 h-8 bg-white/40 rounded-full animate-float-medium"></div>
        <div className="absolute top-60 left-1/4 w-12 h-6 bg-white/20 rounded-full animate-float-fast"></div>
        
        {/* Animated plane */}
        <div className="absolute top-1/4 right-1/4 animate-plane-fly">
          <img 
            src="/3324544.png" 
            alt="Avión volando" 
            className="w-16 h-12 drop-shadow-lg filter brightness-0 invert"
          />
        </div>
        
        {/* Palm trees silhouette */}
        <div className="absolute bottom-0 left-0 w-32 h-32 opacity-20 animate-palm-sway">
          <svg viewBox="0 0 100 100" className="w-full h-full text-white">
            <path d="M50 20 L45 60 L40 80 L60 80 L55 60 Z" fill="currentColor"/>
            <path d="M50 20 L30 30 L25 50 L35 45 Z" fill="currentColor"/>
            <path d="M50 20 L70 30 L75 50 L65 45 Z" fill="currentColor"/>
          </svg>
        </div>
        
        {/* Desert heat effect */}
        <div className="absolute top-1/2 right-1/3 w-24 h-24 opacity-10 animate-desert-heat">
          <div className="w-full h-full bg-orange-300 rounded-full blur-sm"></div>
        </div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 px-2 font-oswald uppercase tracking-wide" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.6), 0 0 15px rgba(0,0,0,0.3)', lineHeight: '1.2' }}>
              <span className="text-white">TRABAJA</span>{' '}
              <span className="text-white">EN</span>{' '}
              <span className="text-white">ALMERÍA, ESPAÑA</span>
        </h1>
            <p className="text-xl sm:text-xl md:text-2xl text-white mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto px-2 font-oswald uppercase tracking-wide" style={{ textShadow: '1px 1px 5px rgba(0,0,0,0.6), 0 0 10px rgba(0,0,0,0.3)' }}>
              ¡ÚNETE A NUESTRO EQUIPO! TRABAJO EN ALMERÍA, ESPAÑA. EMPLEO EN CONSTRUCCIÓN Y CARPINTERÍA METÁLICA CON CONTRATO LABORAL
            </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
                <motion.a
                  href="#por-que-almeria"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg inline-block text-center font-oswald uppercase tracking-wide"
                  whileHover={{ scale: 1.1, y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  VER OPORTUNIDADES
                </motion.a>
                <motion.a
                  href="#contacto"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg inline-block text-center font-oswald uppercase tracking-wide"
                  whileHover={{ scale: 1.1, y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  CONTACTAR
                </motion.a>
              </div>
              
              <div className="mt-4 sm:mt-6">
                <motion.a
                  href="https://www.riverasdelsuquia.com.ar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg font-oswald uppercase tracking-wide text-center"
                  whileHover={{ scale: 1.1, y: -5, boxShadow: "0 20px 25px -5px rgba(234, 88, 12, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  CONOCENOS
                </motion.a>
              </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
  );
}

