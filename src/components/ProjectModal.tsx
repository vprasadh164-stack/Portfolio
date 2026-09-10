import React, { useState, useEffect } from 'react';
import { X, ArrowUpRight, ArrowLeft, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Project, StrategyCaseDetail } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onNextProject?: () => void;
  onPrevProject?: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onNextProject,
  onPrevProject,
}) => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>('steel');

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNextProject) onNextProject();
      if (e.key === 'ArrowLeft' && onPrevProject) onPrevProject();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNextProject, onPrevProject]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      if (project.strategyCases && project.strategyCases.length > 0) {
        setSelectedCaseId(project.strategyCases[0].id);
      }
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  const activeStrategyCase = project.strategyCases?.find((c) => c.id === selectedCaseId);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#090908]/90 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 25, scale: 0.98 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl h-[92vh] mx-4 md:mx-6 bg-[#141413] border border-[#262624] text-[#E8E8E5] rounded-none shadow-2xl flex flex-col overflow-hidden z-10"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 md:px-10 py-5 border-b border-[#222220] bg-[#141413]/90 backdrop-blur-sm shrink-0">
            <div className="flex items-center gap-4">
              <span className="font-mono-code text-xs text-[#8E8E88] tracking-widest">
                {project.number} / 05
              </span>
              <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-[#3a3a38]" />
              <span className="text-xs font-mono-code uppercase px-2.5 py-0.5 border border-[#333330] rounded text-[#A3A39E] bg-[#1a1a18]">
                {project.tag}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {onPrevProject && (
                <button
                  onClick={onPrevProject}
                  className="p-2 border border-[#2a2a28] hover:border-[#E8E8E5] hover:bg-[#1e1e1c] text-[#A3A39E] hover:text-[#E8E8E5] transition-colors"
                  aria-label="Previous project"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
              )}
              {onNextProject && (
                <button
                  onClick={onNextProject}
                  className="p-2 border border-[#2a2a28] hover:border-[#E8E8E5] hover:bg-[#1e1e1c] text-[#A3A39E] hover:text-[#E8E8E5] transition-colors"
                  aria-label="Next project"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={onClose}
                className="p-2 border border-[#2a2a28] hover:border-[#E8E8E5] hover:bg-[#1e1e1c] text-[#A3A39E] hover:text-[#E8E8E5] transition-colors ml-2 flex items-center gap-1 text-xs font-mono-code"
                aria-label="Close case study"
              >
                <X className="w-4 h-4" />
                <span className="hidden sm:inline">ESC</span>
              </button>
            </div>
          </div>

          {/* Scrollable Content Body */}
          <div className="flex-1 overflow-y-auto px-6 md:px-12 py-8 md:py-12 space-y-12">
            {/* Title & Tagline Banner */}
            <div className="border-b border-[#222220] pb-8">
              <div className="flex items-baseline justify-between gap-4 flex-wrap">
                <span className="text-xs font-mono-code tracking-widest text-[#8E8E88] uppercase">
                  {project.category} &bull; {project.year}
                </span>
                <span className="text-xs font-mono-code text-[#73736F]">
                  VENKATESH PRASADH H P
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#E8E8E5] mt-3">
                {project.title}
              </h2>
              <p className="text-base sm:text-xl font-light text-[#A3A39E] mt-2 tracking-wide uppercase font-mono-code">
                {project.tagline}
              </p>

              <p className="text-base sm:text-lg text-[#C8C8C4] font-light leading-relaxed mt-6 max-w-3xl">
                {project.overview}
              </p>
            </div>

            {/* Key Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 border border-[#222220] bg-[#181816]">
              {project.metrics.map((metric, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#E8E8E5] font-mono-code">
                    {metric.value}
                  </span>
                  <span className="text-xs font-mono-code uppercase tracking-wider text-[#8E8E88] mt-1">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Editorial Image Showcase */}
            <div className="relative aspect-[16/9] w-full overflow-hidden border border-[#262624] bg-[#1a1a18]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale contrast-125 opacity-90"
              />
              <div className="absolute bottom-3 left-4 text-[11px] font-mono-code text-[#E8E8E5] bg-[#111111]/80 px-2.5 py-1 border border-[#333330]">
                {project.title} &bull; {project.tag}
              </div>
            </div>

            {/* If Strategy Cases (Work 05): Interactive Sub-Case Explorer */}
            {project.strategyCases && project.strategyCases.length > 0 ? (
              <div className="space-y-8 pt-4">
                <div className="border-b border-[#222220] pb-4">
                  <h3 className="text-xl font-bold tracking-tight text-[#E8E8E5]">
                    INTERACTIVE CASE ARCHIVE
                  </h3>
                  <p className="text-xs font-mono-code text-[#8E8E88] mt-1">
                    Select a strategic dilemma to inspect problem breakdown, MECE structuring, quantitative findings, and recommendations.
                  </p>
                </div>

                {/* Case Selection Tabs */}
                <div className="flex flex-wrap gap-2">
                  {project.strategyCases.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setSelectedCaseId(c.id)}
                      className={`px-4 py-2 text-xs font-mono-code uppercase tracking-wider border transition-colors ${
                        selectedCaseId === c.id
                          ? 'border-[#E8E8E5] bg-[#E8E8E5] text-[#111111] font-bold'
                          : 'border-[#2a2a28] bg-[#161615] text-[#A3A39E] hover:border-[#555550]'
                      }`}
                    >
                      {c.title}
                    </button>
                  ))}
                </div>

                {/* Active Case Details */}
                {activeStrategyCase && (
                  <div className="border border-[#262624] bg-[#161615] p-6 md:p-8 space-y-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[#222220] pb-4">
                      <div>
                        <span className="text-xs font-mono-code text-[#73736F] uppercase">
                          {activeStrategyCase.sector}
                        </span>
                        <h4 className="text-2xl font-bold tracking-tight text-[#E8E8E5] mt-1">
                          {activeStrategyCase.title}
                        </h4>
                      </div>
                      <span className="text-xs font-mono-code uppercase px-2.5 py-1 border border-[#333330] rounded bg-[#1c1c1a] text-[#E8E8E5]">
                        {activeStrategyCase.challengeType}
                      </span>
                    </div>

                    {/* Problem */}
                    <div>
                      <span className="text-xs font-mono-code text-[#8E8E88] uppercase tracking-wider block mb-1">
                        01 / PROBLEM STATEMENT
                      </span>
                      <p className="text-base text-[#E8E8E5] font-light leading-relaxed">
                        {activeStrategyCase.problem}
                      </p>
                    </div>

                    {/* Structure */}
                    <div className="border-t border-[#222220] pt-4">
                      <span className="text-xs font-mono-code text-[#8E8E88] uppercase tracking-wider block mb-2">
                        02 / MECE STRUCTURING
                      </span>
                      <ul className="space-y-2">
                        {activeStrategyCase.structure.map((item, idx) => (
                          <li key={idx} className="text-sm text-[#C8C8C4] flex items-start gap-2">
                            <span className="font-mono-code text-[#73736F] shrink-0">&bull;</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Analysis */}
                    <div className="border-t border-[#222220] pt-4">
                      <span className="text-xs font-mono-code text-[#8E8E88] uppercase tracking-wider block mb-2">
                        03 / EMPIRICAL ANALYSIS
                      </span>
                      <ul className="space-y-2">
                        {activeStrategyCase.analysis.map((item, idx) => (
                          <li key={idx} className="text-sm text-[#C8C8C4] flex items-start gap-2">
                            <span className="font-mono-code text-[#73736F] shrink-0">&bull;</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Recommendation */}
                    <div className="border-t border-[#222220] pt-4">
                      <span className="text-xs font-mono-code text-[#8E8E88] uppercase tracking-wider block mb-2">
                        04 / STRATEGIC RECOMMENDATION
                      </span>
                      <ul className="space-y-2">
                        {activeStrategyCase.recommendation.map((item, idx) => (
                          <li key={idx} className="text-sm text-[#E8E8E5] font-medium flex items-start gap-2">
                            <span className="font-mono-code text-emerald-400 shrink-0">&rarr;</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Learning Callout */}
                    <div className="border-t border-[#222220] pt-4 bg-[#1b1b19] p-4 border-l-2 border-l-[#E8E8E5]">
                      <span className="text-xs font-mono-code uppercase tracking-wider text-[#A3A39E] block mb-1">
                        KEY LEARNING & GENERALIZABLE PRINCIPLE
                      </span>
                      <p className="text-sm text-[#E8E8E5] italic">
                        &ldquo;{activeStrategyCase.learning}&rdquo;
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Regular Project Sections Breakdown */
              <div className="space-y-10 pt-4">
                {project.sections.map((section, idx) => (
                  <div
                    key={idx}
                    className="border-t border-[#222220] pt-6 grid grid-cols-1 md:grid-cols-12 gap-6"
                  >
                    <div className="md:col-span-4">
                      <h4 className="text-sm font-bold font-mono-code tracking-wider uppercase text-[#E8E8E5]">
                        {section.title}
                      </h4>
                      {section.subtitle && (
                        <p className="text-xs text-[#8E8E88] mt-1 font-mono-code">
                          {section.subtitle}
                        </p>
                      )}
                    </div>

                    <div className="md:col-span-8 space-y-4">
                      {section.content.map((paragraph, pIdx) => (
                        <p
                          key={pIdx}
                          className="text-base text-[#C8C8C4] font-light leading-relaxed"
                        >
                          {paragraph}
                        </p>
                      ))}

                      {section.callout && (
                        <div className="p-4 border border-[#2e2e2b] bg-[#181816] text-sm text-[#E8E8E5] italic border-l-2 border-l-[#E8E8E5]">
                          {section.callout}
                        </div>
                      )}

                      {section.dataPoints && section.dataPoints.length > 0 && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                          {section.dataPoints.map((dp, dIdx) => (
                            <div
                              key={dIdx}
                              className="p-3 border border-[#222220] bg-[#161614]"
                            >
                              <span className="text-lg font-bold font-mono-code text-[#E8E8E5] block">
                                {dp.value}
                              </span>
                              <span className="text-[11px] font-mono-code uppercase text-[#73736F]">
                                {dp.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Integrity / Source Label */}
            <div className="border-t border-[#222220] pt-6 flex items-center justify-between text-xs font-mono-code text-[#73736F]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#8E8E88]" />
                <span>VERIFIED CASE STUDY &bull; {project.tag}</span>
              </div>
              <button
                onClick={onClose}
                className="hover:text-[#E8E8E5] transition-colors"
              >
                Back to Selected Work &uarr;
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
