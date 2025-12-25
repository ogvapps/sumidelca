import React from 'react';
import { ChevronRight, Target } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useTranslation();
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
          src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=85&w=1920&auto=format&fit=crop" 
          alt="Industrial Factory" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-blue-900/40"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between h-full py-12 md:py-0">
        <div className="w-full md:w-7/12 lg:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2.5 rounded-full text-xs md:text-sm font-black mb-8 uppercase tracking-[0.25em] shadow-2xl">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
            {t('hero.badge')}
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-[950] text-white leading-[0.9] mb-8 drop-shadow-[0_15px_15px_rgba(0,0,0,0.6)]">
            {t('hero.title1')} <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-700">
              {t('hero.title2')}
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-slate-100 mb-12 max-w-xl mx-auto md:mx-0 font-medium leading-relaxed drop-shadow-md">
            <span className="border-l-4 border-red-600 pl-8 block">
              {t('hero.subtitle')}
            </span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start w-full sm:w-auto">
            <button 
              onClick={() => scrollTo('#catalogo')} 
              className="group bg-red-600 hover:bg-red-700 text-white px-12 py-5 rounded-sm font-black transition-all transform hover:scale-105 flex items-center justify-center gap-3 shadow-[0_20px_50px_rgba(220,38,38,0.4)] w-full sm:w-auto uppercase tracking-[0.2em] text-sm"
            >
              {t('hero.cta')}
              <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
        
        <div className="w-full md:w-5/12 lg:w-5/12 flex flex-col justify-center items-center relative mt-8 md:mt-0">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[28rem] md:h-[28rem] flex items-center justify-center">
            <div className="absolute inset-0 bg-red-600 rounded-full blur-[120px] opacity-20"></div>
            <div className="absolute inset-0 border-[2px] border-white/10 rounded-full animate-spin-slow opacity-30"></div>
            
            <img 
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=800&auto=format&fit=crop" 
              alt="Industrial Component" 
              className="relative w-full h-full object-cover drop-shadow-[0_40px_60px_rgba(0,0,0,0.9)] z-10 rounded-[3rem] border border-white/20 transform hover:-rotate-1 transition-transform duration-700"
            />
            
            <div className="absolute -bottom-8 -right-4 md:-right-8 bg-slate-900/90 backdrop-blur-2xl border border-white/10 p-5 rounded-2xl z-20 shadow-2xl flex items-center gap-4 transition-all hover:border-red-600/50 group">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-red-600/30">
                <Target size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-red-500 mb-1">{t('hero.precisionLabel')}</p>
                <p className="text-sm font-black text-white uppercase tracking-tight">{t('hero.precisionTitle')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;