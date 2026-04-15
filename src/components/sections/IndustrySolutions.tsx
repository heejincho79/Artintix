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
          
          <div className="flex-1 w-full relative group/viz">
            <motion.div 
              whileHover={{ rotateX: 2, rotateY: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="aspect-square lg:aspect-video bg-[#0A0F1A] rounded-3xl border border-white/10 relative overflow-hidden flex items-center justify-center p-8 shadow-2xl perspective-1000"
            >
              {/* Background Grid */}
              <div className="absolute inset-0 opacity-10" style={{ 
                backgroundImage: 'radial-gradient(circle at center, #00A3FF 1px, transparent 1px)',
                backgroundSize: '30px 30px'
              }} />

              {/* Data Stream Overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
                 {[...Array(5)].map((_, i) => (
                    <motion.div 
                       key={i}
                       initial={{ y: -100 }}
                       animate={{ y: 600 }}
                       transition={{ duration: 10 + Math.random() * 10, repeat: Infinity, ease: "linear", delay: i * 2 }}
                       className="absolute text-[8px] font-mono text-brand-neon whitespace-nowrap"
                       style={{ left: `${i * 20}%` }}
                    >
                       {Array(20).fill(0).map(() => Math.random().toString(16).substring(2, 8)).join(' ')}
                    </motion.div>
                 ))}
              </div>

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
                    <div className="relative w-full h-full rounded-2xl overflow-hidden group">
                      <img 
                        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=1000" 
                        alt="Data Center" 
                        className="w-full h-full object-cover opacity-40 transition-transform duration-1000 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/50" />
                      
                      {/* Professional DC HUD */}
                      <div className="absolute inset-0 p-4 flex flex-col justify-between pointer-events-none">
                        <div className="flex justify-between items-start">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 px-3 py-1 bg-brand-neon/20 backdrop-blur-md border border-brand-neon/30 rounded-full">
                              <div className="w-1.5 h-1.5 rounded-full bg-brand-neon animate-pulse" />
                              <span className="text-[10px] font-mono text-brand-neon font-bold tracking-tighter uppercase">System_Live: DC_AI_Core</span>
                            </div>
                            <div className="grid grid-cols-2 gap-4 pl-2">
                               <div className="space-y-0.5">
                                  <div className="text-[8px] font-mono text-white/40 uppercase">Load_Balance</div>
                                  <div className="text-xs font-mono text-brand-neon font-bold">94.2%</div>
                               </div>
                               <div className="space-y-0.5">
                                  <div className="text-[8px] font-mono text-white/40 uppercase">Thermal_Efficiency</div>
                                  <div className="text-xs font-mono text-brand-neon font-bold">0.98</div>
                               </div>
                            </div>
                          </div>
                          <div className="bg-black/40 backdrop-blur-md border border-white/10 p-2 rounded-lg text-right">
                            <div className="text-[8px] font-mono text-white/40 uppercase mb-1">PUE_Realtime</div>
                            <div className="text-lg font-mono text-brand-neon font-bold">1.12</div>
                          </div>
                        </div>

                        <div className="flex justify-between items-end">
                          <div className="w-1/2 space-y-2">
                             <div className="text-[8px] font-mono text-white/40 uppercase">Rack_Status_Grid</div>
                             <div className="grid grid-cols-8 gap-1">
                                {[...Array(24)].map((_, i) => (
                                   <motion.div 
                                      key={i}
                                      animate={{ opacity: [0.2, 1, 0.2] }}
                                      transition={{ duration: 1 + Math.random(), repeat: Infinity, delay: Math.random() }}
                                      className="w-full aspect-square bg-brand-neon/40 rounded-[1px]"
                                   />
                                ))}
                             </div>
                          </div>
                          <div className="text-right">
                             <div className="text-[8px] font-mono text-brand-neon/60 mb-1">ENCRYPTED_DATA_STREAM</div>
                             <div className="flex gap-0.5 justify-end">
                                {[...Array(12)].map((_, i) => (
                                   <motion.div 
                                      key={i}
                                      animate={{ height: [2, 10, 2] }}
                                      transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.05 }}
                                      className="w-0.5 bg-brand-neon/60"
                                   />
                                ))}
                             </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Dynamic Scanning Line */}
                      <motion.div 
                        animate={{ top: ['0%', '100%', '0%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 right-0 h-[1px] bg-brand-neon/60 shadow-[0_0_20px_rgba(0,163,255,1)] z-20"
                      />
                    </div>
                  )}

                  {activeTab === 'building' && (
                    <div className="relative w-full h-full rounded-2xl overflow-hidden group">
                      <img 
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" 
                        alt="Smart Building" 
                        className="w-full h-full object-cover opacity-40 transition-transform duration-1000 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/50" />
                      
                      {/* Building HUD */}
                      <div className="absolute inset-0 p-4 flex flex-col justify-between pointer-events-none">
                        <div className="flex justify-between items-start">
                          <div className="px-3 py-1 bg-brand-neon/20 backdrop-blur-md border border-brand-neon/30 rounded-full flex items-center gap-2">
                            <Building2 className="w-3 h-3 text-brand-neon" />
                            <span className="text-[10px] font-mono text-brand-neon font-bold uppercase">BEMS_AI_v4.0</span>
                          </div>
                          <div className="bg-black/40 backdrop-blur-md border border-white/10 p-3 rounded-xl space-y-2">
                             <div className="flex items-center gap-4">
                                <span className="text-[8px] font-mono text-white/40 uppercase">Zone_A</span>
                                <span className="text-xs font-mono text-brand-neon font-bold">22.4°C</span>
                             </div>
                             <div className="flex items-center gap-4">
                                <span className="text-[8px] font-mono text-white/40 uppercase">Zone_B</span>
                                <span className="text-xs font-mono text-brand-neon font-bold">21.8°C</span>
                             </div>
                          </div>
                        </div>

                        <div className="relative h-40 w-full border border-white/10 rounded-xl overflow-hidden bg-white/5 backdrop-blur-md p-4">
                           <div className="absolute inset-0 opacity-10" style={{ 
                              backgroundImage: 'linear-gradient(90deg, #00A3FF 1px, transparent 1px), linear-gradient(#00A3FF 1px, transparent 1px)',
                              backgroundSize: '15px 15px'
                           }} />
                           
                           <div className="relative z-10 h-full flex items-center justify-between">
                              <div className="space-y-1">
                                 <div className="text-[10px] font-mono text-white font-bold uppercase">Energy_Flow_Analysis</div>
                                 <div className="text-[8px] font-mono text-white/40">REALTIME_HVAC_OPTIMIZATION</div>
                              </div>
                              <div className="flex gap-1 items-end h-full pt-8">
                                 {[...Array(15)].map((_, i) => (
                                    <motion.div 
                                       key={i}
                                       animate={{ height: [`${30 + Math.random() * 70}%`, `${30 + Math.random() * 70}%`] }}
                                       transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse", delay: i * 0.05 }}
                                       className="w-1.5 bg-brand-neon/40 rounded-t-sm"
                                    />
                                 ))}
                              </div>
                           </div>
                        </div>
                      </div>
                      
                      <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-gradient-to-br from-orange-500 via-brand-neon to-blue-500" />
                    </div>
                  )}

                  {activeTab === 'utility' && (
                    <div className="relative w-full h-full rounded-2xl overflow-hidden group">
                      <img 
                        src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1000" 
                        alt="Energy Grid" 
                        className="w-full h-full object-cover opacity-40 transition-transform duration-1000 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/50" />
                      
                      {/* Grid HUD */}
                      <div className="absolute inset-0 p-4 flex flex-col justify-between pointer-events-none">
                        <div className="flex justify-between items-start">
                          <div className="px-3 py-1 bg-brand-blue/20 backdrop-blur-md border border-brand-blue/30 rounded-full flex items-center gap-2">
                            <Zap className="w-3 h-3 text-brand-blue" />
                            <span className="text-[10px] font-mono text-brand-blue font-bold uppercase">Grid_Stabilizer_Active</span>
                          </div>
                          <div className="bg-black/40 backdrop-blur-md border border-white/10 p-3 rounded-xl text-right">
                            <div className="text-[8px] text-white/40 uppercase mb-1">Grid_Frequency</div>
                            <div className="text-xl text-brand-blue font-bold font-mono">60.02 <span className="text-[10px]">Hz</span></div>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                           {[...Array(3)].map((_, i) => (
                              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-3 space-y-2">
                                 <div className="text-[8px] font-mono text-white/40 uppercase">Node_0{i+1}</div>
                                 <div className="flex items-center justify-between">
                                    <div className="w-12 h-1 bg-white/10 rounded-full overflow-hidden">
                                       <motion.div 
                                          animate={{ width: ['20%', '90%', '20%'] }}
                                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                                          className="h-full bg-brand-blue"
                                       />
                                    </div>
                                    <span className="text-[10px] font-mono text-brand-blue">ACTIVE</span>
                                 </div>
                              </div>
                           ))}
                        </div>
                      </div>
                      
                      {/* Power Lines effect */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                        <motion.path 
                          d="M0,150 Q200,50 400,150 T800,150" 
                          stroke="#00A3FF" 
                          strokeWidth="2" 
                          fill="none"
                          strokeDasharray="15 15"
                          animate={{ strokeDashoffset: [0, -60] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          className="opacity-40"
                        />
                        <motion.path 
                          d="M0,250 Q250,150 500,250 T1000,250" 
                          stroke="#00E5FF" 
                          strokeWidth="1" 
                          fill="none"
                          strokeDasharray="5 20"
                          animate={{ strokeDashoffset: [0, -80] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                          className="opacity-20"
                        />
                      </svg>
                    </div>
                  )}

                  {activeTab === 'factory' && (
                    <div className="relative w-full h-full rounded-2xl overflow-hidden group">
                      <img 
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" 
                        alt="Smart Factory" 
                        className="w-full h-full object-cover opacity-40 transition-transform duration-1000 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/50" />
                      
                      {/* Factory HUD */}
                      <div className="absolute inset-0 p-4 flex flex-col justify-between pointer-events-none">
                        <div className="flex justify-between items-start">
                          <div className="px-3 py-1 bg-brand-neon/20 backdrop-blur-md border border-brand-neon/30 rounded-full flex items-center gap-2">
                            <Factory className="w-3 h-3 text-brand-neon" />
                            <span className="text-[10px] font-mono text-brand-neon font-bold uppercase">Process_Sync_v2</span>
                          </div>
                          <div className="bg-black/40 backdrop-blur-md border border-white/10 p-3 rounded-xl text-right">
                             <div className="text-[8px] text-white/40 uppercase mb-1">Efficiency_Index</div>
                             <div className="text-xl text-brand-neon font-bold font-mono">98.2%</div>
                          </div>
                        </div>

                        <div className="flex gap-4">
                           <div className="flex-1 bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col justify-center gap-3">
                              <div className="text-[10px] font-mono text-white/60 uppercase">Machine_Status_Monitor</div>
                              <div className="grid grid-cols-4 gap-2">
                                 {[...Array(4)].map((_, i) => (
                                    <div key={i} className="space-y-1">
                                       <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                          <motion.div 
                                             animate={{ width: ['10%', '100%', '10%'] }}
                                             transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
                                             className="h-full bg-brand-neon"
                                          />
                                       </div>
                                       <div className="text-[6px] font-mono text-white/40">M_0{i+1}</div>
                                    </div>
                                 ))}
                              </div>
                           </div>
                           <div className="w-24 h-24 bg-brand-neon/10 border border-brand-neon/30 rounded-xl flex items-center justify-center">
                              <motion.div 
                                 animate={{ rotate: 360 }}
                                 transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                 className="w-12 h-12 border-2 border-brand-neon border-t-transparent rounded-full flex items-center justify-center"
                              >
                                 <div className="w-6 h-6 border border-brand-neon/40 rounded-full" />
                              </motion.div>
                           </div>
                        </div>
                      </div>
                      
                      {/* HUD Overlay */}
                      <div className="absolute inset-0 border-[15px] border-brand-neon/5 pointer-events-none" />
                      <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-brand-neon/40" />
                      <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-brand-neon/40" />
                    </div>
                  )}

                  {activeTab === 'farm' && (
                    <div className="relative w-full h-full rounded-2xl overflow-hidden group">
                      <img 
                        src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=1000" 
                        alt="Smart Farm" 
                        className="w-full h-full object-cover opacity-40 transition-transform duration-1000 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/50" />
                      
                      {/* Farm HUD */}
                      <div className="absolute inset-0 p-4 flex flex-col justify-between pointer-events-none">
                        <div className="flex justify-between items-start">
                          <div className="px-3 py-1 bg-brand-blue/20 backdrop-blur-md border border-brand-blue/30 rounded-full flex items-center gap-2">
                            <Sprout className="w-3 h-3 text-brand-blue" />
                            <span className="text-[10px] font-mono text-brand-blue font-bold uppercase">Agri_Tech_Core_v1</span>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                             <div className="bg-black/40 backdrop-blur-md border border-white/10 p-2 rounded-lg text-center">
                                <div className="text-[6px] text-white/40 uppercase">Soil_Moisture</div>
                                <div className="text-xs text-brand-blue font-bold font-mono">65%</div>
                             </div>
                             <div className="bg-black/40 backdrop-blur-md border border-white/10 p-2 rounded-lg text-center">
                                <div className="text-[6px] text-white/40 uppercase">CO2_Level</div>
                                <div className="text-xs text-brand-blue font-bold font-mono">400ppm</div>
                             </div>
                          </div>
                        </div>

                        <div className="flex justify-center items-center h-full">
                           <div className="relative">
                              <motion.div 
                                 animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                                 transition={{ duration: 4, repeat: Infinity }}
                                 className="absolute inset-0 bg-brand-blue/20 blur-3xl rounded-full"
                              />
                              <div className="relative z-10 w-32 h-32 rounded-full border border-brand-blue/20 flex items-center justify-center">
                                 <Sprout className="w-12 h-12 text-brand-blue/60" />
                                 <svg className="absolute inset-0 w-full h-full">
                                    <motion.circle 
                                       cx="64" cy="64" r="60" 
                                       stroke="#00E5FF" strokeWidth="1" fill="none" 
                                       strokeDasharray="10 20"
                                       animate={{ rotate: 360 }}
                                       transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                    />
                                 </svg>
                              </div>
                           </div>
                        </div>

                        <div className="flex justify-between items-end">
                           <div className="text-[8px] font-mono text-white/40 uppercase">Environment_Optimization_Active</div>
                           <div className="flex gap-1">
                              {[...Array(8)].map((_, i) => (
                                 <motion.div 
                                    key={i}
                                    animate={{ opacity: [0.2, 1, 0.2] }}
                                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                                    className="w-1 h-1 bg-brand-blue rounded-full"
                                 />
                              ))}
                           </div>
                        </div>
                      </div>
                      
                      {/* Floating Particles */}
                      <div className="absolute inset-0 z-10">
                        {[...Array(20)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{ 
                              y: [0, -200],
                              opacity: [0, 1, 0],
                              x: [0, Math.random() * 60 - 30]
                            }}
                            transition={{ 
                              duration: 4 + Math.random() * 3, 
                              repeat: Infinity, 
                              delay: Math.random() * 5 
                            }}
                            className="absolute w-0.5 h-0.5 bg-brand-blue rounded-full"
                            style={{ 
                              bottom: '10%', 
                              left: `${Math.random() * 100}%` 
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Status Badge */}
              <div className="absolute bottom-6 right-6 px-4 py-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-brand-neon animate-pulse" />
                <span className="text-[10px] font-mono text-white uppercase tracking-widest">{t.industry.status}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
