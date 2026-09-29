import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Terminal, Mail, Phone, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full z-20 bg-[#080a10]/95 backdrop-blur-2xl mt-24">
      {/* Laser Divider Beam */}
      <div className="w-full h-[1px] laser-beam opacity-80"></div>

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Col 1: Identity */}
          <div className="md:col-span-5 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-[#00f5ff] font-sora font-extrabold text-sm">
                MA
              </div>
              <span className="font-sora text-lg font-bold text-white tracking-tight">
                {PERSONAL_INFO.name.toUpperCase()}
              </span>
            </div>

            <p className="text-sm text-slate-300 font-medium">
              {PERSONAL_INFO.tagline}
            </p>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Engineering ultra-responsive neural architectures, autonomous agents, and high-frequency digital web experiences.
            </p>
          </div>

          {/* Col 2: Telemetry Dispatch */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="text-xs font-mono-code uppercase text-[#00f5ff] tracking-widest font-semibold">
              Telemetry Dispatch
            </span>
            <div className="flex flex-col gap-2 text-xs font-mono-code text-slate-300">
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center gap-2 hover:text-[#00f5ff] transition-colors"
              >
                <Phone size={14} className="text-[#00f5ff]" />
                <span>{PERSONAL_INFO.phone} (Primary) · {PERSONAL_INFO.phoneAlt}</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2 hover:text-[#818cf8] transition-colors"
              >
                <Mail size={14} className="text-[#818cf8]" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <span className="text-slate-400 text-[11px] flex items-center gap-1.5 pt-0.5">
                <span>📍</span>
                <span>{PERSONAL_INFO.city}</span>
              </span>
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#c084fc] transition-colors"
              >
                <Github size={14} className="text-[#c084fc]" />
                <span>github.com/{PERSONAL_INFO.githubUsername}</span>
              </a>
            </div>
          </div>

          {/* Col 3: Status & Back to Top */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end gap-4">
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <div className="text-[11px] font-mono-code text-slate-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span>SYSTEM STATUS: OPTIMAL</span>
              </div>
              <div className="text-[11px] font-mono-code text-[#00f5ff] mt-0.5">
                PING: 14ms · RUNTIME: VERIFIED
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white text-xs font-mono-code transition-all shadow-md group"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} className="text-[#00f5ff] group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code text-slate-400">
          <p>© 2026 Muhammad Ahmed. Built with Next.js, Three.js, TypeScript &amp; Tailwind CSS.</p>
          <div className="flex items-center gap-4">
            <span className="text-[#00f5ff]">CYBERNETIC EDITION</span>
            <span>v4.2.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
