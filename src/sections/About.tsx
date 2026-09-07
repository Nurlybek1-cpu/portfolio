import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about} data-reveal>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.titleColumn}>
            <h2 className={styles.title}>About</h2>
          </div>
          <div className={styles.contentColumn}>
            <p className={styles.lead}>
              I'm a recent Computer Science graduate transitioning from academic theory to real-world software engineering.
            </p>
            <div className={styles.prose}>
              <p>
                My interest in software development stems from a desire to build tools that are both functional and well-crafted. While university taught me the fundamentals of algorithms and system architecture, I am currently focused on mastering modern web technologies.
              </p>
              <p>
                Presently, I am deep-diving into React, TypeScript, and modern CSS. My approach to learning is highly practical: I prefer to build small, focused projects, break them, understand why they broke, and build them better the next time.
              </p>
              <p>
                Ultimately, I want to become a developer who bridges the gap between strong engineering and excellent product design. My immediate goal is to join a collaborative engineering team where I can contribute to meaningful products while continuing to rapidly grow my technical skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
