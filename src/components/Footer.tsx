import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <span className={styles.copyright}>
          &copy; {currentYear} Tokbosyn Nurlybek
        </span>
        <span className={styles.separator} aria-hidden="true">&middot;</span>
        <span className={styles.note}>Built with React &amp; TypeScript</span>
      </div>
    </footer>
  );
}
