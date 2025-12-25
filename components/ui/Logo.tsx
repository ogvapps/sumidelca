import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-12", light = false }) => {
  // Colores corporativos de alta fidelidad
  const redColor = "#D32128"; 
  const blueColor = "#013E7F";
  const textColor = light ? "#FFFFFF" : "#013E7F";

  return (
    <div className={`flex items-center gap-3 md:gap-4 ${className} select-none`}>
      {/* ISOTIPO: Recreación vectorial precisa */}
      <svg 
        viewBox="0 0 120 100" 
        className="h-full w-auto" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Cuerpo principal de la A Roja */}
        <path 
          d="M45 10L10 90H28L34 76H50L46 66H38L52 30L62 53C61 55 60.5 58 60.5 61C60.5 72 69.5 81 80.5 81H105L85 55L78 45L55 10H45Z" 
          fill={redColor} 
        />
        
        {/* Perno Hexagonal Azul */}
        <path 
          d="M62 48L74 54V68L62 74L50 68V54L62 48Z" 
          fill={blueColor} 
        />
        
        {/* Orificio central del perno */}
        <circle cx="62" cy="61" r="5" fill={light ? blueColor : "white"} />
        
        {/* Detalle inferior de la llave para cerrar la forma de la A */}
        <path 
          d="M80.5 81C74 81 68 77 65 72L56 81C62 88 71 92 80.5 92H105L98 81H80.5Z" 
          fill={redColor} 
        />
      </svg>
      
      {/* TIPOGRAFÍA: SUMIDELCA + Subtítulo */}
      <div className="flex flex-col justify-center leading-[0.82]">
        <span 
          className="text-[2.4em] font-[950] tracking-[-0.045em] uppercase" 
          style={{ 
            color: textColor, 
            fontFamily: "'Inter', sans-serif",
            textRendering: "optimizeLegibility"
          }}
        >
          SUMIDELCA
        </span>
        <span 
          className="text-[0.66em] font-[800] tracking-[0.03em] uppercase whitespace-nowrap" 
          style={{ 
            color: textColor,
            fontFamily: "'Inter', sans-serif",
            marginTop: "1px"
          }}
        >
          MAQUINARIA Y HERRAMIENTAS
        </span>
      </div>
    </div>
  );
};

export default Logo;