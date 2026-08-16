import React from 'react';
import { ShieldCheck } from 'lucide-react';
import styles from './StatementBanner.module.css';

const StatementBanner = () => {
  return (
    <section className={styles.statementSection}>
      <div className={styles.statementBg}></div>
      <div className={styles.statementOverlay}></div>
      
      <div className={`container ${styles.statementContent}`}>
        <div className={styles.iconCircle}>
          <ShieldCheck size={26} />
        </div>
        <h2>
          YOU BUILD THE INDUSTRIAL FACILITY.
          <span>WE POWER THE AUTOMATION & CONTROL SYSTEMS BEHIND IT.</span>
        </h2>
      </div>
    </section>
  );
};

export default StatementBanner;
