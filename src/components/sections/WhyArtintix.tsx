import { motion } from "motion/react";
import { Globe2, Award, Users } from "lucide-react";
import { useLanguage } from "../../lib/LanguageContext";

export function WhyArtintix() {
  const { t, lang } = useLanguage();

  const PARTNERS = [
    "University of Nevada, Las Vegas (UNLV)",
    "Korea Advanced Institute of Science and Technology",
    "Hanbat National University, South Korea",
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
                {/* World Map Image - Using a clearer, more detailed map */}
                <img 
                   src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" 
                   alt="World Map" 
                   className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale brightness-125"
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
                         <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                         <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                         </feMerge>
                      </filter>
                   </defs>

                   {/* USA to Korea */}
                   <motion.path
                      d="M140,190 Q485,50 830,180"
                      fill="none"
                      stroke="url(#line-gradient)"
                      strokeWidth="3"
                      strokeDasharray="1000"
                      initial={{ strokeDashoffset: 1000 }}
                      animate={{ strokeDashoffset: -1000 }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      filter="url(#glow)"
                   />

                   {/* USA to Singapore */}
                   <motion.path
                      d="M140,190 Q460,400 780,300"
                      fill="none"
                      stroke="url(#line-gradient)"
                      strokeWidth="3"
                      strokeDasharray="1000"
                      initial={{ strokeDashoffset: 1000 }}
                      animate={{ strokeDashoffset: -1000 }}
                      transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 1 }}
                      filter="url(#glow)"
                   />

                   {/* Location Markers */}
                   {[
                      { id: 'korea', x: 830, y: 180, label: t.trust.map.korea },
                      { id: 'usa', x: 140, y: 190, label: t.trust.map.usa },
                      { id: 'singapore', x: 780, y: 300, label: t.trust.map.singapore }
                   ].map(loc => (
                      <g key={loc.id}>
                         <motion.circle 
                            cx={loc.x} cy={loc.y} r="6" 
                            fill="#00A3FF" 
                            initial={{ scale: 0 }}
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                         />
                         <circle cx={loc.x} cy={loc.y} r="18" fill="#00A3FF" opacity="0.1" />
                         <text 
                            x={loc.x} y={loc.y + 35} 
                            textAnchor="middle" 
                            className="text-[18px] font-mono font-black fill-brand-dark tracking-tighter"
                            style={{ filter: 'drop-shadow(0px 0px 3px rgba(255,255,255,0.9))' }}
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
          
          <div className="grid md:grid-cols-3 gap-6">
            {PARTNERS.map((name, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-6 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-center min-h-[100px] hover:bg-white hover:shadow-xl hover:shadow-brand-blue/5 hover:border-brand-blue/20 transition-all duration-300"
              >
                <p className="text-sm font-bold text-gray-600 leading-snug">
                  {name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
