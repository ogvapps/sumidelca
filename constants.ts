import React from 'react';
import { Wrench, Drill, Settings, HardHat } from 'lucide-react';

export const TRANSLATIONS = {
  es: {
    nav: {
      home: 'Inicio',
      catalog: 'Catálogo',
      about: 'Nosotros',
      contact: 'Contacto',
      faq: 'Dudas'
    },
    hero: {
      badge: 'Ingeniería de Suministro',
      title1: 'EQUIPAMIENTO',
      title2: 'INDUSTRIAL',
      subtitle: 'Soluciones de alto rendimiento en maquinaria y herramientas para la industria del metal, madera y construcción. Potencia y precisión en cada suministro.',
      cta: 'Catálogo Completo',
      precisionLabel: 'Ingeniería Certificada',
      precisionTitle: 'Componente de Precisión'
    },
    catalog: {
      title: 'Nuestros Productos',
      subtitle: 'Suministros de grado industrial seleccionados para maximizar la productividad de su planta de fabricación.',
      p1: { title: 'Fijación Industrial', desc: 'Suministro especializado de pernos, tornillería y sistemas de fijación de alta resistencia.' },
      p2: { title: 'Metrología y Medición', desc: 'Instrumentos de precisión, calibres y micrómetros para control de calidad.' },
      p3: { title: 'Herramienta Eléctrica', desc: 'Gama profesional de herramientas Bosch y sistemas de alto rendimiento.' },
      p4: { title: 'Protección y EPIS', desc: 'Equipamiento de seguridad certificado: cascos y protección ocular.' }
    },
    about: {
      badge: 'Expertos en Suministro',
      title: 'La Potencia de la',
      span: 'Industria 4.0',
      desc: 'En SUMIDELCA no solo vendemos máquinas; proporcionamos continuidad operativa. Entendemos que en la industria cada minuto cuenta.',
      f1: { title: 'Calidad Certificada', desc: 'Cumplimos normativas ISO internacionales.' },
      f2: { title: 'Respuesta Inmediata', desc: 'Entrega rápida en toda la península.' },
      f3: { title: 'Suministro Crítico', desc: 'Gestión de stock especializado.' },
      f4: { title: 'Soporte Post-Venta', desc: 'Asistencia directa y formación.' },
      years: 'Años Liderando el Sector Industrial'
    },
    faq: {
      title: 'Preguntas Frecuentes',
      subtitle: 'Resolución rápida de dudas técnicas sobre nuestros suministros y servicios.',
      items: [
        { q: '¿Realizan envíos a toda Europa?', a: 'Sí, gestionamos envíos internacionales con partners logísticos especializados en maquinaria pesada y suministros críticos.' },
        { q: '¿Cuentan con certificados de calibración?', a: 'Todos nuestros instrumentos de metrología pueden suministrarse con certificados ENAC o equivalentes bajo demanda.' },
        { q: '¿Tienen servicio de mantenimiento?', a: 'Disponemos de un equipo técnico para asistencia en puestas en marcha y mantenimiento preventivo de herramienta eléctrica industrial.' },
        { q: '¿Cómo puedo solicitar un presupuesto?', a: 'Puede contactarnos vía teléfono o email. Respondemos en menos de 24 horas laborables.' }
      ]
    },
    contact: {
      title: 'Contacto',
      subtitle: 'Estamos a su disposición para cualquier consulta técnica o solicitud de presupuesto.',
      loc: 'Ubicación',
      tel: 'Teléfono Directo',
      immediate: 'Atención inmediata',
      email: 'Email Corporativo',
      hours: 'Horario Comercial: Lunes a Viernes 09:00 - 14:00 y 16:00 - 18:30'
    },
    footer: {
      desc: 'Líderes en el suministro de herramientas y maquinaria de precisión para la industria 4.0. Eficiencia y robustez en cada pieza.',
      nav: 'Navegación',
      contact: 'Contacto',
      legal: 'Legal',
      privacy: 'Privacidad',
      cookies: 'Cookies'
    }
  },
  en: {
    nav: {
      home: 'Home',
      catalog: 'Catalog',
      about: 'About',
      contact: 'Contact',
      faq: 'FAQ'
    },
    hero: {
      badge: 'Supply Engineering',
      title1: 'INDUSTRIAL',
      title2: 'EQUIPMENT',
      subtitle: 'High-performance solutions in machinery and tools for the metal, wood, and construction industries. Power and precision in every supply.',
      cta: 'Full Catalog',
      precisionLabel: 'Certified Engineering',
      precisionTitle: 'Precision Component'
    },
    catalog: {
      title: 'Our Products',
      subtitle: 'Industrial-grade supplies selected to maximize the productivity of your manufacturing plant.',
      p1: { title: 'Industrial Fastening', desc: 'Specialized supply of high-resistance bolts, screws, and fastening systems.' },
      p2: { title: 'Metrology & Measurement', desc: 'Precision instruments, calipers, and micrometers for quality control.' },
      p3: { title: 'Power Tools', desc: 'Professional range of Bosch tools and high-performance systems.' },
      p4: { title: 'Safety & PPE', desc: 'Certified safety equipment: helmets and eye protection.' }
    },
    about: {
      badge: 'Supply Experts',
      title: 'The Power of',
      span: 'Industry 4.0',
      desc: 'At SUMIDELCA we don\'t just sell machines; we provide operational continuity. We understand that in industry every minute counts.',
      f1: { title: 'Certified Quality', desc: 'We comply with international ISO standards.' },
      f2: { title: 'Immediate Response', desc: 'Fast delivery throughout the peninsula.' },
      f3: { title: 'Critical Supply', desc: 'Specialized stock management.' },
      f4: { title: 'After-Sales Support', desc: 'Direct assistance and training.' },
      years: 'Years Leading the Industrial Sector'
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Quick resolution of technical questions about our supplies and services.',
      items: [
        { q: 'Do you ship across Europe?', a: 'Yes, we manage international shipments with logistics partners specialized in heavy machinery and critical supplies.' },
        { q: 'Do you provide calibration certificates?', a: 'All our metrology instruments can be supplied with ENAC or equivalent certificates upon request.' },
        { q: 'Do you offer maintenance services?', a: 'We have a technical team for start-up assistance and preventive maintenance of industrial power tools.' },
        { q: 'How can I request a quote?', a: 'You can contact us via phone or email. We respond in less than 24 business hours.' }
      ]
    },
    contact: {
      title: 'Contact',
      subtitle: 'We are at your disposal for any technical inquiry or budget request.',
      loc: 'Location',
      tel: 'Direct Phone',
      immediate: 'Immediate attention',
      email: 'Corporate Email',
      hours: 'Business Hours: Monday to Friday 09:00 - 14:00 and 16:00 - 18:30'
    },
    footer: {
      desc: 'Leaders in the supply of precision tools and machinery for industry 4.0. Efficiency and robustness in every piece.',
      nav: 'Navigation',
      contact: 'Contact',
      legal: 'Legal',
      privacy: 'Privacy',
      cookies: 'Cookies'
    }
  }
};

