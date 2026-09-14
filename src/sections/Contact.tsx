import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'tokbosynnurlybek@gmail.com';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <section id="contact" className={styles.contact} data-reveal>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.titleColumn}>
            <h2 className={styles.title}>Contact</h2>
          </div>

          <div className={styles.contentColumn}>
            <p className={styles.lead}>
              I am currently open to developer opportunities, collaborative projects, or general tech discussions.
            </p>
            <p className={styles.description}>
              Feel free to reach out directly via email or connect through my professional profiles.
            </p>

            <div className={styles.emailCard}>
              <div className={styles.emailInfo}>
                <span className={styles.label}>Direct Email</span>
                <a href={`mailto:${email}`} className={styles.emailLink}>
                  {email}
                </a>
              </div>

              <div className={styles.emailActions}>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className={`${styles.actionBtn} ${copied ? styles.copiedBtn : ''}`}
                  aria-label={copied ? 'Email address copied' : 'Copy email address to clipboard'}
                >
                  {copied ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                      </svg>
                      <span>Copy</span>
                    </>
                  )}
                </button>
                <a
                  href={`mailto:${email}`}
                  className={`${styles.actionBtn} ${styles.primaryBtn}`}
                  aria-label={`Write Email to ${email}`}
                >
                  <span>Write Email</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
              </div>
            </div>

            <div className={styles.socialGrid}>
              <a
                href="https://github.com/Nurlybek1-cpu"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="GitHub profile (opens in a new tab)"
              >
                <div className={styles.socialIconWrapper}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </div>
                <div className={styles.socialText}>
                  <span className={styles.socialLabel}>GitHub</span>
                  <span className={styles.socialUsername}>@Nurlybek1-cpu</span>
                </div>
                <svg className={styles.arrowIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>

              <a
                href="https://linkedin.com/in/nurlybek-tokbosyn"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn profile (opens in a new tab)"
              >
                <div className={styles.socialIconWrapper}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.99 0-1.8.8-1.8 1.79 0 .99.81 1.79 1.8 1.79.99 0 1.8-.8 1.8-1.79 0-.99-.81-1.79-1.8-1.79M5.07 18.5h2.78v-8.37H5.07v8.37z" />
                  </svg>
                </div>
                <div className={styles.socialText}>
                  <span className={styles.socialLabel}>LinkedIn</span>
                  <span className={styles.socialUsername}>in/nurlybek-tokbosyn</span>
                </div>
                <svg className={styles.arrowIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>

              <a
                href="https://t.me/Nurly_k"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Telegram profile (opens in a new tab)"
              >
                <div className={styles.socialIconWrapper}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                  </svg>
                </div>
                <div className={styles.socialText}>
                  <span className={styles.socialLabel}>Telegram</span>
                  <span className={styles.socialUsername}>@Nurly_k</span>
                </div>
                <svg className={styles.arrowIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>

              <a
                href="https://almaty.hh.kz/resume/2e67dc62ff0f8c5a4e0039ed1f483538376f35"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="HeadHunter resume (opens in a new tab)"
              >
                <div className={styles.socialIconWrapper}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </div>
                <div className={styles.socialText}>
                  <span className={styles.socialLabel}>HeadHunter</span>
                  <span className={styles.socialUsername}>hh.kz/resume</span>
                </div>
                <svg className={styles.arrowIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
