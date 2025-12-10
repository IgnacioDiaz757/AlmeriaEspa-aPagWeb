'use client';

import { useEffect, useState } from 'react';
import Loading from './Loading';

export default function LoadingWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Esperar a que la página esté completamente cargada
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500); // Tiempo mínimo de visualización del loader
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  if (!mounted) {
    return <Loading />;
  }

  return (
    <>
      <Loading isLoading={isLoading} />
      <div className={isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100 transition-opacity duration-500'}>
        {children}
      </div>
    </>
  );
}

