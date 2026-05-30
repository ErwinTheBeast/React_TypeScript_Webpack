import { SocialLink } from '../content/portfolio';

type FooterProps = {
  name: string;
  social: SocialLink[];
};

export const Footer = ({ name, social }: FooterProps) => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footerInner">
        <p className="muted">
          © {year} {name}. All rights reserved.
        </p>
        <div className="footerLinks" aria-label="Footer social links">
          {social.map((s) => (
            <a
              key={s.label}
              className="textLink"
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
