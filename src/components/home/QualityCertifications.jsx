import React from 'react';
import { Award, CheckCircle } from 'lucide-react';
import styles from './QualityCertifications.module.css';

const QualityCertifications = () => {
  return (
    <section className={`section ${styles.qualitySection}`}>
      <div className={`container ${styles.qualityGrid}`}>
        
        <div className={`${styles.imageCol} animate-fade-in`}>
          <img src="/images/quality_certs.jpg" alt="QA Engineer inspecting panel" className={styles.qaImage} />
        </div>

        <div className={styles.contentCol}>
          <div className="animate-fade-up">
            <h4 className="text-secondary">QUALITY ASSURANCE</h4>
            <h2>Certified Excellence</h2>
            <p className={styles.leadText}>
              At ACS, quality is embedded in every process. We adhere strictly to international standards to ensure safety, reliability, and precision in all our deliveries.
            </p>
          </div>

          <div className={styles.certsGrid}>
            <div className={`${styles.certCard} animate-fade-up delay-100`}>
              <Award size={40} className="text-primary" />
              <h3>ISO 9001:2015</h3>
              <p>Quality Management System</p>
            </div>
            
            <div className={`${styles.certCard} animate-fade-up delay-200`}>
              <Award size={40} className="text-primary" />
              <h3>ISO 14001:2015</h3>
              <p>Environmental Management</p>
            </div>

            <div className={`${styles.certCard} animate-fade-up delay-300`}>
              <Award size={40} className="text-primary" />
              <h3>ISO 45001:2018</h3>
              <p>Occupational Health & Safety</p>
            </div>
          </div>
          
          <ul className={`${styles.checklist} animate-fade-up delay-400`}>
            <li><CheckCircle size={20} className="text-secondary" /> Rigorous Factory Acceptance Testing (FAT)</li>
            <li><CheckCircle size={20} className="text-secondary" /> Comprehensive Site Acceptance Testing (SAT)</li>
            <li><CheckCircle size={20} className="text-secondary" /> Continuous employee training & development</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default QualityCertifications;
