import React from 'react';
import { ShieldCheck, HardDrive, Cpu, Radio, Network, Server, Zap, Target } from 'lucide-react';
import styles from './ExpertiseGrid.module.css';

const ExpertiseGrid = () => {
  const expertiseItems = [
    { name: "DCS/ESD/F&G System Cabinets", icon: <ShieldCheck size={28} /> },
    { name: "Marshalling Cabinets (DI/AI/AO/DO/RTD)", icon: <HardDrive size={28} /> },
    { name: "IRP Cabinets", icon: <Cpu size={28} /> },
    { name: "Power Distribution Cabinets (PDB)", icon: <Zap size={28} /> },
    { name: "Network Cabinets", icon: <Network size={28} /> },
    { name: "Server Cabinets", icon: <Server size={28} /> },
    { name: "Remote Terminal Units (RTU)", icon: <Radio size={28} /> },
    { name: "Junction Box / Control Station (ATEX)", icon: <Target size={28} /> },
  ];

  return (
    <section className={`section ${styles.expertiseSection}`}>
      <div className={`container ${styles.expertiseContainer}`}>
        <div className={styles.sectionHeader}>
          <h2>Engineering Expertise</h2>
          <p>Delivering high-quality automation and control system solutions through advanced engineering and precision manufacturing.</p>
        </div>

        <div className={styles.contentGrid}>
          <div className={`${styles.imageWrapper} animate-fade-in`}>
            <img src="/images/tech_expertise.jpg" alt="DCS Marshalling Cabinet Wiring" />
            <div className={styles.imageOverlay}>
              <div className={styles.overlayText}>
                <strong>Precision Engineered</strong>
                <span>Tested to ISO Standards</span>
              </div>
            </div>
          </div>
          
          <div className={styles.gridWrapper}>
            <div className={styles.grid}>
              {expertiseItems.map((item, index) => (
                <div 
                  key={index} 
                  className={`${styles.gridItem} animate-fade-up`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className={styles.itemIcon}>{item.icon}</div>
                  <div className={styles.itemName}>{item.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseGrid;
