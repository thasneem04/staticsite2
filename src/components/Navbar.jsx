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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navbar}`}>
        <Link to="/" className={styles.logo}>
          <img src="/logo.png" alt="Auto-Control Synergy Services" />
        </Link>
        
        <nav className={`${styles.navLinks} ${isMobileMenuOpen ? styles.active : ''}`}>
          <Link to="/" className={location.pathname === '/' ? styles.activeLink : ''}>Home</Link>
          <Link to="/about" className={location.pathname === '/about' ? styles.activeLink : ''}>About</Link>
          <Link to="/services" className={location.pathname === '/services' ? styles.activeLink : ''}>Services</Link>
          <Link to="/projects" className={location.pathname === '/projects' ? styles.activeLink : ''}>Projects</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? styles.activeLink : ''}>Contact</Link>
          <Link to="/contact" className={styles.ctaButton}>Get in Touch</Link>
        </nav>

        <button className={styles.mobileToggle} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
