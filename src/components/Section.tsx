import { ReactNode } from 'react';

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export const Section = ({
  id,
  eyebrow,
  title,
  description,
  children,
}: SectionProps) => {
  return (
    <section id={id} className="section">
      <div className="container">
        <header className="sectionHeader">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h2 className="sectionTitle">{title}</h2>
          {description ? (
            <p className="sectionDescription">{description}</p>
          ) : null}
        </header>
        <div className="sectionBody">{children}</div>
      </div>
    </section>
  );
};
