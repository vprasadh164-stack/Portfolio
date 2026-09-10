import React, { useState } from 'react';
import { motion } from 'motion/react';
import { THINKING_PILLARS } from '../data/portfolioData';

export const ThinkingFramework: React.FC = () => {
  const [activePillarId, setActivePillarId] = useState<string>('understand');

  const activePillar = THINKING_PILLARS.find((p) => p.id === activePillarId) || THINKING_PILLARS[0];

  return (
    <section
      id="thinking"
      className="relative py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#222220]"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#222220] pb-6 mb-16 gap-4">
        <div>
          <span className="text-xs font-mono-code uppercase tracking-widest text-[#73736F] block mb-1">
            06 / MENTAL MODEL
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#E8E8E5]">
            HOW I THINK
          </h2>
        </div>

        <span className="font-mono-code text-xs text-[#8E8E88] uppercase tracking-wider">
          FIRST-PRINCIPLES PROBLEM SOLVING
        </span>
      </div>

      {/* Main Big Statement */}
      <div className="mb-16 md:mb-24">
        <h3 className="text-2xl sm:text-4xl md:text-5xl font-light text-[#E8E8E5] tracking-tight leading-snug">
          &ldquo;Good strategy starts by asking{' '}
          <span className="font-semibold underline underline-offset-8 decoration-[#3a3a38]">
            better questions
          </span>
          .&rdquo;
        </h3>
        <p className="mt-6 text-base sm:text-lg md:text-xl text-[#A3A39E] font-light max-w-3xl leading-relaxed">
          I enjoy working on ambiguous problems where research, structured thinking and execution need to come together.
        </p>
      </div>

      {/* The 4 Pillars in Massive Monumental Typography */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-[#1e1e1c] pt-12">
        {/* Left Column: 4 Words */}
        <div className="lg:col-span-7 space-y-2">
          {THINKING_PILLARS.map((pillar) => {
            const isActive = activePillarId === pillar.id;

            return (
              <div
                key={pillar.id}
                onClick={() => setActivePillarId(pillar.id)}
                className={`cursor-pointer group flex items-baseline justify-between py-4 border-b border-[#1c1c1a] transition-all duration-300 ${
                  isActive ? 'border-[#E8E8E5]' : 'hover:border-[#444440]'
                }`}
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono-code text-xs text-[#73736F] group-hover:text-[#A3A39E]">
                    {pillar.number}
                  </span>
                  <h4
                    className={`text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase transition-colors ${
                      isActive
                        ? 'text-[#E8E8E5]'
                        : 'text-[#444440] group-hover:text-[#A3A39E]'
                    }`}
                  >
                    {pillar.keyword}
                  </h4>
                </div>

                <span
                  className={`text-xs font-mono-code uppercase tracking-wider transition-opacity ${
                    isActive ? 'opacity-100 text-[#E8E8E5]' : 'opacity-0 group-hover:opacity-100 text-[#73736F]'
                  }`}
                >
                  {isActive ? 'SELECTED' : 'EXPLORE'}
                </span>
              </div>
            );
          })}
        </div>

        {/* Right Column: Active Pillar Breakdown */}
        <div className="lg:col-span-5 p-8 border border-[#222220] bg-[#161614] relative">
          <span className="text-[11px] font-mono-code uppercase tracking-widest text-[#73736F] block mb-2">
            PHASE {activePillar.number} &bull; OPERATIONAL LENS
          </span>

          <h5 className="text-xl sm:text-2xl font-bold tracking-tight text-[#E8E8E5]">
            {activePillar.subheading}
          </h5>

          <p className="mt-4 text-sm sm:text-base text-[#C8C8C4] font-light leading-relaxed">
            {activePillar.description}
          </p>

          <div className="mt-8 pt-6 border-t border-[#20201e] flex items-center justify-between text-xs font-mono-code text-[#73736F]">
            <span>VENKATESH PRASADH H P</span>
            <span className="text-[#A3A39E]">STRATEGIC CADENCE</span>
          </div>
        </div>
      </div>
    </section>
  );
};
