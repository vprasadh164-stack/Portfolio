import React, { useState, useRef, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';

interface WorkArchiveProps {
  onSelectProject: (project: Project) => void;
}

export const WorkArchive: React.FC<WorkArchiveProps> = ({ onSelectProject }) => {
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice(!window.matchMedia('(pointer: fine)').matches);
    };
    checkTouch();
    window.addEventListener('resize', checkTouch);
    return () => window.removeEventListener('resize', checkTouch);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isTouchDevice) return;
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const hoveredProject = PROJECTS.find((p) => p.id === hoveredProjectId);

  return (
    <section
      id="work"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#222220]"
    >
      {/* Editorial Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#222220] pb-6 mb-12 gap-4">
        <div>
          <span className="text-xs font-mono-code uppercase tracking-widest text-[#73736F] block mb-1">
            03 / PORTFOLIO
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#E8E8E5]">
            SELECTED WORK
          </h2>
        </div>

        <div className="flex items-center gap-6 font-mono-code text-xs text-[#8E8E88]">
          <span className="tracking-widest uppercase">
            01 / 0{PROJECTS.length}
          </span>
          <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-[#3a3a38]" />
          <span className="hidden sm:inline-block tracking-wider uppercase text-[#73736F]">
            STRATEGY &bull; D2C &bull; VENTURES
          </span>
        </div>
      </div>

      {/* Floating Hover Image Preview (Desktop Only) */}
      {!isTouchDevice && (
        <AnimatePresence>
          {hoveredProject && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: mousePos.x + 30,
                y: mousePos.y - 140,
              }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{
                type: 'spring',
                damping: 25,
                stiffness: 280,
                mass: 0.3,
              }}
              className="pointer-events-none fixed top-0 left-0 z-40 hidden md:block w-80 h-52 overflow-hidden shadow-2xl border border-[#333330] bg-[#161615]"
            >
              <img
                src={hoveredProject.image}
                alt={hoveredProject.title}
                className="w-full h-full object-cover grayscale contrast-125 brightness-95 transform scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent flex flex-col justify-end p-4">
                <span className="text-[10px] font-mono-code uppercase tracking-wider text-[#A3A39E]">
                  {hoveredProject.tag}
                </span>
                <span className="text-xs font-bold text-white font-mono-code tracking-tight">
                  {hoveredProject.title} &mdash; {hoveredProject.category}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {/* Projects List — Minimalist Editorial Rows */}
      <div className="divide-y divide-[#20201e]">
        {PROJECTS.map((project, idx) => (
          <div
            key={project.id}
            data-cursor="project"
            onClick={() => onSelectProject(project)}
            onMouseEnter={() => setHoveredProjectId(project.id)}
            onMouseLeave={() => setHoveredProjectId(null)}
            className="group cursor-pointer py-10 md:py-14 transition-all duration-300 relative"
          >
            {/* Desktop / Tablet Row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
              {/* Project Index */}
              <div className="lg:col-span-1 font-mono-code text-xs md:text-sm text-[#73736F] group-hover:text-[#E8E8E5] transition-colors">
                {project.number}
              </div>

              {/* Title & Tagline */}
              <div className="lg:col-span-5">
                <div className="flex items-center gap-3">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#E8E8E5] group-hover:translate-x-1.5 transition-transform duration-300 inline-block">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-[#73736F] opacity-0 group-hover:opacity-100 group-hover:text-white transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="text-xs sm:text-sm font-mono-code uppercase tracking-wider text-[#8E8E88] mt-2">
                  {project.tagline}
                </p>
              </div>

              {/* Category & Tag */}
              <div className="lg:col-span-3">
                <span className="text-xs font-mono-code uppercase tracking-wider text-[#A3A39E] block">
                  {project.category}
                </span>
                <span className="inline-block mt-2 text-[10px] font-mono-code uppercase px-2 py-0.5 border border-[#2a2a28] rounded text-[#73736F] bg-[#161615]">
                  {project.tag}
                </span>
              </div>

              {/* Description & Year */}
              <div className="lg:col-span-3 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-[#73736F] group-hover:text-[#A3A39E] transition-colors line-clamp-2 leading-relaxed font-light">
                  {project.description}
                </p>
                <div className="mt-3 flex items-center justify-between text-xs font-mono-code text-[#73736F]">
                  <span>{project.year}</span>
                  <span className="text-[#E8E8E5] font-semibold text-[11px] uppercase tracking-wider group-hover:underline underline-offset-4">
                    VIEW CASE &rarr;
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile Inline Image Thumbnail */}
            <div className="block lg:hidden mt-6 aspect-[16/9] w-full overflow-hidden border border-[#222220] bg-[#161614]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale contrast-125"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Archive Callout */}
      <div className="mt-12 pt-6 border-t border-[#222220] flex flex-col sm:flex-row items-baseline justify-between text-xs font-mono-code text-[#73736F] gap-2">
        <span>ALL CASES BACKED BY EMPIRICAL RESEARCH & COMMERCIAL METHODOLOGY</span>
        <span>CLICK ANY ENTRY TO INSPECT PROBLEM BREAKDOWN</span>
      </div>
    </section>
  );
};
