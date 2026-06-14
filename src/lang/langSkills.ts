import type { SkillGroup } from '../types';

export const langSkills = {
  TOOLKIT: 'Toolkit',
  SKILLS: 'Skills',
  A_SNAPSHOT_OF_WHAT_I_USE_MOST_OFTEN: 'A snapshot of what I use most often.',
  FRONTEND: {
    group: 'Frontend',
    items: ['React', 'TypeScript', 'CSS', 'Testing Library'],
  },
  BACKEND: {
    group: 'Backend',
    items: ['Node.js', 'REST APIs'],
  },
  TOOLS: {
    group: 'Tools',
    items: ['Webpack', 'Jest', 'ESLint', 'Prettier'],
  },
} satisfies Record<string, string | SkillGroup>;

export const langSkillsGroups = [
  langSkills.FRONTEND,
  langSkills.BACKEND,
  langSkills.TOOLS,
] satisfies SkillGroup[];
