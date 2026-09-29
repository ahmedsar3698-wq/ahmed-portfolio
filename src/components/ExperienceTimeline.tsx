import React from 'react';
import { MILESTONES, WORK_EXPERIENCE } from '../data/portfolioData';
import { Bot, Gamepad2, Cpu, Briefcase, ShoppingBag, CheckCircle2 } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-20 lg:py-28">
      {/* Section Header */}
      <div className="flex flex-col gap-2 mb-16">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono-code uppercase text-[#00f5ff] tracking-widest font-semibold">
            // EVOLUTIONARY TIMELINE &amp; WORK HISTORY
          </span>
          <div className="h-[1px] flex-grow max-w-xs bg-white/10"></div>
        </div>
        <h2 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          Professional Experience &amp; Development Journey
        </h2>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mt-1">
          Verified employment history from official CV paired with autonomous engineering milestones and open-source project achievements.
        </p>
      </div>

      {/* Verified Professional Work Experience Banner */}
      <div className="glass-panel rounded-2xl p-6 sm:p-8 mb-16 shadow-xl border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-start sm:items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#00f5ff]/10 border border-[#00f5ff]/30 flex items-center justify-center text-[#00f5ff] shrink-0">
            <ShoppingBag size={24} />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-mono-code text-[#00f5ff] uppercase font-semibold">
                Professional Employment
              </span>
              <span className="text-slate-500">·</span>
              <span className="text-xs font-mono-code text-slate-400">
                {WORK_EXPERIENCE[0].period}
              </span>
            </div>
            <h3 className="font-sora text-xl sm:text-2xl font-bold text-white mt-0.5">
              {WORK_EXPERIENCE[0].role} — {WORK_EXPERIENCE[0].organization}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mt-1 leading-relaxed">
              {WORK_EXPERIENCE[0].description}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 shrink-0">
          {WORK_EXPERIENCE[0].skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-xs font-mono-code text-slate-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Timeline Steps for Engineering Journey */}
      <div className="relative flex flex-col gap-12 sm:gap-16 before:absolute before:left-4 sm:before:left-1/2 before:-translate-x-1/2 before:top-4 before:bottom-4 before:w-[2px] before:bg-white/10">
        {MILESTONES.map((item, idx) => {
          const isEven = idx % 2 === 0;
          const isCyan = item.colorType === 'cyan';
          const isIndigo = item.colorType === 'indigo';

          return (
            <div
              key={item.phase}
              className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 w-full"
            >
              {/* Left Column Box (on Desktop for even idx, or empty for odd) */}
              <div className={`w-full sm:w-[46%] ${isEven ? 'block' : 'sm:hidden'}`}>
                {isEven && (
                  <div className="glass-panel rounded-2xl p-6 sm:p-7 flex flex-col gap-3 ml-10 sm:ml-0 hover:border-[#00f5ff]/40 transition-all shadow-xl">
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-xs font-mono-code uppercase font-semibold ${
                          isCyan ? 'text-[#00f5ff]' : isIndigo ? 'text-[#818cf8]' : 'text-[#c084fc]'
                        }`}
                      >
                        {item.phase} · {item.period}
                      </span>
                      <div className="p-1.5 rounded-lg bg-white/[0.05] text-[#00f5ff]">
                        {item.icon === 'Bot' && <Bot size={16} />}
                        {item.icon === 'Gamepad2' && <Gamepad2 size={16} />}
                        {item.icon === 'Cpu' && <Cpu size={16} />}
                      </div>
                    </div>

                    <h3 className="font-sora text-xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                )}
              </div>

              {/* Center Glowing Progress Node */}
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#0b0e16] border-2 border-[#00f5ff] flex items-center justify-center text-[#00f5ff] shadow-[0_0_15px_rgba(0,245,255,0.5)] z-10">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00f5ff] animate-ping"></span>
              </div>

              {/* Right Column Box (on Desktop for odd idx) */}
              <div className={`w-full sm:w-[46%] ${!isEven ? 'block' : 'hidden sm:block'}`}>
                {!isEven && (
                  <div className="glass-panel rounded-2xl p-6 sm:p-7 flex flex-col gap-3 ml-10 sm:ml-0 hover:border-[#818cf8]/40 transition-all shadow-xl">
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-xs font-mono-code uppercase font-semibold ${
                          isIndigo ? 'text-[#818cf8]' : isCyan ? 'text-[#00f5ff]' : 'text-[#c084fc]'
                        }`}
                      >
                        {item.phase} · {item.period}
                      </span>
                      <div className="p-1.5 rounded-lg bg-white/[0.05] text-[#818cf8]">
                        {item.icon === 'Bot' && <Bot size={16} />}
                        {item.icon === 'Gamepad2' && <Gamepad2 size={16} />}
                        {item.icon === 'Cpu' && <Cpu size={16} />}
                      </div>
                    </div>

                    <h3 className="font-sora text-xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
