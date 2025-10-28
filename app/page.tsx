'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Array de imágenes de Almería
  const almeriaImages = [
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
  }, [almeriaImages.length, isPaused]);

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

  const handleJobApplication = (jobType: string) => {
    console.log('Aplicando a:', jobType);
    setSelectedJob(jobType);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedJob(null);
  };

  // Auto-focus first input when modal opens
  useEffect(() => {
    if (showModal) {
      setTimeout(() => {
        document.getElementById('modal-nombre')?.focus();
      }, 100);
    }
  }, [showModal]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 py-2 sm:py-4">
          <div className="flex items-center justify-between">
            <a href="#inicio" className="flex items-center space-x-2 sm:space-x-3 hover:opacity-80 transition-opacity duration-200">
              <img 
                src="/logo_transparente_refinado.png" 
                alt="Riveras del Suquía" 
                className="h-10 w-auto sm:h-12"
              />
              <h1 className="text-sm sm:text-lg md:text-xl font-bold text-gray-800">Riveras del Suquía</h1>
            </a>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-4 xl:space-x-6">
              <a href="#inicio" className="text-sm xl:text-base text-gray-600 hover:text-blue-600 transition-colors duration-200">Inicio</a>
              <a href="#por-que-almeria" className="text-sm xl:text-base text-gray-600 hover:text-blue-600 transition-colors duration-200">¿Por qué Almería?</a>
              <a href="#requisitos" className="text-sm xl:text-base text-gray-600 hover:text-blue-600 transition-colors duration-200">Requisitos</a>
              <a href="#trabajos" className="text-sm xl:text-base text-gray-600 hover:text-blue-600 transition-colors duration-200">Trabajos</a>
              <a href="#contacto" className="text-sm xl:text-base text-gray-600 hover:text-blue-600 transition-colors duration-200">Contacto</a>
            </nav>
            
            <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
              <a
                href="https://www.riverasdelsuquia.com.ar"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-block bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors duration-200"
              >
                Conócenos
              </a>
              <a
                href="https://wa.me/5493512429578?text=Hola,%20me%20interesa%20aplicar%20para%20trabajos%20en%20Almería"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors duration-200"
              >
                WhatsApp
              </a>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
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
            <div className="md:hidden mt-3 pb-3 border-t border-gray-200">
              <nav className="flex flex-col space-y-2 pt-3">
                <a 
                  href="#inicio" 
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 py-2 px-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Inicio
                </a>
                <a 
                  href="#por-que-almeria" 
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 py-2 px-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  ¿Por qué Almería?
                </a>
                <a 
                  href="#requisitos" 
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 py-2 px-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Requisitos
                </a>
                <a 
                  href="#trabajos" 
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 py-2 px-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Trabajos
                </a>
                <a 
                  href="#contacto" 
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 py-2 px-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contacto
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
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
              <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 px-2" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.6), 0 0 15px rgba(0,0,0,0.3)' }}>
                <span className="text-white">TRABAJA</span>{' '}
                <span className="text-white">EN</span>{' '}
                <span className="text-white">ALMERÍA, ESPAÑA</span>
          </h1>
            <p className="text-xl sm:text-xl md:text-2xl text-white mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto px-2" style={{ textShadow: '1px 1px 5px rgba(0,0,0,0.6), 0 0 10px rgba(0,0,0,0.3)' }}>
              ¡Únete a nuestro equipo! Oportunidades laborales en jardinería, construcción y limpieza
            </p>
            <p className="text-lg sm:text-base md:text-lg text-white mb-6 sm:mb-8 max-w-xl mx-auto px-2" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.6), 0 0 8px rgba(0,0,0,0.2)' }}>
          
            </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
                <a
                  href="#por-que-almeria"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl inline-block text-center"
                >
                  Ver Oportunidades
                </a>
                <a
                  href="#contacto"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl inline-block text-center"
                >
                  Contactar
                </a>
              </div>
              
              <div className="mt-4 sm:mt-6">
                <a
                  href="https://www.riverasdelsuquia.com.ar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-white/30"
                >
                  Conocenos
                </a>
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

      {/* About Section */}
      <section id="por-que-almeria" className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-8 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
              ¿Por qué Almería?
            </h2>
            <p className="text-xl sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Almería ofrece un entorno único para trabajar y vivir, combinando la belleza natural con oportunidades laborales excepcionales
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12 md:mb-16">
            <motion.div 
              className="text-center cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <motion.div 
                className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-3xl">☀️</span>
              </motion.div>
              <h3 className="text-2xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Clima ideal todo el año</h3>
              <p className="text-gray-600 text-lg">Mas de 300 dias de sol al año</p>
            </motion.div>

            <motion.div 
              className="text-center cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <motion.div 
                className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-3xl">🛠️</span>
              </motion.div>
              <h3 className="text-2xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Oportunidad laboral en crecimiento</h3>
              <p className="text-gray-600 text-lg">Mucha demanda de personal en sectores como la construccion y la jardineria</p>
            </motion.div>

            <motion.div 
              className="text-center cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <motion.div 
                className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-3xl">💵</span>
              </motion.div>
              <h3 className="text-2xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Bajo costo de vida</h3>
              <p className="text-gray-600 text-lg">Almería es económico, bajo costo en comida y transporte, posiibilidad de ahorrar cada mes</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section id="requisitos" className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-8 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
              Requisitos
            </h2>
            <p className="text-xl sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Conoce los requisitos básicos para formar parte de nuestro equipo en Almería
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <motion.div 
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="text-center">
                <motion.div 
                  className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-xl sm:text-2xl">🎂</span>
                </motion.div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Edad</h3>
                <p className="text-gray-600 text-base sm:text-lg font-semibold">
                  Ser mayor de 21 años
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="text-center">
                <motion.div 
                  className="w-14 h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-xl sm:text-2xl">📘</span>
                </motion.div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Documentación</h3>
                <p className="text-gray-600 text-base sm:text-lg font-semibold">
                  Tener pasaporte vigente
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="text-center">
                <motion.div 
                  className="w-14 h-14 sm:w-16 sm:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-xl sm:text-2xl">💰</span>
                </motion.div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Gastos Iniciales</h3>
                <p className="text-gray-600 text-base sm:text-lg font-semibold">
                  Cubrir pasaje y gastos del primer mes
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="text-center">
                <motion.div 
                  className="w-14 h-14 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-xl sm:text-2xl">📄</span>
                </motion.div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">CV</h3>
                <p className="text-gray-600 text-base sm:text-lg font-semibold">
                  Enviar currículum vitae
                </p>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-8 sm:mt-12 text-center">
            <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 sm:p-8 rounded-2xl max-w-4xl mx-auto border-2 border-green-200">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">¡Nosotros te ayudamos con todo!</h3>
              <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg">
                <strong>Nosotros te ayudamos con todo el proceso y el contrato laboral.</strong> 
                Si cumples los requisitos básicos, te acompañamos en cada paso para que puedas empezar a trabajar en Almería.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfni3l5XHxBAgxnvEBd8JXYenmYEpWEwxxXu1RobHGvT0dxsQ/viewform?usp=publish-editor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300"
              >
                Enviar CV
              </a>
                <a
                  href="https://wa.me/5493512429578?text=Hola,%20necesito%20más%20información%20sobre%20los%20trabajos%20en%20Almería"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300"
                >
                  Más Información
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section id="trabajos" className="py-12 sm:py-16 md:py-20 px-4 bg-white relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-14b1e0d0fb89?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
            }}
          ></div>
        </div>
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-8 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
              Oportunidades Laborales
            </h2>
            <p className="text-xl sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-2">
              Descubre las diferentes áreas de trabajo disponibles en Almería
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Jardinería */}
            <motion.div 
              className="group bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg hover:shadow-xl cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Jardinería</h3>
                <p className="text-gray-600 mb-4 sm:mb-6 text-lg">
                  Trabajo en espacios verdes, mantenimiento de jardines y paisajismo en Almería
                </p>
                <ul className="text-left text-gray-600 space-y-2 mb-4 sm:mb-6 text-lg">
                  <li>• Mantenimiento de jardines</li>
                  <li>• Paisajismo</li>
                  <li>• Cuidado de plantas</li>
                  <li>• Trabajo al aire libre</li>
                </ul>
                <motion.button 
                  onClick={() => handleJobApplication('Jardinería')}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-full font-semibold transition-colors duration-300 cursor-pointer relative z-10"
                  style={{ pointerEvents: 'auto' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Aplicar Ahora
                </motion.button>
              </div>
            </motion.div>

            {/* Construcción */}
            <motion.div 
              className="group bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl shadow-lg hover:shadow-xl cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Construcción</h3>
                <p className="text-gray-600 mb-4 sm:mb-6 text-lg">
                  Oportunidades en construcción, reformas y obras en Almería
                </p>
                <ul className="text-left text-gray-600 space-y-2 mb-4 sm:mb-6 text-lg">
                  <li>• Obras de construcción</li>
                  <li>• Reformas</li>
                  <li>• Albañilería</li>
                  <li>• Trabajo en equipo</li>
                </ul>
                <motion.button 
                  onClick={() => handleJobApplication('Construcción')}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 px-6 rounded-full font-semibold transition-colors duration-300 cursor-pointer relative z-10"
                  style={{ pointerEvents: 'auto' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Aplicar Ahora
                </motion.button>
              </div>
            </motion.div>

            {/* Limpieza */}
            <motion.div 
              className="group bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-xl cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Limpieza</h3>
                <p className="text-gray-600 mb-4 sm:mb-6 text-lg">
                  Servicios de limpieza en oficinas, hogares y espacios comerciales
                </p>
                <ul className="text-left text-gray-600 space-y-2 mb-4 sm:mb-6 text-lg">
                  <li>• Limpieza de oficinas</li>
                  <li>• Limpieza doméstica</li>
                  <li>• Limpieza comercial</li>
                  <li>• Horarios flexibles</li>
                </ul>
                <motion.button 
                  onClick={() => handleJobApplication('Limpieza')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full font-semibold transition-colors duration-300 cursor-pointer relative z-10"
                  style={{ pointerEvents: 'auto' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Aplicar Ahora
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
          </section>

          {/* Google Form Section */}
          <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-blue-50">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Envía tu CV
                </h2>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Completa nuestro formulario oficial para enviar tu CV y datos de contacto
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-8 rounded-2xl shadow-xl cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl">📝</span>
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-gray-800">Formulario Oficial</h3>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold text-green-800 mb-3">📋 ¿Qué incluye el formulario?</h4>
                  <ul className="text-left text-green-700 space-y-2">
                    <li>• Subida de archivo CV (PDF, DOC, DOCX)</li>
                    <li>• Información personal completa</li>
                    <li>• Experiencia laboral detallada</li>
                    <li>• Preferencias de trabajo</li>
                    <li>• Disponibilidad y horarios</li>
                  </ul>
                </div>

                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfni3l5XHxBAgxnvEBd8JXYenmYEpWEwxxXu1RobHGvT0dxsQ/viewform?usp=publish-editor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <span className="mr-3">📝</span>
                  <span>Completar Formulario de CV</span>
                  <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>

                <p className="text-sm text-gray-500 mt-4">
                  Se abrirá en una nueva pestaña
                </p>
              </motion.div>
            </div>
          </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50 relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            ¿Listo para Empezar?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Contacta con nosotros y forma parte de nuestro equipo en Almería
          </p>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl relative z-20">
            <form 
              className="space-y-6 interactive-form"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target as HTMLFormElement);
                const data = Object.fromEntries(formData);
                
                // Crear mensaje para WhatsApp
                const whatsappMessage = `¡Hola! Me interesa trabajar en Almería 🌴

📋 *Datos de contacto:*
• *Nombre:* ${data.name}
• *Email:* ${data.email}
• *Teléfono:* ${data.phone || 'No especificado'}
• *Área de interés:* ${data.interest || 'No especificado'}

💬 *Mensaje:*
${data.message || 'Sin mensaje adicional'}

¡Espero su respuesta! 😊`;

                // Codificar el mensaje para URL
                const encodedMessage = encodeURIComponent(whatsappMessage);
                
                // Redirigir a WhatsApp
                window.open(`https://wa.me/5493512429578?text=${encodedMessage}`, '_blank');
              }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Nombre completo *"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      document.getElementById('contact-email')?.focus();
                    }
                  }}
                />
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Email *"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      document.getElementById('contact-phone')?.focus();
                    }
                  }}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="Teléfono"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      document.getElementById('contact-interest')?.focus();
                    }
                  }}
                />
                <select 
                  id="contact-interest"
                  name="interest"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      document.getElementById('contact-message')?.focus();
                    }
                  }}
                >
                  <option value="">Selecciona área de interés</option>
                  <option value="Jardinería">Jardinería</option>
                  <option value="Construcción">Construcción</option>
                  <option value="Limpieza">Limpieza</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>
              <textarea
                id="contact-message"
                name="message"
                autoComplete="off"
                placeholder="Cuéntanos sobre tu experiencia y qué tipo de trabajo buscas..."
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              ></textarea>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">📱</span>
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-green-800 mb-1">Envío por WhatsApp</h5>
                    <p className="text-sm text-green-600">
                      Al enviar, se abrirá WhatsApp con todos tus datos pre-llenados
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-4 px-8 rounded-lg text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>📱</span>
                <span>Enviar por WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-16 px-4 relative">
        {/* Background image */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/10-mejores-playas-almeria.jpg')"
            }}
          ></div>
        </div>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-800/60 to-gray-700/40"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Trabajos en Almería</h3>
              <p className="text-gray-300 mb-4">
                Conectando talento con oportunidades en la hermosa provincia de Almería
              </p>             
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <div className="space-y-2 text-gray-300">
                <p>📧 contacto.rdelsuquia@gmail.com</p>
                <p>📞 +54 9 351 242 9578</p>
                <p>📍 Córdoba, Argentina</p>
                  <p>🌐 <a href="https://www.riverasdelsuquia.com.ar" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">www.riverasdelsuquia.com.ar</a></p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">📍 Ubicación</h4>
              <div className="w-[250px] h-[250px] rounded-lg overflow-hidden shadow-lg mx-auto">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.8012043893164!2d-64.23834302539994!3d-31.36446459374143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329936b187beb3%3A0xe8a8cf2c43bc0a9c!2sAv.%20Rafael%20N%C3%BA%C3%B1ez%204558%2C%20X5009CFZ%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1761650355626!5m2!1ses-419!2sar" 
                  width="250" 
                  height="250" 
                  style={{border:0}} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">
                © 2025 Riveras del Suquía. Todos los derechos reservados. 
                <span className="ml-2">🌴 Hecho con ❤️ por <a href="https://www.riverasdelsuquia.com.ar" target="_blank" rel="noopener noreferrer" className="underline text-blue-400 hover:text-blue-300 transition-colors duration-200">Riveras del Suquía</a></span>
            </p>
          </div>
        </div>
      </footer>

      {/* Job Application Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-6 rounded-t-lg">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📝</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">
                      Aplicar a {selectedJob}
                    </h3>
                    <p className="text-blue-100">
                      Completa el formulario para enviar tu solicitud
                    </p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="text-white hover:text-gray-200 text-3xl font-bold transition-colors duration-200"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Form */}
            <div className="p-6">
              <form className="space-y-6" onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target as HTMLFormElement);
                const data = Object.fromEntries(formData);
                
                const whatsappMessage = `¡Hola! Me interesa aplicar para ${selectedJob} 🌴

📋 *Datos de contacto:*
• *Nombre:* ${data.nombre || 'No especificado'}
• *Email:* ${data.email || 'No especificado'}
• *Teléfono:* ${data.telefono || 'No especificado'}
• *Edad:* ${data.edad || 'No especificado'}

💼 *Área de interés:* ${selectedJob}

📝 *Experiencia:*
${data.experiencia || 'Sin experiencia especificada'}

¡Espero su respuesta! 😊`;

                const encodedMessage = encodeURIComponent(whatsappMessage);
                window.open(`https://wa.me/5493512429578?text=${encodedMessage}`, '_blank');
                closeModal();
              }}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="modal-nombre" className="block text-sm font-semibold text-gray-700 mb-2">
                      Nombre completo *
                    </label>
                    <input
                      id="modal-nombre"
                      type="text"
                      name="nombre"
                      autoComplete="name"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      placeholder="Tu nombre completo"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          document.getElementById('modal-email')?.focus();
                        }
                      }}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="modal-email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      id="modal-email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      inputMode="email"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      placeholder="tu@email.com"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          document.getElementById('modal-telefono')?.focus();
                        }
                      }}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="modal-telefono" className="block text-sm font-semibold text-gray-700 mb-2">
                      Teléfono *
                    </label>
                    <input
                      id="modal-telefono"
                      type="tel"
                      name="telefono"
                      autoComplete="tel"
                      inputMode="tel"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      placeholder="+34 123 456 789"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          document.getElementById('modal-edad')?.focus();
                        }
                      }}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="modal-edad" className="block text-sm font-semibold text-gray-700 mb-2">
                      Edad
                    </label>
                    <input
                      id="modal-edad"
                      type="number"
                      name="edad"
                      min="21"
                      inputMode="numeric"
                      autoComplete="off"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      placeholder="Tu edad"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          document.getElementById('modal-experiencia')?.focus();
                        }
                      }}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="modal-experiencia" className="block text-sm font-semibold text-gray-700 mb-2">
                    Experiencia en {selectedJob} *
                  </label>
                  <textarea
                    id="modal-experiencia"
                    name="experiencia"
                    rows={4}
                    required
                    autoComplete="off"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-none"
                    placeholder={
                      selectedJob === 'Jardinería' 
                        ? 'Cuéntanos sobre tu experiencia en jardinería, paisajismo, mantenimiento de plantas, etc...'
                        : selectedJob === 'Construcción'
                        ? 'Cuéntanos sobre tu experiencia en construcción, albañilería, obras, reformas, etc...'
                        : selectedJob === 'Limpieza'
                        ? 'Cuéntanos sobre tu experiencia en limpieza, servicios domésticos, oficinas, etc...'
                        : 'Cuéntanos sobre tu experiencia en este campo...'
                    }
                  ></textarea>
                </div>
                

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">📋 Requisitos recordatorios:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Ser mayor de 21 años</li>
                    <li>• Tener pasaporte vigente</li>
                    <li>• Poder cubrir pasaje y gastos del primer mes</li>
                    <li>• Nosotros te ayudamos con todo el proceso</li>
                  </ul>
                  
                  {selectedJob === 'Jardinería' && (
                    <div className="mt-3 pt-3 border-t border-blue-200">
                      <h5 className="font-semibold text-green-700 mb-1">🌱 Específico para Jardinería:</h5>
                      <ul className="text-sm text-green-600 space-y-1">
                        <li>• Trabajo al aire libre en Almería</li>
                        <li>• Clima mediterráneo ideal</li>
                        <li>• Oportunidades en paisajismo</li>
                      </ul>
                    </div>
                  )}
                  
                  {selectedJob === 'Construcción' && (
                    <div className="mt-3 pt-3 border-t border-blue-200">
                      <h5 className="font-semibold text-orange-700 mb-1">🔨 Específico para Construcción:</h5>
                      <ul className="text-sm text-orange-600 space-y-1">
                        <li>• Obras en crecimiento en Almería</li>
                        <li>• Trabajo en equipo</li>
                        <li>• Oportunidades de crecimiento</li>
                      </ul>
                    </div>
                  )}
                  
                  {selectedJob === 'Limpieza' && (
                    <div className="mt-3 pt-3 border-t border-blue-200">
                      <h5 className="font-semibold text-blue-700 mb-1">🧽 Específico para Limpieza:</h5>
                      <ul className="text-sm text-blue-600 space-y-1">
                        <li>• Horarios flexibles</li>
                        <li>• Diferentes tipos de espacios</li>
                        <li>• Trabajo estable y regular</li>
                      </ul>
                    </div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-4 px-6 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-105"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    <span>Enviar por WhatsApp</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/5493512429578?text=Hola,%20me%20interesa%20aplicar%20para%20trabajos%20en%20Almería.%20Adjunto%20mi%20CV."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-green-500 hover:bg-green-600 text-white p-4 sm:p-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
          aria-label="Contactar por WhatsApp"
        >
          <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </a>

        {/* Back to Top Button */}
        <motion.button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-20 sm:bottom-32 right-4 sm:right-6 bg-gray-600 hover:bg-gray-700 text-white p-3 sm:p-4 rounded-full shadow-lg z-50"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Volver arriba"
        >
          <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
    </div>
  );
}