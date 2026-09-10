import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { CAREER_DIRECTIONS } from '../data/portfolioData';

export const CareerDirection: React.FC = () => {
  return (
    <section
      id="direction"
      className="relative py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#222220]"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#222220] pb-6 mb-16 gap-4">
        <div>
          <span className="text-xs font-mono-code uppercase tracking-widest text-[#73736F] block mb-1">
            09 / FUTURE TRAJECTORY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#E8E8E5]">
            CAREER DIRECTION
          </h2>
        </div>

        <span className="font-mono-code text-xs text-[#8E8E88] uppercase tracking-wider">
          TARGET ENVIRONMENTS &bull; 2026+
        </span>
      </div>

      {/* Massive NEXT Typography */}
      <div className="mb-14">
        <h3 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter text-[#E8E8E5] leading-none">
          NEXT.
        </h3>

        <p className="mt-8 text-xl sm:text-2xl md:text-3xl font-light text-[#A3A39E] max-w-3xl leading-relaxed">
          &ldquo;I&apos;m looking for environments where the problems are ambiguous, the learning curve is steep and strategy has to translate into action.&rdquo;
        </p>
      </div>

      {/* Target Focus Roles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10 border-t border-[#1e1e1c]">
        {CAREER_DIRECTIONS.map((role, idx) => (
          <div
            key={idx}
            className="p-6 md:p-8 border border-[#222220] bg-[#161614] flex flex-col justify-between hover:border-[#444440] transition-colors group"
          >
            <div>
              <span className="text-xs font-mono-code text-[#73736F] tracking-widest block mb-3">
                0{idx + 1}
              </span>
              <h4 className="text-2xl sm:text-3xl font-black tracking-tight text-[#E8E8E5] group-hover:text-white transition-colors uppercase leading-tight">
                {role.title}
              </h4>
            </div>

            <p className="text-xs sm:text-sm text-[#8E8E88] font-light mt-6 pt-4 border-t border-[#1f1f1d] leading-relaxed">
              {role.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-xs font-mono-code text-[#73736F] flex items-center gap-2">
        <ArrowRight className="w-3.5 h-3.5 text-[#8E8E88]" />
        <span>TARGET POST-PGP FOCUS DOMAINS &bull; MASTERS&apos; UNION 2026</span>
      </div>
    </section>
  );
};
