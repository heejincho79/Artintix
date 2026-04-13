import { motion } from "motion/react";
import { Box, LineChart, Cpu, FileText } from "lucide-react";

const SOLUTIONS = [
  {
    title: "디지털 트윈",
    desc: "실제 설비와 동기화된 디지털 트윈으로 운영 전 시뮬레이션하고, 최적 제어 시나리오를 사전에 검증 및 운영 최적화.",
    icon: Box,
    features: ["실시간 동기화", "시뮬레이션", "리스크 예측"],
  },
  {
    title: "수요 예측",
    desc: "날씨·생산 계획·과거 패턴을 학습한 AI가 시간대별 에너지 수요를 사전에 예측해 낭비를 차단.",
    icon: LineChart,
    features: ["AI 딥러닝", "패턴 분석", "정확도 90%+"],
  },
  {
    title: "실시간 제어",
    desc: "센서 데이터를 실시간 분석해 이상 징후를 즉시 포착하고, 에너지 소비를 자동으로 최적 상태로 유지.",
    icon: Cpu,
    features: ["자동화 제어", "이상 징후 감지", "부하 분산"],
  },
  {
    title: "탄소 관리",
    desc: "Scope 1·2 배출량을 설비 단위로 추적 / K-ETS 및 RE100 대응 리포트 자동 생성 및 탄소 배출 최적화.",
    icon: FileText,
    features: ["리포트 자동화", "배출권 관리", "ESG 대응"],
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-brand-dark">
              데이터에서 최적화까지, <br />
              <span className="text-brand-neon neon-text-glow">핵심 기술 (Core Technology)</span>
            </h2>
            <p className="text-gray-600 max-w-xl">
              알틴틱스의 하이브리드 AI 플랫폼은 에너지 데이터의 수집부터 
              분석, 예측, 그리고 자동 제어까지 통합된 가치를 제공합니다.
            </p>
          </div>
          <div className="hidden md:block">
             <div className="flex gap-2">
                <div className="w-12 h-1 bg-brand-neon rounded-full" />
                <div className="w-4 h-1 bg-gray-200 rounded-full" />
                <div className="w-4 h-1 bg-gray-200 rounded-full" />
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOLUTIONS.map((sol, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-white border border-gray-100 hover:border-brand-neon transition-all group shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-neon/10 flex items-center justify-center mb-8 group-hover:bg-brand-neon group-hover:text-brand-dark transition-all">
                <sol.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-brand-dark">{sol.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                {sol.desc}
              </p>
              <ul className="space-y-3">
                {sol.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-xs font-bold text-gray-400">
                    <div className="w-1 h-1 bg-brand-neon rounded-full" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
