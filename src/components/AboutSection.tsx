import React from 'react';
import { Camera, Compass, Award, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const interests = [
    { title: 'MOTORCYCLES', desc: 'Engine architectures, 270° parallel-twins, and multi-day endurance rides.' },
    { title: 'SPORTS', desc: 'Cricket vice-captaincy, pickleball, badminton, and competitive house athletics.' },
    { title: 'MARKETS', desc: 'Macroeconomic shifts, Indian consumer dynamics, and public-to-private valuations.' },
    { title: 'ENTREPRENEURSHIP', desc: 'Zero-to-one ventures, supply chain bootstrapping, and D2C unit economics.' },
    { title: 'RESEARCH', desc: 'First-principles field interviews, survey design, and empirical data modeling.' },
  ];

  return (
    <section
      id="about"
      className="relative py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#222220]"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#222220] pb-6 mb-16 gap-4">
        <div>
          <span className="text-xs font-mono-code uppercase tracking-widest text-[#73736F] block mb-1">
            07 / HUMAN
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#E8E8E5]">
            A LITTLE MORE ABOUT ME.
          </h2>
        </div>

        <span className="font-mono-code text-xs text-[#8E8E88] uppercase tracking-wider">
          PERSONAL ROOTS &bull; INTELLECTUAL CURIOSITIES
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Minimalist Photo Frame Placeholder [ADD YOUR PHOTO] */}
        <div className="lg:col-span-5">
          <div className="aspect-[4/5] w-full border border-dashed border-[#333330] bg-[#161614] flex flex-col items-center justify-center p-8 relative group">
            {/* Corner styling accents */}
            <span className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#555550]" />
            <span className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[#555550]" />
            <span className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-[#555550]" />
            <span className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[#555550]" />

            <Camera className="w-10 h-10 text-[#444440] mb-4 group-hover:text-[#A3A39E] transition-colors" />

            <span className="text-sm font-mono-code tracking-widest uppercase font-bold text-[#E8E8E5] block">
              [ADD YOUR PHOTO]
            </span>

            <p className="text-xs font-mono-code text-[#73736F] text-center mt-2 max-w-xs leading-relaxed">
              Editorial portrait placeholder for Venkatesh Prasadh H P. Preserving authentic identity without AI-generated imagery.
            </p>

            <div className="mt-6 text-[10px] font-mono-code text-[#555550] uppercase tracking-widest">
              GURGAON &bull; BENGALURU
            </div>
          </div>
        </div>

        {/* Right: Academic Context & Interests */}
        <div className="lg:col-span-7 space-y-10">
          {/* Current & Background */}
          <div className="space-y-6">
            <div className="border-b border-[#1c1c1a] pb-6">
              <span className="text-xs font-mono-code uppercase tracking-widest text-[#73736F] block mb-1">
                CURRENT OCCUPATION
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-[#E8E8E5]">
                PGP in Technology &amp; Business Management
              </h3>
              <p className="text-sm text-[#A3A39E] font-mono-code mt-1">
                Masters&apos; Union &bull; 2026 – Present (Gurgaon, India)
              </p>
              <p className="text-sm text-[#C8C8C4] font-light mt-2 leading-relaxed">
                Immersed in advanced corporate strategy, tech venture building, financial modeling, and global market dynamics.
              </p>
            </div>

            <div className="border-b border-[#1c1c1a] pb-6">
              <span className="text-xs font-mono-code uppercase tracking-widest text-[#73736F] block mb-1">
                ENGINEERING FOUNDATION
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-[#E8E8E5]">
                B.Tech in Biomedical Engineering
              </h3>
              <p className="text-sm text-[#A3A39E] font-mono-code mt-1">
                Manipal Institute of Technology &bull; 2017 – 2021 (CGPA 6.64)
              </p>
              <p className="text-sm text-[#C8C8C4] font-light mt-2 leading-relaxed">
                Trained in mathematical modeling, physiological sensor instrumentation, and complex systems architecture. This analytical training informs my quantitative approach to business problems.
              </p>
            </div>
          </div>

          {/* Interests Grid */}
          <div>
            <span className="text-xs font-mono-code uppercase tracking-widest text-[#73736F] block mb-4">
              INTELLECTUAL &amp; PERSONAL CURIOSITIES
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {interests.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 border border-[#222220] bg-[#161614] hover:border-[#383835] transition-colors"
                >
                  <h4 className="text-sm font-bold font-mono-code tracking-wider text-[#E8E8E5] uppercase">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#8E8E88] font-light mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
