/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { Challenge } from "./components/sections/Challenge";
import { Solutions } from "./components/sections/Solutions";
import { IndustrySolutions } from "./components/sections/IndustrySolutions";
import { WhyArtintix } from "./components/sections/WhyArtintix";
import { Contact } from "./components/sections/Contact";
import { LanguageProvider, useLanguage } from "./lib/LanguageContext";
import { Logo } from "./components/ui/Logo";

function AppContent() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white text-brand-dark selection:bg-brand-neon selection:text-brand-dark">
      <Navbar />
      <main>
        <Hero />
        <Challenge />
        <Solutions />
        <IndustrySolutions />
        <WhyArtintix />
        <Contact />
      </main>
      
      <footer className="py-12 border-t border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Logo className="h-6" />
          </div>
          <div className="text-gray-400 text-sm">
            {t.footer.rights}
          </div>
          <div className="flex gap-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-brand-dark transition-colors">{t.footer.privacy}</a>
            <a href="#" className="hover:text-brand-dark transition-colors">{t.footer.terms}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

