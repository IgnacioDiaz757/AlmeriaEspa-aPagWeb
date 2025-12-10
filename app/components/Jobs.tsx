'use client';

import { motion } from 'framer-motion';
import { openWhatsApp, WHATSAPP_PHONE } from '../utils/whatsapp';

export default function Jobs() {
  return (
    <section id="trabajos" className="py-12 sm:py-16 md:py-20 px-4 relative">
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
          <h2 className="text-5xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 font-oswald uppercase tracking-wide">
            OPORTUNIDADES LABORALES
          </h2>
          <p className="text-xl sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-2 font-oswald uppercase tracking-wide">
            DESCUBRE LAS DIFERENTES ÁREAS DE TRABAJO DISPONIBLES EN ALMERÍA. EMPLEO EN CONSTRUCCIÓN Y CARPINTERÍA METÁLICA CON CONTRATO LABORAL
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 max-w-5xl mx-auto">
          {/* Construcción */}
          <motion.div 
            className="group relative bg-white rounded-3xl shadow-2xl overflow-hidden cursor-pointer border-2 border-orange-200/50"
            initial={{ opacity: 0, y: 50, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -10, boxShadow: "0 30px 60px -12px rgba(234, 88, 12, 0.4)" }}
          >
            {/* Imagen de fondo en la parte superior */}
            <div className="relative h-48 sm:h-56 overflow-hidden">
              <img 
                src="/DSC_0113.webp" 
                alt="Obra de construcción en Almería - Trabajadores en construcción"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay con gradiente para legibilidad */}
              <div className="absolute inset-0 bg-gradient-to-t from-orange-600/60 via-orange-500/40 to-transparent"></div>
              
              {/* Contenido sobre la imagen */}
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                <h3 className="text-3xl sm:text-3xl font-bold text-white mb-2 font-oswald uppercase tracking-wide relative z-10" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                  CONSTRUCCIÓN
                </h3>
                <p className="text-orange-100 text-sm font-oswald uppercase tracking-wide relative z-10" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
                  
                </p>
              </div>
            </div>

            {/* Contenido */}
            <div className="p-6 sm:p-8">
              <p className="text-gray-700 mb-6 text-base leading-relaxed font-oswald uppercase tracking-wide">
                OPORTUNIDADES LABORALES EN OBRAS, REFORMAS Y ALBAÑILERÍA CON CONTRATO LABORAL EN ALMERÍA
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base font-oswald uppercase tracking-wide">OBRAS DE CONSTRUCCIÓN</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base font-oswald uppercase tracking-wide">REFORMAS</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base font-oswald uppercase tracking-wide">ALBAÑILERÍA</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base font-oswald uppercase tracking-wide">TRABAJO EN EQUIPO</p>
                </div>
              </div>

              <div className="flex gap-3">
                <motion.a
                  href="https://forms.gle/PFHTpawt5Cj2DbAC7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-orange-600 to-amber-600 text-white py-4 px-6 rounded-xl font-bold cursor-pointer relative z-10 shadow-lg font-oswald uppercase tracking-wide text-lg group-hover:from-orange-700 group-hover:to-amber-700 transition-all duration-300 block text-center"
                  whileHover={{ scale: 1.05, y: -2, boxShadow: "0 20px 25px -5px rgba(234, 88, 12, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  APLICAR AHORA
                </motion.a>
                <motion.button
                  onClick={() => openWhatsApp(WHATSAPP_PHONE, `¡HOLA! ME INTERESA APLICAR PARA TRABAJO EN CONSTRUCCIÓN EN ALMERÍA, ESPAÑA. ¿PODRÍAN DARME MÁS INFORMACIÓN?`)}
                  className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-xl font-bold cursor-pointer relative z-10 shadow-lg transition-all duration-300 flex items-center justify-center min-w-[56px]"
                  whileHover={{ scale: 1.05, y: -2, boxShadow: "0 20px 25px -5px rgba(34, 197, 94, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  title="Contactar por WhatsApp"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Carpintería Metálica */}
          <motion.div 
            className="group relative bg-white rounded-3xl shadow-2xl overflow-hidden cursor-pointer border-2 border-blue-200/50"
            initial={{ opacity: 0, y: 50, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -10, boxShadow: "0 30px 60px -12px rgba(37, 99, 235, 0.4)" }}
          >
            {/* Imagen de fondo en la parte superior */}
            <div className="relative h-48 sm:h-56 overflow-hidden">
              <img 
                src="/two-men-orange-vests-talking-warehouse_914455-1243.avif" 
                alt="Carpintería metálica en Almería - Trabajadores especializados en estructuras metálicas"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay con gradiente para legibilidad */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/60 via-blue-500/40 to-transparent"></div>
              
              {/* Contenido sobre la imagen */}
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                <h3 className="text-3xl sm:text-3xl font-bold text-white mb-2 font-oswald uppercase tracking-wide relative z-10" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                  CARPINTERÍA METÁLICA
                </h3>
                <p className="text-blue-100 text-sm font-oswald uppercase tracking-wide relative z-10" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
                  
                </p>
              </div>
            </div>

            {/* Contenido */}
            <div className="p-6 sm:p-8">
              <p className="text-gray-700 mb-6 text-base leading-relaxed font-oswald uppercase tracking-wide">
                TRABAJOS ESPECIALIZADOS EN ESTRUCTURAS METÁLICAS, SOLDADURA Y MONTAJE CON CONTRATO LABORAL EN ALMERÍA
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base font-oswald uppercase tracking-wide">ESTRUCTURAS METÁLICAS</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base font-oswald uppercase tracking-wide">SOLDADURA</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base font-oswald uppercase tracking-wide">FABRICACIÓN DE ELEMENTOS METÁLICOS</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base font-oswald uppercase tracking-wide">MONTAJE E INSTALACIÓN</p>
                </div>
              </div>

              <div className="flex gap-3">
                <motion.a
                  href="https://forms.gle/PFHTpawt5Cj2DbAC7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-4 px-6 rounded-xl font-bold cursor-pointer relative z-10 shadow-lg font-oswald uppercase tracking-wide text-lg group-hover:from-blue-700 group-hover:to-indigo-800 transition-all duration-300 block text-center"
                  whileHover={{ scale: 1.05, y: -2, boxShadow: "0 20px 25px -5px rgba(37, 99, 235, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  APLICAR AHORA
                </motion.a>
                <motion.button
                  onClick={() => openWhatsApp(WHATSAPP_PHONE, `¡HOLA! ME INTERESA APLICAR PARA TRABAJO EN CARPINTERÍA METÁLICA EN ALMERÍA, ESPAÑA. ¿PODRÍAN DARME MÁS INFORMACIÓN?`)}
                  className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-xl font-bold cursor-pointer relative z-10 shadow-lg transition-all duration-300 flex items-center justify-center min-w-[56px]"
                  whileHover={{ scale: 1.05, y: -2, boxShadow: "0 20px 25px -5px rgba(34, 197, 94, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  title="Contactar por WhatsApp"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

