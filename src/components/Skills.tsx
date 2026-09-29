import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { 
  Brain, 
  Code2, 
  Wrench, 
  Sparkles, 
  Network, 
  Layers, 
  Terminal, 
  CheckCircle2 
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCluster, setSelectedCluster] = useState<string | null>('ai');

  const clusters = [
    {
      id: 'ai',
      name: 'Cluster 01: AI & Models',
      desc: 'LLMs • Deep Learning • Computer Vision',
      color: '#00f5ff',
      details: ['PyTorch & Python', 'LLM Agent Prompt Chaining', 'Vector Caching & Context Retention', 'Computer Vision Pipelines'],
    },
    {
      id: 'web',
      name: 'Cluster 02: TypeScript & Web',
      desc: 'Next.js • HTML5 Canvas • Tailwind CSS',
      color: '#818cf8',
      details: ['Strict TypeScript Typing', 'Next.js Server & Client Components', '60fps HTML5 Canvas Loops', 'Tailwind Responsive Glassmorphism'],
    },
    {
      id: 'tools',
      name: 'Cluster 03: Tools & Ecosystem',
      desc: 'Git • REST APIs • Vercel CI',
      color: '#c084fc',
      details: ['Git Repository Operations', 'REST API Architecture', 'Continuous Cloud Deployment', 'Linux Shell & Environment Automation'],
    },
  ];

  const handleCardTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `perspective(1000px) rotateX(${-y / 28}deg) rotateY(${x / 28}deg) scale3d(1.01, 1.01, 1.01)`;
  };

  const handleCardReset = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <section id="skills" className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-20 lg:py-28">
      {/* Section Header */}
      <div className="flex flex-col gap-2 mb-12">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono-code uppercase text-[#00f5ff] tracking-widest font-semibold">
            // COMPUTATIONAL ARSENAL
          </span>
          <div className="h-[1px] flex-grow max-w-xs bg-white/10"></div>
        </div>
        <h2 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          Verified Tech Stack &amp; Topology Graph
        </h2>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mt-1">
          Every skill listed maps directly to verified GitHub commits, repositories, and intelligent pipelines built by Muhammad Ahmed.
        </p>
      </div>

      {/* Interactive Topology Graph Container */}
      <div className="glass-panel rounded-2xl p-6 sm:p-8 mb-12 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2">
            <Network size={16} className="text-[#00f5ff]" />
            <span className="text-xs font-mono-code text-slate-300 uppercase tracking-wider font-semibold">
              Interactive Node Topology
            </span>
          </div>
          <span className="text-xs font-mono-code text-[#00f5ff]">
            CLICK A CLUSTER TO INSPECT ARCHITECTURAL FOCUS
          </span>
        </div>

        {/* Dynamic SVG / Canvas Graph */}
        <div className="relative w-full h-72 sm:h-80 rounded-xl bg-[#080b14]/70 border border-white/5 flex items-center justify-center overflow-hidden">
          {/* Animated Connecting Synapse Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 320" fill="none">
            {/* Center to Left */}
            <line
              x1="400"
              y1="160"
              x2="170"
              y2="95"
              stroke="#00f5ff"
              strokeWidth="2"
              strokeDasharray="5,5"
              className="opacity-40 animate-pulse"
            />
            {/* Center to Right */}
            <line
              x1="400"
              y1="160"
              x2="630"
              y2="95"
              stroke="#818cf8"
              strokeWidth="2"
              strokeDasharray="5,5"
              className="opacity-40 animate-pulse"
            />
            {/* Center to Bottom */}
            <line
              x1="400"
              y1="160"
              x2="400"
              y2="260"
              stroke="#c084fc"
              strokeWidth="2"
              strokeDasharray="5,5"
              className="opacity-40 animate-pulse"
            />

            {/* Orbit halos */}
            <circle cx="400" cy="160" r="48" className="stroke-white/10" strokeWidth="1" strokeDasharray="3,3" />
            <circle cx="400" cy="160" r="110" className="stroke-white/5" strokeWidth="1" />
          </svg>

          {/* Central MA Core Node */}
          <div className="absolute z-20 flex flex-col items-center justify-center w-20 h-20 rounded-full bg-gradient-to-tr from-[#00f5ff] to-[#818cf8] text-[#090d16] font-sora font-extrabold shadow-[0_0_35px_rgba(0,245,255,0.6)] cursor-default">
            <span className="text-base tracking-tight">MA</span>
            <span className="text-[9px] font-mono-code font-bold uppercase tracking-widest">CORE</span>
          </div>

          {/* Left Cluster Button: AI */}
          <button
            onClick={() => setSelectedCluster('ai')}
            className={`absolute left-4 sm:left-16 top-8 sm:top-10 z-20 p-3 sm:p-4 rounded-xl border backdrop-blur-xl flex flex-col items-center transition-all ${
              selectedCluster === 'ai'
                ? 'bg-[#00f5ff]/15 border-[#00f5ff] shadow-[0_0_20px_rgba(0,245,255,0.3)] scale-105'
                : 'bg-white/[0.04] border-white/10 hover:border-[#00f5ff]/40 hover:bg-white/[0.08]'
            }`}
          >
            <span className="text-[10px] font-mono-code text-[#00f5ff] uppercase tracking-wider font-semibold">
              Cluster 01
            </span>
            <span className="font-sora text-xs sm:text-sm font-bold text-white mt-0.5">
              AI &amp; Models
            </span>
            <span className="text-[11px] text-slate-400 font-mono-code hidden sm:inline-block">
              LLMs · PyTorch · Vision
            </span>
          </button>

          {/* Right Cluster Button: Web */}
          <button
            onClick={() => setSelectedCluster('web')}
            className={`absolute right-4 sm:right-16 top-8 sm:top-10 z-20 p-3 sm:p-4 rounded-xl border backdrop-blur-xl flex flex-col items-center transition-all ${
              selectedCluster === 'web'
                ? 'bg-[#818cf8]/15 border-[#818cf8] shadow-[0_0_20px_rgba(129,140,248,0.3)] scale-105'
                : 'bg-white/[0.04] border-white/10 hover:border-[#818cf8]/40 hover:bg-white/[0.08]'
            }`}
          >
            <span className="text-[10px] font-mono-code text-[#818cf8] uppercase tracking-wider font-semibold">
              Cluster 02
            </span>
            <span className="font-sora text-xs sm:text-sm font-bold text-white mt-0.5">
              TypeScript &amp; Web
            </span>
            <span className="text-[11px] text-slate-400 font-mono-code hidden sm:inline-block">
              Next.js · Canvas · Tailwind
            </span>
          </button>

          {/* Bottom Cluster Button: Tools */}
          <button
            onClick={() => setSelectedCluster('tools')}
            className={`absolute bottom-3 sm:bottom-4 z-20 p-2.5 sm:p-3.5 rounded-xl border backdrop-blur-xl flex flex-col items-center transition-all ${
              selectedCluster === 'tools'
                ? 'bg-[#c084fc]/15 border-[#c084fc] shadow-[0_0_20px_rgba(192,132,252,0.3)] scale-105'
                : 'bg-white/[0.04] border-white/10 hover:border-[#c084fc]/40 hover:bg-white/[0.08]'
            }`}
          >
            <span className="text-[10px] font-mono-code text-[#c084fc] uppercase tracking-wider font-semibold">
              Cluster 03
            </span>
            <span className="font-sora text-xs sm:text-sm font-bold text-white mt-0.5">
              Tools &amp; Workflow
            </span>
            <span className="text-[11px] text-slate-400 font-mono-code hidden sm:inline-block">
              Git · REST APIs · Vercel
            </span>
          </button>
        </div>

        {/* Selected Cluster Details Overlay */}
        {selectedCluster && (
          <div className="mt-4 p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: clusters.find(c => c.id === selectedCluster)?.color }}></span>
              <span className="font-sora text-sm font-bold text-white">
                {clusters.find(c => c.id === selectedCluster)?.name}
              </span>
              <span className="text-xs text-slate-400 font-mono-code hidden sm:inline">
                ({clusters.find(c => c.id === selectedCluster)?.desc})
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {clusters.find(c => c.id === selectedCluster)?.details.map((detail, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10 text-xs font-mono-code text-slate-300 flex items-center gap-1.5"
                >
                  <CheckCircle2 size={12} className="text-[#00f5ff]" />
                  <span>{detail}</span>
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Verified Skills Grid (3D Interactive Tilt Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {SKILL_CATEGORIES.map((cat) => {
          const isCyan = cat.labelType === 'cyan';
          const isIndigo = cat.labelType === 'indigo';

          return (
            <div
              key={cat.id}
              onMouseMove={handleCardTilt}
              onMouseLeave={handleCardReset}
              className="glass-panel rounded-2xl p-6 sm:p-7 flex flex-col justify-between gap-6 transition-transform duration-200 ease-out hover:shadow-2xl hover:border-white/20"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                      isCyan
                        ? 'bg-[#00f5ff]/10 text-[#00f5ff] border border-[#00f5ff]/30'
                        : isIndigo
                        ? 'bg-[#818cf8]/10 text-[#818cf8] border border-[#818cf8]/30'
                        : 'bg-[#c084fc]/10 text-[#c084fc] border border-[#c084fc]/30'
                    }`}
                  >
                    {cat.icon === 'Brain' && <Brain size={22} />}
                    {cat.icon === 'Code2' && <Code2 size={22} />}
                    {cat.icon === 'Wrench' && <Wrench size={22} />}
                  </div>

                  <span
                    className={`text-[11px] font-mono-code uppercase font-semibold ${
                      isCyan
                        ? 'text-[#00f5ff]'
                        : isIndigo
                        ? 'text-[#818cf8]'
                        : 'text-[#c084fc]'
                    }`}
                  >
                    {cat.label}
                  </span>
                </div>

                <div>
                  <h3 className="font-sora text-xl font-bold text-white">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-xs font-mono-code text-slate-200 hover:text-white hover:border-[#00f5ff]/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono-code text-slate-400">
                <span>Verified in 16+ Repos</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Production Ready</span>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
