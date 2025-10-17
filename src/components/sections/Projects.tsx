// src/components/sections/Projects.tsx
import styles from './Projects.module.scss';
import ProjectCard from '../ui/ProjectCard';
import type { Project } from '../../types/project.ts';
import { projectsData } from '../../data/projects.ts';

interface ProjectsProps {
  id: string; // Adicione esta interface
}

const Projects = ({ id }: ProjectsProps) => {
  const projects: Project[] = projectsData;

  return (
    <section id={id} className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}>Projetos em Destaque</h2>
        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;