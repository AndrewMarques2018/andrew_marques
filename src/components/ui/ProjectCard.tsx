import styles from './ProjectCard.module.scss';

import type { Project } from '../../types/project';
import { Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {

  // Função para abrir links externos sem propagar o evento para o <Link> pai
  const handleExternalLinkClick = (e: React.MouseEvent, url: string) => {
    e.stopPropagation(); // Impede que o <Link> seja ativado
    window.open(url, '_blank', 'noopener,noreferrer'); // Abre a URL em uma nova aba
  };

  return (
    <Link to={`/projetos/${project.id}`} className={styles.cardLink} aria-label={`Ver detalhes do projeto ${project.title}`}>
      <div className={styles.card}>
        <div className={styles.mediaContainer}>
          <img src={project.coverImage} alt={`Capa do projeto ${project.title}`} className={styles.media} />
        </div>

        <div className={styles.content}>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.description}>{project.shortDescription}</p>

          <ul className={styles.stack}>
            {project.stack.slice(0, 4).map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>

          <div className={styles.links}>
            {/* SUBSTITUÍMOS <a> POR <button> */}
            {project.links.github && (
              <button 
                className={styles.iconButton}
                onClick={(e) => handleExternalLinkClick(e, project.links.github!)} 
                aria-label="Código Fonte no GitHub"
              >
                <Github size={20} />
              </button>
            )}
            {project.links.live && (
               <button 
                className={styles.iconButton}
                onClick={(e) => handleExternalLinkClick(e, project.links.live!)}
                aria-label="Ver projeto ao vivo"
              >
                <ExternalLink size={20} />
              </button>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;