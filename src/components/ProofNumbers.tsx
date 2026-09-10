import React from 'react';
import { motion } from 'motion/react';
import { STATS } from '../data/portfolioData';

export const ProofNumbers: React.FC = () => {
  return (
    <section
      id="proof"
      className="relative py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#222220]"
    >
      {/* Editorial Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#222220] pb-6 mb-16 gap-4">
        <div>
          <span className="text-xs font-mono-code uppercase tracking-widest text-[#73736F] block mb-1">
            04 / EVIDENCE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#E8E8E5]">
            MEASURABLE IMPACT
          </h2>
        </div>

        <span className="font-mono-code text-xs text-[#8E8E88] uppercase tracking-wider">
          VERIFIED OUTCOMES ACROSS 5+ YEARS OF WORK
        </span>
      </div>

      {/* Large Typographic Proof Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
        {STATS.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
              duration: 0.7,
              delay: (idx % 4) * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group flex flex-col justify-between border-b border-[#1f1f1d] pb-8 sm:border-b-0 sm:pb-0"
          >
            {/* Monumental Number */}
            <div>
              <span className="text-[11px] font-mono-code text-[#73736F] tracking-widest block mb-2">
                0{idx + 1}
              </span>
              <div className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#E8E8E5] font-mono-code group-hover:text-white transition-colors">
                {stat.value}
              </div>
            </div>

            {/* Label & Subtext */}
            <div className="mt-4 pt-4 border-t border-[#1c1c1a]">
              <h3 className="text-sm font-bold tracking-wider font-mono-code text-[#C4C4BF] uppercase">
                {stat.label}
              </h3>
              {stat.subtext && (
                <p className="text-xs text-[#73736F] font-light mt-1.5 leading-relaxed">
                  {stat.subtext}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Supporting Editorial Footer */}
      <div className="mt-20 pt-8 border-t border-[#222220] flex flex-col md:flex-row items-baseline justify-between text-xs font-mono-code text-[#73736F] gap-4">
        <span>METRICS SOURCED EXCLUSIVELY FROM VERIFIED PROFESSIONAL MILESTONES</span>
        <span className="text-[#A3A39E]">
          SCALE DELIVERED ACROSS MULTI-STAKEHOLDER INSTITUTIONS
        </span>
      </div>
    </section>
  );
};
