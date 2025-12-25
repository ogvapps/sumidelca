import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, light = false }) => {
  return (
    <div className="text-center mb-16">
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4 ${light ? 'text-white' : 'text-blue-900'}`}>
        {title}
      </h2>
      <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full mb-6"></div>
      {subtitle && (
        <p className={`max-w-2xl mx-auto text-lg leading-relaxed ${light ? 'text-slate-300' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;