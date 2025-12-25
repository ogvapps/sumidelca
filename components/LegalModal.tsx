import React from 'react';
import { X, Shield, FileText, Cookie } from 'lucide-react';

export type LegalSection = 'privacidad' | 'legal' | 'cookies';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSection: LegalSection;
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, initialSection }) => {
  const [activeTab, setActiveTab] = React.useState<LegalSection>(initialSection);

  React.useEffect(() => {
    if (isOpen) {
      setActiveTab(initialSection);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen, initialSection]);

  if (!isOpen) return null;

  const content = {
    legal: {
      title: "Aviso Legal",
      icon: <FileText className="text-red-600" />,
      text: (
        <div className="space-y-6 text-slate-600">
          <section>
            <h4 className="text-slate-900 font-black uppercase text-sm mb-3">1. Datos Identificativos</h4>
            <p className="text-sm leading-relaxed">
              En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, se reflejan los siguientes datos:
              La empresa titular de dominio web es <strong>SUMIDELCA</strong>, con domicilio a estos efectos en Calle Guarromán 1, 23600 Martos (Jaén). 
              Correo electrónico de contacto: <strong>sumidelca@outlook.es</strong>.
            </p>
          </section>
          <section>
            <h4 className="text-slate-900 font-black uppercase text-sm mb-3">2. Usuarios</h4>
            <p className="text-sm leading-relaxed">
              El acceso y/o uso de este portal de SUMIDELCA atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas. Las citadas Condiciones serán de aplicación independientemente de las Condiciones Generales de Contratación que en su caso resulten de obligado cumplimiento.
            </p>
          </section>
          <section>
            <h4 className="text-slate-900 font-black uppercase text-sm mb-3">3. Uso del Portal</h4>
            <p className="text-sm leading-relaxed">
              www.sumidelca.es proporciona el acceso a multitud de informaciones, servicios, programas o datos (en adelante, "los contenidos") en Internet pertenecientes a SUMIDELCA o a sus licenciantes a los que el USUARIO pueda tener acceso.
            </p>
          </section>
        </div>
      )
    },
    privacidad: {
      title: "Política de Privacidad",
      icon: <Shield className="text-red-600" />,
      text: (
        <div className="space-y-6 text-slate-600">
          <section>
            <h4 className="text-slate-900 font-black uppercase text-sm mb-3">Tratamiento de Datos (RGPD)</h4>
            <p className="text-sm leading-relaxed">
              SUMIDELCA informa a los usuarios del sitio web sobre su política respecto del tratamiento y protección de los datos de carácter personal que puedan ser recabados por la navegación o contratación de servicios a través de su sitio web.
            </p>
            <p className="text-sm leading-relaxed mt-4">
              La finalidad del tratamiento de los datos personales es la gestión de las consultas realizadas por los usuarios y el mantenimiento de la relación comercial. Los datos no serán cedidos a terceros salvo obligación legal.
            </p>
          </section>
          <section>
            <h4 className="text-slate-900 font-black uppercase text-sm mb-3">Derechos ARCO</h4>
            <p className="text-sm leading-relaxed">
              Usted tiene derecho a obtener confirmación sobre si en SUMIDELCA estamos tratando sus datos personales, por tanto tiene derecho a acceder a sus datos personales, rectificar los datos inexactos o solicitar su supresión cuando los datos ya no sean necesarios.
            </p>
          </section>
        </div>
      )
    },
    cookies: {
      title: "Política de Cookies",
      icon: <Cookie className="text-red-600" />,
      text: (
        <div className="space-y-6 text-slate-600">
          <section>
            <h4 className="text-slate-900 font-black uppercase text-sm mb-3">¿Qué son las cookies?</h4>
            <p className="text-sm leading-relaxed">
              Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo.
            </p>
          </section>
          <section>
            <h4 className="text-slate-900 font-black uppercase text-sm mb-3">Uso en este sitio</h4>
            <p className="text-sm leading-relaxed">
              Este sitio web utiliza cookies técnicas para permitir la navegación y cookies de análisis para entender cómo interactúan los usuarios con la página, siempre de forma anónima y con fines puramente estadísticos.
            </p>
          </section>
        </div>
      )
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-slate-200 animate-fade-in">
        
        {/* Sidebar Tabs */}
        <div className="w-full md:w-64 bg-slate-50 border-b md:border-b-0 md:border-r border-slate-200 p-6 flex flex-row md:flex-col gap-2">
          {(Object.keys(content) as LegalSection[]).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex-1 md:flex-none flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                activeTab === key 
                ? 'bg-red-600 text-white shadow-lg shadow-red-600/20' 
                : 'text-slate-400 hover:bg-slate-200 hover:text-slate-600'
              }`}
            >
              <span className={activeTab === key ? 'text-white' : 'text-slate-400'}>
                {key === 'legal' && <FileText size={18} />}
                {key === 'privacidad' && <Shield size={18} />}
                {key === 'cookies' && <Cookie size={18} />}
              </span>
              <span className="hidden sm:inline">{content[key].title.split(' ')[1] || content[key].title}</span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1 flex flex-col min-h-0">
          <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-white sticky top-0 z-10">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center">
                {content[activeTab].icon}
              </div>
              <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">
                {content[activeTab].title}
              </h3>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-900 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="p-8 md:p-12 overflow-y-auto custom-scrollbar">
            {content[activeTab].text}
            
            <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">SUMIDELCA &copy; 2025</p>
              <button 
                onClick={onClose}
                className="bg-slate-900 text-white px-8 py-3 rounded-lg text-xs font-black uppercase tracking-widest hover:bg-red-600 transition-colors"
              >
                Cerrar Información
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;