import { useEffect, useState } from 'react';
import { PortfolioContent } from '../content/portfolio';

const ROTATING_PHRASES = [
  'design-system quality components',
  'high-performance UIs',
  'accessible, responsive web apps',
];

const ROTATE_MS = 3000;

type HeroProps = {
  content: Pick<
    PortfolioContent,
    'name' | 'role' | 'location' | 'summary' | 'availableFor' | 'social'
  >;
};

export const Hero = ({ content }: HeroProps) => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let fadeTimeout: ReturnType<typeof setTimeout> | undefined;

    const interval = setInterval(() => {
      setVisible(false);
      fadeTimeout = setTimeout(() => {
        setPhraseIndex((i) => (i + 1) % ROTATING_PHRASES.length);
        setVisible(true);
      }, 280);
    }, ROTATE_MS);

    return () => {
      clearInterval(interval);
      if (fadeTimeout) clearTimeout(fadeTimeout);
    };
  }, []);

  const currentPhrase = ROTATING_PHRASES[phraseIndex];

  return (
    <section id="top" className="hero">
      <div className="heroBg" aria-hidden="true" />
      <div className="container heroInner">
        <div className="heroLeft">
          <p className="pill">
            <span className="pillDot" aria-hidden="true" />
            {content.availableFor}
          </p>

          <h1 className="heroTitle">
            {content.name}
            <span className="heroTitleAccent">.</span>
          </h1>

          <p className="heroIntro">
            I&apos;m a <span className="heroIntroRole">{content.role}</span>
            {' who builds '}
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
              {content.location}
            </span>
          </p>

          <p className="heroSummary">{content.summary}</p>

          <div className="heroCtas">
            <a className="button buttonPrimary" href="#projects">
              View Projects
            </a>
            <a className="button buttonGhost" href="#contact">
              Get in touch
            </a>
          </div>

          <div className="heroSocial">
            {content.social.map((s) => (
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
      </div>
    </section>
  );
};
