import { SocialLink } from '../types';
import { SocialIcon } from './SocialIcon';

type SocialLinkAnchorProps = {
  link: SocialLink;
  className?: string;
  onClick?: () => void;
};

export const SocialLinkAnchor = ({
  link,
  className,
  onClick,
}: SocialLinkAnchorProps) => {
  const isExternal = link.href.startsWith('http');

  return (
    <a
      className={className}
      href={link.href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      aria-label={link.label}
      onClick={onClick}
    >
      {link.icon ? <SocialIcon kind={link.icon} /> : link.label}
    </a>
  );
};
