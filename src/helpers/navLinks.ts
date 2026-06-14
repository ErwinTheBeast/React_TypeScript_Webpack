import { langNav } from '../lang/langNav';

export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: langNav.ABOUT, href: '#about' },
  { label: langNav.SKILLS, href: '#skills' },
  { label: langNav.PROJECTS, href: '#projects' },
  { label: langNav.EXPERIENCE, href: '#experience' },
  { label: langNav.CONTACT, href: '#contact' },
];
