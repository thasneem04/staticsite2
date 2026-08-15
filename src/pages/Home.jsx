import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, ShieldCheck, Zap, Settings } from 'lucide-react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContent}`}>
          <h1 className="animate-fade-up">INNOVATE. INTEGRATE. EXCEL.</h1>
          <p className={`${styles.heroDesc} animate-fade-up`} style={{animationDelay: '0.2s'}}>
            Complete Automation Solutions. Reliable Partner. Lasting Impact.
          </p>
          <div className={`${styles.heroBtns} animate-fade-up`} style={{animationDelay: '0.4s'}}>
            <Link to="/services" className={styles.primaryBtn}>
              Explore Solutions <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className={styles.secondaryBtn}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section">
        <div className={`container ${styles.aboutGrid}`}>
          <div className={styles.aboutText}>
            <h2 className="text-primary">Engineering Excellence Since 2021</h2>
            <p>
              Auto-Control Synergy Services (ACS) is a leading system integration company in Saudi Arabia, specializing in the manufacturing and panel assembly of PLC/Drives based Industrial Automation panels.
            </p>
            <p>
              We stand at the forefront of process automation, delivering tailor-made industrial automation and engineering solutions. From the initial development phase to on-site installation, we provide a broad range of services including project management, engineering, supply, integration, assembly, testing and site services.
            </p>
            <ul className={styles.aboutFeatures}>
              <li><ShieldCheck size={20} className="text-secondary" /> Quality Assured & ISO Certified</li>
              <li><Zap size={20} className="text-secondary" /> State-of-the-Art Assembly Facility</li>
              <li><Settings size={20} className="text-secondary" /> Complete Turnkey Solutions</li>
            </ul>
            <Link to="/about" className={styles.textLink}>
              Learn more about our capabilities <ChevronRight size={16} />
            </Link>
          </div>
          <div className={styles.aboutImageWrapper}>
            <div className={styles.aboutImageDeco}></div>
            <img src="/images/about.jpg" alt="ACS Engineer inspecting electrical panel" className={styles.aboutImage} />
          </div>
        </div>
      </section>

      {/* Core Services Preview */}
      <section className="section section-light">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Our Core Services</h2>
            <p>Driving digital transformation and operational efficiency across industries.</p>
          </div>
          
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <Settings size={32} />
              </div>
              <h3>PLC Automation & Control Systems</h3>
              <p>Custom engineered PLC panels with reliable components and clean wiring for precise control and seamless integration.</p>
              <Link to="/services" className={styles.cardLink}>View Details <ArrowRight size={14} /></Link>
            </div>
            
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <Zap size={32} />
              </div>
              <h3>Electrical & Instrumentation</h3>
              <p>Comprehensive electrical installations for industrial and commercial projects, from cable pulling to switchgear installation.</p>
              <Link to="/services" className={styles.cardLink}>View Details <ArrowRight size={14} /></Link>
            </div>
            
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <ShieldCheck size={32} />
              </div>
              <h3>SCADA & RTU Systems</h3>
              <p>Scalable SCADA & RTU solutions for real-time monitoring, data acquisition, and enhanced process visibility.</p>
              <Link to="/services" className={styles.cardLink}>View Details <ArrowRight size={14} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Trusted by Leading Organizations</h2>
            <p>We deliver excellence across Oil & Gas, Industrial, Energy, and Process sectors.</p>
          </div>
          <div className={styles.clientsGrid}>
            <div className={styles.clientLogo}>Honeywell</div>
            <div className={styles.clientLogo}>Siemens</div>
            <div className={styles.clientLogo}>Schneider Electric</div>
            <div className={styles.clientLogo}>Emerson</div>
            <div className={styles.clientLogo}>Larsen & Toubro</div>
            <div className={styles.clientLogo}>Dräger</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2>Let's Build Smarter Industrial Operations Together</h2>
          <p>For project inquiries, technical discussions, or partnership opportunities.</p>
          <Link to="/contact" className={styles.primaryBtnLarge}>Contact ACS Today</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
