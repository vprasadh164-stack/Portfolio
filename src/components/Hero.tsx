import React from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const scrollToNext = () => {
    const nextEl = document.getElementById('intro');
    if (nextEl) {
      nextEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] md:min-h-screen flex flex-col justify-between pt-28 md:pt-36 pb-12 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Top Identity Block */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row md:items-baseline justify-between border-b border-[#222220] pb-6 gap-4"
      >
        <div>
          <h1 className="text-sm md:text-base font-semibold tracking-widest uppercase text-[#E8E8E5] font-mono-code">
            {PERSONAL_INFO.name}
          </h1>
          <p className="text-xs md:text-sm text-[#8E8E88] mt-1">
            {PERSONAL_INFO.title}
          </p>
        </div>

        <div className="flex flex-col md:items-end text-left md:text-right">
          <span className="text-xs font-mono-code text-[#A3A39E] tracking-wider uppercase">
            {PERSONAL_INFO.currentRole}
          </span>
          <span className="text-xs text-[#73736F] mt-0.5">
            Gurgaon & Bengaluru, India
          </span>
        </div>
      </motion.div>

      {/* Center Monumental Typography (STRATEGY / RESEARCH / GROWTH) */}
      <div className="my-auto py-10 md:py-14 select-none">
        <div className="space-y-0 md:space-y-1">
          {['STRATEGY', 'RESEARCH', 'GROWTH'].map((word, index) => (
            <motion.div
              key={word}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.15 * (index + 1),
                ease: [0.16, 1, 0.3, 1],
              }}
              className="overflow-hidden"
            >
              <h2
                className={`font-black tracking-tighter leading-[0.88] text-[15vw] sm:text-[13vw] md:text-[11vw] lg:text-[10vw] transition-colors duration-500 cursor-default ${
                  index === 1
                    ? 'text-[#E8E8E5] hover:text-white'
                    : index === 0
                    ? 'text-[#CCCCCC] hover:text-[#E8E8E5]'
                    : 'text-[#8A8A85] hover:text-[#CCCCCC]'
                }`}
              >
                {word}
              </h2>
            </motion.div>
          ))}
        </div>

        {/* Small Supporting Statements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-8 md:mt-12 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pt-6 border-t border-[#1c1c1a]"
        >
          <p className="text-lg sm:text-xl md:text-2xl font-light text-[#E8E8E5] tracking-tight">
            &ldquo;{PERSONAL_INFO.tagline}&rdquo;
          </p>
          <p className="text-xs sm:text-sm font-mono-code uppercase tracking-wider text-[#8E8E88] max-w-sm">
            Turning qualitative ambiguity and empirical research into operational decisions.
          </p>
        </motion.div>
      </div>

      {/* Bottom Minimal Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="flex items-center justify-between border-t border-[#222220] pt-6"
      >
        <span className="text-[11px] font-mono-code tracking-widest text-[#73736F] uppercase">
          01 / ARCHIVE
        </span>

        <button
          onClick={scrollToNext}
          className="group flex items-center gap-3 text-xs font-mono-code tracking-widest uppercase text-[#A3A39E] hover:text-[#E8E8E5] transition-colors"
          aria-label="Scroll to introduction"
        >
          <span>SCROLL</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="w-7 h-7 rounded-full border border-[#2a2a28] flex items-center justify-center group-hover:border-[#E8E8E5] group-hover:bg-[#1f1f1d] transition-all"
          >
            <ArrowDown className="w-3.5 h-3.5 text-[#E8E8E5]" />
          </motion.div>
        </button>

        <span className="text-[11px] font-mono-code tracking-widest text-[#73736F] uppercase">
          SCALE &bull; 250%
        </span>
      </motion.div>
    </section>
  );
};
