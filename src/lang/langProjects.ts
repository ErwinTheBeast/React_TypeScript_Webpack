export const langProjects = {
  WORK: 'Work',
  FEATURED_PROJECTS: 'Featured Projects',
  A_FEW_PROJECTS_IVE_ENJOYED_BUILDING: 'A few projects I’ve enjoyed building.',
  PROJECT_ONE: {
    title: 'Project One',
    description:
      'A production-ready UI that demonstrates clean architecture, reusable components, and great UX.',
    tags: ['React', 'TypeScript', 'CSS'],
    links: [
      { label: 'Live', href: 'https://example.com' },
      { label: 'Code', href: 'https://github.com/' },
    ],
  },
  PROJECT_TWO: {
    title: 'Project Two',
    description:
      'A small app focused on speed and accessibility, with thoughtful state management and test coverage.',
    tags: ['React', 'Jest', 'A11y'],
    links: [{ label: 'Code', href: 'https://github.com/' }],
  },
  PROJECT_THREE: {
    title: 'Project Three',
    description:
      'A tool that streamlines a workflow end-to-end, emphasizing reliability and maintainability.',
    tags: ['TypeScript', 'Tooling'],
    links: [{ label: 'Case Study', href: 'https://example.com' }],
  },
};

export const langProjectsItems = [
  langProjects.PROJECT_ONE,
  langProjects.PROJECT_TWO,
  langProjects.PROJECT_THREE,
];
