import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import { useTranslation } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

const FAQ: React.FC = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, isVisible } = useScrollReveal();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = t('faq.items');

  return (
    <section 
      id="faq" 
      ref={ref as any}
      className={`py-24 bg-slate-50 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeader 
          title={t('faq.title')} 
          subtitle={t('faq.subtitle')} 
        />
        
        <div className="space-y-4">
          {faqItems.map((item: any, index: number) => (
            <div 
              key={index} 
              className={`border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'bg-white shadow-xl shadow-slate-200/50' : 'bg-white/50'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg transition-colors ${
                    openIndex === index ? 'bg-red-600 text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'
                  }`}>
                    <HelpCircle size={20} />
                  </div>
                  <span className={`text-lg font-black uppercase tracking-tight transition-colors ${
                    openIndex === index ? 'text-blue-950' : 'text-slate-600 group-hover:text-blue-900'
                  }`}>
                    {item.q}
                  </span>
                </div>
                <ChevronDown 
                  size={24} 
                  className={`text-slate-400 transition-transform duration-500 ${openIndex === index ? 'rotate-180 text-red-600' : ''}`} 
                />
              </button>
              
              <div 
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-8 pt-2 pl-20">
                  <p className="text-slate-500 leading-relaxed font-medium">
                    {item.a}
                  </p>
                  <div className="mt-6 w-12 h-1 bg-red-600 rounded-full opacity-30"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;