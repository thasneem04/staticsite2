import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.brandCol}>
          <img src="/logo.png" alt="Auto-Control Synergy Services" className={styles.footerLogo} />
          <p className={styles.companyDesc}>
            A leading system integration company and manufacturer of PLC/Drives based Industrial Automation panels, delivering complete end-to-end solutions.
          </p>
        </div>
        
        <div className={styles.linkCol}>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className={styles.linkCol}>
          <h4>Our Services</h4>
          <ul>
            <li><Link to="/services">PLC Automation Panels</Link></li>
            <li><Link to="/services">SCADA & RTU Systems</Link></li>
            <li><Link to="/services">HMI Design</Link></li>
            <li><Link to="/services">Industrial Communication</Link></li>
            <li><Link to="/services">Electrical & Instrumentation</Link></li>
          </ul>
        </div>
        
        <div className={styles.contactCol}>
          <h4>Contact Us</h4>
          <div className={styles.contactItem}>
            <Mail size={18} />
            <a href="mailto:RM@acsarabia.com">RM@acsarabia.com</a>
          </div>
          <div className={styles.contactItem}>
            <Phone size={18} />
            <a href="tel:+966564305884">+966 56430 5884</a>
          </div>
          <div className={styles.contactItem}>
            <Phone size={18} />
            <a href="tel:+966138167077">+966 13 816 7077</a>
          </div>
          <div className={styles.contactItem}>
            <MapPin size={18} />
            <address>
              P.O. Box: 3926<br />
              Dammam 34442<br />
              Kingdom of Saudi Arabia
            </address>
          </div>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Auto-Control Synergy Services (ACS). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
