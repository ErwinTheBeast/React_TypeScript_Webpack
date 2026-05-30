export type SocialLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  links: SocialLink[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  start: string;
  end: string;
  highlights: string[];
};

export type PortfolioContent = {
  name: string;
  role: string;
  location: string;
  summary: string;
  availableFor: string;
  social: SocialLink[];
  about: {
    heading: string;
    body: string;
    highlights: string[];
  };
  skills: Array<{
    group: string;
    items: string[];
  }>;
  projects: Project[];
  experience: ExperienceItem[];
  contact: {
    heading: string;
    email: string;
    note: string;
  };
};

export const portfolio: PortfolioContent = {
  name: 'Shubham Deshpande',
  role: 'Frontend Engineer',
  location: 'India',
  summary:
    'I build fast, accessible web experiences with React + TypeScript, and I enjoy turning complex problems into clean, maintainable UI.',
  availableFor: 'Open to full-time roles & freelance work',
  social: [
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'Email', href: 'mailto:you@example.com' },
  ],
  about: {
    heading: 'About',
    body: "I'm a software engineer focused on product UI and performance. I care about design systems, DX, and building interfaces that feel great on every device.",
    highlights: [
      'React + TypeScript',
      'Component libraries & design systems',
      'Performance & accessibility',
    ],
  },
  skills: [
    {
      group: 'Frontend',
      items: ['React', 'TypeScript', 'CSS', 'Testing Library'],
    },
    { group: 'Backend', items: ['Node.js', 'REST APIs'] },
    { group: 'Tools', items: ['Webpack', 'Jest', 'ESLint', 'Prettier'] },
  ],
  projects: [
    {
      title: 'Project One',
      description:
        'A production-ready UI that demonstrates clean architecture, reusable components, and great UX.',
      tags: ['React', 'TypeScript', 'CSS'],
      links: [
        { label: 'Live', href: 'https://example.com' },
        { label: 'Code', href: 'https://github.com/' },
      ],
    },
    {
      title: 'Project Two',
      description:
        'A small app focused on speed and accessibility, with thoughtful state management and test coverage.',
      tags: ['React', 'Jest', 'A11y'],
      links: [{ label: 'Code', href: 'https://github.com/' }],
    },
    {
      title: 'Project Three',
      description:
        'A tool that streamlines a workflow end-to-end, emphasizing reliability and maintainability.',
      tags: ['TypeScript', 'Tooling'],
      links: [{ label: 'Case Study', href: 'https://example.com' }],
    },
  ],
  experience: [
    {
      company: 'Company Name',
      role: 'Software Engineer',
      start: '2024',
      end: 'Present',
      highlights: [
        'Shipped user-facing features end-to-end and improved performance on key flows.',
        'Built reusable UI patterns and improved consistency across the product.',
        'Partnered with design to iterate quickly while maintaining code quality.',
      ],
    },
    {
      company: 'Previous Company',
      role: 'Frontend Developer',
      start: '2022',
      end: '2024',
      highlights: [
        'Implemented responsive pages and component refactors for maintainability.',
        'Added tests for critical UI flows and reduced regressions.',
      ],
    },
  ],
  contact: {
    heading: 'Contact',
    email: 'you@example.com',
    note: 'The quickest way to reach me is by email. I typically respond within 24–48 hours.',
  },
};
