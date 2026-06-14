import '../styles/ui/grid.scss';
import { langProjectsItems } from '../content/lang/langProjects';
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  return (
    <div className="grid grid3">
      {langProjectsItems.map((p) => (
        <ProjectCard key={p.title} project={p} />
      ))}
    </div>
  );
};
