import React from "react";
import { useTranslation } from "react-i18next";
import { Zap, Wrench, Thermometer, ShieldCheck } from "lucide-react";
import styles from "./ElectricalInstrumentation.module.css";

const ElectricalInstrumentation = () => {
  const { t } = useTranslation();

  return (
    <section className={`section-lg ${styles.eiSection}`}>
      <div className="container">
        <div className={styles.header}>
          <div className="animate-fade-up">
            <h4 className="text-secondary">{t("home.electrical.eyebrow")}</h4>
            <h2>{t("home.electrical.title")}</h2>
            <p>{t("home.electrical.subtitle")}</p>
          </div>
        </div>

        <div className={styles.mainGrid}>
          <div className={styles.servicesCol}>
            <div className={`${styles.serviceCard} animate-fade-up delay-100`}>
              <div className={styles.icon}>
                <Zap size={32} />
              </div>
              <div>
                <h3>{t("home.electrical.highVoltageTitle")}</h3>
                <ul>
                  {t("home.electrical.hvItems", { returnObjects: true }).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={`${styles.serviceCard} animate-fade-up delay-200`}>
              <div className={styles.icon}>
                <Thermometer size={32} />
              </div>
              <div>
                <h3>{t("home.electrical.instrumentTitle")}</h3>
                <ul>
                  {t("home.electrical.instrumentItems", { returnObjects: true }).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={`${styles.serviceCard} animate-fade-up delay-300`}>
              <div className={styles.icon}>
                <ShieldCheck size={32} />
              </div>
              <div>
                <h3>{t("home.electrical.lowCurrentTitle")}</h3>
                <div className={styles.lcGrid}>
                  {t("home.electrical.lowCurrent", { returnObjects: true }).map(
                    (item) => (
                      <span key={item}>{item}</span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.imageCol} animate-fade-in delay-400`}>
            <div className={styles.imageWrapper}>
              <img
                src="/images/electrical_hv.jpg"
                alt={t("images.highVoltage")}
              />
              <div className={styles.statsOverlay}>
                <div className={styles.statBox}>
                  <strong>25km+</strong>
                  <span>{t("home.electrical.statsInstalled")}</span>
                </div>
                <div className={styles.statBox}>
                  <strong>{t("home.electrical.zeroValue")}</strong>
                  <span>{t("home.electrical.statsSafety")}</span>
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
