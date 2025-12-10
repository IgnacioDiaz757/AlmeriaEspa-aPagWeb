'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { openWhatsApp, WHATSAPP_PHONE } from '../utils/whatsapp';

export default function GuiaHomologacionTitulosHaya() {
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
            GUÍA: HOMOLOGACIÓN DE TÍTULOS CON LA HAYA
          </h2>
          <p className="text-xl sm:text-lg text-gray-600 max-w-3xl mx-auto font-oswald uppercase tracking-wide">
            PASOS PARA HOMOLOGAR TUS TÍTULOS ACADÉMICOS PARA TRABAJAR EN ESPAÑA
          </p>
        </motion.div>

        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-blue-700 mb-3 font-oswald uppercase tracking-wide">
              ¿QUÉ ES LA APOSTILLA DE LA HAYA?
            </h3>
            <p className="text-gray-700 font-oswald uppercase tracking-wide">
              LA APOSTILLA DE LA HAYA ES UN PROCEDIMIENTO QUE CERTIFICA LA AUTENTICIDAD DE DOCUMENTOS PÚBLICOS PARA QUE SEAN RECONOCIDOS EN OTROS PAÍSES FIRMANTES DEL CONVENIO DE LA HAYA. ESPAÑA ES PARTE DE ESTE CONVENIO.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-green-700 mb-3 font-oswald uppercase tracking-wide">
              ¿QUÉ TÍTULOS NECESITAN HOMOLOGACIÓN?
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700 font-oswald uppercase tracking-wide">
              <li>TÍTULOS UNIVERSITARIOS (LICENCIATURAS, INGENIERÍAS, ETC.)</li>
              <li>TÍTULOS TERCIARIOS (TÉCNICOS SUPERIORES, TECNICATURAS)</li>
              <li>TÍTULOS SECUNDARIOS (BACHILLERATO, POLIMODAL)</li>
              <li>CERTIFICADOS DE ESTUDIOS</li>
              <li>DIPLOMAS Y CERTIFICACIONES PROFESIONALES</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-purple-700 mb-3 font-oswald uppercase tracking-wide">
              PASOS PARA HOMOLOGAR TUS TÍTULOS:
            </h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-700 font-oswald uppercase tracking-wide">
              <li>
                <strong>OBTENER COPIA CERTIFICADA:</strong> DEBES OBTENER UNA COPIA CERTIFICADA DE TU TÍTULO EN LA INSTITUCIÓN QUE LO EMITIÓ (UNIVERSIDAD, INSTITUTO, ETC.).
              </li>
              <li>
                <strong>APOSTILLA EN TU PAÍS:</strong> PRESENTA EL TÍTULO EN EL ORGANISMO COMPETENTE DE TU PAÍS PARA OBTENER LA APOSTILLA DE LA HAYA. EN ARGENTINA, SE REALIZA EN EL MINISTERIO DE EDUCACIÓN O EN EL COLEGIO DE ESCRIBANOS.
              </li>
              <li>
                <strong>TRADUCCIÓN JURADA:</strong> SI EL TÍTULO NO ESTÁ EN ESPAÑOL, DEBES TRADUCIRLO POR UN TRADUCTOR JURADO RECONOCIDO EN ESPAÑA.
              </li>
              <li>
                <strong>HOMOLOGACIÓN EN ESPAÑA:</strong> PRESENTA LOS DOCUMENTOS APOSTILLADOS Y TRADUCIDOS EN EL MINISTERIO DE EDUCACIÓN Y FORMACIÓN PROFESIONAL DE ESPAÑA O EN EL ORGANISMO COMPETENTE DE TU COMUNIDAD AUTÓNOMA.
              </li>
              <li>
                <strong>TIEMPO DE TRÁMITE:</strong> EL PROCESO PUEDE TARDAR ENTRE 3 Y 6 MESES, DEPENDIENDO DEL TIPO DE TÍTULO Y LA COMPLEJIDAD DEL CASO.
              </li>
            </ol>
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
              <li>COPIA CERTIFICADA DEL TÍTULO ORIGINAL</li>
              <li>APOSTILLA DE LA HAYA DEL TÍTULO</li>
              <li>TRADUCCIÓN JURADA (SI ES NECESARIA)</li>
              <li>DNI O PASAPORTE VIGENTE</li>
              <li>PARTIDA DE NACIMIENTO APOSTILLADA</li>
              <li>FORMULARIO DE SOLICITUD COMPLETADO</li>
              <li>COMPROBANTE DE PAGO DE TASAS (SI APLICA)</li>
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
              <li>• NO TODOS LOS TÍTULOS REQUIEREN HOMOLOGACIÓN PARA TRABAJAR EN CONSTRUCCIÓN O CARPINTERÍA METÁLICA</li>
              <li>• LA EXPERIENCIA LABORAL ES MUY VALORADA EN ESTOS SECTORES</li>
              <li>• CONSULTA SIEMPRE LOS REQUISITOS ESPECÍFICOS DEL EMPLEADOR</li>
              <li>• EL PROCESO DE HOMOLOGACIÓN PUEDE INICIARSE DESDE TU PAÍS DE ORIGEN</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-center mt-10"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4 font-oswald uppercase tracking-wide">
              ¿NECESITAS AYUDA?
            </h3>
            <p className="text-gray-600 mb-6 font-oswald uppercase tracking-wide">
              SI TIENES DUDAS O NECESITAS ASISTENCIA CON EL PROCESO DE HOMOLOGACIÓN, CONTÁCTANOS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => openWhatsApp(WHATSAPP_PHONE, "Hola, necesito ayuda con el proceso de homologación de títulos con La Haya para trabajar en España.")}
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

