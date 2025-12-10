'use client';

import { motion } from 'framer-motion';

export default function GoogleFormSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-oswald uppercase tracking-wide">
            ENVÍA TU CV
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto font-oswald uppercase tracking-wide">
            COMPLETA NUESTRO FORMULARIO OFICIAL PARA ENVIAR TU CV Y DATOS DE CONTACTO
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
          

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
            <h4 className="font-semibold text-green-800 mb-3 font-oswald uppercase tracking-wide">📋 ¿QUÉ INCLUYE EL FORMULARIO?</h4>
            <ul className="text-left text-green-700 space-y-2 font-oswald uppercase tracking-wide">
              <li>• INFORMACIÓN PERSONAL COMPLETA</li>
              <li>• EXPERIENCIA LABORAL DETALLADA</li>
              <li>• PREFERENCIAS DE TRABAJO</li>
              <li>• DISPONIBILIDAD Y HORARIOS</li>
            </ul>
          </div>

          <motion.a
            href="https://forms.gle/PFHTpawt5Cj2DbAC7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-green-600 text-white text-lg font-semibold rounded-lg shadow-lg font-oswald uppercase tracking-wide"
            whileHover={{ scale: 1.1, y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span 
              className="mr-3"
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              
            </motion.span>
            <span>COMPLETAR FORMULARIO DE CV</span>
            <motion.svg 
              className="w-5 h-5 ml-3" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              whileHover={{ x: 5 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </motion.svg>
          </motion.a>

          <p className="text-sm text-gray-500 mt-4 font-oswald uppercase tracking-wide">
            SE ABRIRÁ EN UNA NUEVA PESTAÑA
          </p>
        </motion.div>
      </div>
    </section>
  );
}

