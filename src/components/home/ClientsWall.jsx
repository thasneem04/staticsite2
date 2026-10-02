import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './ClientsWall.module.css';

const ClientsWall = () => {
  const { t } = useTranslation();

  // Company/brand names are kept in English regardless of language (proper nouns)
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
            <h4 className="text-secondary">{t("home.clientsWall.eyebrow")}</h4>
            <h2>{t("home.clientsWall.title")}</h2>
            <div className={styles.accentLine}></div>
            <p>{t("home.clientsWall.subtitle")}</p>
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
