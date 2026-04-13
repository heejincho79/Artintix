import { motion } from "motion/react";
import { TrendingUp, ShieldAlert, Zap } from "lucide-react";

const CHALLENGES = [
  {
    title: "산업용 전기요금 상승",
    value: "연 20%↑",
    desc: "지속적인 에너지 비용 부담 가중",
    icon: TrendingUp,
    color: "text-red-400",
    bg: "bg-red-400/10",
  },
  {
    title: "K-ETS 유상할당 확대",
    value: "2026년~",
    desc: "탄소 배출 규제 및 비용 압박 심화",
    icon: ShieldAlert,
    color: "text-orange-400",
    bg: "bg-orange-400/10",
  },
  {
    title: "에너지 낭비율",
    value: "평균 30%",
    desc: "비효율적인 운영으로 인한 손실",
    icon: Zap,
    color: "text-brand-neon",
    bg: "bg-brand-neon/10",
  },
];

export function Challenge() {
  return (
    <section id="challenge" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-brand-dark"
          >
            에너지 비효율, <br className="md:hidden" />
            <span className="text-gray-400">더 이상 방치할 수 없습니다</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 max-w-2xl mx-auto"
          >
            급변하는 에너지 시장과 강화되는 환경 규제 속에서, 
            데이터 기반의 최적화는 선택이 아닌 필수입니다.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {CHALLENGES.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 group hover:border-brand-neon/50 transition-colors border-gray-100"
            >
              <div className={`${item.bg} ${item.color} w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-500 mb-2">{item.title}</h3>
              <div className={`text-4xl font-bold mb-4 ${item.color}`}>{item.value}</div>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
