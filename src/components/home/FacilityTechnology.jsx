import React from 'react';
import { Settings, Cpu, HardDrive, PenTool } from 'lucide-react';
import styles from './FacilityTechnology.module.css';

const FacilityTechnology = () => {
  return (
    <section className={`section-lg ${styles.facilitySection}`}>
      <div className={`container ${styles.facilityGrid}`}>
        <div className={styles.imageCol}>
          <div className={styles.imageWrapper}>
            <div className={styles.overlay}></div>
            <img src="/images/facility_grand.jpg" alt="ACS State of the Art Facility" className={styles.mainImg} />
            
            <div className={`${styles.stagingBadge} animate-fade-up delay-300`}>
              <div className={styles.badgeIcon}></div>
              <div className={styles.badgeText}>
                <strong>Staging of</strong>
                <span>100+ Cabinets</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.contentCol}>
          <h4 className="text-secondary animate-fade-up">MANUFACTURING</h4>
          <h2 className="animate-fade-up delay-100">State of the Art Facility</h2>
          <p className={`${styles.leadText} animate-fade-up delay-200`}>
            Our panel assembly facility in Dammam is fully equipped with modern, best-in-class equipment, allowing us to offer total engineering of Instrumentation and Control solutions tailored to our clients' exact needs.
          </p>
          
          <div className={styles.techList}>
            <div className={`${styles.techItem} animate-fade-up delay-300`}>
              <div className={styles.techIcon}><Settings size={24} /></div>
              <div>
                <h3>Engineering & Drafting</h3>
                <p>AutoCAD design for cabinets, wiring drawings, loop drawings, IO loading, and Field JB mapping.</p>
              </div>
            </div>
            
            <div className={`${styles.techItem} animate-fade-up delay-400`}>
              <div className={styles.techIcon}><Cpu size={24} /></div>
              <div>
                <h3>PLC Engineering (SIL-2)</h3>
                <p>SIL-2 PLC integration on GE Intellution platforms and F&G Mimic solutions via OEM partners.</p>
              </div>
            </div>

            <div className={`${styles.techItem} animate-fade-up delay-500`}>
              <div className={styles.techIcon}><HardDrive size={24} /></div>
              <div>
                <h3>Reverse Engineering</h3>
                <p>DCS/F&G hardware reverse engineering for complex legacy Yokogawa systems.</p>
              </div>
            </div>

            <div className={`${styles.techItem} animate-fade-up delay-500`}>
              <div className={styles.techIcon}><PenTool size={24} /></div>
              <div>
                <h3>Hardware Engineering</h3>
                <p>Complete PDP design, marshalling, sourcing, assembly, wiring, and console design.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilityTechnology;
