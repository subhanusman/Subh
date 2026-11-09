import React, { useState, useEffect } from 'react';
import { Mail, MessageSquare, Copy, Check, ArrowUp, Clock } from 'lucide-react';

export const ContactFooter: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [studioTime, setStudioTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      // Calculate studio time (UTC+5)
      const now = new Date();
      const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
      const studioDate = new Date(utcTime + 5 * 3600000);
      const hours = studioDate.getHours().toString().padStart(2, '0');
      const minutes = studioDate.getMinutes().toString().padStart(2, '0');
      const seconds = studioDate.getSeconds().toString().padStart(2, '0');
      setStudioTime(`${hours}:${minutes}:${seconds} UTC+5`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const email = 'nextrsolutions@gmail.com';
  const whatsappUrl = 'https://wa.me/923239943441';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#050507] text-zinc-300 border-t border-zinc-900 pt-20 pb-12 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Main Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-zinc-900">
          
          {/* Brand & Studio Ethos */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-white" />
              <span className="font-display-modern font-bold tracking-wider text-white text-lg uppercase">
                NEXTR KAIZEN Lab
              </span>
            </div>

            <p className="text-sm text-zinc-400 font-light leading-relaxed max-w-md">
              The conceptual design research division of{' '}
              <span className="text-zinc-200 font-medium">NEXTR Digital Solutions & Services</span>. 
              Engineering bespoke brand identities, kinetic 3D systems, tactile packaging, 
              and lightning-fast static web experiences.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 pt-2">
              <Clock className="w-3.5 h-3.5 text-zinc-400" />
              <span>Studio Local Time:</span>
              <span className="text-zinc-300 font-medium tabular-nums">{studioTime || '05:00 UTC+5'}</span>
            </div>
          </div>

          {/* Direct Communication Channels */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-4">
                Direct Inquiries
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                {/* Email Channel */}
                <div className="flex-1 flex items-center justify-between p-4 rounded-xl border border-zinc-800 bg-zinc-950/60">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-zinc-400" />
                    <div>
                      <div className="text-[10px] font-mono uppercase text-zinc-500">Email Studio</div>
                      <a
                        href={`mailto:${email}`}
                        className="text-xs sm:text-sm font-medium text-white hover:underline"
                      >
                        {email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={copyEmail}
                    className="p-2 rounded hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                    title="Copy email address"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* WhatsApp Channel - STRICT REQUIREMENT: Displays ONLY "Visit". Phone number NEVER printed in visible text. */}
                <div className="flex-1 flex items-center justify-between p-4 rounded-xl border border-zinc-800 bg-zinc-950/60">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-4 h-4 text-zinc-400" />
                    <div>
                      <div className="text-[10px] font-mono uppercase text-zinc-500">Instant Messaging</div>
                      <div className="text-xs sm:text-sm font-medium text-zinc-200">WhatsApp Channel</div>
                    </div>
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-950 bg-zinc-100 hover:bg-white rounded transition-colors cursor-pointer"
                  >
                    Visit
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Navigation Links */}
            <div className="flex items-center justify-between pt-4 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-6">
                <a href="#projects" className="hover:text-white transition-colors">Portfolio</a>
                <a href="#ethos" className="hover:text-white transition-colors">Philosophy</a>
                <a href="#capabilities" className="hover:text-white transition-colors">Capabilities</a>
                <a href="#brief-section" className="hover:text-white transition-colors">Brief</a>
              </div>

              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Back to top"
              >
                <span>Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

        {/* Conceptual Disclaimer & Exact Footer Credit */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            All portfolio works are conceptual demonstrations showcasing creative direction capabilities.
          </div>

          {/* Exact requested credit */}
          <div className="text-zinc-400 font-medium">
            Developed by NEXTR Digital Solutions & Services
          </div>
        </div>

      </div>
    </footer>
  );
};
