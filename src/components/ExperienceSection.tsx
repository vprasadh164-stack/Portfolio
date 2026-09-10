import React, { useState } from 'react';
import { Plus, Minus, MapPin, Calendar, CheckCircle2, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { EXPERIENCES, EDUCATION, INTERNSHIPS } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('onestep');

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="experience"
      className="relative py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#222220]"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#222220] pb-6 mb-16 gap-4">
        <div>
          <span className="text-xs font-mono-code uppercase tracking-widest text-[#73736F] block mb-1">
            05 / TRAJECTORY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#E8E8E5]">
            EXPERIENCE
          </h2>
        </div>

        <span className="font-mono-code text-xs text-[#8E8E88] uppercase tracking-wider">
          5+ YEARS &bull; RESEARCH, STRATEGY, PARTNER OPERATIONS
        </span>
      </div>

      {/* Experience Entries */}
      <div className="divide-y divide-[#20201e]">
        {EXPERIENCES.map((exp) => {
          const isExpanded = expandedId === exp.id;

          return (
            <div
              key={exp.id}
              className="py-10 md:py-14 transition-colors"
            >
              <div
                onClick={() => toggleExpand(exp.id)}
                className="cursor-pointer group grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
              >
                {/* Index */}
                <div className="lg:col-span-1 font-mono-code text-xs md:text-sm text-[#73736F] group-hover:text-[#E8E8E5] transition-colors">
                  {exp.index}
                </div>

                {/* Company & Role */}
                <div className="lg:col-span-6">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#E8E8E5] group-hover:text-white transition-colors">
                      {exp.company}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-[#A3A39E] font-medium mt-1">
                    {exp.role}
                  </p>

                  {exp.subRole && (
                    <div className="mt-2 text-xs font-mono-code text-[#8E8E88] border-l border-[#333330] pl-2.5">
                      <span className="text-[#C8C8C4]">{exp.subRole.title}</span>
                      {exp.subRole.description && (
                        <span className="block text-[#73736F] mt-0.5 font-light">
                          {exp.subRole.description}
                        </span>
                      )}
                    </div>
                  )}

                  <div className="flex items-center gap-4 text-xs font-mono-code text-[#73736F] mt-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Measurable Impact Highlight Pill */}
                <div className="lg:col-span-4 flex flex-col justify-start">
                  <div className="p-4 border border-[#222220] bg-[#161614] rounded-none group-hover:border-[#383835] transition-colors">
                    <span className="text-2xl sm:text-3xl font-black font-mono-code text-[#E8E8E5] block">
                      {exp.heroMetric.value}
                    </span>
                    <span className="text-[11px] font-mono-code uppercase tracking-wider text-[#A3A39E] block mt-0.5">
                      {exp.heroMetric.label}
                    </span>

                    {/* Secondary Metrics preview */}
                    {exp.secondaryMetrics && (
                      <div className="mt-3 pt-3 border-t border-[#222220] flex flex-wrap gap-x-4 gap-y-1 text-[11px] font-mono-code text-[#8E8E88]">
                        {exp.secondaryMetrics.map((sm, smIdx) => (
                          <span key={smIdx}>
                            <strong className="text-[#C8C8C4]">{sm.value}</strong> {sm.label}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Expand / Collapse Button */}
                <div className="lg:col-span-1 flex justify-end">
                  <div className="w-8 h-8 rounded-full border border-[#2a2a28] flex items-center justify-center text-[#A3A39E] group-hover:border-[#E8E8E5] group-hover:text-[#E8E8E5] transition-colors">
                    {isExpanded ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </div>
              </div>

              {/* Accordion Expandable Content */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="mt-8 pt-6 border-t border-[#1c1c1a] grid grid-cols-1 lg:grid-cols-12 gap-6 pl-0 lg:pl-16">
                      <div className="lg:col-span-4 text-xs font-mono-code text-[#73736F] uppercase tracking-wider">
                        KEY VERIFIED DELIVERABLES &amp; IMPACT
                      </div>

                      <div className="lg:col-span-8 space-y-3">
                        {exp.achievements.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 text-sm text-[#C8C8C4] font-light leading-relaxed"
                          >
                            <span className="font-mono-code text-xs text-[#73736F] shrink-0 mt-0.5">
                              0{idx + 1}
                            </span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Education & Academic Credentials */}
      <div className="mt-20 pt-12 border-t border-[#222220]">
        <div className="flex items-center gap-2 mb-8 text-xs font-mono-code uppercase tracking-widest text-[#73736F]">
          <GraduationCap className="w-4 h-4 text-[#8E8E88]" />
          <span>EDUCATION &amp; ACADEMIC FOUNDATIONS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EDUCATION.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 border border-[#222220] bg-[#161614] flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-mono-code text-[#73736F] tracking-widest uppercase block mb-1">
                  {edu.period} &bull; {edu.location}
                </span>
                <h4 className="text-lg font-bold tracking-tight text-[#E8E8E5]">
                  {edu.institution}
                </h4>
                <p className="text-xs font-mono-code text-[#A3A39E] mt-1">
                  {edu.degree}
                </p>
              </div>
              {edu.details && (
                <p className="text-xs text-[#73736F] font-light mt-4 pt-3 border-t border-[#1f1f1d]">
                  {edu.details}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
