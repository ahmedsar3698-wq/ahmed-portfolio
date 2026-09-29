import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { ThemeMode } from '../types/portfolio';
import { 
  Sun, 
  Moon, 
  Sparkles, 
  Github, 
  Menu, 
  X, 
  ArrowUpRight 
} from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-nav shadow-[0_4px_30px_rgba(0,0,0,0.35)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-4">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-3 group"
          aria-label="Muhammad Ahmed - Home"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#00f5ff]/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] group-hover:shadow-[0_0_18px_rgba(0,245,255,0.4)] transition-all">
            <span className="font-sora text-sm font-extrabold text-[#00f5ff] tracking-tight">
              MA
            </span>
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f5ff] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f5ff]"></span>
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-sora text-sm sm:text-base font-bold text-white tracking-tight group-hover:text-[#00f5ff] transition-colors">
              MUHAMMAD AHMED
            </span>
            <span className="text-[10px] tracking-wider text-slate-400 uppercase font-mono-code">
              AI &amp; Web Architect
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3.5 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-[#00f5ff] text-[#090d16] font-semibold shadow-[0_0_15px_rgba(0,245,255,0.4)]'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Theme Selector & Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Availability Indicator */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f5ff] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f5ff]"></span>
            </span>
            <span className="text-[11px] font-mono-code uppercase text-[#00f5ff]">
              Available for Hire
            </span>
          </div>

          {/* Theme Switcher Pills */}
          <div className="flex items-center p-1 rounded-full bg-white/[0.05] border border-white/10 shadow-inner">
            <button
              onClick={() => setTheme('light-glass')}
              className={`p-1.5 rounded-full transition-all ${
                theme === 'light-glass'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Light Glass Mode"
              aria-label="Switch to Light Glass mode"
            >
              <Sun size={14} />
            </button>
            <button
              onClick={() => setTheme('dark-glass')}
              className={`p-1.5 rounded-full transition-all ${
                theme === 'dark-glass'
                  ? 'bg-[#00f5ff] text-[#090d16] shadow-[0_0_12px_rgba(0,245,255,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Dark Glass Mode"
              aria-label="Switch to Dark Glass mode"
            >
              <Sparkles size={14} />
            </button>
            <button
              onClick={() => setTheme('black-premium')}
              className={`p-1.5 rounded-full transition-all ${
                theme === 'black-premium'
                  ? 'bg-slate-800 text-[#00f5ff] shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Black Premium Mode"
              aria-label="Switch to Black Premium mode"
            >
              <Moon size={14} />
            </button>
          </div>

          {/* GitHub Link */}
          <a
            href="https://github.com/ahmedsar3698-wq"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white text-xs font-mono-code transition-all hover:border-[#00f5ff]/40"
            aria-label="GitHub Profile"
          >
            <Github size={14} className="text-[#00f5ff]" />
            <span>GitHub</span>
            <ArrowUpRight size={12} className="opacity-60" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/[0.06] border border-white/10 text-white hover:bg-white/[0.12] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full glass-panel mt-2 py-4 px-6 border-b border-white/10 shadow-2xl flex flex-col gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-[#00f5ff] text-[#090d16] font-semibold'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <div className="pt-2 mt-2 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs font-mono-code text-slate-400">
              03292049856
            </span>
            <a
              href="https://github.com/ahmedsar3698-wq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono-code text-[#00f5ff] flex items-center gap-1"
            >
              <span>@ahmedsar3698-wq</span>
              <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
