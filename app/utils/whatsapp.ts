/**
 * Función helper para abrir WhatsApp (estándar o Business) con un mensaje
 * Funciona tanto con WhatsApp como con WhatsApp Business
 */
export function openWhatsApp(phoneNumber: string, message: string) {
  const encodedMessage = encodeURIComponent(message);
  
  // Usar wa.me que funciona tanto con WhatsApp como WhatsApp Business
  // wa.me detecta automáticamente qué aplicación tiene instalada el usuario
  const waMeUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  // También intentar con protocolo nativo para mejor compatibilidad
  const whatsappUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;
  
  // En dispositivos móviles, intentar primero con protocolo nativo
  // En desktop, usar directamente wa.me que redirige correctamente
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  
  if (isMobile) {
    // En móvil, intentar protocolo nativo primero
    try {
      const link = document.createElement('a');
      link.href = whatsappUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.click();
      
      // Fallback después de un breve delay
      setTimeout(() => {
        window.open(waMeUrl, '_blank');
      }, 300);
    } catch (error) {
      // Si hay error, usar directamente wa.me
      window.open(waMeUrl, '_blank');
    }
  } else {
    // En desktop, usar directamente wa.me que maneja mejor la detección
    window.open(waMeUrl, '_blank');
  }
}

/**
 * Número de teléfono de contacto
 */
export const WHATSAPP_PHONE = '5493512429578';

