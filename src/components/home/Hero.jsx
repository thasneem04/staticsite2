import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Factory, Award, CheckCircle2 } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg}></div>
      <div className={styles.heroOverlay}></div>
      
      <div className={`container ${styles.heroContent}`}>
        <div className={styles.textContent}>
          <div className={`${styles.badge} animate-fade-up`}>
            Industrial Automation & Engineering Solutions
          </div>
          <h1 className="animate-fade-up delay-100">
            INNOVATE. INTEGRATE. EXCEL.
          </h1>
          <p className={`${styles.heroDesc} animate-fade-up delay-200`}>
            Auto-Control Synergy Services (ACS) is a premier system integrator and panel assembler in Saudi Arabia, delivering complete automation, control systems, and engineering solutions to help our clients operate smarter, safer, and with uncompromising reliability.
          </p>
          <div className={`${styles.heroBtns} animate-fade-up delay-300`}>
            <Link to="/services" className={styles.primaryBtn}>
              Explore Solutions <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className={styles.secondaryBtn}>
              Request Proposal
            </Link>
          </div>
        </div>

        {/* Grand Trust Metric Strip */}
        <div className={`${styles.metricsRibbon} animate-fade-up delay-400`}>
          <div className={styles.metricItem}>
            <div className={styles.metricIcon}><Factory size={22} /></div>
            <div className={styles.metricText}>
              <strong>2021</strong>
              <span>Established in KSA</span>
            </div>
          </div>
          <div className={styles.metricDivider}></div>
          <div className={styles.metricItem}>
            <div className={styles.metricIcon}><Award size={22} /></div>
            <div className={styles.metricText}>
              <strong>100+</strong>
              <span>Cabinet Staging Capacity</span>
            </div>
          </div>
          <div className={styles.metricDivider}></div>
          <div className={styles.metricItem}>
            <div className={styles.metricIcon}><ShieldCheck size={22} /></div>
            <div className={styles.metricText}>
              <strong>ISO Certified</strong>
              <span>9001 · 14001 · 45001</span>
            </div>
          </div>
          <div className={styles.metricDivider}></div>
          <div className={styles.metricItem}>
            <div className={styles.metricIcon}><CheckCircle2 size={22} /></div>
            <div className={styles.metricText}>
              <strong>Zero LTI</strong>
              <span>Safety Excellence Record</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className={`${styles.scrollIndicator} animate-fade-in delay-500`}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

