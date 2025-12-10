'use client';

import { openWhatsApp, WHATSAPP_PHONE } from '../utils/whatsapp';

export default function Footer() {
  const handleTrabajaConNosotros = () => {
    const message = `¡HOLA! ME INTERESA TRABAJAR CON USTEDES EN ALMERÍA

*QUIERO SABER MÁS SOBRE:*
• OPORTUNIDADES LABORALES EN ALMERÍA
• TRABAJOS EN CONSTRUCCIÓN O CARPINTERÍA METÁLICA
• REQUISITOS Y PROCESO DE CONTRATACIÓN

¡ESPERO SU RESPUESTA! 😊`;
    openWhatsApp(WHATSAPP_PHONE, message);
  };

  return (
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
            <h3 className="text-2xl font-bold mb-4 font-oswald uppercase tracking-wide">TRABAJOS EN ALMERÍA</h3>
            <p className="text-gray-300 mb-4 font-oswald uppercase tracking-wide">
              CONECTANDO TALENTO CON OPORTUNIDADES EN LA HERMOSA PROVINCIA DE ALMERÍA
            </p>
            <button
              onClick={handleTrabajaConNosotros}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 font-oswald uppercase tracking-wide mt-4"
            >
              TRABAJA CON NOSOTROS
            </button>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 font-oswald uppercase tracking-wide">CONTACTO</h4>
            <div className="space-y-2 text-gray-300">
              <p className="text-left">📧 CONTACTO.RDELSUQUIA@GMAIL.COM</p>
              <p className="text-left">📞 +54 9 351 242 9578</p>
              <p className="text-left">📍 CÓRDOBA, ARGENTINA</p>
              <p className="text-left"> <a href="https://www.riverasdelsuquia.com.ar" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">www.riverasdelsuquia.com.ar</a></p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 font-oswald uppercase tracking-wide">📍 UBICACIÓN</h4>
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
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-6">
              <a 
                href="https://www.instagram.com/riverasdelsuquia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-pink-400 transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/riverasdelsuquia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
            <p className="text-gray-400 font-oswald uppercase tracking-wide text-center">
              © 2025 RIVERAS DEL SUQUÍA. TODOS LOS DERECHOS RESERVADOS. 
              <span className="ml-2">HECHO CON ❤️ POR <a href="https://www.riverasdelsuquia.com.ar" target="_blank" rel="noopener noreferrer" className="underline text-blue-400 hover:text-blue-300 transition-colors duration-200">RIVERAS DEL SUQUÍA</a></span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

