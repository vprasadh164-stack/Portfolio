import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export const IntroStatement: React.FC = () => {
  return (
    <section
      id="intro"
      className="relative py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#222220]"
    >
      {/* Editorial Section Eyebrow */}
      <div className="flex items-center justify-between mb-12 md:mb-20 font-mono-code text-xs text-[#73736F] uppercase tracking-widest">
        <span>02 / STATEMENT</span>
        <span>THE THESIS</span>
      </div>

      {/* Monumental Typographic Statement */}
      <div className="mb-20 md:mb-32">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-[#E8E8E5] leading-[1.05]"
        >
          &ldquo;I like understanding{' '}
          <span className="text-[#A3A39E] font-normal italic">what drives</span>{' '}
          growth.&rdquo;
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 md:mt-12 text-xl sm:text-2xl md:text-3xl font-light text-[#A3A39E] max-w-4xl leading-relaxed"
        >
          5+ years across market research, business development, client advisory and growth strategy.
        </motion.p>
      </div>

      {/* About Me — Conversational Short Version */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 pt-16 border-t border-[#1e1e1c]">
        <div className="lg:col-span-4">
          <span className="text-xs font-mono-code uppercase tracking-widest text-[#73736F] block mb-3">
            PERSPECTIVE
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#E8E8E5] leading-snug">
            I work at the intersection of research, strategy and execution.
          </h3>
        </div>

        <div className="lg:col-span-8 flex flex-col justify-between">
          <p className="text-base sm:text-lg md:text-xl text-[#C4C4C0] font-light leading-relaxed max-w-2xl">
            My experience has taken me from market research and client advisory to partner management, growth strategy and operational improvement. I enjoy ambiguous problems, structured thinking and figuring out what should happen next.
          </p>

          <div className="mt-8 pt-8 border-t border-[#1c1c1a] flex flex-wrap items-center gap-6 text-xs font-mono-code text-[#A3A39E]">
            <span className="px-3 py-1.5 rounded-full border border-[#2a2a28] bg-[#161615]">
              FIRST-PRINCIPLES THINKING
            </span>
            <span className="px-3 py-1.5 rounded-full border border-[#2a2a28] bg-[#161615]">
              CROSS-FUNCTIONAL EXECUTION
            </span>
            <span className="px-3 py-1.5 rounded-full border border-[#2a2a28] bg-[#161615]">
              COMMERCIAL RIGOR
            </span>
            <a
              href="#thinking"
              className="ml-auto inline-flex items-center gap-1 text-[#E8E8E5] hover:underline underline-offset-4"
            >
              How I Think <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
