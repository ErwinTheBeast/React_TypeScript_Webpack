export type SocialIconKind = 'github' | 'linkedin' | 'email';

export type SocialLink = {
  label: string;
  href: string;
  icon?: SocialIconKind;
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

export type SkillGroup = {
  group: string;
  items: string[];
};
