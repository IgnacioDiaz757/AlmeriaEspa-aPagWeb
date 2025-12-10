'use client';

import { motion } from 'framer-motion';

export default function WhyAlmeria() {
  return (
    <section id="por-que-almeria" className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 font-oswald uppercase tracking-wide">
            ¿POR QUÉ ALMERÍA?
          </h2>
                 <p className="text-xl sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2 font-oswald uppercase tracking-wide">
                   ALMERÍA OFRECE UN ENTORNO ÚNICO PARA TRABAJAR Y VIVIR. ENCUENTRA TRABAJO EN ALMERÍA CON OPORTUNIDADES LABORALES EN CONSTRUCCIÓN Y CARPINTERÍA METÁLICA
                 </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12 md:mb-16">
          <motion.div 
            className="text-center cursor-pointer relative overflow-hidden rounded-3xl shadow-xl border-2 border-green-200/50 min-h-[300px] sm:min-h-[320px] md:min-h-[350px]"
            initial={{ opacity: 0, y: 50, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.08, y: -15, rotateY: 5, boxShadow: "0 30px 60px -12px rgba(34, 197, 94, 0.4)" }}
          >
            {/* Imagen de fondo */}
            <div className="absolute inset-0">
              <img 
                src="/cala-de-san-pedro.webp" 
                alt="Cala de San Pedro, Almería - Clima ideal todo el año"
                className="w-full h-full object-cover"
              />
              {/* Overlay negro para legibilidad */}
              <div className="absolute inset-0 bg-black/60"></div>
            </div>
            {/* Contenido sobre la imagen */}
            <div className="relative z-10 p-8 h-full flex items-center justify-center">
              <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold text-white font-oswald uppercase tracking-wide" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>CLIMA IDEAL TODO EL AÑO</h3>
            </div>
          </motion.div>

          <motion.div 
            className="text-center cursor-pointer relative overflow-hidden rounded-3xl shadow-xl border-2 border-green-200/50 min-h-[300px] sm:min-h-[320px] md:min-h-[350px]"
            initial={{ opacity: 0, y: 50, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.08, y: -15, rotateY: 5, boxShadow: "0 30px 60px -12px rgba(34, 197, 94, 0.4)" }}
          >
            {/* Imagen de fondo */}
            <div className="absolute inset-0">
              <img 
                src="/unnamed.jpg" 
                alt="Oportunidad laboral en crecimiento - Trabajos en construcción Almería"
                className="w-full h-full object-cover"
              />
              {/* Overlay negro para legibilidad */}
              <div className="absolute inset-0 bg-black/60"></div>
            </div>
            {/* Contenido sobre la imagen */}
            <div className="relative z-10 p-8 h-full flex items-center justify-center">
              <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold text-white font-oswald uppercase tracking-wide" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>OPORTUNIDAD LABORAL EN CRECIMIENTO</h3>
            </div>
          </motion.div>

          <motion.div 
            className="text-center cursor-pointer relative overflow-hidden rounded-3xl shadow-xl border-2 border-green-200/50 min-h-[300px] sm:min-h-[320px] md:min-h-[350px]"
            initial={{ opacity: 0, y: 50, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.08, y: -15, rotateY: 5, boxShadow: "0 30px 60px -12px rgba(34, 197, 94, 0.4)" }}
          >
            {/* Imagen de fondo */}
            <div className="absolute inset-0">
              <img 
                src="/671fa1366b330.jpeg" 
                alt="Bajo costo de vida en Almería - Supermercado económico"
                className="w-full h-full object-cover"
              />
              {/* Overlay negro para legibilidad */}
              <div className="absolute inset-0 bg-black/60"></div>
            </div>
            {/* Contenido sobre la imagen */}
            <div className="relative z-10 p-8 h-full flex items-center justify-center">
              <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold text-white font-oswald uppercase tracking-wide" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>BAJO COSTO DE VIDA</h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

