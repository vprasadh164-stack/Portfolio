import React from 'react';
import { motion } from 'motion/react';
import { LEADERSHIP } from '../data/portfolioData';

export const LeadershipSection: React.FC = () => {
  return (
    <section
      id="leadership"
      className="relative py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#222220]"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#222220] pb-6 mb-16 gap-4">
        <div>
          <span className="text-xs font-mono-code uppercase tracking-widest text-[#73736F] block mb-1">
            08 / LEADERSHIP
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#E8E8E5]">
            BEYOND WORK
          </h2>
        </div>

        <span className="font-mono-code text-xs text-[#8E8E88] uppercase tracking-wider">
          TEAMS LED &bull; INITIATIVES CHAMPIONED
        </span>
      </div>

      {/* Large Typography Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {LEADERSHIP.map((item, idx) => (
          <motion.div
            key={item.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: idx * 0.08 }}
            className="p-6 md:p-8 border border-[#222220] bg-[#161614] flex flex-col justify-between hover:border-[#383835] transition-colors"
          >
            <div>
              <div className="flex items-baseline justify-between font-mono-code text-xs text-[#73736F] mb-4">
                <span>{item.number}</span>
                {item.metric && (
                  <span className="text-[#A3A39E] uppercase">{item.metric}</span>
                )}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#E8E8E5] uppercase">
                {item.role}
              </h3>

              <span className="text-xs font-mono-code uppercase text-[#8E8E88] block mt-1">
                {item.context}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#73736F] font-light leading-relaxed mt-6 pt-4 border-t border-[#1f1f1d]">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
