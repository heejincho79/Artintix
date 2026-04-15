import { motion } from "motion/react";
import { Box, LineChart, Cpu, FileText } from "lucide-react";
import { useLanguage } from "../../lib/LanguageContext";

export function Solutions() {
  const { t } = useLanguage();

  const SOLUTIONS = [
    {
      title: t.solutions.items[0].title,
      desc: t.solutions.items[0].desc,
      icon: Box,
      features: t.solutions.items[0].features,
    },
    {
      title: t.solutions.items[1].title,
      desc: t.solutions.items[1].desc,
      icon: LineChart,
      features: t.solutions.items[1].features,
    },
    {
      title: t.solutions.items[2].title,
      desc: t.solutions.items[2].desc,
      icon: Cpu,
      features: t.solutions.items[2].features,
    },
    {
      title: t.solutions.items[3].title,
      desc: t.solutions.items[3].desc,
      icon: FileText,
      features: t.solutions.items[3].features,
    },
  ];

  return (
    <section id="solutions" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-brand-dark">
              {t.solutions.title1} <br />
              <span className="text-brand-neon neon-text-glow">{t.solutions.title2}</span>
            </h2>
            <p className="text-gray-600 max-w-xl">
              {t.solutions.desc}
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
