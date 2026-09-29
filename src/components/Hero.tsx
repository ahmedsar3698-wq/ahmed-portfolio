import React, { useState, useEffect } from 'react';
import { ThreeHeroScene } from './ThreeHeroScene';
import { PERSONAL_INFO, TYPEWRITER_PHRASES } from '../data/portfolioData';
import { 
  ArrowRight, 
  Github, 
  Mail, 
  Phone, 
  Sparkles, 
  Terminal, 
  Cpu, 
  Code 
} from 'lucide-react';

export const Hero: React.FC = () => {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = TYPEWRITER_PHRASES[phraseIdx];
    const typeSpeed = isDeleting ? 30 : 65;
    const holdTime = 2000;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentPhrase.length) {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), holdTime);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setPhraseIdx((prev) => (prev + 1) % TYPEWRITER_PHRASES.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, phraseIdx]);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pt-28 sm:pt-36 pb-20 lg:pb-32 overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Typography, Dynamic Typewriter, CTAs */}
        <div className="lg:col-span-7 flex flex-col gap-6 z-10">
          {/* Availability Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-[#00f5ff]/30 backdrop-blur-xl w-fit shadow-[0_0_15px_rgba(0,245,255,0.15)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f5ff] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00f5ff]"></span>
            </span>
            <span className="text-xs font-mono-code text-[#00f5ff] uppercase tracking-wider font-semibold">
              {PERSONAL_INFO.availability}
            </span>
          </div>

          {/* Main Title */}
          <div className="flex flex-col gap-2">
            <span className="text-xs sm:text-sm font-mono-code text-slate-400 tracking-widest uppercase flex items-center gap-2">
              <Sparkles size={14} className="text-[#00f5ff]" />
              <span>AI Architect · Autonomous Systems · Next.js</span>
            </span>
            <h1 className="font-sora text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight uppercase leading-[1.08]">
              Muhammad{' '}
              <span className="bg-gradient-to-r from-[#00f5ff] via-[#818cf8] to-[#c084fc] bg-clip-text text-transparent">
                Ahmed
              </span>
            </h1>

            {/* Typewriter Line */}
            <div className="h-10 sm:h-12 flex items-center mt-1">
              <span className="font-sora text-lg sm:text-2xl text-[#818cf8] font-semibold">
                {displayText}
              </span>
              <span className="font-sora text-xl sm:text-2xl text-[#00f5ff] animate-pulse ml-1 font-bold">
                _
              </span>
            </div>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed mt-2">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Hero CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
            <button
              onClick={() => handleScrollTo('projects')}
              className="px-6 py-3.5 rounded-xl bg-[#00f5ff] hover:bg-[#00dce5] text-[#090d16] font-sora text-sm font-bold flex items-center gap-2 shadow-[0_0_24px_rgba(0,245,255,0.4)] hover:shadow-[0_0_32px_rgba(0,245,255,0.6)] transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>View Projects</span>
              <ArrowRight size={16} />
            </button>

            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-white font-sora text-sm font-semibold flex items-center gap-2 shadow-sm transition-all hover:border-[#00f5ff]/40"
            >
              <Github size={16} className="text-[#00f5ff]" />
              <span>Explore GitHub</span>
            </a>

            <button
              onClick={() => handleScrollTo('contact')}
              className="px-5 py-3.5 rounded-xl bg-transparent hover:bg-white/[0.04] border border-white/10 text-slate-300 hover:text-white text-sm font-medium transition-all"
            >
              Contact Me
            </button>
          </div>

          {/* Social Quick Shortcuts */}
          <div className="flex items-center gap-3 pt-2">
            <span className="text-xs font-mono-code text-slate-400 uppercase">
              Direct Channels:
            </span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-slate-300 hover:text-[#00f5ff] transition-colors"
              title={`Email: ${PERSONAL_INFO.email}`}
              aria-label="Send Email"
            >
              <Mail size={16} />
            </a>
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-slate-300 hover:text-[#00f5ff] transition-colors"
              title={`Call: ${PERSONAL_INFO.phone}`}
              aria-label="Direct Phone"
            >
              <Phone size={16} />
            </a>
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-slate-300 hover:text-[#00f5ff] transition-colors"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <Github size={16} />
            </a>
          </div>

          {/* Quick Real Telemetry Cards */}
          <div className="grid grid-cols-3 gap-3 pt-3 max-w-lg">
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex flex-col">
              <span className="text-[10px] font-mono-code text-slate-400 uppercase">
                PUBLIC REPOS
              </span>
              <span className="font-sora text-xl sm:text-2xl font-bold text-[#00f5ff]">
                16+
              </span>
              <span className="text-[11px] text-slate-400 font-mono-code">
                GitHub Verified
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex flex-col">
              <span className="text-[10px] font-mono-code text-slate-400 uppercase">
                PRIMARY FOCUS
              </span>
              <span className="font-sora text-xl sm:text-2xl font-bold text-[#818cf8]">
                100%
              </span>
              <span className="text-[11px] text-slate-400 font-mono-code">
                TypeScript &amp; Web
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex flex-col">
              <span className="text-[10px] font-mono-code text-slate-400 uppercase">
                SYSTEM STATUS
              </span>
              <span className="font-sora text-xl sm:text-2xl font-bold text-emerald-400">
                Active
              </span>
              <span className="text-[11px] text-slate-400 font-mono-code">
                Engine &amp; LLM Dev
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive 3D Neural Viewport */}
        <div className="lg:col-span-5 relative w-full flex items-center justify-center">
          <div className="relative w-full rounded-3xl p-2 bg-gradient-to-br from-[#00f5ff]/20 via-white/[0.05] to-[#818cf8]/20 shadow-[0_0_50px_rgba(0,245,255,0.15)] backdrop-blur-3xl border border-white/10">
            <div className="relative w-full rounded-2xl overflow-hidden bg-[#080c16] dark-viewport min-h-[440px] md:min-h-[500px] flex items-center justify-center border border-slate-700/30">
              {/* Three.js Scene */}
              <ThreeHeroScene className="w-full h-full" />

              {/* Realtime Telemetry HUD Overlays */}
              <div className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-full bg-[#090d16]/80 border border-white/10 backdrop-blur-xl shadow-md flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00f5ff] animate-ping"></span>
                <span className="text-[10px] font-mono-code text-[#00f5ff] uppercase tracking-wider font-semibold">
                  CORE: NEURAL_MESH_3D
                </span>
              </div>

              <div className="absolute bottom-4 right-4 z-20 px-3.5 py-2 rounded-xl bg-white/[0.05] border border-white/10 backdrop-blur-xl shadow-lg flex items-center gap-3">
                <div className="flex flex-col text-right">
                  <span className="text-[9px] font-mono-code text-slate-400 uppercase tracking-widest">
                    ENGINE MODE
                  </span>
                  <span className="text-xs font-mono-code text-[#00f5ff] font-semibold">
                    WEBGL2 RENDERER
                  </span>
                </div>
                <div className="w-8 h-8 rounded-lg bg-[#00f5ff]/10 border border-[#00f5ff]/30 flex items-center justify-center text-[#00f5ff]">
                  <Cpu size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
