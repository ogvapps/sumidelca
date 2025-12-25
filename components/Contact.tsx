import React, { useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import Logo from './ui/Logo';
import { useTranslation } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);

  useEffect(() => {
    if (mapRef.current && !mapInstance.current && (window as any).L) {
      const L = (window as any).L;
      const coords: [number, number] = [37.71764, -3.96781];
      
      mapInstance.current = L.map(mapRef.current, {
        scrollWheelZoom: false,
        attributionControl: false
      }).setView(coords, 16);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapInstance.current);

      const customIcon = L.divIcon({
        className: 'custom-div-icon',
        html: `<div class="w-8 h-8 bg-red-600 rounded-full border-4 border-white shadow-2xl flex items-center justify-center animate-pulse">
                <div class="w-2 h-2 bg-white rounded-full"></div>
              </div>`,
        iconSize: [32, 32],
        iconAnchor: [16, 16]
      });

      const marker = L.marker(coords, { icon: customIcon }).addTo(mapInstance.current);
      
      const popupContent = `
        <div class="p-2">
          <p class="text-[10px] font-black uppercase tracking-widest text-red-500 mb-1">SUMIDELCA HQ</p>
          <p class="text-xs font-bold text-white mb-3">Calle Guarromán 1, Martos</p>
          <a href="https://www.google.com/maps/dir/?api=1&destination=37.71764,-3.96781" target="_blank" class="inline-flex items-center gap-2 bg-red-600 text-[10px] font-black text-white px-3 py-1.5 rounded uppercase tracking-tighter hover:bg-red-700 transition-colors">
            Indicaciones <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
        </div>
      `;
      
      marker.bindPopup(popupContent);
    }

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <section id="contacto" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto relative">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-red-600/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-900/5 rounded-full blur-3xl"></div>

          <div className="bg-slate-900 rounded-[3rem] shadow-2xl overflow-hidden relative z-10 border border-white/5">
            <div className="p-8 md:p-12 lg:p-16">
              <div className="text-center mb-12">
                <div className="inline-block mb-6 scale-90 md:scale-100">
                  <Logo light={true} />
                </div>
                <h3 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
                  {t('contact.title')} <span className="text-red-600">.</span>
                </h3>
                <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto font-medium">
                  {t('contact.subtitle')}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Columna de Datos */}
                <div className="lg:col-span-5 space-y-6">
                  {/* Teléfono Clicable */}
                  <a 
                    href="tel:+34624010985" 
                    className="block bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 hover:border-red-600/50 transition-all group outline-none focus:ring-2 focus:ring-red-600/50"
                    aria-label="Llamar a SUMIDELCA"
                  >
                    <div className="flex gap-6 items-start">
                      <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-red-600/20 group-hover:scale-110 transition-transform">
                        <Phone className="text-white" size={28} />
                      </div>
                      <div>
                        <h4 className="text-white font-black uppercase text-[10px] tracking-[0.2em] mb-2">{t('contact.tel')}</h4>
                        <p className="text-slate-100 text-2xl font-black tracking-tighter group-hover:text-red-500 transition-colors">
                          +34 624 01 09 85
                        </p>
                        <p className="text-slate-500 text-[10px] uppercase font-bold mt-2 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                          {t('contact.immediate')}
                        </p>
                      </div>
                    </div>
                  </a>

                  {/* Email Clicable */}
                  <a 
                    href="mailto:sumidelca@outlook.es" 
                    className="block bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 hover:border-blue-600/50 transition-all group outline-none focus:ring-2 focus:ring-blue-600/50"
                    aria-label="Enviar email a SUMIDELCA"
                  >
                    <div className="flex gap-6 items-start">
                      <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
                        <Mail className="text-white" size={28} />
                      </div>
                      <div>
                        <h4 className="text-white font-black uppercase text-[10px] tracking-[0.2em] mb-2">{t('contact.email')}</h4>
                        <p className="text-slate-100 text-lg font-bold break-all group-hover:text-blue-400 transition-colors">
                          sumidelca@outlook.es
                        </p>
                      </div>
                    </div>
                  </a>

                  {/* Ubicación (Info estática con link externo) */}
                  <div className="bg-white/5 p-8 rounded-3xl border border-white/10 group">
                    <div className="flex gap-6 items-start">
                      <div className="w-14 h-14 bg-slate-700 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-slate-700/20 group-hover:scale-110 transition-transform">
                        <MapPin className="text-white" size={28} />
                      </div>
                      <div>
                        <h4 className="text-white font-black uppercase text-[10px] tracking-[0.2em] mb-2">{t('contact.loc')}</h4>
                        <p className="text-slate-300 text-sm leading-relaxed font-medium">
                          Calle Guarromán 1,<br />
                          23600 Martos (Jaén)
                        </p>
                        <a 
                          href="https://www.google.com/maps/dir/?api=1&destination=37.71764,-3.96781" 
                          target="_blank" 
                          className="mt-4 inline-flex items-center gap-2 text-red-500 hover:text-red-400 text-[10px] font-black uppercase tracking-widest transition-colors"
                        >
                          Google Maps <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Columna del Mapa */}
                <div className="lg:col-span-7 h-[400px] lg:h-auto min-h-[450px]">
                  <div className="w-full h-full rounded-[2rem] overflow-hidden border border-white/10 relative group shadow-2xl">
                    <div ref={mapRef} className="w-full h-full industrial-map z-0"></div>
                    {/* Overlay de diseño */}
                    <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-[2rem]"></div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-center gap-6 text-slate-500">
                <div className="flex items-center gap-3">
                  <Clock size={20} className="text-red-600" />
                  <span className="text-[11px] font-black uppercase tracking-[0.25em]">
                    {t('contact.hours')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;