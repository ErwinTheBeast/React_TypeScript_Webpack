import '../styles/components/Hero.scss';
import '../styles/ui/button.scss';
import '../styles/ui/social.scss';
import { useEffect, useState } from 'react';
import { langHero, langHeroRotatingPhrases } from '../lang/langHero';
import { SocialLinkAnchor } from './SocialLinkAnchor';

const ROTATE_MS = 3000;

const getSocialLinks = () =>
  langHero.SOCIAL_LINKS.map((s) => (
    <SocialLinkAnchor key={s.label} link={s} className="socialIconLink" />
  ));

export const Hero = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let fadeTimeout: ReturnType<typeof setTimeout> | undefined;

    const interval = setInterval(() => {
      setVisible(false);
      fadeTimeout = setTimeout(() => {
        setPhraseIndex((i) => (i + 1) % langHeroRotatingPhrases.length);
        setVisible(true);
      }, 280);
    }, ROTATE_MS);

    return () => {
      clearInterval(interval);
      if (fadeTimeout) clearTimeout(fadeTimeout);
    };
  }, []);

  const currentPhrase = langHeroRotatingPhrases[phraseIndex];

  return (
    <section id="top" className="hero">
      <div className="heroBg" aria-hidden="true" />
      <div className="container heroInner">
        <div className="heroLeft">
          <p className="pill">
            <span className="pillDot" aria-hidden="true" />
            {langHero.OPEN_TO_FULL_TIME_ROLES_AND_FREELANCE_WORK}
          </p>

          <h1 className="heroTitle">
            {langHero.SHUBHAM_DESHPANDE}
            <span className="heroTitleAccent">.</span>
          </h1>

          <p className="heroIntro">
            {langHero.IM_A}{' '}
            <span className="heroIntroRole">{langHero.FRONTEND_ENGINEER}</span>
            {langHero.WHO_BUILDS}
            <span
              className={`heroRotating ${visible ? 'heroRotatingVisible' : 'heroRotatingHidden'}`}
              aria-live="polite"
            >
              {currentPhrase}
            </span>
            .
          </p>

          <p className="heroSubtitle">
            <span className="heroSubtitleSep" aria-hidden="true">
              {langHero.INDIA}
            </span>
          </p>

          <p className="heroSummary">
            {langHero.I_BUILD_FAST_ACCESSIBLE_WEB_EXPERIENCES}
          </p>

          <div className="heroCtas">
            <a className="button buttonPrimary" href="#projects">
              {langHero.VIEW_PROJECTS}
            </a>
            <a className="button buttonGhost" href="#contact">
              {langHero.GET_IN_TOUCH}
            </a>
          </div>

          <div className="heroSocial">{getSocialLinks()}</div>
        </div>
      </div>
    </section>
  );
};
