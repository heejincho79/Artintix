import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Server, Building2, Zap, Factory, Sprout } from "lucide-react";
import { useLanguage } from "../../lib/LanguageContext";

export function IndustrySolutions() {
  const { t } = useLanguage();

  const INDUSTRIES = [
    {
      id: "datacenter",
      name: t.industry.items.datacenter.name,
      icon: Server,
      title: t.industry.items.datacenter.title,
      desc: t.industry.items.datacenter.desc,
      metric: "35%",
      metricLabel: t.industry.items.datacenter.metricLabel,
    },
    {
      id: "building",
      name: t.industry.items.building.name,
      icon: Building2,
      title: t.industry.items.building.title,
      desc: t.industry.items.building.desc,
      metric: "25~30%",
      metricLabel: t.industry.items.building.metricLabel,
    },
    {
      id: "utility",
      name: t.industry.items.utility.name,
      icon: Zap,
      title: t.industry.items.utility.title,
      desc: t.industry.items.utility.desc,
      metric: "90%+",
      metricLabel: t.industry.items.utility.metricLabel,
    },
    {
      id: "factory",
      name: t.industry.items.factory.name,
      icon: Factory,
      title: t.industry.items.factory.title,
      desc: t.industry.items.factory.desc,
      metric: "20%",
      metricLabel: t.industry.items.factory.metricLabel,
    },
    {
      id: "farm",
      name: t.industry.items.farm.name,
      icon: Sprout,
      title: t.industry.items.farm.title,
      desc: t.industry.items.farm.desc,
      metric: "30%",
      metricLabel: t.industry.items.farm.metricLabel,
    },
  ];

  const [activeTab, setActiveTab] = React.useState(INDUSTRIES[0].id);

  const activeData = INDUSTRIES.find((i) => i.id === activeTab)!;

  return (
    <section id="industry" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-brand-dark">{t.industry.title}</h2>
          <p className="text-gray-500">{t.industry.desc}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {INDUSTRIES.map((ind) => (
            <button
              key={ind.id}
              onClick={() => setActiveTab(ind.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all border ${
                activeTab === ind.id
                  ? "bg-brand-neon text-brand-dark border-brand-neon shadow-lg shadow-brand-neon/20"
                  : "bg-gray-50 text-gray-500 border-gray-100 hover:border-gray-200"
              }`}
            >
              <ind.icon className="w-4 h-4" />
              {ind.name}
            </button>
          ))}
        </div>

        <div className="glass-card p-8 md:p-12 min-h-[500px] flex flex-col lg:flex-row items-center gap-12 border-gray-100">
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-neon/10 text-brand-neon text-[10px] font-bold uppercase tracking-widest mb-6">
                  <activeData.icon className="w-3 h-3" />
                  {activeData.name}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-brand-dark leading-tight">{activeData.title}</h3>
                <p className="text-xl text-gray-500 leading-relaxed mb-10">
                  {activeData.desc}
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-baseline gap-4">
                    <span className="text-7xl font-bold text-brand-neon neon-text-glow">{activeData.metric}</span>
                    <span className="text-lg font-bold text-gray-400 uppercase tracking-widest">
                      {activeData.metricLabel}
                    </span>
                  </div>
                  <div className="h-2 w-full max-w-xs bg-gray-100 rounded-full overflow-hidden mt-2">
                    <motion.div 
                      key={activeTab}
                      initial={{ width: 0 }}
                      animate={{ width: activeData.metric.includes('%') ? activeData.metric.replace('%', '').replace('+', '') + '%' : '85%' }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-brand-neon shadow-[0_0_10px_rgba(0,163,255,0.5)]"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex-1 w-full relative">
            <div className="aspect-square lg:aspect-video bg-[#0A0F1A] rounded-3xl border border-white/10 relative overflow-hidden flex items-center justify-center p-8 shadow-2xl">
              {/* Background Grid */}
              <div className="absolute inset-0 opacity-10" style={{ 
                backgroundImage: 'radial-gradient(circle at center, #00A3FF 1px, transparent 1px)',
                backgroundSize: '30px 30px'
              }} />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10 w-full h-full flex items-center justify-center"
                >
                  {activeTab === 'datacenter' && (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="grid grid-cols-3 gap-4 w-4/5">
                        {[1, 2, 3].map(i => (
                          <div key={i} className="h-48 bg-white/5 border border-white/10 rounded-lg p-2 flex flex-col gap-2">
                            <div className="h-1 w-full bg-brand-neon/20 rounded-full" />
                            <div className="flex-1 grid grid-rows-6 gap-1">
                              {[...Array(6)].map((_, j) => (
                                <motion.div 
                                  key={j}
                                  animate={{ opacity: [0.3, 1, 0.3] }}
                                  transition={{ duration: 1 + Math.random(), repeat: Infinity, delay: Math.random() }}
                                  className="h-full bg-brand-neon/40 rounded-sm"
                                />
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="absolute -bottom-4 -right-4 w-24 h-24 border-4 border-dashed border-brand-neon/20 rounded-full flex items-center justify-center"
                      >
                        <Zap className="w-8 h-8 text-brand-neon/40" />
                      </motion.div>
                    </div>
                  )}

                  {activeTab === 'building' && (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="relative w-48 h-64 bg-white/5 border border-white/10 rounded-t-3xl overflow-hidden">
                        <div className="grid grid-cols-3 grid-rows-6 gap-2 p-4">
                          {[...Array(18)].map((_, i) => (
                            <motion.div 
                              key={i}
                              animate={{ backgroundColor: i % 3 === 0 ? ['rgba(0,163,255,0.1)', 'rgba(0,163,255,0.4)', 'rgba(0,163,255,0.1)'] : 'rgba(255,255,255,0.05)' }}
                              transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                              className="w-full h-4 rounded-sm"
                            />
                          ))}
                        </div>
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-brand-neon/10 to-transparent" />
                      </div>
                      <motion.div 
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute top-10 right-10 p-4 bg-brand-dark border border-brand-neon/30 rounded-2xl shadow-xl"
                      >
                        <Building2 className="w-10 h-10 text-brand-neon" />
                      </motion.div>
                    </div>
                  )}

                  {activeTab === 'utility' && (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="flex gap-4">
                        {[1, 2, 3].map(i => (
                          <div key={i} className="w-24 h-32 bg-white/5 border border-white/10 rounded-xl flex flex-col overflow-hidden">
                            <div className="flex-1 grid grid-cols-3 grid-rows-3 gap-1 p-2">
                              {[...Array(9)].map((_, j) => (
                                <div key={j} className="bg-brand-blue/20 rounded-sm" />
                              ))}
                            </div>
                            <div className="h-4 bg-brand-blue/40" />
                          </div>
                        ))}
                      </div>
                      <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        <motion.path 
                          d="M50,150 Q150,50 250,150 T450,150" 
                          stroke="#00A3FF" 
                          strokeWidth="2" 
                          fill="none"
                          strokeDasharray="10 10"
                          animate={{ strokeDashoffset: [0, -20] }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                      </svg>
                    </div>
                  )}

                  {activeTab === 'factory' && (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="w-64 h-12 bg-white/5 border border-white/10 rounded-full relative overflow-hidden">
                        <motion.div 
                          animate={{ x: [-20, 200] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-y-0 flex gap-8 items-center"
                        >
                          {[1, 2, 3, 4].map(i => (
                            <div key={i} className="w-8 h-8 bg-brand-neon/20 rounded-md border border-brand-neon/40" />
                          ))}
                        </motion.div>
                      </div>
                      <motion.div 
                        animate={{ rotate: [0, 45, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-1 h-32 bg-white/20 origin-top"
                      >
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-brand-dark border border-brand-neon rounded-xl flex items-center justify-center">
                          <Factory className="w-6 h-6 text-brand-neon" />
                        </div>
                      </motion.div>
                    </div>
                  )}

                  {activeTab === 'farm' && (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="grid grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map(i => (
                          <div key={i} className="space-y-2">
                            <motion.div 
                              animate={{ height: [20, 40, 20] }}
                              transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                              className="w-4 bg-brand-neon/30 rounded-t-full mx-auto"
                            />
                            <div className="w-8 h-2 bg-white/10 rounded-full" />
                          </div>
                        ))}
                      </div>
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-brand-blue/10 rounded-full blur-xl"
                      />
                      <Sprout className="absolute top-12 left-1/2 -translate-x-1/2 w-8 h-8 text-brand-blue" />
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Status Badge */}
              <div className="absolute bottom-6 right-6 px-4 py-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-brand-neon animate-pulse" />
                <span className="text-[10px] font-mono text-white uppercase tracking-widest">{t.industry.status}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
