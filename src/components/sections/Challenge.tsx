import { motion } from "motion/react";
import { TrendingUp, ShieldAlert, Zap } from "lucide-react";
import { useLanguage } from "../../lib/LanguageContext";

export function Challenge() {
  const { t } = useLanguage();
  
  const CHALLENGES = [
    {
      title: t.challenge.items[0].title,
      value: t.challenge.items[0].value,
      desc: t.challenge.items[0].desc,
      icon: TrendingUp,
      color: "text-red-400",
      bg: "bg-red-400/10",
    },
    {
      title: t.challenge.items[1].title,
      value: t.challenge.items[1].value,
      desc: t.challenge.items[1].desc,
      icon: ShieldAlert,
      color: "text-orange-400",
      bg: "bg-orange-400/10",
    },
    {
      title: t.challenge.items[2].title,
      value: t.challenge.items[2].value,
      desc: t.challenge.items[2].desc,
      icon: Zap,
      color: "text-brand-neon",
      bg: "bg-brand-neon/10",
    },
  ];

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
            {t.challenge.title1} <br className="md:hidden" />
            <span className="text-gray-400">{t.challenge.title2}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 max-w-2xl mx-auto"
          >
            {t.challenge.desc}
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
