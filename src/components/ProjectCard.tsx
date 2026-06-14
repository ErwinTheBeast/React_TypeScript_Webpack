import '../styles/ui/card.scss';
import '../styles/ui/chip.scss';
import { Project } from '../types';

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="card cardHover">
      <div className="cardTop">
        <h3 className="cardTitle">{project.title}</h3>
        <div className="cardLinks">
          {project.links.map((l) => (
            <a
              key={l.href}
              className="textLink"
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel={l.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>

      <p className="cardDescription">{project.description}</p>

      <div className="chipRow" aria-label={`${project.title} technologies`}>
        {project.tags.map((t) => (
          <span key={t} className="chip chipMuted">
            {t}
          </span>
        ))}
      </div>
    </article>
  );
};
