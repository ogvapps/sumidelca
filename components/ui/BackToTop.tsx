import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Controlar la visibilidad basada en la posición del scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`fixed bottom-8 right-8 z-[55] transition-all duration-500 transform ${
      isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-50 pointer-events-none'
    }`}>
      <button
        onClick={scrollToTop}
        aria-label="Volver arriba"
        className="group relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-slate-900 text-white shadow-2xl transition-all hover:bg-red-600 hover:shadow-red-600/40"
      >
        {/* Efecto de brillo industrial al hover */}
        <div className="absolute inset-0 h-full w-full translate-y-full bg-gradient-to-t from-red-700 to-red-500 transition-transform duration-300 group-hover:translate-y-0" />
        
        {/* Icono animado */}
        <ChevronUp 
          size={28} 
          className="relative z-10 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110" 
        />
        
        {/* Borde sutil */}
        <div className="absolute inset-0 rounded-2xl border border-white/10" />
      </button>
      
      {/* Texto de ayuda al hover (opcional, muy pequeño) */}
      <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-900 px-2 py-1 text-[10px] font-black uppercase tracking-widest text-white opacity-0 transition-opacity group-hover:opacity-100">
        SUBIR
      </span>
    </div>
  );
};

export default BackToTop;