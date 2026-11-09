import React from 'react';
import { CAPABILITIES } from '../data/projects';
import { ArrowUpRight, Check, Clock } from 'lucide-react';

interface CreativeCapabilitiesProps {
  onOpenBrief: (capabilityTitle?: string) => void;
}

export const CreativeCapabilities: React.FC<CreativeCapabilitiesProps> = ({ onOpenBrief }) => {
  return (
    <section id="capabilities" className="py-24 md:py-32 border-b border-zinc-900 bg-[#09090c] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-zinc-800/80">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">
              Craft & Disciplines
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white [text-wrap:balance]">
              Comprehensive Creative Capabilities
            </h2>
          </div>

          <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
            Every engagement is approached with multidisciplinary synergy—connecting 
            tactile physical craft with high-speed static frontend architectures.
          </p>
        </div>

        {/* 4 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CAPABILITIES.map((cap, index) => (
            <div
              key={cap.id}
              className="p-8 rounded-2xl border border-zinc-800 bg-zinc-950/70 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Index & Turnaround */}
                <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-4 pb-3 border-b border-zinc-800/60">
                  <span className="text-zinc-400">DISCIPLINE 0{index + 1}</span>
                  <div className="flex items-center gap-1.5 text-zinc-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Est. {cap.turnaround}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-zinc-200 transition-colors">
                  {cap.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-zinc-400 leading-relaxed font-light mb-8">
                  {cap.description}
                </p>

                {/* Deliverables checklist */}
                <div className="space-y-2.5 mb-8">
                  <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">
                    Scope & Core Deliverables
                  </div>
                  {cap.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <span className="text-zinc-500 font-mono text-[10px] pt-0.5">·</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-6 border-t border-zinc-800/80">
                <button
                  onClick={() => onOpenBrief(cap.title)}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-300 hover:text-white transition-colors cursor-pointer group/cta"
                >
                  <span>Initiate Brief for this Discipline</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
