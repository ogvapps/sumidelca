import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import Logo from './ui/Logo';
import LegalModal, { LegalSection } from './LegalModal';
import { useTranslation } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [initialLegalSection, setInitialLegalSection] = useState<LegalSection>('legal');
  const { t } = useTranslation();

  const NAV_LINKS = [
    { label: t('nav.home'), href: '#hero' },
    { label: t('nav.catalog'), href: '#catalogo' },
    { label: t('nav.about'), href: '#nosotros' },
    { label: t('nav.faq'), href: '#faq' },
    { label: t('nav.contact'), href: '#contacto' },
  ];

  const openLegal = (section: LegalSection) => {
    setInitialLegalSection(section);
    setIsLegalModalOpen(true);
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-20 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
          
          <div className="col-span-1">
            <div className="mb-8">
              <Logo className="h-10" light={true} />
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              {t('footer.desc')}
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-black uppercase text-sm tracking-[0.2em] mb-8">{t('footer.nav')}</h4>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-wider">
              {NAV_LINKS.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-red-500 transition-colors flex items-center gap-2 group">
                    <div className="w-0 h-[2px] bg-red-500 transition-all group-hover:w-4"></div>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-black uppercase text-sm tracking-[0.2em] mb-8">{t('footer.contact')}</h4>
            <ul className="space-y-5 text-sm">
              <li className="flex gap-4">
                <MapPin className="text-red-600 shrink-0" size={18} /> 
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=37.71764,-3.96781" 
                  target="_blank" 
                  className="leading-relaxed hover:text-white transition-colors"
                >
                  Calle Guarromán 1, 23600 Martos (Jaén)
                </a>
              </li>
              <li className="flex gap-4 items-center">
                <Phone className="text-red-600 shrink-0" size={18} /> 
                <a 
                  href="tel:+34624010985" 
                  className="font-bold hover:text-white transition-colors"
                >
                  +34 624 01 09 85
                </a>
              </li>
              <li className="flex gap-4 items-center">
                <Mail className="text-red-600 shrink-0" size={18} /> 
                <a 
                  href="mailto:sumidelca@outlook.es" 
                  className="hover:text-white transition-colors"
                >
                  sumidelca@outlook.es
                </a>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">
          <span>© 2025 SUMIDELCA - ENGINEERING SOLUTIONS</span>
          <div className="flex gap-8">
            <button 
              onClick={() => openLegal('privacidad')} 
              className="hover:text-slate-300 transition-colors uppercase"
            >
              {t('footer.privacy')}
            </button>
            <button 
              onClick={() => openLegal('legal')} 
              className="hover:text-slate-300 transition-colors uppercase"
            >
              {t('footer.legal')}
            </button>
            <button 
              onClick={() => openLegal('cookies')} 
              className="hover:text-slate-300 transition-colors uppercase"
            >
              {t('footer.cookies')}
            </button>
          </div>
        </div>
      </div>

      <LegalModal 
        isOpen={isLegalModalOpen} 
        onClose={() => setIsLegalModalOpen(false)} 
        initialSection={initialLegalSection} 
      />
    </footer>
  );
};

export default Footer;