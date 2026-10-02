import React from "react";
import { useTranslation } from "react-i18next";
import { Award, CheckCircle } from "lucide-react";
import styles from "./QualityCertifications.module.css";

const QualityCertifications = () => {
  const { t } = useTranslation();

  return (
    <section className={`section ${styles.qualitySection}`}>
      <div className={`container ${styles.qualityGrid}`}>
        <div className={`${styles.imageCol} animate-fade-in`}>
          <img
            src="/images/quality_certs.jpg"
            alt={t("images.quality")}
            className={styles.qaImage}
          />
        </div>

        <div className={styles.contentCol}>
          <div className="animate-fade-up">
            <h4 className="text-secondary">{t("home.quality.eyebrow")}</h4>
            <h2>{t("home.quality.title")}</h2>
            <p className={styles.leadText}>{t("home.quality.lead")}</p>
          </div>

          <div className={styles.certsGrid}>
            <div className={`${styles.certCard} animate-fade-up delay-100`}>
              <Award size={40} className="text-primary" />
              <h3>ISO 9001:2015</h3>
              <p>{t("home.quality.check1")}</p>
            </div>

            <div className={`${styles.certCard} animate-fade-up delay-200`}>
              <Award size={40} className="text-primary" />
              <h3>ISO 14001:2015</h3>
              <p>{t("home.quality.check2")}</p>
            </div>

            <div className={`${styles.certCard} animate-fade-up delay-300`}>
              <Award size={40} className="text-primary" />
              <h3>ISO 45001:2018</h3>
              <p>{t("home.quality.check3")}</p>
            </div>
          </div>

          <ul className={`${styles.checklist} animate-fade-up delay-400`}>
            <li>
              <CheckCircle size={20} className="text-secondary" />{" "}
              {t("home.quality.check1")}
            </li>
            <li>
              <CheckCircle size={20} className="text-secondary" />{" "}
              {t("home.quality.check2")}
            </li>
            <li>
              <CheckCircle size={20} className="text-secondary" />{" "}
              {t("home.quality.check3")}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default QualityCertifications;
