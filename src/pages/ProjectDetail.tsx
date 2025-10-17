import styles from './ProjectDetail.module.scss';

import { useParams, Link } from 'react-router-dom';
import type { Project, ProjectMedia } from '../types/project'; // Importe ProjectMedia
import { ArrowLeft, Github, ExternalLink, PlayCircle } from 'lucide-react'; // Importe PlayCircle
import { useRef, useState } from 'react'; // Importe useRef e useState
import { projectsData } from '../data/projects';

// Componente interno para lidar com a lógica de mídia
const MediaItem = ({ media }: { media: ProjectMedia }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  if (media.type === 'video') {
    return (
      <div className={styles.mediaItem} onClick={!isPlaying ? handlePlay : undefined}>
        <video 
          ref={videoRef}
          src={media.path} 
          loop 
          muted 
          playsInline 
          controls={isPlaying} // Mostra controles apenas após o primeiro play
        />
        {!isPlaying && (
          <div className={styles.playOverlay}>
            <PlayCircle size={64} />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={styles.mediaItem}>
      <img src={media.path} alt="Mídia do projeto" />
    </div>
  );
};


const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = (projectsData as Project[]).find(p => p.id === projectId);

  if (!project) {
    return (
      <div className={styles.notFound}>
        <h2>Projeto não encontrado</h2>
        <Link to="/">Voltar para a Home</Link>
      </div>
    );
  }

  return (
    <div className={styles.projectDetail}>
      <div className={styles.container}>
        <Link to="/" className={styles.backLink}><ArrowLeft size={18} /> Voltar</Link>
        
        <header className={styles.header}>
            <h1>{project.title}</h1>
            <p className={styles.shortDescription}>{project.shortDescription}</p>
            <div className={styles.headerLinks}>
                {project.links.github && <a href={project.links.github} target="_blank" rel="noopener noreferrer"><Github size={20} /> Código Fonte</a>}
                {project.links.live && <a href={project.links.live} target="_blank" rel="noopener noreferrer"><ExternalLink size={20} /> Ver ao Vivo</a>}
            </div>
        </header>

        {/* Galeria de mídias atualizada para usar o carrossel */}
        <div className={styles.gallery}>
          {project.gallery.map((media, index) => (
            <MediaItem key={index} media={media} />
          ))}
        </div>
        
        <main className={styles.mainContent}>
          <div className={styles.detailsGrid}>
            <div className={styles.descriptionSection}>
              <h3>Sobre o Projeto</h3>
              <p>{project.description}</p>
              <h3>Desafios Técnicos</h3>
              <p>{project.challenges}</p>
            </div>
            <aside className={styles.sidebar}>
              <h3>Informações</h3>
              <ul>
                <li><strong>Meu Papel:</strong> {project.myRole}</li>
                <li><strong>Período:</strong> {project.period}</li>
              </ul>
              <h3>Tecnologias Utilizadas</h3>
              <ul className={styles.stack}>
                {project.stack.map(tech => <li key={tech}>{tech}</li>)}
              </ul>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProjectDetail;
