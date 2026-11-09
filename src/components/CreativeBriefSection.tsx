import React, { useState } from 'react';
import { BriefFormData } from '../types';
import { Send, CheckCircle, Copy, ArrowUpRight, Check, Sparkles, RotateCcw, MessageSquare } from 'lucide-react';

interface CreativeBriefSectionProps {
  initialProjectType?: string;
}

export const CreativeBriefSection: React.FC<CreativeBriefSectionProps> = ({
  initialProjectType,
}) => {
  const [formData, setFormData] = useState<BriefFormData>({
    fullName: '',
    organization: '',
    email: '',
    projectTypes: initialProjectType ? [initialProjectType] : ['Brand Identity & Systematic Typography'],
    timeline: '1–2 Months',
    budgetBracket: '$10,000 – $25,000',
    visionDescription: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const availableTypes = [
    'Brand Identity & Systematic Typography',
    '3D Artwork & Kinetic Motion Direction',
    'High-Performance Web & Digital Experiences',
    'Packaging & Tactile Art Direction',
  ];

  const timelines = ['2–4 Weeks', '1–2 Months', '3+ Months', 'Flexible / Exploratory'];

  const budgetBrackets = [
    '$5,000 – $10,000',
    '$10,000 – $25,000',
    '$25,000 – $50,000',
    '$50,000+',
    'To Be Determined',
  ];

  const handleTypeToggle = (type: string) => {
    setFormData((prev) => {
      const exists = prev.projectTypes.includes(type);
      if (exists) {
        if (prev.projectTypes.length === 1) return prev; // keep at least 1
        return { ...prev, projectTypes: prev.projectTypes.filter((t) => t !== type) };
      }
      return { ...prev, projectTypes: [...prev.projectTypes, type] };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.visionDescription) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      organization: '',
      email: '',
      projectTypes: ['Brand Identity & Systematic Typography'],
      timeline: '1–2 Months',
      budgetBracket: '$10,000 – $25,000',
      visionDescription: '',
    });
  };

  const briefText = `PROJECT BRIEF // NEXTR KAIZEN Lab
==========================================
Client: ${formData.fullName} ${formData.organization ? `(${formData.organization})` : ''}
Email: ${formData.email}
Disciplines: ${formData.projectTypes.join(', ')}
Timeline: ${formData.timeline}
Investment Bracket: ${formData.budgetBracket}

PROJECT VISION & SCOPE:
${formData.visionDescription}
==========================================
Generated via NEXTR KAIZEN Lab Demo
Direct Email: nextrsolutions@gmail.com`;

  const copyBriefToClipboard = () => {
    navigator.clipboard.writeText(briefText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const mailtoUrl = `mailto:nextrsolutions@gmail.com?subject=${encodeURIComponent(
    `Project Brief: ${formData.fullName} - ${formData.projectTypes[0] || 'Creative Exploration'}`
  )}&body=${encodeURIComponent(briefText)}`;

  return (
    <section id="brief-section" className="py-24 md:py-32 border-b border-zinc-900 bg-[#08080a] relative">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">
            Initiate Collaboration
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 [text-wrap:balance]">
            Submit a Creative Brief
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Outline your conceptual inquiry or commercial vision. All submissions 
            are evaluated for aesthetic fit and technological feasibility.
          </p>
        </div>

        {/* Form Container or Confirmation Card */}
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="p-8 sm:p-10 rounded-2xl border border-zinc-800 bg-zinc-950/70 shadow-2xl space-y-8"
          >
            {/* Identity Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                  Full Name <span className="text-zinc-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Julian Vance"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-zinc-800 bg-zinc-900/60 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                  Organization / Studio (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Atelier Vance"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-zinc-800 bg-zinc-900/60 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-400 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                Email Address <span className="text-zinc-500">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="julian@ateliervance.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-zinc-800 bg-zinc-900/60 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-400 transition-colors"
              />
            </div>

            {/* Disciplines Multi-Select */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
                Disciplines Required (Select one or more)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {availableTypes.map((type) => {
                  const isChecked = formData.projectTypes.includes(type);
                  return (
                    <button
                      type="button"
                      key={type}
                      onClick={() => handleTypeToggle(type)}
                      className={`p-3.5 rounded-lg border text-left text-xs font-medium transition-all flex items-center justify-between cursor-pointer ${
                        isChecked
                          ? 'border-zinc-300 bg-zinc-900 text-white shadow-sm'
                          : 'border-zinc-800 bg-zinc-900/30 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
                      }`}
                    >
                      <span>{type}</span>
                      <span
                        className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ml-2 ${
                          isChecked ? 'border-zinc-200 bg-white text-zinc-950' : 'border-zinc-700'
                        }`}
                      >
                        {isChecked && <Check className="w-2.5 h-2.5" />}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Timeline & Budget Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                  Target Timeline
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-zinc-800 bg-zinc-900/60 text-sm text-white focus:outline-none focus:border-zinc-400 transition-colors cursor-pointer"
                >
                  {timelines.map((t) => (
                    <option key={t} value={t} className="bg-zinc-950 text-white">
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                  Investment Bracket
                </label>
                <select
                  value={formData.budgetBracket}
                  onChange={(e) => setFormData({ ...formData, budgetBracket: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-zinc-800 bg-zinc-900/60 text-sm text-white focus:outline-none focus:border-zinc-400 transition-colors cursor-pointer"
                >
                  {budgetBrackets.map((b) => (
                    <option key={b} value={b} className="bg-zinc-950 text-white">
                      {b}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Vision Description */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                Project Vision & Core Objectives <span className="text-zinc-500">*</span>
              </label>
              <textarea
                required
                rows={4}
                placeholder="Describe your aesthetic ambitions, target audience, brand materiality, or digital challenges..."
                value={formData.visionDescription}
                onChange={(e) => setFormData({ ...formData, visionDescription: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-zinc-800 bg-zinc-900/60 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-400 transition-colors"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-zinc-500 font-mono">
                Local JavaScript processing · Zero data stored remotely
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-zinc-950 bg-zinc-100 rounded-sm hover:bg-white active:scale-[0.98] transition-all cursor-pointer shadow-lg shadow-white/5"
              >
                <span>Generate & Submit Brief</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        ) : (
          /* Confirmation & Summary Ticket */
          <div className="p-8 sm:p-10 rounded-2xl border border-zinc-800 bg-zinc-950/90 shadow-2xl space-y-8 animate-fadeIn">
            
            <div className="flex items-center gap-4 pb-6 border-b border-zinc-800">
              <div className="p-3 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-100">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Creative Brief Generated Successfully
                </h3>
                <div className="text-xs text-zinc-400 font-mono mt-0.5">
                  Reference: KAIZEN-DEMO-{Math.floor(1000 + Math.random() * 9000)}
                </div>
              </div>
            </div>

            {/* Summary Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-3.5 rounded-lg border border-zinc-800/80 bg-zinc-900/40">
                <span className="text-zinc-500 block mb-1">CLIENT CONTACT</span>
                <span className="text-white font-medium">{formData.fullName}</span>
                {formData.organization && <span className="text-zinc-400 block">{formData.organization}</span>}
                <span className="text-zinc-400 block">{formData.email}</span>
              </div>

              <div className="p-3.5 rounded-lg border border-zinc-800/80 bg-zinc-900/40">
                <span className="text-zinc-500 block mb-1">PARAMETERS</span>
                <span className="text-white block font-medium">Timeline: {formData.timeline}</span>
                <span className="text-zinc-400 block">Bracket: {formData.budgetBracket}</span>
              </div>
            </div>

            {/* Formatted Code Block of the Brief */}
            <div className="relative">
              <pre className="p-4 rounded-xl border border-zinc-800 bg-zinc-950 text-xs font-mono text-zinc-300 overflow-x-auto whitespace-pre-wrap leading-relaxed">
                {briefText}
              </pre>

              <button
                onClick={copyBriefToClipboard}
                className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Text</span>
                  </>
                )}
              </button>
            </div>

            {/* Next Steps & Direct Engagement */}
            <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-zinc-400">
                <div className="font-semibold text-white mb-0.5">Send directly to NEXTR Solutions:</div>
                <div>Submit this brief to <span className="text-zinc-200">nextrsolutions@gmail.com</span> or via WhatsApp.</div>
              </div>

              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                <a
                  href={mailtoUrl}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-zinc-950 bg-zinc-100 hover:bg-white rounded transition-colors cursor-pointer"
                >
                  <span>Dispatch Email</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                {/* WhatsApp button with STRICT requirement: Every WhatsApp button must display only Visit. Do not print phone number anywhere! */}
                <a
                  href="https://wa.me/923239943441"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-zinc-200 hover:text-white border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 rounded transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Visit</span>
                </a>

                <button
                  onClick={handleReset}
                  className="p-2.5 rounded border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  title="Create another brief"
                  aria-label="Create another brief"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
