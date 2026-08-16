import React from 'react';
import { ArrowRight, Cpu, ShieldAlert, Activity, Zap, Radio, Sliders } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './PanelSolutions.module.css';

const PanelSolutions = () => {
  const panels = [
    { name: "PLC Panels", type: "Automation & Process Control", img: "/images/about.jpg", icon: <Sliders size={22} /> },
    { name: "Busbar Protection Panels", type: "Grid & Substation Protection", img: "/images/tech_expertise.jpg", icon: <Zap size={22} /> },
    { name: "VFD Panels", type: "Motor & Drive Speed Control", img: "/images/facility_grand.jpg", icon: <Activity size={22} /> },
    { name: "Busbar Protection Panels (Sec)", type: "Relay & Isolation Systems", img: "/images/electrical_hv.jpg", icon: <ShieldAlert size={22} /> },
    { name: "Transformer Protection Panels", type: "High-Voltage Asset Protection", img: "/images/amc_diagnostic.jpg", icon: <Cpu size={22} /> },
    { name: "Annunciator Panels", type: "Audible & Visual Alarm Matrix", img: "/images/projects.jpg", icon: <Radio size={22} /> },
  ];

  return (
    <section className={`section-lg ${styles.panelsSection}`}>
      <div className="container">
        <div className={styles.header}>
          <div className="animate-fade-up">
            <h4 className="text-secondary">MANUFACTURING EXCELLENCE</h4>
            <h2>Our Panel Solutions</h2>
            <div className={styles.accentLine}></div>
            <p>Custom-built control panels and cabinets engineered to international standards in our Dammam facility.</p>
          </div>
        </div>

        <div className={styles.panelsGrid}>
          {panels.map((panel, idx) => (
            <div 
              key={idx} 
              className={`${styles.panelCard} animate-scale-in`}
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <div className={styles.imgWrapper}>
                <img src={panel.img} alt={panel.name} />
                <div className={styles.overlay}>
                  <div className={styles.iconCircle}>{panel.icon}</div>
                  <h3>{panel.name}</h3>
                  <span>{panel.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.cta}>
          <Link to="/services" className={styles.textLink}>
            View full manufacturing & engineering capabilities <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PanelSolutions;

