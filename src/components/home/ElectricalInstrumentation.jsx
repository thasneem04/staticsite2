import React from 'react';
import { Zap, Wrench, Thermometer, ShieldCheck } from 'lucide-react';
import styles from './ElectricalInstrumentation.module.css';

const ElectricalInstrumentation = () => {
  return (
    <section className={`section-lg ${styles.eiSection}`}>
      <div className="container">
        <div className={styles.header}>
          <div className="animate-fade-up">
            <h4 className="text-secondary">COMPREHENSIVE SOLUTIONS</h4>
            <h2>Electrical & Instrumentation</h2>
            <p>We deliver reliable and efficient services tailored to meet our clients' most demanding industrial requirements.</p>
          </div>
        </div>

        <div className={styles.mainGrid}>
          <div className={styles.servicesCol}>
            <div className={`${styles.serviceCard} animate-fade-up delay-100`}>
              <div className={styles.icon}><Zap size={32} /></div>
              <div>
                <h3>High Voltage & Power Systems</h3>
                <ul>
                  <li>13.4kV / 33kV Cable Works</li>
                  <li>HV Switchgear Replacement</li>
                  <li>Substation Installation</li>
                  <li>Power & Lighting Systems</li>
                  <li>Earth & Lightning Protection</li>
                </ul>
              </div>
            </div>

            <div className={`${styles.serviceCard} animate-fade-up delay-200`}>
              <div className={styles.icon}><Thermometer size={32} /></div>
              <div>
                <h3>Instrumentation & Control</h3>
                <ul>
                  <li>Instrument Installation & Hook-up</li>
                  <li>DCS Systems</li>
                  <li>Signal & Control Cabling</li>
                  <li>Fiber Optic Cabling</li>
                  <li>Calibration & Testing</li>
                </ul>
              </div>
            </div>

            <div className={`${styles.serviceCard} animate-fade-up delay-300`}>
              <div className={styles.icon}><ShieldCheck size={32} /></div>
              <div>
                <h3>Low Current Systems</h3>
                <div className={styles.lcGrid}>
                  <span>Fire Alarm</span>
                  <span>Public Address</span>
                  <span>Access Control</span>
                  <span>CCTV Systems</span>
                  <span>Data & Telecom</span>
                  <span>BMS</span>
                  <span>Nurse Call</span>
                  <span>MATV Systems</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.imageCol} animate-fade-in delay-400`}>
            <div className={styles.imageWrapper}>
              <img src="/images/electrical_hv.jpg" alt="High Voltage Electrical Switchgear" />
              <div className={styles.statsOverlay}>
                <div className={styles.statBox}>
                  <strong>25km+</strong>
                  <span>HV Cable Installed</span>
                </div>
                <div className={styles.statBox}>
                  <strong>Zero</strong>
                  <span>LTI Incidents</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElectricalInstrumentation;
