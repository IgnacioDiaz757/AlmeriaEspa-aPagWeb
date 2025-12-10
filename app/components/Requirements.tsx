'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Requirements() {
  const [showCostosModal, setShowCostosModal] = useState(false);
  const [showPasaporteModal, setShowPasaporteModal] = useState(false);
  const [showEdadModal, setShowEdadModal] = useState(false);

  useEffect(() => {
    if (showCostosModal || showPasaporteModal || showEdadModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showCostosModal, showPasaporteModal, showEdadModal]);
  return (
    <section id="requisitos" className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 font-oswald uppercase tracking-wide">
            REQUISITOS
          </h2>
          <p className="text-xl sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2 font-oswald uppercase tracking-wide">
            CONOCE LOS REQUISITOS BÁSICOS PARA FORMAR PARTE DE NUESTRO EQUIPO EN ALMERÍA
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Card Certificado de Buena Conducta */}
          <motion.a
            href="/guia-certificado-buena-conducta"
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8 rounded-3xl shadow-xl border-2 border-gray-700 cursor-pointer block flex flex-col items-center justify-center min-h-[240px] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5, boxShadow: "0 20px 40px -12px rgba(16, 185, 129, 0.4)" }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              {/* Icono */}
              <div className="w-20 h-20 bg-emerald-500/30 rounded-2xl flex items-center justify-center mb-2">
                <svg className="w-12 h-12 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              {/* Título */}
              <h3 className="text-xl sm:text-2xl font-bold text-white font-oswald uppercase tracking-wide">CERTIFICADO DE BUENA CONDUCTA</h3>
              {/* Subtítulo */}
              <p className="text-sm text-gray-400 font-oswald uppercase tracking-wide">Documento oficial requerido</p>
              {/* CTA */}
              <span className="inline-flex items-center text-sm text-green-400 font-semibold mt-2 font-oswald uppercase tracking-wide">
                Ver guía completa
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </motion.a>

          {/* Card Curriculum */}
          <motion.div
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8 rounded-3xl shadow-xl border-2 border-gray-700 flex flex-col items-center justify-center min-h-[240px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5, boxShadow: "0 20px 40px -12px rgba(37, 99, 235, 0.4)" }}
          >
            <div className="flex flex-col items-center justify-center space-y-4 text-center w-full">
              {/* Icono */}
              <div className="w-20 h-20 bg-blue-500/30 rounded-2xl flex items-center justify-center mb-2">
                <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              {/* Título */}
              <h3 className="text-xl sm:text-2xl font-bold text-white font-oswald uppercase tracking-wide">CURRICULUM</h3>
              {/* Subtítulo */}
              <p className="text-sm text-gray-400 font-oswald uppercase tracking-wide">Documento profesional actualizado</p>
              {/* Botones */}
              <div className="flex flex-col gap-3 w-full mt-2">
                <motion.a
                  href="https://forms.gle/PFHTpawt5Cj2DbAC7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-200 font-oswald uppercase tracking-wide text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Enviar CV
                </motion.a>
                <motion.a
                  href="/guia-homologacion-titulos-haya"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-200 font-oswald uppercase tracking-wide text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Homologar Titulos
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Card Posibilidad Económica */}
          <motion.div 
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8 rounded-3xl shadow-xl border-2 border-gray-700 cursor-pointer flex flex-col items-center justify-center min-h-[240px] focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5, boxShadow: "0 20px 40px -12px rgba(245, 158, 11, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowCostosModal(true)}
          >
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              {/* Icono */}
              <div className="w-20 h-20 bg-amber-500/30 rounded-2xl flex items-center justify-center mb-2">
                <svg className="w-12 h-12 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              {/* Título */}
              <h3 className="text-xl sm:text-2xl font-bold text-white font-oswald uppercase tracking-wide">POSIBILIDAD ECONÓMICA</h3>
              {/* Subtítulo */}
              <p className="text-sm text-gray-400 font-oswald uppercase tracking-wide">Recursos para viaje y estadía</p>
              {/* CTA */}
              <span className="inline-flex items-center text-sm text-orange-400 font-semibold mt-2 font-oswald uppercase tracking-wide">
                Ver información
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </motion.div>

          {/* Card Pasaporte */}
          <motion.div 
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8 rounded-3xl shadow-xl border-2 border-gray-700 cursor-pointer flex flex-col items-center justify-center min-h-[240px] focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5, boxShadow: "0 20px 40px -12px rgba(71, 85, 105, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowPasaporteModal(true)}
          >
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              {/* Icono */}
              <div className="w-20 h-20 bg-slate-500/30 rounded-2xl flex items-center justify-center mb-2">
                <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                </svg>
              </div>
              {/* Título */}
              <h3 className="text-xl sm:text-2xl font-bold text-white font-oswald uppercase tracking-wide">PASAPORTE</h3>
              {/* Subtítulo */}
              <p className="text-sm text-gray-400 font-oswald uppercase tracking-wide">Documento vigente y válido</p>
              {/* CTA */}
              <span className="inline-flex items-center text-sm text-slate-400 font-semibold mt-2 font-oswald uppercase tracking-wide">
                Ver información
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </motion.div>

          {/* Card Edad */}
          <motion.div
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8 rounded-3xl shadow-xl border-2 border-gray-700 flex flex-col items-center justify-center min-h-[240px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5, boxShadow: "0 20px 40px -12px rgba(251, 146, 60, 0.4)" }}
          >
            <div className="flex flex-col items-center justify-center space-y-4 text-center w-full">
              {/* Icono */}
              <div className="w-20 h-20 bg-orange-500/30 rounded-2xl flex items-center justify-center mb-2">
                <svg className="w-12 h-12 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              {/* Título */}
              <h3 className="text-xl sm:text-2xl font-bold text-white font-oswald uppercase tracking-wide">EDAD</h3>
              {/* Subtítulo */}
              <p className="text-sm text-gray-400 font-oswald uppercase tracking-wide">+21 años hasta 50 años</p>
              {/* Botones */}
              <div className="flex flex-col gap-3 w-full mt-2">
                <motion.button
                  onClick={() => setShowEdadModal(true)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-200 font-oswald uppercase tracking-wide text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Ver requisitos
                </motion.button>
                <motion.a
                  href="/guia-homologacion-carnet-conducir"
                  className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-200 font-oswald uppercase tracking-wide text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Guía carnet conducir
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-8 sm:mt-12 text-center">
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6 sm:p-8 rounded-2xl max-w-4xl mx-auto border-2 border-gray-700">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 font-oswald uppercase tracking-wide">¡NOSOTROS TE AYUDAMOS CON TODO!</h3>
            <p className="text-gray-300 mb-4 sm:mb-6 text-base sm:text-lg font-oswald uppercase tracking-wide">
              <strong>TE GUIAMOS EN TODO EL PROCESO Y EL CONTRATO LABORAL.</strong> 
              SI CUMPLES LOS REQUISITOS BÁSICOS, TE ACOMPAÑAMOS EN CADA PASO PARA QUE PUEDAS EMPEZAR A TRABAJAR EN ALMERÍA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://forms.gle/PFHTpawt5Cj2DbAC7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg font-oswald uppercase tracking-wide"
              whileHover={{ scale: 1.1, y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              ENVIAR CV
            </motion.a>
              <motion.a
                href="https://wa.me/5493512429578?text=Hola,%20necesito%20más%20información%20sobre%20los%20trabajos%20en%20Almería"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg font-oswald uppercase tracking-wide"
                whileHover={{ scale: 1.1, y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                MÁS INFORMACIÓN
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de información sobre costos */}
      <AnimatePresence>
        {showCostosModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[9999] p-4"
            onClick={() => setShowCostosModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gray-800 text-white p-6 rounded-t-lg">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">💰</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold font-oswald uppercase tracking-wide">
                        POSIBILIDAD ECONÓMICA DE VIAJAR
                      </h3>
                      <p className="text-gray-300 font-oswald uppercase tracking-wide">
                        INFORMACIÓN IMPORTANTE SOBRE COSTOS
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowCostosModal(false)}
                    className="text-white hover:text-gray-200 text-3xl font-bold transition-colors duration-200"
                  >
                    ×
                  </button>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6">
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg mb-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-4 font-oswald uppercase tracking-wide">
                    ⚠️ INFORMACIÓN IMPORTANTE
                  </h4>
                  <p className="text-gray-700 text-lg leading-relaxed font-oswald uppercase tracking-wide">
                    ES IMPORTANTE QUE POSEAS EL DINERO PARA EL VIAJE DE IDA Y VUELTA, Y PARA TUS GASTOS PROPIOS DEL PRIMER MES. ESTOS COSTOS VAN A DEPENDER DEL MES QUE VAYAS A VIAJAR Y TU CAPACIDAD DE AHORRO DURANTE TU PRIMER ESTADIA MES.
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-bold text-gray-800 mb-2 font-oswald uppercase tracking-wide">
                      💸 COSTOS A CONSIDERAR:
                    </h5>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 font-oswald uppercase tracking-wide">
                      <li>PASAJE DE IDA Y VUELTA A ESPAÑA</li>
                      <li>GASTOS DE ALIMENTACIÓN DEL PRIMER MES</li>
                      <li>GASTOS PERSONALES BÁSICOS</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-bold text-gray-800 mb-2 font-oswald uppercase tracking-wide">
                      📅 VARIABILIDAD DE COSTOS:
                    </h5>
                    <p className="text-gray-700 font-oswald uppercase tracking-wide">
                      LOS COSTOS PUEDEN VARIAR SEGÚN LA ÉPOCA DEL AÑO EN QUE VIAJES Y TU CAPACIDAD DE AHORRO DURANTE TU PRIMER MES DE ESTADÍA EN ALMERÍA.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    onClick={() => setShowCostosModal(false)}
                    className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-4 px-6 rounded-lg font-semibold transition-colors duration-300 font-oswald uppercase tracking-wide"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    ENTENDIDO
                  </motion.button>
                  <motion.a
                    href="https://wa.me/5493512429578?text=Hola,%20necesito%20más%20información%20sobre%20los%20costos%20del%20viaje%20y%20gastos%20del%20primer%20mes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 shadow-lg text-center font-oswald uppercase tracking-wide"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    CONSULTAR POR WHATSAPP
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal de información sobre pasaporte */}
      <AnimatePresence>
        {showPasaporteModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[9999] p-4"
            onClick={() => setShowPasaporteModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gray-800 text-white p-6 rounded-t-lg">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">📘</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold font-oswald uppercase tracking-wide">
                        GUÍA: PASAPORTE ARGENTINO
                      </h3>
                      <p className="text-gray-300 font-oswald uppercase tracking-wide">
                        INFORMACIÓN COMPLETA SOBRE TRÁMITES Y COSTOS
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowPasaporteModal(false)}
                    className="text-white hover:text-gray-200 text-3xl font-bold transition-colors duration-200"
                  >
                    ×
                  </button>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6">
                {/* Tipos de Pasaporte */}
                <section className="mb-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-4 font-oswald uppercase tracking-wide">
                    📘 TIPOS DE PASAPORTE EN ARGENTINA
                  </h4>
                  <div className="space-y-3">
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
                      <h5 className="font-bold text-gray-800 mb-2 font-oswald uppercase tracking-wide">
                        PASAPORTE COMÚN (ORDINARIO)
                      </h5>
                      <p className="text-gray-700 font-oswald uppercase tracking-wide">
                        VÁLIDO PARA VIAJES TURÍSTICOS Y DE NEGOCIOS. DURACIÓN: 10 AÑOS PARA MAYORES DE 18 AÑOS, 5 AÑOS PARA MENORES.
                      </p>
                    </div>
                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
                      <h5 className="font-bold text-gray-800 mb-2 font-oswald uppercase tracking-wide">
                        PASAPORTE OFICIAL
                      </h5>
                      <p className="text-gray-700 font-oswald uppercase tracking-wide">
                        PARA FUNCIONARIOS PÚBLICOS EN MISIÓN OFICIAL. DURACIÓN: 5 AÑOS.
                      </p>
                    </div>
                    <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-lg">
                      <h5 className="font-bold text-gray-800 mb-2 font-oswald uppercase tracking-wide">
                        PASAPORTE DIPLOMÁTICO
                      </h5>
                      <p className="text-gray-700 font-oswald uppercase tracking-wide">
                        PARA DIPLOMÁTICOS Y REPRESENTANTES OFICIALES. DURACIÓN: 5 AÑOS.
                      </p>
                    </div>
                  </div>
                </section>


                {/* Cómo tramitarlo */}
                <section className="mb-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-4 font-oswald uppercase tracking-wide">
                    📋 CÓMO TRAMITAR TU PASAPORTE
                  </h4>
                  <div className="space-y-3">
                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
                      <h5 className="font-bold text-gray-800 mb-2 font-oswald uppercase tracking-wide">
                        PASO 1: DOCUMENTACIÓN NECESARIA
                      </h5>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 font-oswald uppercase tracking-wide">
                        <li>DNI VIGENTE (ORIGINAL Y FOTOCOPIA)</li>
                        <li>PARTIDA DE NACIMIENTO O CERTIFICADO DE NACIMIENTO</li>
                        <li>FOTO 4X4 CM, FONDO BLANCO (RECIENTE)</li>
                        <li>COMPROBANTE DE PAGO DE LA TASA CORRESPONDIENTE</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
                      <h5 className="font-bold text-gray-800 mb-2 font-oswald uppercase tracking-wide">
                        PASO 2: DÓNDE TRAMITARLO
                      </h5>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 font-oswald uppercase tracking-wide">
                        <li>REGISTRO NACIONAL DE LAS PERSONAS (RENAPER)</li>
                        <li>OFICINAS DE PASAPORTES EN TU CIUDAD</li>
                        <li>TRÁMITE ONLINE A TRAVÉS DE MI ARGENTINA</li>
                        <li>AGENDAR TURNO PREVIAMENTE</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-lg">
                      <h5 className="font-bold text-gray-800 mb-2 font-oswald uppercase tracking-wide">
                        PASO 3: TIEMPO DE TRÁMITE
                      </h5>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 font-oswald uppercase tracking-wide">
                        <li>TRÁMITE NORMAL: 15 A 20 DÍAS HÁBILES</li>
                        <li>TRÁMITE EXPRESO: 24 A 48 HORAS (COSTO ADICIONAL)</li>
                        <li>RENOVACIÓN: MISMO TIEMPO QUE TRÁMITE NUEVO</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Video Tutorial */}
                <section className="mb-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-4 font-oswald uppercase tracking-wide">
                    🎥 VIDEO TUTORIAL
                  </h4>
                  <div className="bg-gray-100 rounded-lg p-2">
                    <iframe
                      className="w-full h-72 rounded-lg"
                      src="https://www.youtube.com/embed/qGwMQS_SjSg"
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </section>


                {/* Información importante */}
                <section className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-xl border-2 border-green-200 mb-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-3 font-oswald uppercase tracking-wide">
                    ⚠️ INFORMACIÓN IMPORTANTE
                  </h4>
                  <ul className="space-y-2 text-gray-700 font-oswald uppercase tracking-wide">
                    <li>• EL PASAPORTE DEBE TENER AL MENOS 6 MESES DE VALIDEZ PARA VIAJAR A ESPAÑA</li>
                    <li>• VERIFICA QUE TU PASAPORTE ESTÉ VIGENTE ANTES DE INICIAR EL PROCESO</li>
                    <li>• CONSERVA UNA COPIA DEL PASAPORTE PARA TUS ARCHIVOS</li>
                    <li>• EL PASAPORTE ES PERSONAL E INTRANSFERIBLE</li>
                  </ul>
                </section>

                {/* Ayuda */}
                <section className="bg-blue-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-gray-800 mb-4 font-oswald uppercase tracking-wide">
                    ¿NECESITAS AYUDA?
                  </h4>
                  <p className="text-gray-700 mb-4 font-oswald uppercase tracking-wide">
                    NOSOTROS TE AYUDAMOS CON TODO EL PROCESO. CONTACTA CON NOSOTROS Y TE GUIAMOS EN CADA PASO.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.button
                      onClick={() => setShowPasaporteModal(false)}
                      className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-4 px-6 rounded-lg font-semibold transition-colors duration-300 font-oswald uppercase tracking-wide"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      ENTENDIDO
                    </motion.button>
                    <motion.a
                      href="https://wa.me/5493512429578?text=Hola,%20necesito%20más%20información%20sobre%20el%20trámite%20del%20pasaporte"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 shadow-lg text-center font-oswald uppercase tracking-wide"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      CONSULTAR POR WHATSAPP
                    </motion.a>
                  </div>
                </section>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal de información sobre edad */}
      <AnimatePresence>
        {showEdadModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[9999] p-4"
            onClick={() => setShowEdadModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gray-800 text-white p-6 rounded-t-lg">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🎂</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold font-oswald uppercase tracking-wide">
                        REQUISITOS DE EDAD
                      </h3>
                      <p className="text-gray-300 font-oswald uppercase tracking-wide">
                        INFORMACIÓN SOBRE LOS REQUISITOS DE EDAD PARA TRABAJAR
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowEdadModal(false)}
                    className="text-white hover:text-gray-200 text-3xl font-bold transition-colors duration-200"
                  >
                    ×
                  </button>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6">
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg mb-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-4 font-oswald uppercase tracking-wide">
                    ⚠️ REQUISITOS DE EDAD
                  </h4>
                  <p className="text-gray-700 text-lg leading-relaxed font-oswald uppercase tracking-wide">
                    +21 AÑOS HASTA 50 AÑOS DEPENDIENDO EL OFICIO
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
                    <h5 className="font-bold text-gray-800 mb-2 font-oswald uppercase tracking-wide">
                      📋 EDAD MÍNIMA
                    </h5>
                    <p className="text-gray-700 font-oswald uppercase tracking-wide">
                      DEBES TENER MÍNIMO 21 AÑOS DE EDAD PARA APLICAR A CUALQUIERA DE NUESTRAS OFERTAS LABORALES.
                    </p>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
                    <h5 className="font-bold text-gray-800 mb-2 font-oswald uppercase tracking-wide">
                      📋 EDAD MÁXIMA
                    </h5>
                    <p className="text-gray-700 font-oswald uppercase tracking-wide">
                      LA EDAD MÁXIMA ES DE 50 AÑOS, PERO ESTO PUEDE VARIAR DEPENDIENDO DEL OFICIO Y LAS CARACTERÍSTICAS ESPECÍFICAS DEL TRABAJO.
                    </p>
                  </div>

                  <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-lg">
                    <h5 className="font-bold text-gray-800 mb-2 font-oswald uppercase tracking-wide">
                      🔨 VARIABILIDAD POR OFICIO
                    </h5>
                    <p className="text-gray-700 font-oswald uppercase tracking-wide">
                      DIFERENTES OFICIOS PUEDEN TENER REQUISITOS DE EDAD ESPECÍFICOS. CONSTRUCCIÓN Y CARPINTERÍA METÁLICA PUEDEN TENER LÍMITES DIFERENTES SEGÚN LAS EXIGENCIAS FÍSICAS DEL TRABAJO.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-xl border-2 border-green-200 mb-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-3 font-oswald uppercase tracking-wide">
                    💡 INFORMACIÓN ADICIONAL
                  </h4>
                  <ul className="space-y-2 text-gray-700 font-oswald uppercase tracking-wide">
                    <li>• LA EDAD ES UN FACTOR IMPORTANTE PERO NO EL ÚNICO</li>
                    <li>• SE VALORA LA EXPERIENCIA Y CAPACIDAD FÍSICA</li>
                    <li>• CONTACTA CON NOSOTROS PARA CONSULTAR REQUISITOS ESPECÍFICOS DE TU OFICIO</li>
                    <li>• ESTAMOS ABIERTOS A EVALUAR CASOS ESPECIALES</li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    onClick={() => setShowEdadModal(false)}
                    className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-4 px-6 rounded-lg font-semibold transition-colors duration-300 font-oswald uppercase tracking-wide"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    ENTENDIDO
                  </motion.button>
                  <motion.a
                    href="https://www.youtube.com/watch?v=ucQKuab_rj0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 shadow-lg text-center font-oswald uppercase tracking-wide"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    CONSULTAR POR WHATSAPP
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

