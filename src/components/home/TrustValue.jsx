import React from 'react';
import { Target, CheckCircle } from 'lucide-react';
import styles from './TrustValue.module.css';

const TrustValue = () => {
  return (
    <section className={`section-light ${styles.trustSection}`}>
      <div className={`container ${styles.trustGrid}`}>
        <div className={styles.trustItem}>
          <div className={styles.iconWrapper}>
            <Target size={40} className="text-secondary" />
          </div>
          <h3>Our Mission</h3>
          <ul className={styles.valueList}>
            <li><CheckCircle size={18} className="text-primary" /> Expand through strategic global partnerships</li>
            <li><CheckCircle size={18} className="text-primary" /> Promote environmental sustainability & safety</li>
            <li><CheckCircle size={18} className="text-primary" /> Deliver reliable, zero-compromise solutions</li>
          </ul>
        </div>
        
        <div className={styles.trustItem}>
          <div className={styles.iconWrapper}>
            <div className={styles.visionIcon}></div>
          </div>
          <h3>Our Vision</h3>
          <p>
            To be a leading integrated company with diversified and specialized activities in General Contracting, Trade, and Industry. We strive to be a prominent and influential presence in local, regional, and global markets.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustValue;
