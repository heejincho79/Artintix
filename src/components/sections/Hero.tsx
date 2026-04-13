import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Activity, Cpu, Database, Zap, ShieldCheck } from "lucide-react";

export function Hero() {
  const [metrics, setMetrics] = React.useState({
    efficiency: 87.4,
    saving: 31.2,
    reduction: 2.4,
    accuracy: 98.2,
    co2: 0.8
  });

  React.useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        efficiency: Number((85 + Math.random() * 5).toFixed(1)),
        saving: Number((28 + Math.random() * 6).toFixed(1)),
        reduction: Number((2.0 + Math.random() * 0.8).toFixed(1)),
        accuracy: Number((97.5 + Math.random() * 1.5).toFixed(1)),
        co2: Number((0.7 + Math.random() * 0.3).toFixed(1))
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Background Visual */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white z-10" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-neon/40 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-[120px] animate-pulse delay-700" />
        </div>
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.05]" 
          style={{ 
            backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-neon/20 border border-brand-neon/30 text-brand-dark text-xs font-bold mb-6">
            <Activity className="w-3 h-3" />
            <span>AI-POWERED ENERGY OPTIMIZATION</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-8 text-brand-dark">
            디지털 트윈과 AI로 구현하는 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-neon">
              지능형 에너지 시스템
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-xl mb-10 leading-relaxed">
            알틴틱스는 복잡한 산업 현장의 에너지 데이터를 예측하고 실시간으로 제어하여, 
            비용 절감과 탄소중립 실현을 가속화하는 핵심 AI 솔루션을 제공합니다.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-brand-neon text-brand-dark font-bold rounded-lg hover:scale-105 transition-transform flex items-center gap-2 shadow-lg shadow-brand-neon/20"
            >
              솔루션 문의하기
              <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white border border-gray-200 text-brand-dark font-bold rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
            >
              무료 에너지 진단 받기
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 glass-card p-0 overflow-hidden border-gray-100 shadow-2xl">
            {/* Dashboard Header */}
            <div className="bg-brand-dark px-6 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-500/50" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                  <div className="w-2 h-2 rounded-full bg-green-500/50" />
                </div>
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">System_Autonomous_Core_v2.4</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-neon animate-pulse" />
                  <span className="text-[10px] font-mono text-brand-neon">실시간 동작 중</span>
                </div>
                <span className="text-[10px] font-mono text-gray-500">
                  {new Date().toLocaleTimeString('en-GB', { hour12: false })} UTC
                </span>
              </div>
            </div>

            <div className="p-8 bg-[#0A0F1A]">
              <div className="space-y-8">
                {/* Flow Visualization */}
                <div className="flex items-center justify-between relative">
                  {/* Flow Lines */}
                  <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2 z-0" />
                  
                  {/* Step 1: Sensors */}
                  <div className="relative z-10 flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400">
                      <Database className="w-6 h-6" />
                    </div>
                    <div className="text-center">
                      <p className="text-[10px] font-mono text-gray-500 uppercase">Step_01</p>
                      <p className="text-[11px] font-bold text-white">센서 데이터 수집</p>
                    </div>
                  </div>

                  <motion.div 
                    animate={{ x: [0, 100], opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-[15%] w-2 h-2 rounded-full bg-brand-neon blur-[2px] -translate-y-1/2"
                  />

                  {/* Step 2: AI Decision */}
                  <div className="relative z-10 flex flex-col items-center gap-3">
                    <div className="w-16 h-16 rounded-2xl bg-brand-neon/10 border border-brand-neon/30 flex items-center justify-center text-brand-neon shadow-[0_0_20px_rgba(0,163,255,0.2)]">
                      <Cpu className="w-8 h-8 animate-pulse" />
                    </div>
                    <div className="text-center">
                      <p className="text-[10px] font-mono text-brand-neon uppercase">Step_02</p>
                      <p className="text-[11px] font-bold text-white">AI 판단 및 최적화</p>
                    </div>
                  </div>

                  <motion.div 
                    animate={{ x: [0, 100], opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
                    className="absolute top-1/2 left-[60%] w-2 h-2 rounded-full bg-brand-blue blur-[2px] -translate-y-1/2"
                  />

                  {/* Step 3: Output */}
                  <div className="relative z-10 flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-blue">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div className="text-center">
                      <p className="text-[10px] font-mono text-gray-500 uppercase">Step_03</p>
                      <p className="text-[11px] font-bold text-white">자율 제어 출력</p>
                    </div>
                  </div>
                </div>

                {/* Metrics Section */}
                <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/10">
                  <div className="space-y-3">
                    <div className="flex justify-between items-end">
                      <p className="text-[10px] font-mono text-gray-500 uppercase">Energy_Efficiency</p>
                      <div className="flex items-baseline gap-1">
                        <AnimatePresence mode="wait">
                          <motion.span 
                            key={metrics.efficiency}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className="text-2xl font-mono font-bold text-white"
                          >
                            {metrics.efficiency}
                          </motion.span>
                        </AnimatePresence>
                        <span className="text-xs font-mono text-brand-neon">%</span>
                      </div>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        animate={{ width: `${metrics.efficiency}%` }}
                        transition={{ duration: 1 }}
                        className="h-full bg-brand-neon"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-end">
                      <p className="text-[10px] font-mono text-gray-500 uppercase">Cost_Savings</p>
                      <div className="flex items-baseline gap-1">
                        <AnimatePresence mode="wait">
                          <motion.span 
                            key={metrics.saving}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className="text-2xl font-mono font-bold text-brand-blue"
                          >
                            {metrics.saving}
                          </motion.span>
                        </AnimatePresence>
                        <span className="text-xs font-mono text-brand-blue">%</span>
                      </div>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        animate={{ width: `${metrics.saving}%` }}
                        transition={{ duration: 1 }}
                        className="h-full bg-brand-blue"
                      />
                    </div>
                  </div>
                </div>

                {/* Status Grid */}
                <div className="grid grid-cols-3 gap-4 pt-6">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-center">
                    <p className="text-[9px] font-mono text-gray-500 uppercase mb-1">현재 절감량</p>
                    <AnimatePresence mode="wait">
                      <motion.p 
                        key={metrics.reduction}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-sm font-mono font-bold text-white"
                      >
                        ↓ {metrics.reduction}kW
                      </motion.p>
                    </AnimatePresence>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-center">
                    <p className="text-[9px] font-mono text-gray-500 uppercase mb-1">예측 정확도</p>
                    <AnimatePresence mode="wait">
                      <motion.p 
                        key={metrics.accuracy}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-sm font-mono font-bold text-white"
                      >
                        {metrics.accuracy}%
                      </motion.p>
                    </AnimatePresence>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-center">
                    <p className="text-[9px] font-mono text-gray-500 uppercase mb-1">CO₂ 감축</p>
                    <AnimatePresence mode="wait">
                      <motion.p 
                        key={metrics.co2}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-sm font-mono font-bold text-white"
                      >
                        {metrics.co2}t
                      </motion.p>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 border border-brand-neon/10 rounded-full animate-spin-slow" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 border border-brand-blue/5 rounded-full animate-reverse-spin-slow" />
        </motion.div>
      </div>
    </section>
  );
}
