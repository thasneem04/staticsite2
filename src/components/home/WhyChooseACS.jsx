import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Factory, ShieldCheck, Clock, ArrowRight } from 'lucide-react';
import styles from './WhyChooseACS.module.css';

const WhyChooseACS = () => {
  return (
    <section className={`section-lg ${styles.whySection}`}>
      <div className="container">
        <div className={styles.splitGrid}>
          {/* Left Column: Editorial Overview */}
          <div className={styles.leftCol}>
            <p className={styles.eyebrow}>WHY CHOOSE ACS?</p>
            <div className={styles.accentLine}></div>
            <h2>Your Trusted Industrial Automation Partner — In Kingdom & Beyond</h2>
            <p className={styles.leadPara}>
              Industrial plants face evolving challenges. Ensuring optimal process uptime, safety, and compliance requires a specialized engineering team with deep local capabilities and proven execution track records.
            </p>
            <p className={styles.subPara}>
              Auto-Control Synergy Services (ACS) operates a modern panel fabrication and assembly facility in Dammam's 2nd Industrial City. We seamlessly integrate with client operations across Oil & Gas, Power Generation, Utilities, and Manufacturing to deliver turnkey automation, control panels, and E&I field services.
            </p>
            <Link to="/about" className={styles.learnMoreBtn}>
              Learn More About ACS <ArrowRight size={18} />
            </Link>
          </div>

          {/* Right Column: 2x2 Feature Grid */}
          <div className={styles.rightCol}>
            <div className={styles.featureCard}>
              <div className={styles.iconBox}><Award size={26} /></div>
              <h3>Engineering Excellence</h3>
              <p>Experienced automation engineers delivering accurate, robust, and SIL-rated control solutions.</p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.iconBox}><Factory size={26} /></div>
              <h3>In-House Assembly (FAT)</h3>
              <p>Dedicated Dammam facility with capacity for staging and testing 100+ control cabinets simultaneously.</p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.iconBox}><ShieldCheck size={26} /></div>
              <h3>International Standards</h3>
              <p>Certified ISO 9001, 14001, 45001 compliance adhering strictly to IEC and Saudi industrial regulations.</p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.iconBox}><Clock size={26} /></div>
              <h3>On-Time Project Delivery</h3>
              <p>Disciplined project schedules, zero-LTI safety standards, and reliable turnaround for critical shutdowns.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseACS;

