import React from 'react';
import { ShieldCheck, Zap, Truck, Phone } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const About: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section 
      id="nosotros" 
      ref={ref as any}
      className={`py-24 md:py-32 bg-slate-50 transition-all duration-1000 transform ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2">
            <h4 className="text-red-600 font-black uppercase tracking-[0.3em] mb-4 text-xs">Expertos en Suministro</h4>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-blue-950 mb-8 leading-tight uppercase">
              La Potencia de la <br/>
              <span className="text-red-600">Industria 4.0</span>
            </h2>
            <p className="text-slate-600 mb-10 text-lg leading-relaxed max-w-xl">
              En SUMIDELCA no solo vendemos máquinas; proporcionamos continuidad operativa. Entendemos que en la industria cada minuto cuenta, por eso seleccionamos solo equipos capaces de resistir los turnos más exigentes.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <ShieldCheck size={24} />, title: "Calidad Certificada", desc: "Equipos que cumplen normativas ISO internacionales." },
                { icon: <Zap size={24} />, title: "Respuesta Inmediata", desc: "Servicio técnico y entrega rápida en toda la península." },
                { icon: <Truck size={24} />, title: "Suministro Crítico", desc: "Gestión de stock especializado para su cadena." },
                { icon: <Phone size={24} />, title: "Soporte Post-Venta", desc: "Asistencia directa y formación en maquinaria." },
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-white rounded-lg shadow-sm hover:shadow-xl transition-all border-l-4 border-slate-200 hover:border-red-600 group"
                >
                  <div className="text-blue-900 mb-4 inline-block transition-transform group-hover:scale-110">
                    {item.icon}
                  </div>
                  <h5 className="font-black text-blue-950 uppercase tracking-tight mb-2 text-sm">{item.title}</h5>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium uppercase tracking-wider">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-red-600/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-blue-600/5 rounded-full blur-3xl"></div>
            
            <div className="relative bg-white p-2 rounded-2xl shadow-[0_50px_100px_rgba(0,0,0,0.1)] overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&q=80" 
                alt="Personal Técnico e Ingeniería SUMIDELCA" 
                className="rounded-xl w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors"></div>
              <div className="absolute bottom-8 left-8 right-8 p-8 bg-white/95 backdrop-blur-sm rounded-xl border-b-4 border-red-600 shadow-2xl">
                <p className="text-5xl font-black text-blue-950 mb-2">15+</p>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Años Liderando el Sector Industrial</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;