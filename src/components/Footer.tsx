import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#222220] text-xs font-mono-code text-[#73736F]">
      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-8">
        {/* Left Identity */}
        <div>
          <h4 className="text-sm font-bold text-[#E8E8E5] tracking-tight">
            {PERSONAL_INFO.name}
          </h4>
          <p className="text-xs text-[#8E8E88] mt-1 tracking-widest uppercase">
            STRATEGY / RESEARCH / GROWTH
          </p>
          <p className="text-[11px] text-[#555550] mt-2">
            Masters&apos; Union &bull; B.Tech Biomedical Engineering
          </p>
        </div>

        {/* Center Quick Navigation */}
        <div className="flex flex-wrap items-center gap-8 text-xs uppercase tracking-wider text-[#A3A39E]">
          <a href="#work" className="hover:text-white transition-colors">
            WORK
          </a>
          <a href="#about" className="hover:text-white transition-colors">
            ABOUT
          </a>
          <a href="#thinking" className="hover:text-white transition-colors">
            THINKING
          </a>
          <a href="#experience" className="hover:text-white transition-colors">
            EXPERIENCE
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            CONTACT
          </a>
        </div>

        {/* Right Back to Top & Copyright */}
        <div className="flex items-center justify-between md:justify-end gap-6">
          <span>&copy; 2026 VENKATESH PRASADH H P</span>
          <button
            onClick={scrollToTop}
            className="p-2 border border-[#2a2a28] hover:border-[#E8E8E5] text-[#A3A39E] hover:text-white transition-colors flex items-center gap-1"
            aria-label="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span className="text-[10px] tracking-widest uppercase">TOP</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
