import React from 'react';
import { Flame, Factory, Zap, Droplets, Cpu, Mountain, Building2, Warehouse } from 'lucide-react';
import styles from './Industries.module.css';

const Industries = () => {
  const industries = [
    { name: "Oil & Gas", icon: <Flame size={26} /> },
    { name: "Petrochemical", icon: <Factory size={26} /> },
    { name: "Energy & Power Generation", icon: <Zap size={26} /> },
    { name: "Water & Wastewater Treatment", icon: <Droplets size={26} /> },
    { name: "Manufacturing Industries", icon: <Cpu size={26} /> },
    { name: "Mining & Metals", icon: <Mountain size={26} /> },
    { name: "Infrastructure Projects", icon: <Building2 size={26} /> },
    { name: "Industrial Facilities", icon: <Warehouse size={26} /> },
  ];

  return (
    <section className={`section-dark ${styles.industriesSection}`}>
      <div className={styles.bgImage}></div>
      <div className={styles.overlay}></div>
      
      <div className={`container ${styles.content}`}>
        <div className={styles.header}>
          <div className="animate-fade-up">
            <h4 className="text-secondary">INDUSTRIES WE SERVE</h4>
            <h2>Powering Critical Industrial Sectors</h2>
            <div className={styles.accentLine}></div>
            <p>Our automation, control panels, and E&I systems are engineered to withstand the rigorous demands of heavy industry across the Kingdom.</p>
          </div>
        </div>

        <div className={styles.industryGrid}>
          {industries.map((ind, idx) => (
            <div 
              key={idx} 
              className={`${styles.industryItem} animate-fade-up`}
              style={{ animationDelay: `${idx * 60}ms` }}
            >
              <div className={styles.iconCircle}>{ind.icon}</div>
              <h3>{ind.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;

