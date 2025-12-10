'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { openWhatsApp, WHATSAPP_PHONE } from '../utils/whatsapp';

export default function GuiaHomologacionCarnetConducir() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100">
      {/* Header simplificado */}
      <header className="bg-black shadow-lg z-50 py-4 px-4 font-oswald">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 hover:opacity-80 transition-opacity duration-200 relative z-10">
            <div className="relative flex items-center justify-center">
              <img 
                src="/Copia de Copia de Riveras del sur- Isologo colores.png" 
                alt="Riveras del Suquía" 
                className="h-10 w-auto sm:h-12 relative z-10"
              />
              <div className="absolute bg-white rounded-full -z-10 w-12 h-12 sm:w-14 sm:h-14"></div>
            </div>
            <h1 className="text-sm sm:text-lg md:text-xl font-bold text-white uppercase tracking-wide">RIVERAS DEL SUQUÍA</h1>
          </Link>
          <Link href="/#requisitos" className="text-white hover:text-blue-400 transition-colors duration-200 uppercase tracking-wide font-semibold text-sm sm:text-base">
            VOLVER A REQUISITOS
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12 sm:py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4 font-oswald uppercase tracking-wide">
            GUÍA: HOMOLOGACIÓN DEL CARNET DE CONDUCIR
          </h2>
          <p className="text-xl sm:text-lg text-gray-600 max-w-3xl mx-auto font-oswald uppercase tracking-wide">
            PASOS PARA HOMOLOGAR TU LICENCIA DE CONDUCIR PARA TRABAJAR EN ESPAÑA
          </p>
        </motion.div>

        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-blue-700 mb-3 font-oswald uppercase tracking-wide">
              ¿QUÉ ES LA HOMOLOGACIÓN DEL CARNET DE CONDUCIR?
            </h3>
            <p className="text-gray-700 font-oswald uppercase tracking-wide">
              LA HOMOLOGACIÓN ES EL PROCESO PARA CONVERTIR TU LICENCIA DE CONDUCIR EXTRANJERA EN UNA LICENCIA ESPAÑOLA VÁLIDA. ESTO ES NECESARIO PARA PODER CONDUCIR LEGALMENTE EN ESPAÑA.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-green-700 mb-3 font-oswald uppercase tracking-wide">
              ¿QUIÉNES PUEDEN HOMOLOGAR?
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700 font-oswald uppercase tracking-wide">
              <li>CIUDADANOS DE PAÍSES CON CONVENIO DE RECONOCIMIENTO MUTUO CON ESPAÑA</li>
              <li>RESIDENTES EN ESPAÑA CON LICENCIA VÁLIDA DE SU PAÍS DE ORIGEN</li>
              <li>PERSONAS CON LICENCIA VIGENTE Y SIN SANCIONES GRAVES</li>
              <li>MAYORES DE 18 AÑOS (PARA LICENCIAS TIPO B)</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-purple-700 mb-3 font-oswald uppercase tracking-wide">
              PASOS PARA HOMOLOGAR TU CARNET:
            </h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-700 font-oswald uppercase tracking-wide">
              <li>
                <strong>VERIFICAR CONVENIO:</strong> CONFIRMA SI TU PAÍS TIENE CONVENIO DE RECONOCIMIENTO MUTUO CON ESPAÑA. ARGENTINA, URUGUAY, CHILE Y OTROS PAÍSES LATINOAMERICANOS SUELEN TENER ESTOS CONVENIOS.
              </li>
              <li>
                <strong>OBTENER COPIA CERTIFICADA:</strong> OBTÉN UNA COPIA CERTIFICADA DE TU LICENCIA DE CONDUCIR EN EL ORGANISMO EMISOR DE TU PAÍS (REGISTRO CIVIL, TRÁNSITO, ETC.).
              </li>
              <li>
                <strong>APOSTILLA DE LA HAYA:</strong> PRESENTA TU LICENCIA EN EL ORGANISMO COMPETENTE DE TU PAÍS PARA OBTENER LA APOSTILLA DE LA HAYA (IGUAL QUE CON LOS TÍTULOS ACADÉMICOS).
              </li>
              <li>
                <strong>TRADUCCIÓN JURADA:</strong> SI TU LICENCIA NO ESTÁ EN ESPAÑOL, DEBES TRADUCIRLA POR UN TRADUCTOR JURADO RECONOCIDO EN ESPAÑA.
              </li>
              <li>
                <strong>PRESENTAR EN ESPAÑA:</strong> PRESENTA LOS DOCUMENTOS APOSTILLADOS Y TRADUCIDOS EN LA JEFATURA PROVINCIAL DE TRÁFICO (DGT) DE TU PROVINCIA DE RESIDENCIA EN ESPAÑA.
              </li>
              <li>
                <strong>REALIZAR EXAMEN MÉDICO:</strong> DEBES REALIZAR UN RECONOCIMIENTO MÉDICO PSICOTÉCNICO EN UN CENTRO AUTORIZADO EN ESPAÑA.
              </li>
              <li>
                <strong>OBTENER LICENCIA ESPAÑOLA:</strong> UNA VEZ APROBADO TODO EL PROCESO, RECIBIRÁS TU LICENCIA ESPAÑOLA.
              </li>
            </ol>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-8"
          >
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-8"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-4 font-oswald uppercase tracking-wide">
              🎥 VIDEO TUTORIAL:
            </h3>
            <div className="w-full px-0 sm:px-0">
              <div className="relative w-full overflow-hidden rounded-lg shadow-xl" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full border-0"
                  src="https://www.youtube.com/embed/ZxJm-xu2ZgQ"
                  title="Guía de Homologación del Carnet de Conducir"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-red-700 mb-3 font-oswald uppercase tracking-wide">
              DOCUMENTACIÓN NECESARIA:
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700 font-oswald uppercase tracking-wide">
              <li>COPIA CERTIFICADA DE LA LICENCIA DE CONDUCIR ORIGINAL</li>
              <li>APOSTILLA DE LA HAYA DE LA LICENCIA</li>
              <li>TRADUCCIÓN JURADA (SI ES NECESARIA)</li>
              <li>DNI O PASAPORTE VIGENTE</li>
              <li>NIE (NÚMERO DE IDENTIDAD DE EXTRANJERO) O DOCUMENTO DE RESIDENCIA EN ESPAÑA</li>
              <li>FOTOGRAFÍAS ACTUALIZADAS</li>
              <li>INFORME PSICOTÉCNICO DE UN CENTRO AUTORIZADO</li>
              <li>FORMULARIO DE SOLICITUD COMPLETADO</li>
              <li>COMPROBANTE DE PAGO DE TASAS</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 p-6 rounded-xl"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-3 font-oswald uppercase tracking-wide">
              ⚠️ INFORMACIÓN IMPORTANTE:
            </h3>
            <ul className="space-y-2 text-gray-700 font-oswald uppercase tracking-wide">
              <li>• EL PROCESO PUEDE TARDAR ENTRE 2 Y 4 MESES</li>
              <li>• DEBES TENER RESIDENCIA LEGAL EN ESPAÑA PARA INICIAR EL TRÁMITE</li>
              <li>• LA LICENCIA DEBE ESTAR VIGENTE Y SIN SANCIONES GRAVES</li>
              <li>• ALGUNOS PAÍSES REQUIEREN EXAMEN TEÓRICO Y/O PRÁCTICO ADICIONAL</li>
              <li>• EL RECONOCIMIENTO MÉDICO ES OBLIGATORIO Y DEBE RENOVARSE PERIÓDICAMENTE</li>
              <li>• PUEDES CONDUCIR CON TU LICENCIA ORIGINAL DURANTE EL PROCESO DE HOMOLOGACIÓN (CONVERSIÓN TEMPORAL)</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="bg-blue-50 p-6 rounded-xl"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-3 font-oswald uppercase tracking-wide">
              💡 TIPOS DE LICENCIAS:
            </h3>
            <ul className="space-y-2 text-gray-700 font-oswald uppercase tracking-wide">
              <li>• <strong>LICENCIA TIPO B:</strong> PARA CONDUCIR VEHÍCULOS PARTICULARES (COCHES, MOTOS PEQUEÑAS)</li>
              <li>• <strong>LICENCIA TIPO C:</strong> PARA CONDUCIR VEHÍCULOS DE MERCANCÍAS (CAMIONES)</li>
              <li>• <strong>LICENCIA TIPO D:</strong> PARA CONDUCIR VEHÍCULOS DE VIAJEROS (AUTOBUSES)</li>
              <li>• CADA TIPO DE LICENCIA TIENE REQUISITOS ESPECÍFICOS Y VALIDEZ DIFERENTE</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="text-center mt-10"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4 font-oswald uppercase tracking-wide">
              ¿NECESITAS AYUDA?
            </h3>
            <p className="text-gray-600 mb-6 font-oswald uppercase tracking-wide">
              SI TIENES DUDAS O NECESITAS ASISTENCIA CON EL PROCESO DE HOMOLOGACIÓN DEL CARNET DE CONDUCIR, CONTÁCTANOS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => openWhatsApp(WHATSAPP_PHONE, "Hola, necesito ayuda con el proceso de homologación del carnet de conducir para trabajar en España.")}
                className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg font-oswald uppercase tracking-wide"
                whileHover={{ scale: 1.1, y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                CONSULTAR POR WHATSAPP
              </motion.button>
              <Link
                href="/#requisitos"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg font-oswald uppercase tracking-wide"
                passHref
              >
                VOLVER A REQUISITOS
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

