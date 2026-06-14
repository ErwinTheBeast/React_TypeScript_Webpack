import '../styles/components/Footer.scss';
import '../styles/ui/social.scss';
import { langFooter } from '../lang/langFooter';
import { langHero } from '../lang/langHero';
import { SocialLinkAnchor } from './SocialLinkAnchor';

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footerInner">
        <p className="muted">
          © {year} {langHero['SHUBHAM_DESHPANDE']}.{' '}
          {langFooter.ALL_RIGHTS_RESERVED}
        </p>
        <div className="footerLinks" aria-label="Footer social links">
          {langHero.SOCIAL_LINKS.map((social) => (
            <SocialLinkAnchor
              key={social.label}
              link={social}
              className="socialIconLink"
            />
          ))}
        </div>
      </div>
    </footer>
  );
};
