import '../styles/ui/social.scss';
import { socialIconPaths } from '../icons/socialIcons';
import { SocialIconKind } from '../types';

type SocialIconProps = {
  kind: SocialIconKind;
};

export const SocialIcon = ({ kind }: SocialIconProps) => (
  <svg
    className="socialIconSvg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
  >
    {socialIconPaths[kind]}
  </svg>
);
