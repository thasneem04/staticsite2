import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : styles.topState}`}>
      <div className={styles.headerInner}>
        {/* Single ACS Brand Element: Hanging banner at top -> smoothly transforms to navbar logo */}
        <div className={styles.brandBanner}>
          <Link to="/" className={styles.logoLink} aria-label="Auto-Control Synergy Services">
            <img 
              src="/logo_acs_clean.png" 
              alt="Auto-Control Synergy Services" 
              className={styles.logoImg}
            />
          </Link>
        </div>

        {/* Navigation Area */}
        <nav className={styles.navContainer}>
          <ul className={styles.navLinks}>
            <li><Link to="/" className={location.pathname === '/' ? styles.activeLink : ''}>Home</Link></li>
            <li><Link to="/about" className={location.pathname === '/about' ? styles.activeLink : ''}>About</Link></li>
            <li><Link to="/services" className={location.pathname === '/services' ? styles.activeLink : ''}>Services</Link></li>
            <li><Link to="/projects" className={location.pathname === '/projects' ? styles.activeLink : ''}>Projects</Link></li>
            <li><Link to="/contact" className={location.pathname === '/contact' ? styles.activeLink : ''}>Contact</Link></li>
          </ul>

          <div className={styles.navActions}>
            <Link to="/contact" className={styles.ctaButton}>Get in Touch</Link>
            <button 
              className={styles.mobileToggle} 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <div className={`${styles.mobileDrawer} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}>
        <ul className={styles.mobileNavLinks}>
          <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)} className={location.pathname === '/' ? styles.activeLink : ''}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className={location.pathname === '/about' ? styles.activeLink : ''}>About</Link></li>
          <li><Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className={location.pathname === '/services' ? styles.activeLink : ''}>Services</Link></li>
          <li><Link to="/projects" onClick={() => setIsMobileMenuOpen(false)} className={location.pathname === '/projects' ? styles.activeLink : ''}>Projects</Link></li>
          <li><Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className={location.pathname === '/contact' ? styles.activeLink : ''}>Contact</Link></li>
        </ul>
        <div className={styles.mobileCtaWrapper}>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className={styles.mobileCtaButton}>Get in Touch</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

