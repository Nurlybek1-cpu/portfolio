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
              I'm a Computer Science graduate from SDU University interested in building practical software and learning how things work under the hood.
            </p>
            <div className={styles.prose}>
              <p>
                I work with Java, React, TypeScript, and modern web technologies, and I'm currently focused on growing as a full-stack developer, with a particular interest in Java backend development.
              </p>
              <p>
                I enjoy turning ideas into working projects, solving problems, and continuously improving my skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
