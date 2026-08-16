import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import styles from './CompanyIntro.module.css';

const CompanyIntro = () => {
  return (
    <section className={`section-lg ${styles.introSection}`}>
      <div className={`container ${styles.introGrid}`}>
        <div className={styles.introContent}>
          <div className="animate-fade-up">
            <h4 className="text-secondary" style={{ letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>
              Who We Are
            </h4>
            <h2 className="text-primary" style={{ marginBottom: '24px' }}>
              Engineering Excellence Since 2021
            </h2>
            <p className={styles.leadText}>
              Auto-Control Synergy Services (ACS) is the system integration division of Redaa Developing Company (RDC), operating as a leading manufacturer and panel assembler in Saudi Arabia.
            </p>
            <p className={styles.subText}>
              From the initial development phase to on-site installation, we deliver a broad range of services including project management, engineering, supply, integration, assembly, testing, and site services. We stand at the forefront of process automation, providing tailor-made solutions for the most demanding industrial environments.
            </p>
            
            <Link to="/about" className={styles.exploreLink}>
              Discover our full capabilities <ChevronRight size={18} />
            </Link>
          </div>
        </div>
        
        <div className={styles.imageGrid}>
          <div className={`${styles.mainImage} animate-scale-in`}>
            <div className={styles.imgDeco}></div>
            <img src="/images/about.jpg" alt="ACS Engineer at Control Panel" />
          </div>
          <div className={`${styles.floatingStats} animate-fade-up delay-300`}>
            <div className={styles.statItem}>
              <h3>ISO</h3>
              <span>Certified</span>
            </div>
            <div className={styles.statItem}>
              <h3>KSA</h3>
              <span>Based</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;
