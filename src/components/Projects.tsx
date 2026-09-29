import React, { useState, useEffect, useMemo } from 'react';
import { ProjectItem } from '../types/portfolio';
import { VERIFIED_PROJECTS } from '../data/portfolioData';
import { 
  Search, 
  Sparkles, 
  ExternalLink, 
  Github, 
  Star, 
  GitFork, 
  X, 
  Terminal, 
  Gamepad2, 
  Bot, 
  Code 
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [projects, setProjects] = useState<ProjectItem[]>(VERIFIED_PROJECTS);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'ai' | 'games' | 'web'>('all');
  const [sortBy, setSortBy] = useState<'default' | 'alpha' | 'ai'>('default');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  // Fetch real repositories from GitHub API on mount
  useEffect(() => {
    const fetchGitHubRepos = async () => {
      try {
        setLoading(true);
        const cached = localStorage.getItem('ma_github_repos_cache');
        const cacheTimestamp = localStorage.getItem('ma_github_repos_timestamp');
        const now = Date.now();

        // Use cache if under 10 minutes old
        if (cached && cacheTimestamp && now - parseInt(cacheTimestamp, 10) < 600000) {
          const parsed = JSON.parse(cached);
          if (Array.isArray(parsed) && parsed.length > 0) {
            mergeProjects(parsed);
            setLoading(false);
            return;
          }
        }

        const res = await fetch('https://api.github.com/users/ahmedsar3698-wq/repos?sort=updated&per_page=30');
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data)) {
            localStorage.setItem('ma_github_repos_cache', JSON.stringify(data));
            localStorage.setItem('ma_github_repos_timestamp', now.toString());
            mergeProjects(data);
          }
        }
      } catch (err) {
        console.warn('GitHub API fetch fallback to curated list:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubRepos();
  }, []);

  const mergeProjects = (apiRepos: any[]) => {
    // Map existing verified projects with real stars, updated date, and add newly discovered repos
    const updated = VERIFIED_PROJECTS.map((vp) => {
      const match = apiRepos.find((r) => r.name.toLowerCase() === vp.name.toLowerCase());
      if (match) {
        return {
          ...vp,
          stars: match.stargazers_count ?? vp.stars,
          forks: match.forks_count ?? 0,
          updatedAt: new Date(match.updated_at).toLocaleDateString(undefined, { month: 'short', year: 'numeric' }),
          description: vp.description || match.description || 'Verified production repository by Muhammad Ahmed.',
        };
      }
      return vp;
    });

    // Check if there are other repos not in curated list
    apiRepos.forEach((repo) => {
      const exists = updated.some((p) => p.name.toLowerCase() === repo.name.toLowerCase());
      if (!exists && !repo.fork) {
        let cat: 'ai' | 'games' | 'web' = 'web';
        let badgeType: 'cyan' | 'indigo' | 'purple' = 'indigo';
        const nameLower = repo.name.toLowerCase();

        if (nameLower.includes('ai') || nameLower.includes('chat') || nameLower.includes('gpt') || nameLower.includes('model')) {
          cat = 'ai';
          badgeType = 'cyan';
        } else if (nameLower.includes('game') || nameLower.includes('puzzle') || nameLower.includes('play')) {
          cat = 'games';
          badgeType = 'purple';
        }

        updated.push({
          id: repo.name,
          name: repo.name,
          category: cat,
          categoryLabel: cat === 'ai' ? 'AI • Intelligence' : cat === 'games' ? 'Interactive Game' : 'Web Engineering',
          description: repo.description || 'High-performance TypeScript & AI codebase developed by Muhammad Ahmed.',
          technologies: [repo.language || 'TypeScript', 'Web APIs', 'Git'],
          repoUrl: repo.html_url,
          demoUrl: repo.homepage || undefined,
          badge: repo.language || 'TypeScript',
          badgeType,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          updatedAt: new Date(repo.updated_at).toLocaleDateString(undefined, { month: 'short', year: 'numeric' }),
          language: repo.language || 'TypeScript',
        });
      }
    });

    setProjects(updated);
  };

  // Filter and Sort
  const filteredProjects = useMemo(() => {
    let result = [...projects];

    // Filter by Category
    if (selectedFilter !== 'all') {
      result = result.filter((p) => p.category === selectedFilter);
    }

    // Filter by Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.technologies.some((t) => t.toLowerCase().includes(q))
      );
    }

    // Sort
    if (sortBy === 'alpha') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'ai') {
      result.sort((a, b) => (a.category === 'ai' ? -1 : 1));
    }

    return result;
  }, [projects, selectedFilter, searchQuery, sortBy]);

  // 3D Card Tilt Handler
  const handleCardTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `perspective(1000px) rotateX(${-y / 30}deg) rotateY(${x / 30}deg) scale3d(1.015, 1.015, 1.015)`;
  };

  const handleCardReset = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <section id="projects" className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-20 lg:py-28">
      {/* Section Header with Controls */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono-code uppercase text-[#00f5ff] tracking-widest font-semibold">
              // REPOSITORY INDEX
            </span>
            <div className="h-[1px] w-12 bg-white/10"></div>
          </div>
          <h2 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Verified Production Projects
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl">
            Live public repositories developed by Muhammad Ahmed. Explore source code, architecture, and live runtimes.
          </p>
        </div>

        {/* Search & Sort Controls */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Search Bar */}
          <div className="relative flex items-center min-w-[240px] sm:min-w-[280px]">
            <Search size={16} className="absolute left-3.5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by tech or title..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-400 text-xs sm:text-sm font-mono-code focus:outline-none focus:border-[#00f5ff]/50 focus:ring-1 focus:ring-[#00f5ff]/50 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 text-slate-400 hover:text-white"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Sort Selector */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs sm:text-sm font-mono-code focus:outline-none focus:border-[#00f5ff]/50 transition-all cursor-pointer"
          >
            <option value="default">Sort: Default</option>
            <option value="alpha">Sort: Alphabetical</option>
            <option value="ai">Sort: AI Focused</option>
          </select>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10 p-1 rounded-xl bg-white/[0.03] border border-white/10 w-fit">
        <button
          onClick={() => setSelectedFilter('all')}
          className={`px-4 py-2 rounded-lg text-xs font-mono-code uppercase font-semibold transition-all ${
            selectedFilter === 'all'
              ? 'bg-[#00f5ff] text-[#090d16] shadow-[0_0_15px_rgba(0,245,255,0.4)]'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          All ({projects.length})
        </button>
        <button
          onClick={() => setSelectedFilter('ai')}
          className={`px-4 py-2 rounded-lg text-xs font-mono-code uppercase font-semibold transition-all ${
            selectedFilter === 'ai'
              ? 'bg-[#00f5ff] text-[#090d16] shadow-[0_0_15px_rgba(0,245,255,0.4)]'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          AI &amp; Chatbots
        </button>
        <button
          onClick={() => setSelectedFilter('games')}
          className={`px-4 py-2 rounded-lg text-xs font-mono-code uppercase font-semibold transition-all ${
            selectedFilter === 'games'
              ? 'bg-[#00f5ff] text-[#090d16] shadow-[0_0_15px_rgba(0,245,255,0.4)]'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Interactive Games
        </button>
        <button
          onClick={() => setSelectedFilter('web')}
          className={`px-4 py-2 rounded-lg text-xs font-mono-code uppercase font-semibold transition-all ${
            selectedFilter === 'web'
              ? 'bg-[#00f5ff] text-[#090d16] shadow-[0_0_15px_rgba(0,245,255,0.4)]'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          TypeScript &amp; Web
        </button>
      </div>

      {/* Project Grid */}
      {filteredProjects.length === 0 ? (
        <div className="glass-panel rounded-2xl p-12 text-center flex flex-col items-center justify-center gap-3">
          <Terminal size={32} className="text-slate-500" />
          <p className="text-sm font-mono-code text-slate-300">
            No repositories matched your search query &quot;{searchQuery}&quot;
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedFilter('all');
            }}
            className="px-4 py-2 rounded-xl bg-white/[0.06] text-xs font-mono-code text-[#00f5ff] hover:bg-white/[0.12] transition-colors mt-2"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => {
            const isCyan = project.badgeType === 'cyan';
            const isIndigo = project.badgeType === 'indigo';

            return (
              <div
                key={project.id}
                onMouseMove={handleCardTilt}
                onMouseLeave={handleCardReset}
                className="glass-panel rounded-2xl p-6 sm:p-7 flex flex-col justify-between gap-6 transition-all duration-200 ease-out hover:shadow-2xl hover:border-white/20 group relative overflow-hidden"
              >
                {/* Glow Follower subtle backing */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00f5ff]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#00f5ff]/10 transition-all"></div>

                <div className="flex flex-col gap-4 relative z-10">
                  {/* Category & Status Badges */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`px-2.5 py-1 rounded-md text-[11px] font-mono-code uppercase font-semibold ${
                        isCyan
                          ? 'bg-[#00f5ff]/10 text-[#00f5ff] border border-[#00f5ff]/30'
                          : isIndigo
                          ? 'bg-[#818cf8]/10 text-[#818cf8] border border-[#818cf8]/30'
                          : 'bg-[#c084fc]/10 text-[#c084fc] border border-[#c084fc]/30'
                      }`}
                    >
                      {project.categoryLabel}
                    </span>

                    <div className="flex items-center gap-1.5 text-xs font-mono-code text-slate-400">
                      <Star size={13} className="text-amber-400 fill-amber-400/20" />
                      <span>{project.badge}</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="font-sora text-xl font-bold text-white group-hover:text-[#00f5ff] transition-colors flex items-center justify-between">
                      <span>{project.name}</span>
                      <span className="w-2 h-2 rounded-full bg-[#00f5ff] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-2 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/5 text-[11px] font-mono-code text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10 relative z-10">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-mono-code text-[#00f5ff] hover:underline"
                    aria-label={`View ${project.name} Repository`}
                  >
                    <Github size={14} />
                    <span>REPOSITORY</span>
                  </a>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="px-2.5 py-1 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-xs font-mono-code text-slate-300 hover:text-white transition-colors"
                      title="Inspect Details"
                    >
                      Inspect
                    </button>

                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-white/[0.06] hover:bg-[#00f5ff] text-slate-300 hover:text-[#090d16] transition-all"
                      aria-label="Open Link"
                    >
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Project Details Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="glass-panel w-full max-w-2xl rounded-2xl p-6 sm:p-8 relative shadow-2xl border border-white/20 animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-slate-400 hover:text-white transition-colors"
              aria-label="Close Modal"
            >
              <X size={18} />
            </button>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#00f5ff]/10 border border-[#00f5ff]/30 flex items-center justify-center text-[#00f5ff]">
                  {activeModalProject.category === 'ai' ? (
                    <Bot size={24} />
                  ) : activeModalProject.category === 'games' ? (
                    <Gamepad2 size={24} />
                  ) : (
                    <Code size={24} />
                  )}
                </div>
                <div>
                  <h3 className="font-sora text-2xl font-bold text-white">
                    {activeModalProject.name}
                  </h3>
                  <span className="text-xs font-mono-code text-[#00f5ff]">
                    {activeModalProject.categoryLabel}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-mono-code uppercase text-slate-400 tracking-wider">
                  Technical Architecture &amp; Overview
                </h4>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                  {activeModalProject.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono-code uppercase text-slate-400 tracking-wider mb-2">
                  Verified Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg bg-white/[0.06] border border-white/10 text-xs font-mono-code text-white"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-xs font-mono-code text-slate-400">
                  Verified GitHub Repository
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={activeModalProject.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-[#00f5ff] hover:bg-[#00dce5] text-[#090d16] font-sora text-xs font-bold flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(0,245,255,0.4)]"
                  >
                    <Github size={14} />
                    <span>Open GitHub Repository</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
