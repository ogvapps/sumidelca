import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import Logo from './ui/Logo';
import { useTranslation } from '../context/LanguageContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, language, setLanguage } = useTranslation();

  const NAV_LINKS = [
    { label: t('nav.home'), href: '#hero' },
    { label: t('nav.catalog'), href: '#catalogo' },
    { label: t('nav.about'), href: '#nosotros' },
    { label: t('nav.faq'), href: '#faq' },
    { label: t('nav.contact'), href: '#contacto' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      const yOffset = -70; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const navClasses = isScrolled 
    ? 'bg-white/95 backdrop-blur-md shadow-xl py-2' 
    : 'bg-transparent py-4';
  
  const textColor = isScrolled ? 'text-slate-900' : 'text-white';

  return (
    <nav className={`fixed w-full z-[60] transition-all duration-500 ${navClasses}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        
        <div 
          className="cursor-pointer transition-transform hover:scale-[1.02]" 
          onClick={() => scrollToSection('#hero')}
        >
          <Logo className="h-10 md:h-12" light={!isScrolled} />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          {NAV_LINKS.map((link) => (
            <button 
              key={link.label}
              onClick={() => scrollToSection(link.href)} 
              className={`px-4 py-2 rounded-full uppercase text-xs font-black tracking-widest transition-all hover:bg-red-600 hover:text-white ${textColor}`}
            >
              {link.label}
            </button>
          ))}
          
          {/* Language Selector Desktop */}
          <div className="ml-4 pl-4 border-l border-white/20 flex items-center gap-2">
            <Globe size={14} className={textColor} />
            <div className="flex items-center text-[10px] font-black tracking-widest">
              <button 
                onClick={() => setLanguage('es')}
                className={`px-2 py-1 rounded transition-colors ${language === 'es' ? 'text-red-600 underline decoration-2 underline-offset-4' : textColor + ' opacity-60 hover:opacity-100'}`}
              >
                ES
              </button>
              <span className={textColor + ' opacity-20'}>/</span>
              <button 
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded transition-colors ${language === 'en' ? 'text-red-600 underline decoration-2 underline-offset-4' : textColor + ' opacity-60 hover:opacity-100'}`}
              >
                EN
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Language Toggle Mobile */}
          <button 
            onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
            className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest border transition-all ${isScrolled ? 'bg-slate-100 text-slate-900 border-slate-200' : 'bg-white/10 text-white border-white/20'}`}
          >
            {language === 'es' ? 'EN' : 'ES'}
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 rounded-xl transition-colors ${isScrolled ? 'bg-slate-100 text-slate-900' : 'bg-white/10 text-white'}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-2xl transition-all duration-500 transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'}`}>
        <div className="p-4 space-y-2">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="w-full py-4 px-6 text-left text-slate-900 font-black uppercase text-sm border-b border-slate-50 flex justify-between items-center group"
            >
              {link.label}
              <div className="w-2 h-2 rounded-full bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;