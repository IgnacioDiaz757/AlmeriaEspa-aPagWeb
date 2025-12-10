'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function GuiaCertificadoBuenaConducta() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100">
      {/* Header simplificado */}
      <header className="bg-black shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link href="/#requisitos" className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-12 h-12 bg-white rounded-full -z-10"></div>
              <img 
                src="/Copia de Copia de Riveras del sur- Isologo colores.png" 
                alt="Riveras del Suquía" 
                className="h-10 w-auto relative z-10"
              />
            </div>
            <h1 className="text-lg font-bold text-white uppercase tracking-wide font-oswald">RIVERAS DEL SUQUÍA</h1>
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Título */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4 font-oswald uppercase tracking-wide">
              GUÍA: CERTIFICADO DE BUENA CONDUCTA
            </h1>
            <p className="text-xl text-gray-600 font-oswald uppercase tracking-wide">
              APRENDE CÓMO OBTENER TU CERTIFICADO DE BUENA CONDUCTA
            </p>
          </div>

          {/* Contenido principal */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 mb-8">
            <div className="space-y-6">
              {/* Introducción */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 font-oswald uppercase tracking-wide">
                  ¿QUÉ ES EL CERTIFICADO DE BUENA CONDUCTA?
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed font-oswald uppercase tracking-wide">
                  EL CERTIFICADO DE BUENA CONDUCTA ES UN DOCUMENTO OFICIAL QUE ACREDITA QUE NO TIENES ANTECEDENTES PENALES. ES UN REQUISITO ESENCIAL PARA TRABAJAR EN ESPAÑA Y OBTENER TU CONTRATO LABORAL.
                </p>
              </section>

              {/* Pasos para obtenerlo */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 font-oswald uppercase tracking-wide">
                  PASOS PARA OBTENER TU CERTIFICADO
                </h2>
                <div className="space-y-4">
                  <motion.div
                    className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <h3 className="text-xl font-bold text-gray-800 mb-2 font-oswald uppercase tracking-wide">
                      PASO 1: DOCUMENTACIÓN NECESARIA
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 font-oswald uppercase tracking-wide">
                      <li>DOCUMENTO NACIONAL DE IDENTIDAD (DNI) O PASAPORTE VIGENTE</li>
                      <li>COMPROBANTE DE DOMICILIO (NO MÁS DE 3 MESES DE ANTIGÜEDAD)</li>
                      <li>FORMULARIO DE SOLICITUD (SE OBTIENE EN EL LUGAR DE TRÁMITE)</li>
                    </ul>
                  </motion.div>

                  <motion.div
                    className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-xl font-bold text-gray-800 mb-2 font-oswald uppercase tracking-wide">
                      PASO 2: DÓNDE TRAMITARLO
                    </h3>
                    <p className="text-gray-700 mb-2 font-oswald uppercase tracking-wide">
                      PUEDES TRAMITARLO EN:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 font-oswald uppercase tracking-wide">
                      <li>REGISTRO NACIONAL DE REINCIDENCIA (RENAPER) - OFICINAS LOCALES</li>
                      <li>TRÁMITE ONLINE A TRAVÉS DE LA PÁGINA DEL GOBIERNO ARGENTINO</li>
                      <li>OFICINAS DE ATENCIÓN AL CIUDADANO EN TU CIUDAD</li>
                    </ul>
                  </motion.div>

                  <motion.div
                    className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3 className="text-xl font-bold text-gray-800 mb-2 font-oswald uppercase tracking-wide">
                      PASO 3: TIEMPO DE TRÁMITE
                    </h3>
                    <p className="text-gray-700 font-oswald uppercase tracking-wide">
                      EL CERTIFICADO SE EMITE EN UN PLAZO DE 5 A 10 DÍAS HÁBILES. SI LO SOLICITAS ONLINE, PUEDE TARDAR MENOS TIEMPO.
                    </p>
                  </motion.div>

                  <motion.div
                    className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h3 className="text-xl font-bold text-gray-800 mb-2 font-oswald uppercase tracking-wide">
                      PASO 4: VALIDEZ DEL CERTIFICADO
                    </h3>
                    <p className="text-gray-700 font-oswald uppercase tracking-wide">
                      EL CERTIFICADO DE BUENA CONDUCTA TIENE UNA VALIDEZ DE 90 DÍAS DESDE SU EMISIÓN. ASEGÚRATE DE QUE ESTÉ VIGENTE AL MOMENTO DE PRESENTARLO.
                    </p>
                  </motion.div>
                </div>
              </section>

              {/* Video Tutorial */}
              <section className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 font-oswald uppercase tracking-wide">
                  🎥 VIDEO TUTORIAL
                </h2>
                <div className="bg-gray-100 rounded-lg p-2">
                  <iframe
                    className="w-full h-72 rounded-lg"
                    src="https://www.youtube.com/embed/ucQKuab_rj0"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </section>

              {/* Información importante */}
              <section className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-xl border-2 border-green-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 font-oswald uppercase tracking-wide">
                  ⚠️ INFORMACIÓN IMPORTANTE
                </h2>
                <ul className="space-y-2 text-gray-700 font-oswald uppercase tracking-wide">
                  <li>• EL CERTIFICADO DEBE ESTAR APOSTILLADO PARA SER VÁLIDO EN ESPAÑA</li>
                  <li>• LA APOSTILLA SE REALIZA EN EL MINISTERIO DE RELACIONES EXTERIORES</li>
                  <li>• EL PROCESO COMPLETO (CERTIFICADO + APOSTILLA) PUEDE TARDAR ENTRE 15 Y 20 DÍAS</li>
                  <li>• CONSERVA UNA COPIA DEL CERTIFICADO PARA TUS ARCHIVOS</li>
                </ul>
              </section>

              {/* Ayuda */}
              <section className="bg-blue-50 p-6 rounded-xl">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 font-oswald uppercase tracking-wide">
                  ¿NECESITAS AYUDA?
                </h2>
                <p className="text-gray-700 mb-4 font-oswald uppercase tracking-wide">
                  NOSOTROS TE AYUDAMOS CON TODO EL PROCESO. CONTACTA CON NOSOTROS Y TE GUIAMOS EN CADA PASO.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href="https://wa.me/5493512429578?text=Hola,%20necesito%20ayuda%20con%20el%20certificado%20de%20buena%20conducta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg text-center font-oswald uppercase tracking-wide"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    CONTACTAR POR WHATSAPP
                  </motion.a>
                  <motion.a
                    href="/#requisitos"
                    className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg text-center font-oswald uppercase tracking-wide"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    VOLVER A REQUISITOS
                  </motion.a>
                </div>
              </section>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

