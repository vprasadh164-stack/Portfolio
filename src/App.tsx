import React, { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntroStatement } from './components/IntroStatement';
import { WorkArchive } from './components/WorkArchive';
import { ProjectModal } from './components/ProjectModal';
import { ProofNumbers } from './components/ProofNumbers';
import { ExperienceSection } from './components/ExperienceSection';
import { ThinkingFramework } from './components/ThinkingFramework';
import { AboutSection } from './components/AboutSection';
import { LeadershipSection } from './components/LeadershipSection';
import { CareerDirection } from './components/CareerDirection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PlaygroundModal } from './components/PlaygroundModal';
import { Project } from './types';
import { PROJECTS } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isPlaygroundOpen, setIsPlaygroundOpen] = useState<boolean>(false);

  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = PROJECTS.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % PROJECTS.length;
    setSelectedProject(PROJECTS[nextIndex]);
  };

  const handlePrevProject = () => {
    if (!selectedProject) return;
    const currentIndex = PROJECTS.findIndex((p) => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + PROJECTS.length) % PROJECTS.length;
    setSelectedProject(PROJECTS[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-[#111111] text-[#E8E8E5] relative selection:bg-[#E8E8E5] selection:text-[#111111] bg-noise">
      {/* Custom Minimal Desktop Cursor */}
      <CustomCursor />

      {/* Fixed Minimal Navigation */}
      <Navbar onOpenPlayground={() => setIsPlaygroundOpen(true)} />

      {/* Main Flow: One Continuous Visual Experience */}
      <main>
        {/* 01: Hero */}
        <Hero />

        {/* 02: Statement & Conversational Short Intro */}
        <IntroStatement />

        {/* 03: Centerpiece Work Archive */}
        <WorkArchive onSelectProject={(proj) => setSelectedProject(proj)} />

        {/* 04: Numbers & Empirical Evidence */}
        <ProofNumbers />

        {/* 05: Editorial Experience & Verified Trajectory */}
        <ExperienceSection />

        {/* 06: How I Think — The 4 Pillars */}
        <ThinkingFramework />

        {/* 07: About Me & Personal Roots */}
        <AboutSection />

        {/* 08: Beyond Work — Leadership & Community */}
        <LeadershipSection />

        {/* 09: Career Direction — NEXT */}
        <CareerDirection />

        {/* 10: Let's Talk — Contact */}
        <ContactSection />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* In-depth Case Study Reader Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onNextProject={handleNextProject}
        onPrevProject={handlePrevProject}
      />

      {/* Quantitative Strategy & Guesstimate Playground */}
      <PlaygroundModal
        isOpen={isPlaygroundOpen}
        onClose={() => setIsPlaygroundOpen(false)}
      />
    </div>
  );
}
