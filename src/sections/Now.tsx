import styles from './Now.module.css';

export default function Now() {
  return (
    <section id="now" className={styles.now}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.titleColumn}>
            <h2 className={styles.title}>Now.</h2>
          </div>
          
          <div className={styles.content}>
            <p className={styles.intro}>
              A live snapshot of what I'm currently focused on and building.
            </p>
            
            <div className={styles.itemsGrid}>
              <div className={styles.item}>
                <h3 className={styles.itemTitle}>Building</h3>
                <p className={styles.itemText}>A minimalist personal portfolio and exploring React Server Components.</p>
              </div>
              
              <div className={styles.item}>
                <h3 className={styles.itemTitle}>Learning</h3>
                <p className={styles.itemText}>Advanced TypeScript patterns and delving deeper into CSS architecture.</p>
              </div>
              
              <div className={styles.item}>
                <h3 className={styles.itemTitle}>Exploring</h3>
                <p className={styles.itemText}>Agentic AI coding workflows and generative AI integrations.</p>
              </div>
              
              <div className={styles.item}>
                <h3 className={styles.itemTitle}>Next goal</h3>
                <p className={styles.itemText}>Contribute to an open source tool in the frontend ecosystem.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
