import React from 'react';
import { BRANDS } from '../constants';

const Brands: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 text-slate-900 overflow-hidden relative border-y border-slate-200">
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="flex flex-col items-center mb-16">
          <span className="h-1 w-12 bg-red-600 mb-4 rounded-full"></span>
          <p className="text-[11px] font-black tracking-[0.5em] uppercase text-slate-500">Distribuidores Autorizados y Partners de Confianza</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-16 items-center justify-items-center">
          {BRANDS.map((brand) => (
            <div 
              key={brand.name} 
              className="group flex flex-col items-center justify-center min-h-[80px] w-full px-4"
            >
              <span 
                className={`text-lg md:text-xl lg:text-2xl transition-all duration-500 filter grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100 group-hover:scale-110 cursor-default select-none ${brand.classes}`}
              >
                {brand.name === 'BOSCH herramientas' ? (
                  <>
                    <span className="block">BOSCH</span>
                    <span className="text-[10px] tracking-[0.3em] font-bold mt-1 opacity-80 italic">HERRAMIENTAS</span>
                  </>
                ) : brand.name}
              </span>
              <div className="w-0 h-[2px] bg-red-600 mt-3 transition-all duration-500 group-hover:w-16 opacity-0 group-hover:opacity-100"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;