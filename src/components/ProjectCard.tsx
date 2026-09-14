import { useState } from 'react';
import styles from './ProjectCard.module.css';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasMultipleImages = project.imageUrls && project.imageUrls.length > 0;

  const nextImage = () => {
    if (!project.imageUrls) return;
    setCurrentIndex((prev) => (prev === project.imageUrls!.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    if (!project.imageUrls) return;
    setCurrentIndex((prev) => (prev === 0 ? project.imageUrls!.length - 1 : prev - 1));
  };

  return (
    <article className={styles.card}>
      
      {/* Slider / Image Rendering */}
      {hasMultipleImages ? (
        <div className={styles.sliderContainer}>
          <div 
            className={styles.sliderTrack} 
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {project.imageUrls!.map((url, index) => (
              <img 
                key={index}
                src={url} 
                alt={`${project.title} application interface ${index + 1}`} 
                className={styles.sliderImage} 
                loading="lazy"
              />
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <button onClick={prevImage} className={`${styles.sliderBtn} ${styles.prevBtn}`} aria-label="Previous image">
            &#10094;
          </button>
          <button onClick={nextImage} className={`${styles.sliderBtn} ${styles.nextBtn}`} aria-label="Next image">
            &#10095;
          </button>

          {/* Indicator Dots */}
          <div className={styles.sliderDots}>
            {project.imageUrls!.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${currentIndex === index ? styles.dotActive : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className={styles.imageContainer}>
          {project.imageUrl ? (
            <img src={project.imageUrl} alt={`${project.title} application interface`} className={styles.image} loading="lazy" />
          ) : (
            <div className={styles.imagePlaceholder}>
              <span>No Image Provided</span>
            </div>
          )}
        </div>
      )}
      
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{project.title}</h3>
          <span className={styles.status}>{project.status}</span>
        </div>
        
        {/* Micro Case Study Format */}
        <div className={styles.problem}>
          <strong>Context / Problem:</strong> <br />
          {project.problem}
        </div>
        
        <div className={styles.description}>
          <strong>Architecture & Technical Execution:</strong> <br />
          {project.description}
        </div>
        
        <ul className={styles.techList}>
          {project.technologies.map(tech => (
            <li key={tech} className={styles.techTag}>{tech}</li>
          ))}
        </ul>
        
        <div className={styles.links}>
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
              View Source <span className={styles.linkArrow} aria-hidden="true">&rarr;</span>
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
              Live Demo <span className={styles.linkArrow} aria-hidden="true">&rarr;</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}