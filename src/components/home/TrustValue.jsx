import React from "react";
import { useTranslation } from "react-i18next";
import { Target, CheckCircle } from "lucide-react";
import styles from "./TrustValue.module.css";

const TrustValue = () => {
  const { t } = useTranslation();

  return (
    <section className={`section-light ${styles.trustSection}`}>
      <div className={`container ${styles.trustGrid}`}>
        <div className={styles.trustItem}>
          <div className={styles.iconWrapper}>
            <Target size={40} className="text-secondary" />
          </div>
          <h3>{t("home.trustValue.missionTitle")}</h3>
          <ul className={styles.valueList}>
            <li>
              <CheckCircle size={18} className="text-primary" />{" "}
              {t("home.trustValue.mission1")}
            </li>
            <li>
              <CheckCircle size={18} className="text-primary" />{" "}
              {t("home.trustValue.mission2")}
            </li>
            <li>
              <CheckCircle size={18} className="text-primary" />{" "}
              {t("home.trustValue.mission3")}
            </li>
          </ul>
        </div>

        <div className={styles.trustItem}>
          <div className={styles.iconWrapper}>
            <div className={styles.visionIcon}></div>
          </div>
          <h3>{t("home.trustValue.visionTitle")}</h3>
          <p>{t("home.trustValue.visionText")}</p>
        </div>
      </div>
    </section>
  );
};

export default TrustValue;
