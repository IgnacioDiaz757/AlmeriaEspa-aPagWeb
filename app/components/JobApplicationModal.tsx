'use client';

import { useEffect } from 'react';
import type { JobType } from './types';
import { openWhatsApp, WHATSAPP_PHONE } from '../utils/whatsapp';

interface JobApplicationModalProps {
  show: boolean;
  selectedJob: JobType | null;
  onClose: () => void;
}

export default function JobApplicationModal({ show, selectedJob, onClose }: JobApplicationModalProps) {
  // Auto-focus first input when modal opens
  useEffect(() => {
    if (show) {
      setTimeout(() => {
        document.getElementById('modal-nombre')?.focus();
      }, 100);
    }
  }, [show]);

  if (!show || !selectedJob) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[9999] p-4"
      onClick={onClose}
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
                <h3 className="text-2xl font-bold font-oswald uppercase tracking-wide">
                  APLICAR A {selectedJob?.toUpperCase()}
                </h3>
                <p className="text-blue-100 font-oswald uppercase tracking-wide">
                  COMPLETA EL FORMULARIO PARA ENVIAR TU SOLICITUD
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
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
            
            const whatsappMessage = `¡HOLA! ME INTERESA APLICAR PARA ${selectedJob?.toUpperCase()} 

*DATOS DE CONTACTO:*
• *NOMBRE:* ${data.nombre || 'NO ESPECIFICADO'}
• *EMAIL:* ${data.email || 'NO ESPECIFICADO'}
• *TELÉFONO:* ${data.telefono || 'NO ESPECIFICADO'}
• *EDAD:* ${data.edad || 'NO ESPECIFICADO'}

*ÁREA DE INTERÉS:* ${selectedJob?.toUpperCase()}

*EXPERIENCIA:*
${data.experiencia || 'SIN EXPERIENCIA ESPECIFICADA'}

¡ESPERO SU RESPUESTA! 😊`;

            // Abrir WhatsApp usando la función helper que funciona con WhatsApp y WhatsApp Business
            openWhatsApp(WHATSAPP_PHONE, whatsappMessage);
            onClose();
          }}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="modal-nombre" className="block text-sm font-semibold text-gray-700 mb-2 font-oswald uppercase tracking-wide">
                  NOMBRE COMPLETO *
                </label>
                <input
                  id="modal-nombre"
                  type="text"
                  name="nombre"
                  autoComplete="name"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  placeholder="TU NOMBRE COMPLETO"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      document.getElementById('modal-email')?.focus();
                    }
                  }}
                />
              </div>
              
              <div>
                    <label htmlFor="modal-email" className="block text-sm font-semibold text-gray-700 mb-2 font-oswald uppercase tracking-wide">
                      EMAIL *
                    </label>
                <input
                  id="modal-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  inputMode="email"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  placeholder="TU@EMAIL.COM"
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
                    <label htmlFor="modal-telefono" className="block text-sm font-semibold text-gray-700 mb-2 font-oswald uppercase tracking-wide">
                      TELÉFONO *
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
                    <label htmlFor="modal-edad" className="block text-sm font-semibold text-gray-700 mb-2 font-oswald uppercase tracking-wide">
                      EDAD
                    </label>
                <input
                  id="modal-edad"
                  type="number"
                  name="edad"
                  min="21"
                  inputMode="numeric"
                  autoComplete="off"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  placeholder="TU EDAD"
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
                  <label htmlFor="modal-experiencia" className="block text-sm font-semibold text-gray-700 mb-2 font-oswald uppercase tracking-wide">
                    EXPERIENCIA EN {selectedJob?.toUpperCase()} *
                  </label>
              <textarea
                id="modal-experiencia"
                name="experiencia"
                rows={4}
                required
                autoComplete="off"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-none"
                placeholder={
                  selectedJob === 'Construcción'
                    ? 'CUÉNTANOS SOBRE TU EXPERIENCIA EN CONSTRUCCIÓN, ALBAÑILERÍA, OBRAS, REFORMAS, ETC...'
                    : selectedJob === 'Carpintería Metálica'
                    ? 'CUÉNTANOS SOBRE TU EXPERIENCIA EN CARPINTERÍA METÁLICA, SOLDADURA, ESTRUCTURAS METÁLICAS, MONTAJE, ETC...'
                    : 'CUÉNTANOS SOBRE TU EXPERIENCIA EN ESTE CAMPO...'
                }
              ></textarea>
            </div>
            

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2 font-oswald uppercase tracking-wide">📋 REQUISITOS RECORDATORIOS:</h4>
              <ul className="text-sm text-gray-600 space-y-1 font-oswald uppercase tracking-wide">
                <li>• SER MAYOR DE 21 AÑOS</li>
                <li>• TENER PASAPORTE VIGENTE</li>
                <li>• PODER CUBRIR PASAJE Y GASTOS DEL PRIMER MES</li>
                <li>• NOSOTROS TE AYUDAMOS CON TODO EL PROCESO</li>
              </ul>
              
              {selectedJob === 'Construcción' && (
                <div className="mt-3 pt-3 border-t border-blue-200">
                      <h5 className="font-semibold text-orange-700 mb-1 font-oswald uppercase tracking-wide">🔨 ESPECÍFICO PARA CONSTRUCCIÓN:</h5>
                      <ul className="text-sm text-orange-600 space-y-1 font-oswald uppercase tracking-wide">
                        <li>• OBRAS EN CRECIMIENTO EN ALMERÍA</li>
                        <li>• TRABAJO EN EQUIPO</li>
                        <li>• OPORTUNIDADES DE CRECIMIENTO</li>
                      </ul>
                </div>
              )}
              
              {selectedJob === 'Carpintería Metálica' && (
                <div className="mt-3 pt-3 border-t border-blue-200">
                      <h5 className="font-semibold text-gray-700 mb-1 font-oswald uppercase tracking-wide">⚙️ ESPECÍFICO PARA CARPINTERÍA METÁLICA:</h5>
                      <ul className="text-sm text-gray-600 space-y-1 font-oswald uppercase tracking-wide">
                        <li>• TRABAJO ESPECIALIZADO EN ESTRUCTURAS METÁLICAS</li>
                        <li>• OPORTUNIDADES EN SOLDADURA Y MONTAJE</li>
                        <li>• PROYECTOS DIVERSOS EN ALMERÍA</li>
                      </ul>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                    className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-4 px-6 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-105 font-oswald uppercase tracking-wide"
                  >
                    CANCELAR
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 font-oswald uppercase tracking-wide"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    <span>ENVIAR POR WHATSAPP</span>
                  </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

