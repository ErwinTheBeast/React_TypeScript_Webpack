import { useState } from 'react';
import { SocialLink } from '../content/portfolio';

type NavbarProps = {
  name: string;
  links: Array<{ label: string; href: string }>;
  social: SocialLink[];
};

export const Navbar = ({ name, links, social }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const panelId = 'nav-mobile-panel';

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="nav">
      <div className="container">
        <div className="navInner">
          <a className="navBrand" href="#top" aria-label={`${name} home`}>
            <span className="navBrandMark" aria-hidden="true">
              ⬢
            </span>
            <span className="navBrandText">{name}</span>
          </a>

          <nav className="navLinks" aria-label="Primary">
            {links.map((link) => (
              <a key={link.href} className="navLink" href={link.href}>
                {link.label}
              </a>
            ))}
            <a className="navLink" href="#contact">
              Contact
            </a>
          </nav>

          <div className="navRight">
            <div className="navSocial" aria-label="Social links">
              {social.map((s) => (
                <a
                  key={s.label}
                  className="navIconLink"
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  {s.label}
                </a>
              ))}
            </div>
            <a className="button buttonPrimary buttonSm" href="#contact">
              Contact
            </a>
            <button
              type="button"
              className="navMenuBtn"
              aria-expanded={menuOpen}
              aria-controls={panelId}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        <div
          id={panelId}
          className={`navMobilePanel ${menuOpen ? 'navMobilePanelOpen' : ''}`}
          hidden={!menuOpen}
        >
          <nav className="navMobileLinks" aria-label="Mobile primary">
            {links.map((link) => (
              <a
                key={link.href}
                className="navMobileLink"
                href={link.href}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
            <a className="navMobileLink" href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </nav>
          <div className="navMobileSocial" aria-label="Mobile social links">
            {social.map((s) => (
              <a
                key={s.label}
                className="navIconLink"
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
                onClick={closeMenu}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
