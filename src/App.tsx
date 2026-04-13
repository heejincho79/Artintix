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

export default function App() {
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
            <img 
              src="https://storage.googleapis.com/static.antigravity.ai/projects/76afa242-8f02-41e8-b8c3-b2fee7e3e62e/attachments/63e1859c-8686-455b-801a-698f10887e0b.png" 
              alt="Artintix Logo" 
              className="h-8 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="text-gray-400 text-sm">
            © 2024 Artintix. All rights reserved.
          </div>
          <div className="flex gap-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-brand-dark transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-dark transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

