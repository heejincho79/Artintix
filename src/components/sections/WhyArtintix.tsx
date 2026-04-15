import { motion } from "motion/react";
import { Globe2, Award, Users } from "lucide-react";
import { useLanguage } from "../../lib/LanguageContext";

export function WhyArtintix() {
  const { t } = useLanguage();

  const PARTNERS = [
    { name: "한국과학기술원 (KAIST)", logo: "https://storage.googleapis.com/static.antigravity.ai/projects/76afa242-8f02-41e8-b8c3-b2fee7e3e62e/attachments/1873375e-150d-428b-898d-133301c2b57f.png" },
    { name: "국립한밭대학교", logo: "https://storage.googleapis.com/static.antigravity.ai/projects/76afa242-8f02-41e8-b8c3-b2fee7e3e62e/attachments/e3c1486f-0101-479c-8849-d669875f166b.png" },
    { name: "University of Nevada, Las Vegas (UNLV)", logo: "https://storage.googleapis.com/static.antigravity.ai/projects/76afa242-8f02-41e8-b8c3-b2fee7e3e62e/attachments/2527126d-a37b-436d-a225-704805657b44.png" },
  ];

  return (
    <section id="trust" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          <div>
            <div className="inline-flex items-center gap-2 text-brand-dark text-xs font-bold tracking-widest uppercase mb-6 bg-brand-neon/20 px-3 py-1 rounded-full border border-brand-neon/30">
              <Globe2 className="w-4 h-4" />
              <span>{t.trust.infraBadge}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-brand-dark">
              {t.trust.title1} <br />
              <span className="text-gray-400">{t.trust.title2}</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {t.trust.desc}
            </p>
            <div className="grid grid-cols-3 gap-4">
               {t.trust.cities.map(city => (
                  <div key={city} className="text-center p-4 rounded-xl bg-gray-50 border border-gray-100 shadow-sm">
                     <div className="text-xs font-bold text-brand-dark mb-1 uppercase tracking-tighter">{city}</div>
                     <div className="w-2 h-2 bg-brand-neon rounded-full mx-auto animate-ping" />
                  </div>
               ))}
            </div>
          </div>
          <div className="relative">
             <div className="aspect-square rounded-full border border-gray-100 absolute inset-0 animate-spin-slow opacity-10" />
             <div className="aspect-square rounded-full border border-gray-100 absolute inset-10 animate-reverse-spin-slow opacity-10" />
             <div className="relative z-10 w-full aspect-[2/1] flex items-center justify-center overflow-hidden rounded-2xl bg-gray-50/50 border border-gray-100">
                {/* World Map Image */}
                <img 
                   src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000" 
                   alt="World Map" 
                   className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale"
                   referrerPolicy="no-referrer"
                />
                
                <svg viewBox="0 0 1000 500" className="absolute inset-0 w-full h-full">
                   {/* Connection Arcs */}
                   <defs>
                      <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                         <stop offset="0%" stopColor="#00A3FF" stopOpacity="0" />
                         <stop offset="50%" stopColor="#00A3FF" stopOpacity="1" />
                         <stop offset="100%" stopColor="#00A3FF" stopOpacity="0" />
                      </linearGradient>
                      <filter id="glow">
                         <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                         <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                         </feMerge>
                      </filter>
                   </defs>

                   {/* Korea to USA */}
                   <motion.path
                      d="M830,180 Q490,50 150,180"
                      fill="none"
                      stroke="url(#line-gradient)"
                      strokeWidth="2"
                      strokeDasharray="1000"
                      initial={{ strokeDashoffset: 1000 }}
                      animate={{ strokeDashoffset: -1000 }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      filter="url(#glow)"
                   />

                   {/* Korea to Singapore */}
                   <motion.path
                      d="M830,180 Q800,230 780,280"
                      fill="none"
                      stroke="url(#line-gradient)"
                      strokeWidth="2"
                      strokeDasharray="200"
                      initial={{ strokeDashoffset: 200 }}
                      animate={{ strokeDashoffset: -200 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      filter="url(#glow)"
                   />

                   {/* Singapore to USA */}
                   <motion.path
                      d="M780,280 Q450,400 150,180"
                      fill="none"
                      stroke="url(#line-gradient)"
                      strokeWidth="2"
                      strokeDasharray="1000"
                      initial={{ strokeDashoffset: 1000 }}
                      animate={{ strokeDashoffset: -1000 }}
                      transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 1 }}
                      filter="url(#glow)"
                   />

                   {/* Location Markers */}
                   {[
                      { id: 'korea', x: 830, y: 180, label: t.trust.map.korea },
                      { id: 'usa', x: 150, y: 180, label: t.trust.map.usa },
                      { id: 'singapore', x: 780, y: 280, label: t.trust.map.singapore }
                   ].map(loc => (
                      <g key={loc.id}>
                         <motion.circle 
                            cx={loc.x} cy={loc.y} r="4" 
                            fill="#00A3FF" 
                            initial={{ scale: 0 }}
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                         />
                         <circle cx={loc.x} cy={loc.y} r="12" fill="#00A3FF" opacity="0.1" />
                         <text 
                            x={loc.x} y={loc.y + 20} 
                            textAnchor="middle" 
                            className="text-[10px] font-mono font-bold fill-brand-dark"
                         >
                            {loc.label}
                         </text>
                      </g>
                   ))}
                </svg>
             </div>
          </div>
        </div>

        <div className="pt-24 border-t border-gray-100">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-gray-400 text-xs font-bold tracking-widest uppercase mb-4">
              <Award className="w-4 h-4" />
              <span>{t.trust.partnerBadge}</span>
            </div>
            <h3 className="text-2xl font-bold text-brand-dark">{t.trust.partnerTitle}</h3>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all">
            {PARTNERS.map((p, i) => (
              <img 
                key={i} 
                src={p.logo} 
                alt={p.name} 
                className="h-8 md:h-12 object-contain"
                referrerPolicy="no-referrer"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
