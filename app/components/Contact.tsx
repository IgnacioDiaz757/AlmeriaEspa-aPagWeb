'use client';

import { motion } from 'framer-motion';
import { openWhatsApp, WHATSAPP_PHONE } from '../utils/whatsapp';

export default function Contact() {
  return (
    <section id="contacto" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50 relative">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-oswald uppercase tracking-wide">
          ¿LISTO PARA EMPEZAR?
        </h2>
        <p className="text-xl text-gray-600 mb-12 font-oswald uppercase tracking-wide">
          CONTACTA CON NOSOTROS Y FORMA PARTE DE NUESTRO EQUIPO EN ALMERÍA
        </p>
        
        <div className="bg-white p-8 rounded-2xl shadow-xl relative z-20">
          <form 
            className="space-y-6 interactive-form"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target as HTMLFormElement);
              const data = Object.fromEntries(formData);
              
              // Crear mensaje para WhatsApp
              const whatsappMessage = `¡HOLA! ME INTERESA TRABAJAR EN ALMERÍA 

*DATOS DE CONTACTO:*
• *NOMBRE:* ${data.name}
• *EMAIL:* ${data.email}
• *TELÉFONO:* ${data.phone || 'NO ESPECIFICADO'}
• *ÁREA DE INTERÉS:* ${data.interest || 'NO ESPECIFICADO'}

*MENSAJE:*
${data.message || 'SIN MENSAJE ADICIONAL'}

¡ESPERO SU RESPUESTA! 😊`;

              // Abrir WhatsApp usando la función helper que funciona con WhatsApp y WhatsApp Business
              openWhatsApp(WHATSAPP_PHONE, whatsappMessage);
            }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <input
                id="contact-name"
                type="text"
                name="name"
                autoComplete="name"
                placeholder="NOMBRE COMPLETO *"
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
                placeholder="EMAIL *"
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
                placeholder="TELÉFONO"
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
                <option value="">SELECCIONA ÁREA DE INTERÉS</option>
                <option value="Construcción">CONSTRUCCIÓN</option>
                <option value="Carpintería Metálica">CARPINTERÍA METÁLICA</option>
                <option value="Otro">OTRO</option>
              </select>
            </div>
            <textarea
              id="contact-message"
              name="message"
              autoComplete="off"
              placeholder="CUÉNTANOS SOBRE TU EXPERIENCIA Y QUÉ TIPO DE TRABAJO BUSCAS..."
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            ></textarea>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">📱</span>
                </div>
                <div className="flex-1">
                  <h5 className="font-semibold text-green-800 mb-1 font-oswald uppercase tracking-wide">ENVÍO POR WHATSAPP</h5>
                  <p className="text-sm text-green-600 font-oswald uppercase tracking-wide">
                    AL ENVIAR, SE ABRIRÁ WHATSAPP CON TODOS TUS DATOS PRE-LLENADOS
                  </p>
                </div>
              </div>
            </div>

            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-8 rounded-lg text-lg font-semibold shadow-lg flex items-center justify-center space-x-2 cursor-pointer font-oswald uppercase tracking-wide"
              whileHover={{ scale: 1.05, y: -3, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                
              </motion.span>
              <span>ENVIAR POR WHATSAPP</span>
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
}

