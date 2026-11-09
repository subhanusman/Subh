import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, Maximize2 } from 'lucide-react';

interface HeroProps {
  onExploreWork: () => void;
  onOpenBrief: () => void;
  onOpenArtwork: (imageSrc: string, title: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onOpenBrief, onOpenArtwork }) => {
  const heroImageSrc = '/src/assets/images/hero_sculpture_artwork_1794223720531.jpg';
  const [imageLoaded, setImageLoaded] = React.useState(true);

  return (
    <section id="hero" className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grain border-b border-zinc-900 scroll-mt-24">
      {/* Ambient background glow accents */}
      <div
        className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] bg-zinc-800/20 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-zinc-700/10 rounded-full blur-[120px] sm:blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 relative z-10">
        {/* Split Hero: Left Column Type, Right Column Artwork */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Unboxed clean metadata kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono tracking-wider text-zinc-400 uppercase mb-4 sm:mb-6">
              <span>NEXTR KAIZEN Lab</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span className="text-zinc-300">Creative Agency Demonstration</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span className="text-zinc-500">2026 Edition</span>
            </div>

            {/* Oversized Headline with balanced wrap */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] sm:leading-[1.08] mb-6 sm:mb-8 [text-wrap:balance]">
              Relentless Craft. <br />
              <span className="font-serif-luxury italic font-normal text-zinc-300">
                Kinetic Elegance.
              </span> <br />
              Digital Permanence.
            </h1>

            {/* Editorial Lead Prose */}
            <p className="text-sm sm:text-base md:text-lg text-zinc-400 font-light leading-relaxed max-w-xl mb-8 sm:mb-10">
              NEXTR Digital Solutions & Services explores the boundary of brand identity, 
              dimensional 3D motion, tactile packaging, and high-performance static web 
              architectures through the Japanese discipline of Kaizen—continuous, 
              uncompromising refinement.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <button
                onClick={onExploreWork}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-zinc-950 bg-zinc-100 rounded-sm hover:bg-white hover:shadow-xl hover:shadow-white/5 active:scale-[0.98] transition-all cursor-pointer min-h-[44px]"
              >
                <span>Explore Selected Works</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onOpenBrief}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700 bg-zinc-900/60 rounded-sm hover:bg-zinc-900 active:scale-[0.98] transition-all cursor-pointer min-h-[44px]"
              >
                <span>Initiate Creative Brief</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Conceptual demonstration notice */}
            <div className="mt-6 sm:mt-8 text-xs text-zinc-500 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0" />
              <span>All showcase pieces are conceptual studio explorations for NEXTR Digital Solutions & Services.</span>
            </div>
          </div>

          {/* Right Column: Hero Artwork Visual */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl transition-all duration-500 group-hover:border-zinc-700">
              {imageLoaded ? (
                <img
                  src={heroImageSrc}
                  alt="CHRONO FLUIDUM - 3D chrome and matte liquid sculpture visual study"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  onError={() => setImageLoaded(false)}
                  className="w-full h-[320px] sm:h-[440px] lg:h-[520px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-[320px] sm:h-[440px] lg:h-[520px] bg-gradient-to-br from-zinc-900 via-zinc-950 to-black flex items-center justify-center p-6 text-center">
                  <div className="space-y-2">
                    <div className="w-12 h-12 rounded-full border border-zinc-700 mx-auto flex items-center justify-center text-zinc-400">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div className="text-xs font-mono uppercase text-zinc-400 tracking-wider">CHRONO FLUIDUM</div>
                    <div className="text-xs text-zinc-500">Liquid Chrome 3D Simulation Study</div>
                  </div>
                </div>
              )}

              {/* Scrim overlay for legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

              {/* Artwork caption & quick expand trigger */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 flex items-end justify-between gap-3">
                <div className="min-w-0">
                  <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-0.5 sm:mb-1">
                    Featured Visual Study · 01
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-white tracking-wide truncate">
                    CHRONO FLUIDUM // Liquid Chrome Sculpture
                  </div>
                </div>

                <button
                  onClick={() => onOpenArtwork(heroImageSrc, 'CHRONO FLUIDUM — Liquid Chrome Sculpture Study')}
                  className="p-2 sm:p-2.5 rounded-full bg-zinc-900/80 hover:bg-white text-zinc-300 hover:text-zinc-950 border border-zinc-700 transition-all cursor-pointer shadow-lg shrink-0 min-w-[36px] min-h-[36px] flex items-center justify-center"
                  aria-label="View full resolution artwork"
                  title="Expand artwork in full resolution"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Subtle aesthetic backdrop border framing */}
            <div className="hidden sm:block absolute -inset-2 rounded-2xl border border-zinc-800/40 -z-10 pointer-events-none group-hover:border-zinc-700/50 transition-colors" />
          </div>

        </div>

        {/* Claim-to-Proof Adjacency Row: Full width 4-column metric strip placed directly below split */}
        <div className="mt-14 sm:mt-18 lg:mt-20 pt-8 sm:pt-10 border-t border-zinc-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          <div>
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight font-display-modern tabular-nums">
              100%
            </div>
            <div className="text-xs text-zinc-400 font-medium tracking-wide mt-1">
              Static Architecture
            </div>
            <div className="text-[11px] text-zinc-500 mt-0.5">
              High-Speed Global Edge CDN
            </div>
          </div>

          <div>
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight font-display-modern tabular-nums">
              0 ms
            </div>
            <div className="text-xs text-zinc-400 font-medium tracking-wide mt-1">
              Backend Latency
            </div>
            <div className="text-[11px] text-zinc-500 mt-0.5">
              Pure client-side execution
            </div>
          </div>

          <div>
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight font-display-modern tabular-nums">
              8K Native
            </div>
            <div className="text-xs text-zinc-400 font-medium tracking-wide mt-1">
              Asset Fidelity
            </div>
            <div className="text-[11px] text-zinc-500 mt-0.5">
              Photorealistic 3D & render precision
            </div>
          </div>

          <div>
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight font-display-modern tabular-nums">
              Kaizen
            </div>
            <div className="text-xs text-zinc-400 font-medium tracking-wide mt-1">
              Continuous Iteration
            </div>
            <div className="text-[11px] text-zinc-500 mt-0.5">
              Brand, motion, web harmony
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
