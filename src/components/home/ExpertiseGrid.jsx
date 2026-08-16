import React from 'react';
import { ShieldCheck, HardDrive, Cpu, Radio, Network, Server, Zap, Target, Activity, Sliders, CheckCircle2 } from 'lucide-react';
import styles from './ExpertiseGrid.module.css';

const ExpertiseGrid = () => {
  const expertiseItems = [
    { no: "01", name: "DCS / ESD / F&G System Cabinets", icon: <ShieldCheck size={24} /> },
    { no: "02", name: "Marshalling Cabinets (DI / AI / AO / DO / RTD Signal)", icon: <HardDrive size={24} /> },
    { no: "03", name: "IRP Cabinets", icon: <Cpu size={24} /> },
    { no: "04", name: "Power Distribution Cabinets (PDB)", icon: <Zap size={24} /> },
    { no: "05", name: "Network Cabinets", icon: <Network size={24} /> },
    { no: "06", name: "Server Cabinets", icon: <Server size={24} /> },
    { no: "07", name: "Remote Terminal Units (RTU)", icon: <Radio size={24} /> },
    { no: "08", name: "Junction Box, Control Station – Exe (ATEX Certified)", icon: <Target size={24} /> },
    { no: "09", name: "Vibration Monitoring System Cabinets", icon: <Activity size={24} /> },
    { no: "10", name: "PLC Control & Marshalling Cabinets", icon: <Sliders size={24} /> },
  ];

  return (
    <section className={`section-lg ${styles.expertiseSection}`}>
      <div className={`container ${styles.expertiseContainer}`}>
        <div className={styles.sectionHeader}>
          <h4 className="text-secondary">OUR EXPERTISE</h4>
          <h2>Scope of Engineering & Panel Systems</h2>
          <div className={styles.accentLine}></div>
          <p>
            At Auto-Control Synergy Services, we specialize in delivering high-quality automation and control system solutions through advanced engineering, precision manufacturing, and proven industry expertise.
          </p>
        </div>

        <div className={styles.contentGrid}>
          <div className={`${styles.imageCol} animate-fade-in`}>
            <div className={styles.imageWrapper}>
              <img src="/images/tech_expertise.jpg" alt="DCS Marshalling Cabinet Wiring" />
              <div className={styles.imageOverlay}>
                <div className={styles.overlayText}>
                  <strong>100+ Staged Cabinets</strong>
                  <span>FAT Tested in Dammam</span>
                </div>
              </div>
            </div>

            {/* Design & Engineering Highlights Box */}
            <div className={styles.projectHighlightsBox}>
              <h4>Design & Engineering Scope</h4>
              <ul>
                <li><CheckCircle2 size={16} className="text-secondary" /> DCS & ESD System Upgrades, Hardware Engineering, Cabinet Assembly, System Staging FAT, Lead Site Installation & IO Loop Checks.</li>
                <li><CheckCircle2 size={16} className="text-secondary" /> SABIC Petrokemya Plant: MCC Interface Upgrade for VCM & PVC Train A&B Plants with newly designed swing frames and static frames.</li>
                <li><CheckCircle2 size={16} className="text-secondary" /> Field installation of Instruments, CCTV, F&G detection devices, JBs, and Stanchions.</li>
              </ul>
            </div>
          </div>
          
          <div className={styles.gridWrapper}>
            <div className={styles.scopeBadge}>10 Core Cabinet Architectures</div>
            <div className={styles.grid}>
              {expertiseItems.map((item, index) => (
                <div 
                  key={index} 
                  className={`${styles.gridItem} animate-fade-up`}
                  style={{ animationDelay: `${index * 40}ms` }}
                >
                  <div className={styles.itemNo}>{item.no}</div>
                  <div className={styles.itemIcon}>{item.icon}</div>
                  <div className={styles.itemName}>{item.name}</div>
                </div>
              ))}
            </div>

            {/* ISO Calibration Note */}
            <div className={styles.calibNote}>
              <ShieldCheck size={20} className="text-primary" />
              <span>All equipment is calibrated and maintained per ISO 9001:2015 standard requirements.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseGrid;

