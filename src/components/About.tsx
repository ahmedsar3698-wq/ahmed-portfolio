import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Bot, 
  Code2, 
  Gamepad2, 
  Server, 
  Terminal, 
  Copy, 
  Check, 
  Phone, 
  Mail, 
  ExternalLink, 
  MapPin, 
  Compass, 
  UserCheck 
} from 'lucide-react';

export const About: React.FC = () => {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <section id="about" className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-20 lg:py-28">
      {/* Section Header */}
      <div className="flex flex-col gap-2 mb-12">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono-code uppercase text-[#00f5ff] tracking-widest font-semibold">
            // IDENTIFICATION &amp; CAREER OBJECTIVE
          </span>
          <div className="h-[1px] flex-grow max-w-xs bg-white/10"></div>
        </div>
        <h2 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          Engineering Intelligence &amp; Personal Profile
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Profile Details */}
        <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between gap-8">
          <div className="flex flex-col gap-4">
            <p className="text-lg sm:text-xl text-white font-medium leading-relaxed">
              I am <span className="text-[#00f5ff] font-semibold">{PERSONAL_INFO.name}</span>, an{' '}
              <span className="text-[#818cf8] font-semibold">AI Engineer</span> and{' '}
              <span className="text-[#c084fc] font-semibold">Web Developer</span> based in{' '}
              <span className="text-white font-semibold">{PERSONAL_INFO.city}</span>, dedicated to bridging
              the chasm between experimental machine learning models and high-performance user interfaces.
            </p>

            {/* Official Career Objective Quote */}
            <div className="p-4 rounded-xl bg-white/[0.03] border-l-2 border-[#00f5ff] border-y border-r border-white/10 my-1">
              <div className="flex items-center gap-2 text-xs font-mono-code text-[#00f5ff] uppercase tracking-wider font-semibold mb-1">
                <Compass size={14} />
                <span>Professional Career Objective</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                &ldquo;{PERSONAL_INFO.objective}&rdquo;
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {PERSONAL_INFO.aboutDetailed}
            </p>
          </div>

          {/* Key Architecture Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#00f5ff]/30 transition-all flex items-start gap-3">
              <div className="p-2 rounded-lg bg-[#00f5ff]/10 text-[#00f5ff] mt-0.5">
                <Bot size={18} />
              </div>
              <div className="flex flex-col">
                <span className="font-sora text-sm font-semibold text-white">
                  Agentic Intelligence
                </span>
                <span className="text-xs text-slate-400 mt-1">
                  Generative LLMs, prompt chaining, vector state logic.
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#818cf8]/30 transition-all flex items-start gap-3">
              <div className="p-2 rounded-lg bg-[#818cf8]/10 text-[#818cf8] mt-0.5">
                <Code2 size={18} />
              </div>
              <div className="flex flex-col">
                <span className="font-sora text-sm font-semibold text-white">
                  Rigorous TypeScript
                </span>
                <span className="text-xs text-slate-400 mt-1">
                  Strict type safety, reusable primitives, Next.js architecture.
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#c084fc]/30 transition-all flex items-start gap-3">
              <div className="p-2 rounded-lg bg-[#c084fc]/10 text-[#c084fc] mt-0.5">
                <Gamepad2 size={18} />
              </div>
              <div className="flex flex-col">
                <span className="font-sora text-sm font-semibold text-white">
                  Interactive Canvas
                </span>
                <span className="text-xs text-slate-400 mt-1">
                  Procedural mechanics, math algorithms, 60fps render loops.
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-emerald-400/30 transition-all flex items-start gap-3">
              <div className="p-2 rounded-lg bg-emerald-400/10 text-emerald-400 mt-0.5">
                <Server size={18} />
              </div>
              <div className="flex flex-col">
                <span className="font-sora text-sm font-semibold text-white">
                  Modern Deployments
                </span>
                <span className="text-xs text-slate-400 mt-1">
                  Vercel, Git CI workflows, optimized cloud runtimes.
                </span>
              </div>
            </div>
          </div>

          {/* Telemetry Signature Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/10">
            <div className="flex items-center gap-2 text-xs font-mono-code text-slate-400">
              <MapPin size={13} className="text-[#00f5ff]" />
              <span>{PERSONAL_INFO.city} (Model Colony)</span>
            </div>

            <a
              href={PERSONAL_INFO.collaboratorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono-code text-[#818cf8] hover:text-[#00f5ff] transition-colors flex items-center gap-1.5"
            >
              <span>Collaborator Network ({PERSONAL_INFO.collaboratorName})</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* Right Interactive Glass Diagnostics & Personal Matrix */}
        <div className="lg:col-span-5 glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
              </div>
              <span className="text-xs font-mono-code text-slate-400 uppercase tracking-widest">
                Verified Identity Matrix
              </span>
            </div>

            {/* Terminal Window with Authentic Data */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#070a12] border border-white/5 font-mono-code text-xs sm:text-[13px] text-slate-300 space-y-2.5 leading-relaxed">
              <div className="text-slate-500">$ cv_record --entity &quot;{PERSONAL_INFO.name}&quot;</div>
              <div className="text-[#00f5ff] font-medium">
                &gt; FULL NAME: {PERSONAL_INFO.name}
              </div>
              <div className="text-slate-400">
                &gt; FATHER&apos;S NAME: {PERSONAL_INFO.fatherName}
              </div>
              <div className="text-slate-400">
                &gt; NATIONALITY: {PERSONAL_INFO.nationality} (D.O.B: 23 Aug 2006)
              </div>
              <div className="text-[#818cf8]">
                &gt; QUALIFICATION: Matriculation (Karachi Board) · Hafiz-e-Quran
              </div>
              <div className="text-[#c084fc]">
                &gt; COURSES: 7mo CIT (Global Computers) · 6mo Mobile Hardware
              </div>
              <div className="text-slate-400">
                &gt; LOCATION: Model Colony, Karachi
              </div>
              <div className="text-emerald-400 font-semibold flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span>&gt; STATUS: OPEN FOR GLOBAL OPPORTUNITIES</span>
              </div>
            </div>
          </div>

          {/* Contact Dispatch Buttons */}
          <div className="flex flex-col gap-2.5 pt-2">
            <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.04] border border-white/10">
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-[#00f5ff]" />
                <span className="text-xs sm:text-sm font-mono-code text-white">
                  {PERSONAL_INFO.phone}
                </span>
                <span className="text-[10px] font-mono-code text-slate-400">(CV Primary)</span>
              </div>
              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                className="px-3 py-1 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-xs font-mono-code text-white flex items-center gap-1.5 transition-all"
                title="Copy Primary Phone"
              >
                {copiedType === 'phone' ? (
                  <>
                    <Check size={12} className="text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy size={12} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.04] border border-white/10 truncate">
              <div className="flex items-center gap-2.5 truncate mr-2">
                <Mail size={16} className="text-[#818cf8] shrink-0" />
                <span className="text-xs sm:text-sm font-mono-code text-white truncate">
                  {PERSONAL_INFO.email}
                </span>
              </div>
              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                className="px-3 py-1 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-xs font-mono-code text-white flex items-center gap-1.5 transition-all shrink-0"
                title="Copy Email"
              >
                {copiedType === 'email' ? (
                  <>
                    <Check size={12} className="text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy size={12} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
