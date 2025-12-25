import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&h=1080&fit=crop&q=80" 
          alt="Factoría Industrial de Alta Tecnología" 
          className="w-full h-full object-cover grayscale-[20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/98 via-blue-900/90 to-slate-900/50 md:to-slate-900/30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between h-full py-12 md:py-0">
        <div className="w-full md:w-2/3 lg:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <div className="inline-block bg-red-600 text-white px-4 py-1.5 rounded-sm text-xs md:text-sm font-black mb-6 uppercase tracking-[0.2em] shadow-xl">
            Ingeniería de Suministro
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6">
            Equipamiento <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
              Industrial
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-10 max-w-lg mx-auto md:mx-0 font-medium leading-relaxed border-l-2 border-red-600/50 pl-6">
            Soluciones de alto rendimiento en maquinaria y herramientas para la industria del metal, madera y construcción. Potencia y precisión en cada suministro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start w-full sm:w-auto">
            <button 
              onClick={() => scrollTo('#catalogo')} 
              className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-sm font-black transition-all transform hover:scale-105 flex items-center justify-center gap-3 shadow-2xl shadow-red-600/40 w-full sm:w-auto uppercase tracking-widest text-sm"
            >
              Catálogo Completo <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        <div className="w-full md:w-1/3 lg:w-5/12 flex justify-center items-center relative mt-8 md:mt-0">
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem] flex items-center justify-center">
            <div className="absolute inset-0 bg-red-600 rounded-full blur-[120px] opacity-30 animate-pulse"></div>
            <div className="absolute inset-0 border-[20px] border-white/5 rounded-full animate-spin-slow"></div>
            <img 
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=600&fit=crop&q=80" 
              alt="Componente Industrial de Precisión" 
              className="relative w-4/5 h-4/5 object-cover drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)] transform hover:rotate-3 transition-transform duration-700 z-10 rounded-3xl border border-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;