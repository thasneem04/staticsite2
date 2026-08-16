import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Award, CheckCircle2 } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.brandCol}>
          <div className={styles.logoBox}>
            <img src="/logo_acs_clean.png" alt="Auto-Control Synergy Services (ACS)" className={styles.footerLogo} />
          </div>
          <p className={styles.companyDesc}>
            Auto-Control Synergy Services (ACS) is the system integration division of Redaa Developing Company (RDC), established in 2021 in Saudi Arabia. We manufacture PLC/Drives automation panels and provide end-to-end industrial engineering.
          </p>
          <div className={styles.crBox}>
            <strong>Commercial Registration (C.R.):</strong> 7023676492
          </div>
          <div className={styles.isoBadges}>
            <span><Award size={14} /> ISO 9001:2015</span>
            <span><Award size={14} /> ISO 14001:2015</span>
            <span><Award size={14} /> ISO 45001:2018</span>
          </div>
        </div>
        
        <div className={styles.linkCol}>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Engineering Services</Link></li>
            <li><Link to="/projects">Projects Portfolio</Link></li>
            <li><Link to="/contact">Contact & Enquiry</Link></li>
          </ul>
        </div>
        
        <div className={styles.linkCol}>
          <h4>Core Disciplines</h4>
          <ul>
            <li><Link to="/services">PLC & SCADA Automation</Link></li>
            <li><Link to="/services">Control Panel Assembly (FAT)</Link></li>
            <li><Link to="/services">High Voltage & Switchgears</Link></li>
            <li><Link to="/services">Field Instrumentation Hook-up</Link></li>
            <li><Link to="/services">Reverse Engineering (DCS/F&G)</Link></li>
            <li><Link to="/services">AMC & Commissioning Support</Link></li>
          </ul>
        </div>
        
        <div className={styles.contactCol}>
          <h4>KSA Headquarters</h4>
          <div className={styles.contactItem}>
            <MapPin size={18} />
            <address>
              <strong>Auto-Control Synergy Services</strong><br />
              2nd Industrial City, Dammam<br />
              P.O. Box: 3926, Dammam 34442<br />
              Kingdom of Saudi Arabia
            </address>
          </div>
          <div className={styles.contactItem}>
            <Mail size={18} />
            <a href="mailto:RM@acsarabia.com">RM@acsarabia.com</a>
          </div>
          <div className={styles.contactItem}>
            <Phone size={18} />
            <a href="tel:+966564305884">+966 56 430 5884</a>
          </div>
          <div className={styles.contactItem}>
            <Phone size={18} />
            <a href="tel:+966138167077">+966 13 816 7077</a>
          </div>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <div className={`container ${styles.bottomInner}`}>
          <p>&copy; {new Date().getFullYear()} Auto-Control Synergy Services (ACS). All rights reserved.</p>
          <div className={styles.bottomLinks}>
            <span>Kingdom of Saudi Arabia</span>
            <span>·</span>
            <span>Vision 2030 Partner</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

