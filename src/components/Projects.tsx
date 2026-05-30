import { Project } from '../content/portfolio';
import { ProjectCard } from './ProjectCard';

type ProjectsProps = {
  projects: Project[];
};

export const Projects = ({ projects }: ProjectsProps) => {
  return (
    <div className="grid grid3">
      {projects.map((p) => (
        <ProjectCard key={p.title} project={p} />
      ))}
    </div>
  );
};
