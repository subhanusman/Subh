import React from 'react';
import { ArrowUpRight, Compass, Layers, ShieldCheck, Eye } from 'lucide-react';

interface StudioIntroductionProps {
  onExploreCapabilities: () => void;
  onOpenCaseStudy: (projectId: string) => void;
}

export const StudioIntroduction: React.FC<StudioIntroductionProps> = ({
  onExploreCapabilities,
  onOpenCaseStudy,
}) => {
  const packagingImageSrc = '/src/assets/images/brand_identity_packaging_1794223720043.jpg';
  const [imageLoaded, setImageLoaded] = React.useState(true);

  const pillars = [
    {
      index: '01',
      title: 'Subtractive Elegance',
      description:
        'We eliminate superfluous ornamentation, bloated code, and transient trends. What remains is pristine visual truth—bold negative space, unyielding typographic structure, and emotional permanence.',
    },
    {
      index: '02',
      title: 'Kinetic Physics',
      description:
        'Motion is never decorative afterthought. Every micro-transition, caustic refraction, and kinetic acceleration curve is calibrated against natural physical inertia to deliver tactile satisfaction.',
    },
    {
      index: '03',
      title: 'Engineered Permanence',
      description:
        'Static frontend architecture engineered for global edge networks. Zero fragile backend databases, zero runtime dependencies, instant global edge CDN delivery, and unbreakable stability.',
    },
  ];

  return (
    <section id="ethos" className="py-20 sm:py-24 md:py-32 border-b border-zinc-900 bg-[#0a0a0d] relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 pb-6 sm:pb-8 border-b border-zinc-800/80">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2 sm:mb-3">
              The Ethos · Kaizen (改善)
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white max-w-2xl [text-wrap:balance]">
              The Art of Relentless, Iterative Elevation.
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
            NEXTR KAIZEN Lab functions as the avant-garde research and design division of{' '}
            <span className="text-zinc-200 font-medium">NEXTR Digital Solutions & Services</span>, 
            incubating conceptual methodologies for luxury brands and digital pioneers.
          </p>
        </div>

        {/* 2-Column Split: Studio Methodology & Curated Visual Focus */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left: 3 Pillars with Editorial Numbering */}
          <div className="lg:col-span-7 flex flex-col gap-8 sm:gap-10">
            {pillars.map((pillar) => (
              <div key={pillar.index} className="flex gap-4 sm:gap-6 group">
                <div className="text-xs sm:text-sm font-mono text-zinc-500 font-semibold pt-1 tracking-wider tabular-nums shrink-0">
                  {pillar.index}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-100 mb-2 group-hover:text-white transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}

            <div className="pt-2 sm:pt-4">
              <button
                onClick={onExploreCapabilities}
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-zinc-300 hover:text-white transition-colors cursor-pointer group min-h-[44px]"
              >
                <span>Review Core Capabilities</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

          {/* Right: Tactile Materiality Spotlight */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 p-2.5 sm:p-3 group">
              <div className="overflow-hidden rounded-lg aspect-[4/3] relative bg-zinc-900">
                {imageLoaded ? (
                  <img
                    src={packagingImageSrc}
                    alt="ARCHETYPE KAIZEN - Tactile rigid packaging design and brand stationery"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    onError={() => setImageLoaded(false)}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-zinc-900 flex items-center justify-center p-6 text-center">
                    <div className="space-y-1">
                      <div className="text-xs font-mono uppercase text-zinc-400">ARCHETYPE KAIZEN</div>
                      <div className="text-xs text-zinc-500">Tactile Packaging Materiality Study</div>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                
                <button
                  onClick={() => onOpenCaseStudy('archetype-kaizen')}
                  className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-950 bg-white/95 rounded shadow-lg hover:bg-white transition-all cursor-pointer min-h-[36px]"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect Case Study</span>
                </button>
              </div>

              <div className="pt-3 sm:pt-4 pb-1 sm:pb-2 px-1 sm:px-2">
                <div className="flex items-center justify-between text-xs text-zinc-400 font-mono mb-1">
                  <span>ARCHETYPE KAIZEN</span>
                  <span>Physical Materiality</span>
                </div>
                <p className="text-xs text-zinc-300 font-light leading-relaxed">
                  Deep blind debossing, custom wax seal casting, and sustainable cotton pulp substrates.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
