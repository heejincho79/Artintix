import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Globe } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { useLanguage } from "../../lib/LanguageContext";

export function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  const NAV_ITEMS = [
    { name: t.nav.challenge, id: "challenge" },
    { name: t.nav.solutions, id: "solutions" },
    { name: t.nav.industry, id: "industry" },
    { name: t.nav.trust, id: "trust" },
    { name: t.nav.contact, id: "contact" },
  ];

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-white/90 backdrop-blur-md border-gray-100 py-3 shadow-sm"
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img 
            src="https://storage.googleapis.com/static.antigravity.ai/projects/76afa242-8f02-41e8-b8c3-b2fee7e3e62e/attachments/63e1859c-8686-455b-801a-698f10887e0b.png" 
            alt="Artintix Logo" 
            className="h-10 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-sm font-semibold text-gray-600 hover:text-brand-dark transition-colors"
            >
              {item.name}
            </button>
          ))}
          <div className="flex items-center gap-2 ml-4 border-l border-gray-200 pl-6">
            <Globe className="w-4 h-4 text-gray-400" />
            <button
              onClick={() => setLang(lang === "KO" ? "EN" : "KO")}
              className="text-xs font-bold text-gray-600 hover:text-brand-dark transition-colors"
            >
              {lang}
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brand-dark"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 md:hidden shadow-lg"
          >
            <div className="flex flex-col gap-6">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-lg font-bold text-left text-brand-dark"
                >
                  {item.name}
                </button>
              ))}
              <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                <Globe className="w-4 h-4 text-gray-400" />
                <button
                  onClick={() => setLang(lang === "KO" ? "EN" : "KO")}
                  className="text-sm font-bold text-gray-600"
                >
                  {lang === "KO" ? "한국어" : "English"}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
