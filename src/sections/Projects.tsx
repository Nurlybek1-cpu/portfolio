import styles from './Projects.module.css';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.header} data-reveal>
          <h2 className={styles.title}>Selected Projects</h2>
          <p className={styles.subtitle}>Recent software development case studies.</p>
        </div>
        
        <div className={styles.grid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.cardReveal} data-reveal>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
