import React from 'react';
import { QUALIFICATIONS, TECHNICAL_COURSES, PERSONAL_INFO } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen, Cpu, Languages, MapPin, CheckCircle2 } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-20 lg:py-28">
      {/* Section Header */}
      <div className="flex flex-col gap-2 mb-12">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono-code uppercase text-[#00f5ff] tracking-widest font-semibold">
            // ACADEMIC &amp; VOCATIONAL CREDENTIALS
          </span>
          <div className="h-[1px] flex-grow max-w-xs bg-white/10"></div>
        </div>
        <h2 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          Education, Qualifications &amp; Technical Courses
        </h2>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mt-1">
          Formal academic certifications, Quranic memorization distinction, and technical information technology courses verified from official documentation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Academic Qualifications & Quranic Distinction */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <GraduationCap size={18} className="text-[#00f5ff]" />
            <h3 className="font-sora text-lg sm:text-xl font-bold text-white">
              Academic &amp; Honorary Qualifications
            </h3>
          </div>

          <div className="space-y-4">
            {QUALIFICATIONS.map((item, idx) => (
              <div
                key={idx}
                className="glass-panel rounded-2xl p-6 flex flex-col gap-3 shadow-lg hover:border-[#00f5ff]/40 transition-all relative overflow-hidden"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-mono-code uppercase text-[#00f5ff] font-semibold">
                      {item.type}
                    </span>
                    <h4 className="font-sora text-lg sm:text-xl font-bold text-white mt-0.5">
                      {item.title}
                    </h4>
                    <span className="text-xs font-mono-code text-slate-400">
                      {item.institution}
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#00f5ff]/10 border border-[#00f5ff]/30 text-[10px] font-mono-code uppercase text-[#00f5ff] font-semibold shrink-0">
                    {item.badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Spoken Languages & Regional Demographics from CV */}
          <div className="glass-panel rounded-2xl p-6 flex flex-col gap-4 shadow-lg">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Languages size={18} className="text-[#818cf8]" />
                <span className="font-sora text-sm font-bold text-white">
                  Linguistic Capabilities
                </span>
              </div>
              <span className="text-[11px] font-mono-code text-slate-400">
                Official CV Verified
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {PERSONAL_INFO.languages.map((lang, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex flex-col">
                  <span className="font-sora text-sm font-bold text-white">{lang.name}</span>
                  <span className="text-[11px] font-mono-code text-[#00f5ff] mt-0.5">{lang.level}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 text-xs font-mono-code text-slate-400 pt-1">
              <MapPin size={14} className="text-[#00f5ff] shrink-0" />
              <span>{PERSONAL_INFO.address}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Professional Technical Courses */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <Cpu size={18} className="text-[#818cf8]" />
            <h3 className="font-sora text-lg sm:text-xl font-bold text-white">
              Specialized Technical Courses
            </h3>
          </div>

          <div className="space-y-4">
            {TECHNICAL_COURSES.map((course, idx) => (
              <div
                key={idx}
                className="glass-panel rounded-2xl p-6 flex flex-col gap-3 shadow-lg hover:border-[#818cf8]/40 transition-all relative overflow-hidden"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-mono-code uppercase text-[#818cf8] font-semibold">
                      {course.period}
                    </span>
                    <h4 className="font-sora text-lg sm:text-xl font-bold text-white mt-0.5">
                      {course.title}
                    </h4>
                    <span className="text-xs font-mono-code text-slate-400">
                      {course.institution}
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#818cf8]/10 border border-[#818cf8]/30 text-[10px] font-mono-code uppercase text-[#818cf8] font-semibold shrink-0">
                    {course.badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {course.description}
                </p>
              </div>
            ))}

            {/* Continuing Technical Mastery Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#00f5ff]/10 via-white/[0.03] to-[#818cf8]/10 border border-white/10 flex flex-col gap-3 shadow-md">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#00f5ff]" />
                <span className="font-sora text-sm font-bold text-white">
                  Continuous Computational &amp; AI Evolution
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Combining foundational electronics and CIT computer science knowledge with modern Deep Learning, Next.js, and autonomous agent engineering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
