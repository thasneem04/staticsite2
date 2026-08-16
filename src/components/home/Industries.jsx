import React from 'react';
import styles from './Industries.module.css';

const Industries = () => {
  const industries = [
    "Oil & Gas",
    "Petrochemical",
    "Power & Utilities",
    "Water & Wastewater",
    "Cement & Mining",
    "Manufacturing"
  ];

  return (
    <section className={`section-dark ${styles.industriesSection}`}>
      <div className={styles.bgImage}></div>
      <div className={styles.overlay}></div>
      
      <div className={`container ${styles.content}`}>
        <div className={styles.header}>
          <div className="animate-fade-up">
            <h4 className="text-secondary">SECTORS WE SERVE</h4>
            <h2>Powering Critical Industries</h2>
            <p>Our solutions are designed to withstand the rigorous demands of heavy industry.</p>
          </div>
        </div>

        <div className={styles.industryGrid}>
          {industries.map((ind, idx) => (
            <div 
              key={idx} 
              className={`${styles.industryItem} animate-fade-up`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className={styles.indicator}></div>
              <h3>{ind}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
