import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Server, Building2, Zap, Factory, Sprout } from "lucide-react";

const INDUSTRIES = [
  {
    id: "datacenter",
    name: "데이터센터",
    icon: Server,
    title: "PUE 1.5 이하 달성",
    desc: "AI 기반 냉각 예측 제어와 서버 부하 분산 최적화로 데이터센터 운영 효율을 극대화 / 실시간 열부하 예측으로 냉각 시스템을 선제적으로 제어해 불필요한 에너지 소비를 제거",
    metric: "35%",
    metricLabel: "냉각 비용 절감",
  },
  {
    id: "building",
    name: "건물/시설",
    icon: Building2,
    title: "빌딩 에너지 관리(BEMS)를 AI로 고도화",
    desc: "HVAC·조명·엘리베이터 등 설비 전반을 AI로 통합 제어 / 재실 패턴과 날씨 예보를 반영해 냉난방을 선제적으로 최적화하고 피크 수요를 분산.",
    metric: "25~30%",
    metricLabel: "에너지 소비 절감",
  },
  {
    id: "utility",
    name: "전력/유틸리티",
    icon: Zap,
    title: "재생에너지 발전 예측 및 계통 안정화 지원",
    desc: "태양광·풍력 발전량을 AI로 단기·중기 예측 / 수요 반응(DR) 최적화로 전력 구매 비용을 절감. 이상 부하를 실시간 감지해 계통 안정성을 높임.",
    metric: "90%+",
    metricLabel: "예측 정확도",
  },
  {
    id: "factory",
    name: "제조",
    icon: Factory,
    title: "생산 일정과 연동한 에너지 최적 운영",
    desc: "생산 계획·설비 가동률·에너지 데이터를 통합 분석해 최적 운전 조건을 도출 / 예지보전으로 설비 다운타임과 에너지 손실을 동시에 줄입.",
    metric: "20%",
    metricLabel: "피크 전력 감소",
  },
  {
    id: "farm",
    name: "농업",
    icon: Sprout,
    title: "스마트팜 에너지·환경 통합 최적화",
    desc: "온실 내 온도·습도·CO₂·조도를 AI로 통합 제어해 작물 생산성과 에너지 효율을 동시에 높임 / 계절·날씨 변화에 자동 적응하는 학습 모델로 연중 최적 환경을 유지.",
    metric: "30%",
    metricLabel: "냉난방비 절감",
  },
];

export function IndustrySolutions() {
  const [activeTab, setActiveTab] = React.useState(INDUSTRIES[0].id);

  const activeData = INDUSTRIES.find((i) => i.id === activeTab)!;

  return (
    <section id="industry" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-brand-dark">산업별 솔루션</h2>
          <p className="text-gray-500">각 산업 분야에 특화된 AI 모델로 실질적인 성과를 증명합니다.</p>
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
                <span className="text-[10px] font-mono text-white uppercase tracking-widest">AI_Optimization_Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
