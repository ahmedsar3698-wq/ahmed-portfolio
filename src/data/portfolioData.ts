import { ProjectItem, SkillCategory, TimelineMilestone, GitHubTelemetry } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Muhammad Ahmed',
  fatherName: 'Khadim Hussain',
  headline: 'AI Engineer & Web Developer',
  tagline: 'AI Engineer | AI/ML Developer | Web Developer',
  phone: '03292049856',
  phoneAlt: '03710180514',
  email: 'ahmedsar3698@gmail.com',
  githubUrl: 'https://github.com/ahmedsar3698-wq',
  githubUsername: 'ahmedsar3698-wq',
  collaboratorUrl: 'https://github.com/DotZohaib/',
  collaboratorName: 'DotZohaib',
  address: 'House No 1 Sheet No 24, Near Faryal School, Model Colony, Karachi',
  city: 'Karachi, Pakistan',
  nationality: 'Pakistani',
  languages: [
    { name: 'Urdu', level: 'Native / Primary' },
    { name: 'English', level: 'Professional Working Proficiency' }
  ],
  dob: '23rd August 2006',
  availability: 'Available for Autonomous & Web Systems',
  objective:
    'To work in a professional environment that enhances the need of quality work, excellence, commitment and the desire to achieve. Be part of a creative team set to see myself in a leading role in career development & management in order to utilize my skills and further improve my potentials.',
  bio: 'AI/ML Developer specializing in generative architectures, real-time autonomous systems, and ultra-crisp TypeScript user interfaces built for high-demand digital environments.',
  aboutDetailed:
    'Dedicated to bridging the chasm between experimental machine learning models and high-performance, real-world user interfaces. With 16+ verified repositories on GitHub, my work spans multi-turn LLM chatbots with streaming context engines, canvas-driven 2D/3D browser physics games, and modular TypeScript applications built for speed, responsiveness, and zero-friction user engagement.',
};

export const TYPEWRITER_PHRASES = [
  'AI Engineer & Model Architect',
  'Machine Learning Developer',
  'Generative AI Developer',
  'Computer Vision Developer',
  'Web Developer',
  'Full-Stack Developer',
  'AI Solutions Builder',
];

export const QUALIFICATIONS = [
  {
    title: 'Matriculation',
    institution: 'Karachi Board (BIEK)',
    type: 'Academic Education',
    description: 'Secondary School Certification completed through Board of Secondary Education Karachi.',
    badge: 'Verified',
  },
  {
    title: 'Hafiz-e-Quran',
    institution: 'Quranic Mastery & Memorization',
    type: 'Honorary Qualification',
    description: 'Disciplined completion of full Holy Quran memorization, demonstrating exceptional dedication, focus, and memory retention.',
    badge: 'Distinction',
  },
];

export const TECHNICAL_COURSES = [
  {
    title: '07 Months CIT (Certificate in Information Technology)',
    institution: 'Global Computers Institute',
    period: '7 Months Intensive',
    description: 'Comprehensive study of computer fundamentals, operating systems, networking architectures, database operations, and software workflows.',
    badge: 'IT Certified',
  },
  {
    title: '06 Months Mobile Repairing & Hardware Course',
    institution: 'TAABIR Technical & Vocational Center',
    period: '6 Months Technical',
    description: 'Hands-on hardware troubleshooting, microprocessor circuit diagnostics, logic board repairs, and device diagnostics.',
    badge: 'Hardware & Diagnostics',
  },
];

export const WORK_EXPERIENCE = [
  {
    role: 'Sales Representative',
    organization: 'Aither Perfume',
    period: '4 Months',
    description: 'Managed product presentations, client customer interactions, inventory tracking, and sales transactions with high communication rigor.',
    skills: ['Client Communication', 'Sales Management', 'Product Marketing'],
  },
];

