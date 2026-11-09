import React, { useEffect, useState } from 'react';
import { Project } from '../types';
import { X, Maximize2, Check, Copy, ArrowUpRight, CheckCircle2, Sparkles, Layers } from 'lucide-react';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenLightbox: (imageUrl: string, title: string) => void;
  onInquireProject: (projectType: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onOpenLightbox,
  onInquireProject,
}) => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md animate-fadeIn overflow-y-auto">
      {/* Click outside backdrop */}
      <div className="fixed inset-0 -z-10" onClick={onClose} aria-hidden="true" />

      {/* Modal Card */}
      <div className="relative w-full max-w-5xl bg-[#09090c] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Sticky Header with Close */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#09090c]/95 border-b border-zinc-800/80 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              Case Study
            </span>
            <span className="text-zinc-600">·</span>
            <span className="text-xs font-mono text-zinc-500 uppercase">
              {project.categoryLabel}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800/80 transition-all cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 md:p-10 space-y-12">
          
          {/* Conceptual Notice Banner */}
          <div className="p-3.5 rounded-lg border border-zinc-800 bg-zinc-950/60 flex items-center justify-between text-xs text-zinc-400 font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-zinc-400" />
              <span>Conceptual Studio Demonstration · NEXTR KAIZEN Lab</span>
            </div>
            <span className="text-zinc-500">{project.year}</span>
          </div>

          {/* Project Header */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
              {project.title}
            </h1>
            <p className="text-lg text-zinc-300 font-light leading-relaxed max-w-2xl font-serif-luxury italic">
              {project.subtitle}
            </p>
          </div>

          {/* Hero Visual Display with Lightbox Action */}
          <div className="relative rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 group">
            <img
              src={project.heroImage}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-[320px] sm:h-[420px] md:h-[480px] object-cover transition-transform duration-700 ease-out group-hover:scale-102"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-4 right-4 flex items-center gap-2">
              <button
                onClick={() => onOpenLightbox(project.heroImage, project.title)}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-zinc-950 bg-white rounded shadow-xl hover:bg-zinc-200 transition-all cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Zoom Fullscreen</span>
              </button>
            </div>

            <div className="absolute bottom-4 left-4 text-xs font-mono text-zinc-300 pointer-events-none">
              High-Fidelity Studio Asset · {project.aspectRatio || '16:9'}
            </div>
          </div>

          {/* Key Metric Highlights */}
          <div className="grid grid-cols-3 gap-4 p-5 rounded-xl border border-zinc-800/80 bg-zinc-950/40">
            {project.stats.map((stat, i) => (
              <div key={i} className="text-center sm:text-left">
                <div className="text-lg sm:text-2xl font-bold text-white font-display-modern tabular-nums">
                  {stat.value}
                </div>
                <div className="text-xs text-zinc-400 mt-1 font-mono">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Two-Column Inquiry: Hypothesis & Challenge */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-zinc-800/80">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">
                01. Conceptual Hypothesis
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed font-light">
                {project.clientHypothesis}
              </p>
            </div>

            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">
                02. The Creative Challenge
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed font-light">
                {project.challenge}
              </p>
            </div>
          </div>

          {/* The Kaizen Solution */}
          <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-950/80">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">
              03. The Architectural Solution
            </div>
            <p className="text-base text-zinc-200 leading-relaxed font-light mb-4">
              {project.solution}
            </p>
            <blockquote className="border-l-2 border-zinc-600 pl-4 py-1 text-sm font-serif-luxury italic text-zinc-400">
              "{project.featuredQuote}"
            </blockquote>
          </div>

          {/* Deliverables Checklist */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-4">
              04. Conceptual Deliverables Inventory
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.deliverables.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg border border-zinc-800/80 bg-zinc-900/30 text-xs text-zinc-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-zinc-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Color Palette Swatch Inspector */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-500">
                05. Material & Color Palette Inspector
              </div>
              <div className="text-[11px] text-zinc-500 font-mono">
                Click any swatch to copy HEX code
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {project.colorPalette.map((swatch) => (
                <button
                  key={swatch.hex}
                  onClick={() => copyToClipboard(swatch.hex)}
                  className="flex flex-col text-left p-3 rounded-xl border border-zinc-800 bg-zinc-950/70 hover:border-zinc-700 transition-all cursor-pointer group"
                >
                  <div
                    className="w-full h-14 rounded-lg mb-3 border border-white/10 relative overflow-hidden flex items-end justify-end p-2"
                    style={{ backgroundColor: swatch.hex }}
                  >
                    {copiedHex === swatch.hex ? (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/80 text-white flex items-center gap-1">
                        <Check className="w-3 h-3 text-emerald-400" />
                        Copied
                      </span>
                    ) : (
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded bg-black/60 text-white">
                        <Copy className="w-3 h-3" />
                      </span>
                    )}
                  </div>
                  <div className="text-xs font-semibold text-white">{swatch.name}</div>
                  <div className="text-[11px] font-mono text-zinc-400 mt-0.5">{swatch.hex}</div>
                  <div className="text-[10px] text-zinc-500 mt-1">{swatch.role}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Typography Hierarchy Breakdown */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-4">
              06. Typographic System
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.typographySpecs.map((spec, i) => (
                <div key={i} className="p-4 rounded-xl border border-zinc-800 bg-zinc-950/70">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-2">
                    <span>{spec.role}</span>
                    <span>{spec.weight}</span>
                  </div>
                  <div className="text-lg font-medium text-white mb-1">
                    {spec.fontFamily}
                  </div>
                  <div className="text-xs text-zinc-400 font-mono tracking-wide">
                    Sample: {spec.sample}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-zinc-500 font-mono text-center sm:text-left">
              Crafted by NEXTR KAIZEN Lab · Conceptual Archive
            </div>

            <button
              onClick={() => {
                onClose();
                onInquireProject(project.categoryLabel);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-zinc-950 bg-zinc-100 rounded-sm hover:bg-white transition-all cursor-pointer shadow-lg shadow-white/5"
            >
              <span>Brief Similar Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
