export type ThemeMode = 'dark-glass' | 'light-glass' | 'black-premium';

export interface ProjectItem {
  id: string;
  name: string;
  category: 'ai' | 'games' | 'web';
  categoryLabel: string;
  description: string;
  technologies: string[];
  repoUrl: string;
  demoUrl?: string;
  badge: string;
  badgeType: 'cyan' | 'indigo' | 'purple';
  stars?: number;
  forks?: number;
  updatedAt?: string;
  language?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  label: string;
  labelType: 'cyan' | 'indigo' | 'purple';
  description: string;
  skills: string[];
  icon: string;
}

export interface TimelineMilestone {
  phase: string;
  period: string;
  title: string;
  description: string;
  icon: string;
  colorType: 'cyan' | 'indigo' | 'purple';
}

export interface GitHubTelemetry {
  username: string;
  publicRepos: number;
  followers?: number;
  following?: number;
  bio?: string;
  avatarUrl?: string;
  profileUrl: string;
  primaryLanguage: string;
  languages: { name: string; percentage: number; color: string }[];
}