export const VERIFIED_PROJECTS: ProjectItem[] = [
  {
    id: 'ai-chat',
    name: 'AI-Chat',
    category: 'ai',
    categoryLabel: 'AI • Natural Language',
    description:
      'Intelligent multi-turn conversational AI interface utilizing TypeScript and modern LLM endpoints. Features real-time token streaming, Markdown code block highlighting, and persistent session history.',
    technologies: ['TypeScript', 'React', 'Tailwind CSS', 'LLM APIs', 'Streaming'],
    repoUrl: 'https://github.com/ahmedsar3698-wq/AI-Chat',
    badge: 'Primary',
    badgeType: 'cyan',
    stars: 1,
    language: 'TypeScript',
    updatedAt: 'Active',
  },
  {
    id: 'ai-chat-ahmed',
    name: 'AI-Chat-Ahmed',
    category: 'ai',
    categoryLabel: 'Custom Agent',
    description:
      'Personalized autonomous AI agent web app configured with specialized persona prompts, context memory caching, and frosted glass responsive UI designed for real-time mobile and desktop interaction.',
    technologies: ['TypeScript', 'Next.js', 'Prompt Engineering', 'API Routes'],
    repoUrl: 'https://github.com/ahmedsar3698-wq/AI-Chat-Ahmed',
    badge: 'Fine-Tuned',
    badgeType: 'indigo',
    language: 'TypeScript',
    updatedAt: 'Active',
  },
  {
    id: 'puzzlegame',
    name: 'puzzlegame',
    category: 'games',
    categoryLabel: 'Canvas Game Engine',
    description:
      'Interactive logic puzzle simulator engineered directly in TypeScript with custom canvas rendering. Implements graph-based grid state verification, algorithmic shuffle routines, and dynamic sound triggers.',
    technologies: ['TypeScript', 'HTML5 Canvas', 'Algorithms', 'Web Audio'],
    repoUrl: 'https://github.com/ahmedsar3698-wq/puzzlegame',
    badge: 'Logic Engine',
    badgeType: 'purple',
    language: 'TypeScript',
    updatedAt: 'Active',
  },
  {
    id: 'cargameahmed',
    name: 'cargameahmed',
    category: 'games',
    categoryLabel: 'Physics • Arcade',
    description:
      'Fast-paced browser driving simulator featuring collision bounding boxes, continuous frame loops, procedural obstacle generation, and responsive touch/keyboard navigation controllers.',
    technologies: ['TypeScript', 'Game Physics', 'State Loops', 'CSS FX'],
    repoUrl: 'https://github.com/ahmedsar3698-wq/cargameahmed',
    badge: '60 FPS',
    badgeType: 'cyan',
    language: 'TypeScript',
    updatedAt: 'Active',
  },
  {
    id: 'musfirah',
    name: 'musfirah',
    category: 'web',
    categoryLabel: 'Production Web',
    description:
      'Modern TypeScript web application structured with modular components, smooth CSS transitions, state management, and accessible layouts constructed for fluid cross-device performance.',
    technologies: ['TypeScript', 'Tailwind CSS', 'UI Modules', 'Vercel'],
    repoUrl: 'https://github.com/ahmedsar3698-wq/musfirah',
    badge: 'Modern UI',
    badgeType: 'indigo',
    language: 'TypeScript',
    updatedAt: 'Active',
  },
  {
    id: 'ahmed',
    name: 'ahmed',
    category: 'web',
    categoryLabel: 'Core System',
    description:
      'Central developer profile repository housing foundational algorithms, helper utilities, web experiment prototypes, and personal configuration suites for Muhammad Ahmed.',
    technologies: ['TypeScript', 'Architecture', 'Configs', 'Experiments'],
    repoUrl: 'https://github.com/ahmedsar3698-wq/ahmed',
    badge: 'Portfolio Core',
    badgeType: 'purple',
    language: 'TypeScript',
    updatedAt: 'Active',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    label: 'FREQUENTLY USED',
    labelType: 'cyan',
    description: 'Generative chat agents, streaming interfaces, neural architectures, and visual compute models.',
    skills: [
      'Python',
      'Machine Learning',
      'Deep Learning',
      'Generative AI',
      'Computer Vision',
      'AI Chatbots',
      'NLP Workflows',
    ],
    icon: 'Brain',
  },
  {
    id: 'web-dev',
    title: 'Modern Web Engineering',
    label: 'PRIMARY CORE',
    labelType: 'indigo',
    description: 'Single page applications, interactive canvas game loops, state pipelines, and design systems.',
    skills: [
      'TypeScript',
      'Next.js',
      'React',
      'JavaScript',
      'Tailwind CSS',
      'HTML5 / Web APIs',
      'Canvas Engines',
    ],
    icon: 'Code2',
  },
  {
    id: 'tools-infra',
    title: 'Tools & Hardware Ecosystem',
    label: 'USED IN PROJECTS',
    labelType: 'purple',
    description: 'Continuous deployment, code versioning, REST API contracts, and hardware diagnostic fundamentals.',
    skills: [
      'Git & GitHub',
      'REST APIs',
      'CIT Certification',
      'Hardware Diagnostics',
      'Vercel Deployment',
      'Linux Terminal',
    ],
    icon: 'Wrench',
  },
];

export const MILESTONES: TimelineMilestone[] = [
  {
    phase: 'PHASE 01',
    period: '2024 - 2025',
    title: 'AI Agent & LLM Chat Systems',
    description:
      'Constructed multi-turn conversational agents with streaming responses (AI-Chat & AI-Chat-Ahmed). Integrated dynamic context retention, custom prompt instructions, and responsive markdown UI code formatters.',
    icon: 'Bot',
    colorType: 'cyan',
  },
  {
    phase: 'PHASE 02',
    period: '2025',
    title: 'Interactive Web Game Engineering',
    description:
      'Pioneered real-time browser game loops via puzzlegame and cargameahmed. Handcrafted mathematical collision algorithms, 60fps canvas render pipelines, and responsive keybindings without bulky external engines.',
    icon: 'Gamepad2',
    colorType: 'indigo',
  },
  {
    phase: 'PHASE 03',
    period: '2025 - PRESENT',
    title: 'Open Source & Architecture Exploration',
    description:
      'Expanded footprint across 16+ verified GitHub repositories. Ongoing continuous advancement in deep learning algorithms, Next.js full-stack architectures, and zero-latency user interfaces.',
    icon: 'Cpu',
    colorType: 'purple',
  },
];

export const INITIAL_GITHUB_TELEMETRY: GitHubTelemetry = {
  username: 'ahmedsar3698-wq',
  publicRepos: 16,
  profileUrl: 'https://github.com/ahmedsar3698-wq',
  primaryLanguage: 'TypeScript',
  languages: [
    { name: 'TypeScript', percentage: 72, color: '#00f5ff' },
    { name: 'JavaScript', percentage: 16, color: '#818cf8' },
    { name: 'Tailwind & CSS', percentage: 8, color: '#c084fc' },
    { name: 'HTML & Config', percentage: 4, color: '#94a3b8' },
  ],
};
