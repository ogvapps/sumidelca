import React, { useState } from 'react';
import SectionHeader from './ui/SectionHeader';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useTranslation } from '../context/LanguageContext';
import { Wrench, Settings, Drill, HardHat } from 'lucide-react';

const CatalogImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="absolute inset-0 w-full h-full bg-slate-800 overflow-hidden">
      {!isLoaded && (
        <div className="absolute inset-0 z-10 bg-slate-800">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-700/50 to-transparent animate-shimmer"></div>
        </div>
      )}
      <img 
        src={src} 
        alt={alt} 
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 filter contrast-[1.1] saturate-[1.3] brightness-105 ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
        }`}
      />
    </div>
  );
};

const Catalog: React.FC = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollReveal();

  const products = [
    { id: '1', title: t('catalog.p1.title'), description: t('catalog.p1.desc'), image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop', icon: <Wrench size={28} /> },
    { id: '2', title: t('catalog.p2.title'), description: t('catalog.p2.desc'), image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop', icon: <Settings size={28} /> },
    { id: '3', title: t('catalog.p3.title'), description: t('catalog.p3.desc'), image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600&h=800&fit=crop&q=80', icon: <Drill size={28} /> },
    { id: '4', title: t('catalog.p4.title'), description: t('catalog.p4.desc'), image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=800&fit=crop&q=80', icon: <HardHat size={28} /> },
  ];

  return (
    <section 
      id="catalogo" 
      ref={ref as any}
      className={`py-20 md:py-32 bg-white transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container mx-auto px-4">
        <SectionHeader 
          title={t('catalog.title')} 
          subtitle={t('catalog.subtitle')}
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group relative h-[650px] rounded-[3rem] overflow-hidden cursor-default shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-700 hover:scale-[1.02] bg-slate-900 border border-slate-100/10"
            >
              <CatalogImage src={product.image} alt={product.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001a33]/95 via-[#001a33]/40 to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-85"></div>
              <div className="absolute inset-0 p-10 flex flex-col justify-end text-white z-10">
                <div className="mb-10 transform transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="w-16 h-16 bg-red-600/20 backdrop-blur-2xl rounded-2xl flex items-center justify-center border border-red-500/40 text-red-500 shadow-[0_0_30px_rgba(239,68,68,0.2)] transition-all duration-500 group-hover:bg-red-600 group-hover:text-white group-hover:shadow-[0_0_40px_rgba(239,68,68,0.6)]">
                    {product.icon}
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-4xl md:text-5xl font-[1000] uppercase tracking-tighter leading-[0.8] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                    {product.title.split(' ').map((word, i) => (
                      <span key={i} className="block whitespace-nowrap">{word}</span>
                    ))}
                  </h3>
                  <div className="w-12 h-2.5 bg-red-600 rounded-full shadow-[0_0_20px_rgba(220,38,38,0.8)] transform transition-all duration-500 group-hover:w-24"></div>
                  <p className="text-slate-100 text-[16px] leading-snug font-bold uppercase tracking-tight drop-shadow-md transition-all duration-500 opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0">
                    {product.description}
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;