import styles from './ProjectCard.module.css';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        {project.imageUrl ? (
          <img src={project.imageUrl} alt={`${project.title} screenshot`} className={styles.image} />
        ) : (
          <div className={styles.imagePlaceholder}>
            <span>No Image Provided</span>
          </div>
        )}
      </div>
      
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{project.title}</h3>
          <span className={styles.status}>{project.status}</span>
        </div>
        
        <div className={styles.problem}>
          <strong>Context / Problem:</strong> {project.problem}
        </div>
        
        <p className={styles.description}>{project.description}</p>
        
        <ul className={styles.techList}>
          {project.technologies.map(tech => (
            <li key={tech} className={styles.techTag}>{tech}</li>
          ))}
        </ul>
        
        <div className={styles.links}>
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
              View Source &rarr;
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
              Live Demo &rarr;
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
