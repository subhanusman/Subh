import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenBrief: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBrief }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#projects' },
    { label: 'Ethos', href: '#ethos' },
    { label: 'Interactive Lab', href: '#interactive-lab' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#08080a]/90 backdrop-blur-md border-b border-zinc-800/80 py-3.5 shadow-2xl shadow-black/40'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-lg font-bold tracking-tight text-zinc-100 hover:text-white transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 group"
          >
            <span className="w-2.5 h-2.5 bg-zinc-100 group-hover:scale-125 transition-transform duration-300" />
            <span className="font-display-modern uppercase tracking-wider text-sm font-semibold">
              NEXTR KAIZEN Lab
            </span>
          </a>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-medium tracking-wide uppercase text-zinc-400">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-zinc-100 transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-zinc-200 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={onOpenBrief}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-950 bg-zinc-100 rounded-sm hover:bg-white hover:shadow-lg hover:shadow-zinc-100/10 active:scale-[0.98] transition-all whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Initiate Brief</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-zinc-400 hover:text-zinc-100 focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#08080a]/98 backdrop-blur-xl md:hidden pt-24 px-8 pb-10 flex flex-col justify-between animate-fadeIn">
          <nav className="flex flex-col gap-6">
            <div className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase border-b border-zinc-800 pb-2">
              Navigation
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-light text-zinc-200 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-8 border-t border-zinc-800 flex flex-col gap-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBrief();
              }}
              className="w-full py-3.5 text-center text-xs font-semibold uppercase tracking-wider text-zinc-950 bg-zinc-100 rounded-sm hover:bg-white transition-all cursor-pointer"
            >
              Initiate Project Brief
            </button>
            <div className="text-[11px] text-zinc-500 font-mono">
              NEXTR Digital Solutions & Services · Conceptual Lab
            </div>
          </div>
        </div>
      )}
    </>
  );
};
