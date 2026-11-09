/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StudioIntroduction } from './components/StudioIntroduction';
import { InteractiveCanvas } from './components/InteractiveCanvas';
import { ProjectShowcase } from './components/ProjectShowcase';
import { CreativeCapabilities } from './components/CreativeCapabilities';
import { CreativeBriefSection } from './components/CreativeBriefSection';
import { ContactFooter } from './components/ContactFooter';
import { CaseStudyModal } from './components/CaseStudyModal';
import { Lightbox } from './components/Lightbox';
import { PROJECTS } from './data/projects';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    imageUrl: string | null;
    title: string | null;
  }>({
    isOpen: false,
    imageUrl: null,
    title: null,
  });
  const [briefProjectType, setBriefProjectType] = useState<string | undefined>(undefined);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenBrief = (projectType?: string) => {
    if (projectType) {
      setBriefProjectType(projectType);
    }
    scrollToSection('brief-section');
  };

  const handleOpenArtwork = (imageUrl: string, title: string) => {
    setLightboxState({
      isOpen: true,
      imageUrl,
      title,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleOpenCaseStudyById = (id: string) => {
    const found = PROJECTS.find((p) => p.id === id);
    if (found) {
      setSelectedProject(found);
    }
  };

  return (
    <div className="min-h-screen bg-[#08080a] text-zinc-100 flex flex-col font-sans selection:bg-zinc-200 selection:text-zinc-950">
      {/* Navigation */}
      <Navbar onOpenBrief={() => handleOpenBrief()} />

      {/* Main Content Layout */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreWork={() => scrollToSection('projects')}
          onOpenBrief={() => handleOpenBrief()}
          onOpenArtwork={handleOpenArtwork}
        />

        {/* Studio Introduction & Ethos */}
        <StudioIntroduction
          onExploreCapabilities={() => scrollToSection('capabilities')}
          onOpenCaseStudy={handleOpenCaseStudyById}
        />

        {/* Interactive 3D / Kinetic Simulation Canvas */}
        <InteractiveCanvas />

        {/* Selected Creative Projects Portfolio */}
        <ProjectShowcase
          projects={PROJECTS}
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenLightbox={handleOpenArtwork}
        />

        {/* Capabilities Section */}
        <CreativeCapabilities onOpenBrief={handleOpenBrief} />

        {/* Interactive Creative Brief Form */}
        <CreativeBriefSection initialProjectType={briefProjectType} />
      </main>

      {/* Contact & Exact Footer Credit */}
      <ContactFooter />

      {/* Case Study Detail Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenLightbox={handleOpenArtwork}
        onInquireProject={(categoryLabel) => handleOpenBrief(categoryLabel)}
      />

      {/* Fullscreen High-Resolution Lightbox */}
      <Lightbox
        isOpen={lightboxState.isOpen}
        imageUrl={lightboxState.imageUrl}
        title={lightboxState.title}
        onClose={handleCloseLightbox}
      />
    </div>
  );
}
