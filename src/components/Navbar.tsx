import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrolled = () => {
      setIsScrolled(window.scrollY > 8);
    };

    updateScrolled();
    window.addEventListener('scroll', updateScrolled, { passive: true });
    return () => window.removeEventListener('scroll', updateScrolled);
  }, []);

  // Close menu on Escape key press for keyboard accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}>
      <div className={styles.container}>
        <a href="#" className={styles.logo} onClick={closeMenu} aria-label="TN. - Home">
          TN.
        </a>
        
        <button 
          className={styles.mobileMenuBtn} 
          onClick={toggleMenu}
          aria-expanded={isMobileMenuOpen}
          aria-controls="primary-navigation"
          aria-label="Toggle navigation menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isMobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <nav 
          id="primary-navigation"
          className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}
        >
          <ul className={styles.navList}>
            <li><a href="#about" onClick={closeMenu} className={styles.navLink}>About</a></li>
            <li><a href="#projects" onClick={closeMenu} className={styles.navLink}>Projects</a></li>
            <li><a href="#technologies" onClick={closeMenu} className={styles.navLink}>Technologies</a></li>
            <li><a href="#now" onClick={closeMenu} className={styles.navLink}>Now</a></li>
            <li><a href="#contact" onClick={closeMenu} className={styles.navLink}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}