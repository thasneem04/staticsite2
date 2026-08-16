import React from 'react';
import styles from './ClientsWall.module.css';

const ClientsWall = () => {
  const majorClients = [
    "Honeywell",
    "Larsen & Toubro",
    "Siemens",
    "Schneider Electric",
    "Emerson",
    "Dräger",
    "Saudi Aramco",
    "Saudi Electricity Company",
    "SABIC",
    "JHAH",
    "Petro Rabigh",
    "Ma'aden"
  ];

  return (
    <section className={`section-light ${styles.clientsSection}`}>
      <div className="container">
        <div className={styles.header}>
          <div className="animate-fade-up">
            <h4 className="text-secondary">MAJOR CLIENTS & PARTNERS</h4>
            <h2>Trusted by Leading Organizations</h2>
            <div className={styles.accentLine}></div>
            <p>Redaa Developing Company & Auto Control Synergy Industrial Company — Trusted across Oil & Gas, Energy, and Process industries.</p>
          </div>
        </div>

        <div className={styles.marqueeContainer}>
          <div className={styles.marquee}>
            <div className={styles.marqueeGroup}>
              {majorClients.map((client, idx) => (
                <div key={idx} className={styles.clientLogo}>
                  {client}
                </div>
              ))}
            </div>
            <div className={styles.marqueeGroup} aria-hidden="true">
              {majorClients.map((client, idx) => (
                <div key={`dup-${idx}`} className={styles.clientLogo}>
                  {client}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsWall;

