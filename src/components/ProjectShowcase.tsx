import React, { useState } from 'react';
import { Project, ProjectCategory } from '../types';
import { ArrowUpRight, Maximize2, Sparkles, Filter } from 'lucide-react';

interface ProjectShowcaseProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onOpenLightbox: (imageUrl: string, title: string) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  projects,
  onSelectProject,
  onOpenLightbox,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');

  const categories: { key: ProjectCategory; label: string }[] = [
    { key: 'all', label: 'All Projects' },
    { key: 'brand-identity', label: 'Brand Identity' },
    { key: 'three-d-motion', label: '3D & Motion' },
    { key: 'web-experience', label: 'Web Experience' },
    { key: 'packaging', label: 'Packaging & Art' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 md:py-32 border-b border-zinc-900 bg-[#08080a] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-zinc-800/80">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3 flex items-center gap-2">
              <span>Selected Portfolio</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span className="text-zinc-400">Conceptual Demonstrations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white [text-wrap:balance]">
              Curated Creative Explorations
            </h2>
          </div>

          <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
            Every showcase project represents an uncompromising conceptual inquiry 
            into visual materiality, kinetic physics, and digital permanence.
          </p>
        </div>

        {/* Category Filter Controls */}
        <div className="flex items-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => {
            const count = cat.key === 'all'
              ? projects.length
              : projects.filter((p) => p.category === cat.key).length;

            const isActive = selectedCategory === cat.key;

            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 py-2 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-2 ${
                  isActive
                    ? 'bg-zinc-100 text-zinc-950 shadow-md shadow-zinc-100/10'
                    : 'text-zinc-400 hover:text-zinc-100 bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[11px] tabular-nums ${isActive ? 'text-zinc-600' : 'text-zinc-500'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Responsive Bento Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => {
            const isWideCard = idx === 0 || idx === 3;

            return (
              <article
                key={project.id}
                className={`group relative rounded-2xl overflow-hidden border border-zinc-800/90 bg-zinc-950/70 hover:border-zinc-700 transition-all duration-500 flex flex-col justify-between ${
                  isWideCard ? 'lg:col-span-2' : 'lg:col-span-1'
                }`}
              >
                {/* Visual Media Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                  <img
                    src={project.heroImage}
                    alt={`${project.title} - ${project.subtitle}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Gradient Scrim for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                  {/* Top Floating Action: Lightbox Trigger */}
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenLightbox(project.heroImage, project.title);
                      }}
                      className="p-2 rounded-full bg-black/60 hover:bg-white text-zinc-300 hover:text-black border border-white/10 transition-all cursor-pointer backdrop-blur-md"
                      title="Inspect full image in Lightbox"
                      aria-label="Inspect full image in Lightbox"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Bottom Image Overlay: Subtle conceptual label */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-zinc-300 pointer-events-none">
                    <span>{project.year}</span>
                    <span>Conceptual Demonstration</span>
                  </div>
                </div>

                {/* Content & Metadata Section */}
                <div className="p-6 md:p-7 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Unboxed Metadata Line with separators */}
                    <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-2">
                      <span className="text-zinc-400">{project.categoryLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.stats[0]?.label}: {project.stats[0]?.value}</span>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-2 group-hover:text-zinc-200 transition-colors">
                      {project.title}
                    </h3>

                    {/* Subtitle / Scope */}
                    <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-200 hover:text-white transition-colors cursor-pointer group/btn"
                    >
                      <span>Read Case Study</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </button>

                    <div className="flex items-center gap-1.5">
                      {project.colorPalette.slice(0, 3).map((swatch) => (
                        <span
                          key={swatch.hex}
                          className="w-3 h-3 rounded-full border border-white/20 inline-block"
                          style={{ backgroundColor: swatch.hex }}
                          title={`${swatch.name} (${swatch.hex})`}
                        />
                      ))}
                    </div>
                  </div>

                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
