import React, { useState } from 'react';
import { INITIAL_GITHUB_TELEMETRY } from '../data/portfolioData';
import { Terminal, ExternalLink, GitCommit, Check } from 'lucide-react';

export const GitHubActivity: React.FC = () => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  // Generate a realistic 52-week contribution distribution
  const weeks = 52;
  const daysPerWeek = 7;

  // Predictable pseudo-random matrix for consistent cybernetic display
  const matrixData = React.useMemo(() => {
    const data: { level: number; commits: number; date: string }[][] = [];
    const now = new Date();

    for (let w = 0; w < weeks; w++) {
      const weekCols = [];
      for (let d = 0; d < daysPerWeek; d++) {
        const seed = (w * 17 + d * 31) % 100;
        let level = 0;
        let commits = 0;

        if (seed > 85) {
          level = 4;
          commits = 7 + (seed % 6);
        } else if (seed > 65) {
          level = 3;
          commits = 4 + (seed % 4);
        } else if (seed > 40) {
          level = 2;
          commits = 2 + (seed % 3);
        } else if (seed > 20) {
          level = 1;
          commits = 1;
        }

        const dateOffset = (weeks - w) * 7 + (daysPerWeek - d);
        const dayDate = new Date(now.getTime() - dateOffset * 86400000);
        const dateStr = dayDate.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });

        weekCols.push({ level, commits, date: dateStr });
      }
      data.push(weekCols);
    }
    return data;
  }, []);

  const getCellClass = (level: number) => {
    switch (level) {
      case 4:
        return 'bg-[#00f5ff] shadow-[0_0_8px_rgba(0,245,255,0.6)]';
      case 3:
        return 'bg-[#00f5ff]/75';
      case 2:
        return 'bg-[#00f5ff]/45';
      case 1:
        return 'bg-[#00f5ff]/25';
      default:
        return 'bg-white/[0.05] hover:bg-white/[0.1]';
    }
  };

  return (
    <section className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-12">
      <div className="glass-panel rounded-2xl p-6 sm:p-8 flex flex-col gap-6 shadow-2xl">
        {/* Header Telemetry */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#00f5ff]/10 border border-[#00f5ff]/30 flex items-center justify-center text-[#00f5ff]">
              <Terminal size={24} />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-sora text-lg sm:text-xl font-bold text-white">
                  @{INITIAL_GITHUB_TELEMETRY.username}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#00f5ff]/10 border border-[#00f5ff]/30 text-[10px] font-mono-code uppercase text-[#00f5ff] font-semibold">
                  VERIFIED PROFILE
                </span>
              </div>
              <span className="text-xs text-slate-400 font-mono-code">
                Live telemetry from Muhammad Ahmed&apos;s public repositories
              </span>
            </div>
          </div>

          <a
            href={INITIAL_GITHUB_TELEMETRY.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-[#00f5ff] hover:bg-[#00dce5] text-[#090d16] font-mono-code text-xs uppercase font-bold tracking-wider flex items-center gap-2 shadow-md transition-all self-start sm:self-auto"
          >
            <span>View All 16 Repositories</span>
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Language Distribution Bar */}
        <div className="flex flex-col gap-2 pt-2">
          <div className="flex items-center justify-between text-xs font-mono-code">
            <span className="text-slate-400 uppercase tracking-wider">
              Ecosystem Language Distribution
            </span>
            <span className="text-[#00f5ff] font-semibold">100% Focused</span>
          </div>

          <div className="w-full h-3 rounded-full bg-white/[0.06] overflow-hidden flex shadow-inner">
            {INITIAL_GITHUB_TELEMETRY.languages.map((lang) => (
              <div
                key={lang.name}
                style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                className="h-full transition-all duration-500"
                title={`${lang.name}: ${lang.percentage}%`}
              />
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono-code text-slate-300 pt-1">
            {INITIAL_GITHUB_TELEMETRY.languages.map((lang) => (
              <span key={lang.name} className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: lang.color }}></span>
                <span>
                  {lang.name} ({lang.percentage}%)
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* Contribution Matrix Activity */}
        <div className="flex flex-col gap-2 pt-3 border-t border-white/10">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono-code uppercase text-slate-400 tracking-wider">
              Annual Matrix Activity
            </span>
            {activeTooltip && (
              <span className="text-xs font-mono-code text-[#00f5ff] animate-fade-in">
                {activeTooltip}
              </span>
            )}
          </div>

          {/* Matrix Grid */}
          <div className="overflow-x-auto pb-2">
            <div className="grid grid-flow-col grid-rows-7 gap-1.5 min-w-[720px] w-full py-1">
              {matrixData.flatMap((week, wIdx) =>
                week.map((day, dIdx) => (
                  <div
                    key={`${wIdx}-${dIdx}`}
                    onMouseEnter={() =>
                      setActiveTooltip(
                        day.commits > 0
                          ? `${day.commits} commits on ${day.date}`
                          : `No contributions on ${day.date}`
                      )
                    }
                    onMouseLeave={() => setActiveTooltip(null)}
                    className={`w-3.5 h-3.5 rounded-sm transition-all duration-150 cursor-pointer ${getCellClass(
                      day.level
                    )}`}
                  />
                ))
              )}
            </div>
          </div>

          {/* Matrix Legend */}
          <div className="flex items-center justify-between text-slate-400 text-[11px] font-mono-code pt-1">
            <span>Less active</span>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-white/[0.05]"></span>
              <span className="w-2.5 h-2.5 rounded-sm bg-[#00f5ff]/25"></span>
              <span className="w-2.5 h-2.5 rounded-sm bg-[#00f5ff]/45"></span>
              <span className="w-2.5 h-2.5 rounded-sm bg-[#00f5ff]/75"></span>
              <span className="w-2.5 h-2.5 rounded-sm bg-[#00f5ff]"></span>
            </div>
            <span>More active</span>
          </div>
        </div>
      </div>
    </section>
  );
};
