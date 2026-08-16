import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './PanelSolutions.module.css';

const PanelSolutions = () => {
  const panels = [
    { name: "PLC Panels", img: "/images/about.jpg" },
    { name: "Busbar Protection", img: "/images/tech_expertise.jpg" },
    { name: "VFD Panels", img: "/images/facility_grand.jpg" },
    { name: "Transformer Protection", img: "/images/electrical_hv.jpg" },
  ];

  return (
    <section className={`section ${styles.panelsSection}`}>
      <div className="container">
        <div className={styles.header}>
          <div className="animate-fade-up">
            <h4 className="text-secondary">MANUFACTURING EXCELLENCE</h4>
            <h2>Our Panel Solutions</h2>
            <p>Custom-built control panels and cabinets engineered to international standards.</p>
          </div>
        </div>

        <div className={styles.panelsGrid}>
          {panels.map((panel, idx) => (
            <div 
              key={idx} 
              className={`${styles.panelCard} animate-scale-in`}
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className={styles.imgWrapper}>
                <img src={panel.img} alt={panel.name} />
                <div className={styles.overlay}>
                  <h3>{panel.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.cta}>
          <Link to="/services" className={styles.textLink}>
            View full manufacturing capabilities <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PanelSolutions;