export const BRANDS = [
  { name: 'UNCETA', classes: 'font-[950] text-[#003366] tracking-tighter' },
  { name: 'IROKO', classes: 'font-black text-slate-800 tracking-tight' },
  { name: 'Mitutoyo', classes: 'font-bold text-[#E30613] tracking-tighter uppercase' },
  { name: 'STD', classes: 'font-black text-slate-700 tracking-[0.15em] uppercase' },
  { name: 'FABORY', classes: 'font-[900] text-[#004A99] tracking-tighter italic uppercase' },
  { name: 'ALYCO', classes: 'font-black italic text-[#FF6600] tracking-tight' },
  { name: 'BOSCH', classes: 'font-[1000] italic text-[#E21F26] tracking-tighter uppercase' },
  { name: 'SAFETOP', classes: 'font-bold text-[#004A99] tracking-tight uppercase' },
  { name: 'Sparco', classes: 'font-black italic text-[#0054A6] uppercase tracking-[0.15em]' },
  { name: 'UNIGASKET', classes: 'font-bold text-gray-500 tracking-[0.2em] uppercase' },
  { name: 'LUKAS', classes: 'font-black text-blue-900 italic tracking-tight' },
  { name: 'KEMET', classes: 'font-black text-slate-900 uppercase tracking-tighter' },
  { name: 'OPAC', classes: 'font-extrabold text-slate-600' },
  { name: 'ROSMIL', classes: 'font-black italic text-red-900' },
  { name: 'BRUGAROLAS', classes: 'font-black text-[#C1272D] uppercase tracking-tighter' },
];