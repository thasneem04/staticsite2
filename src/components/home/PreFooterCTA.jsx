import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight } from 'lucide-react';
import styles from './PreFooterCTA.module.css';

const PreFooterCTA = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={`container ${styles.ctaContainer}`}>
        <div className={styles.ctaContent}>
          <div className={styles.iconBadge}>
            <Mail size={22} />
          </div>
          <div>
            <h2>Let's Discuss Your Next Automation Project</h2>
            <p>Share your technical requirements and our engineering team will get back to you promptly.</p>
          </div>
        </div>
        <div className={styles.actionCol}>
          <Link to="/contact" className={styles.actionBtn}>
            Request Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PreFooterCTA;
