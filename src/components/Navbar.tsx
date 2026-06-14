import '../styles/components/Navbar.scss';
import '../styles/ui/button.scss';
import '../styles/ui/social.scss';
import { useState } from 'react';
import { langHero } from '../content/lang/langHero';
import { langNav } from '../content/lang/langNav';
import { SocialLinkAnchor } from './SocialLinkAnchor';

type NavbarProps = {
  links: Array<{ label: string; href: string }>;
};

export const Navbar = ({ links }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const panelId = 'nav-mobile-panel';

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="nav">
      <div className="container">
        <div className="navInner">
          <a
            className="navBrand"
            href="#top"
            aria-label={`${langHero.SHUBHAM_DESHPANDE} home`}
          >
            <span className="navBrandMark" aria-hidden="true">
              ⬢
            </span>
            <span className="navBrandText">{langHero.SHUBHAM_DESHPANDE}</span>
          </a>

          <nav className="navLinks" aria-label="Primary">
            {links.map((link) => (
              <a key={link.href} className="navLink" href={link.href}>
                {link.label}
              </a>
            ))}
            <a className="navLink" href="#contact">
              {langNav.CONTACT}
            </a>
          </nav>

          <div className="navRight">
            <div className="navSocial" aria-label="Social links">
              {langHero.SOCIAL_LINKS.map((s) => (
                <SocialLinkAnchor
                  key={s.label}
                  link={s}
                  className="socialIconLink"
                />
              ))}
            </div>
            <a className="button buttonPrimary buttonSm" href="#contact">
              {langNav.CONTACT}
            </a>
            <button
              type="button"
              className="navMenuBtn"
              aria-expanded={menuOpen}
              aria-controls={panelId}
              aria-label={menuOpen ? langNav.CLOSE_MENU : langNav.OPEN_MENU}
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
              {langNav.CONTACT}
            </a>
          </nav>
          <div className="navMobileSocial" aria-label="Mobile social links">
            {langHero.SOCIAL_LINKS.map((s) => (
              <SocialLinkAnchor
                key={s.label}
                link={s}
                className="socialIconLink"
                onClick={closeMenu}
              />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
