import React from "react";
import { useTranslation } from "react-i18next";
import { Settings, Cpu, HardDrive, PenTool } from "lucide-react";
import styles from "./FacilityTechnology.module.css";

const FacilityTechnology = () => {
  const { t } = useTranslation();

  return (
    <section className={`section-lg ${styles.facilitySection}`}>
      <div className={`container ${styles.facilityGrid}`}>
        <div className={styles.imageCol}>
          <div className={styles.imageWrapper}>
            <div className={styles.overlay}></div>
            <img
              src="/images/facility_grand.jpg"
              alt="ACS State of the Art Facility"
              className={styles.mainImg}
            />

            <div className={`${styles.stagingBadge} animate-fade-up delay-300`}>
              <div className={styles.badgeIcon}></div>
              <div className={styles.badgeText}>
                <strong>{t("home.facility.badgeTop")}</strong>
                <span>{t("home.facility.badgeBottom")}</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.contentCol}>
          <h4 className="text-secondary animate-fade-up">
            {t("home.facility.eyebrow")}
          </h4>
          <h2 className="animate-fade-up delay-100">
            {t("home.facility.title")}
          </h2>
          <p className={`${styles.leadText} animate-fade-up delay-200`}>
            {t("home.facility.lead")}
          </p>

          <div className={styles.techList}>
            <div className={`${styles.techItem} animate-fade-up delay-300`}>
              <div className={styles.techIcon}>
                <Settings size={24} />
              </div>
              <div>
                <h3>{t("home.facility.items.0.title")}</h3>
                <p>{t("home.facility.items.0.desc")}</p>
              </div>
            </div>

            <div className={`${styles.techItem} animate-fade-up delay-400`}>
              <div className={styles.techIcon}>
                <Cpu size={24} />
              </div>
              <div>
                <h3>{t("home.facility.items.1.title")}</h3>
                <p>{t("home.facility.items.1.desc")}</p>
              </div>
            </div>

            <div className={`${styles.techItem} animate-fade-up delay-500`}>
              <div className={styles.techIcon}>
                <HardDrive size={24} />
              </div>
              <div>
                <h3>{t("home.facility.items.2.title")}</h3>
                <p>{t("home.facility.items.2.desc")}</p>
              </div>
            </div>

            <div className={`${styles.techItem} animate-fade-up delay-500`}>
              <div className={styles.techIcon}>
                <PenTool size={24} />
              </div>
              <div>
                <h3>{t("home.facility.items.3.title")}</h3>
                <p>{t("home.facility.items.3.desc")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilityTechnology;
