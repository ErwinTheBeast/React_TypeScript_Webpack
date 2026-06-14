import { SocialLink } from '../types';

export const langHero = {
  SHUBHAM_DESHPANDE: 'Shubham Deshpande',
  FRONTEND_ENGINEER: 'Frontend Engineer',
  INDIA: 'India',
  I_BUILD_FAST_ACCESSIBLE_WEB_EXPERIENCES:
    'I build fast, accessible web experiences with React + TypeScript, and I enjoy turning complex problems into clean, maintainable UI.',
  OPEN_TO_FULL_TIME_ROLES_AND_FREELANCE_WORK:
    'Open to full-time roles & freelance work',
  SOCIAL_LINKS: [
    { label: 'GitHub', href: 'https://github.com/', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'linkedin' },
    { label: 'Email', href: 'mailto:you@example.com', icon: 'email' },
  ] satisfies SocialLink[],
  IM_A: "I'm a",
  WHO_BUILDS: ' who builds ',
  VIEW_PROJECTS: 'View Projects',
  GET_IN_TOUCH: 'Get in touch',
  DESIGN_SYSTEM_QUALITY_COMPONENTS: 'design-system quality components',
  HIGH_PERFORMANCE_UIS: 'high-performance UIs',
  ACCESSIBLE_RESPONSIVE_WEB_APPS: 'accessible, responsive web apps',
};

export const langHeroRotatingPhrases = [
  langHero.DESIGN_SYSTEM_QUALITY_COMPONENTS,
  langHero.HIGH_PERFORMANCE_UIS,
  langHero.ACCESSIBLE_RESPONSIVE_WEB_APPS,
];
