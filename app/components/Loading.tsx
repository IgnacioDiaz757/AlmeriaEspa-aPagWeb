'use client';

import { motion } from 'framer-motion';

interface LoadingProps {
  isLoading?: boolean;
}

export default function Loading({ isLoading = true }: LoadingProps) {
  if (!isLoading) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black z-[9999] flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo con animación */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-6"
      >
        <img 
          src="/Copia de Copia de Riveras del sur- Isologo colores.png" 
          alt="Riveras del Suquía" 
          className="h-20 w-auto sm:h-24 md:h-28"
        />
      </motion.div>

      {/* Texto "Cargando" */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-white text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-wide font-oswald"
      >
        CARGANDO
      </motion.div>

      {/* Barra de carga animada */}
      <motion.div
        className="mt-6 w-48 sm:w-56 h-1 bg-white/20 rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-blue-600 via-green-600 to-blue-600"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.2, delay: 0.7, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.5 }}
        />
      </motion.div>

      {/* Puntos animados */}
      <motion.div
        className="flex space-x-1.5 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="w-2 h-2 bg-white rounded-full"
            animate={{
              y: [0, -8, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: index * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
