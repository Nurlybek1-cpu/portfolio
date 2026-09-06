import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Subtle Visual Detail: An animated status badge */}
        <div className={styles.statusBadge}>
          <span className={styles.statusDot}></span>
          <span className={styles.statusText}>Computer Science Graduate</span>
        </div>
        
        <h1 className={styles.title}>
          Hi, I'm Tokbosyn Nurlybek.
        </h1>
        
        <p className={styles.description}>
          I'm a software engineer focused on building clean, functional applications and learning how complex systems work under the hood.
        </p>
        
        <div className={styles.actions}>
          <a href="#projects" className={styles.primaryCta}>View Projects</a>
          <a href="#contact" className={styles.secondaryCta}>Get in Touch</a>
        </div>
      </div>
    </section>
  );
}
