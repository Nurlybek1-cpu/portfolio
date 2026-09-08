import styles from './Technologies.module.css';
import { technologyGroups } from '../data/technologies';
import type { TechnologyGroup } from '../data/technologies';

export default function Technologies() {
  return (
    <section id="technologies" className={styles.technologies}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.titleColumn} data-reveal>
            <h2 className={styles.title}>Technologies</h2>
          </div>

          <div className={styles.contentColumn}>
            <p className={styles.intro} data-reveal>
              A working toolkit of languages, frameworks, and developer tools I work with to build clean, maintainable software. Grouped by domain.
            </p>

            <div className={styles.groups}>
              {technologyGroups.map((group: TechnologyGroup) => (
                <div key={group.category} className={styles.group} data-reveal>
                  <h3 className={styles.categoryTitle}>{group.category}</h3>
                  <ul className={styles.techList}>
                    {group.items.map((tech) => (
                      <li key={tech} className={styles.techItem}>
                        <span className={styles.dot} aria-hidden="true" />
                        <span className={styles.techName}>{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
