import React from 'react';
import styles from './ClientsWall.module.css';

const ClientsWall = () => {
  const clients = [
    "Saudi Aramco",
    "SABIC",
    "SEC",
    "SWCC",
    "Siemens",
    "Alstom",
    "ABB",
    "Schneider Electric"
  ];

  return (
    <section className={`section-light ${styles.clientsSection}`}>
      <div className="container">
        <div className={styles.header}>
          <div className="animate-fade-up">
            <h4 className="text-secondary">TRUSTED BY</h4>
            <h2>Our Partners & Clients</h2>
          </div>
        </div>

        <div className={styles.marqueeContainer}>
          <div className={styles.marquee}>
            <div className={styles.marqueeGroup}>
              {clients.map((client, idx) => (
                <div key={idx} className={styles.clientLogo}>
                  {client}
                </div>
              ))}
            </div>
            <div className={styles.marqueeGroup} aria-hidden="true">
              {clients.map((client, idx) => (
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
