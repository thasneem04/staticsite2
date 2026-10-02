import React from "react";
import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  Cpu,
  ShieldAlert,
  Activity,
  Zap,
  Radio,
  Sliders,
} from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./PanelSolutions.module.css";

const icons = [
  <Sliders size={22} />,
  <Zap size={22} />,
  <Activity size={22} />,
  <ShieldAlert size={22} />,
  <Cpu size={22} />,
  <Radio size={22} />,
];

const images = [
  "/images/about.jpg",
  "/images/tech_expertise.jpg",
  "/images/facility_grand.jpg",
  "/images/electrical_hv.jpg",
  "/images/amc_diagnostic.jpg",
  "/images/projects.jpg",
];

const PanelSolutions = () => {
  const { t, i18n } = useTranslation();
  const panels = t("home.panelSolutions.panels", { returnObjects: true });
  const isArabic = i18n.language === "ar";

  return (
    <section className={`section-lg ${styles.panelsSection}`}>
      <div className="container">
        <div className={styles.header}>
          <div className="animate-fade-up">
            <h4 className="text-secondary">
              {t("home.panelSolutions.eyebrow")}
            </h4>
            <h2>{t("home.panelSolutions.title")}</h2>
            <div className={styles.accentLine}></div>
            <p>{t("home.panelSolutions.subtitle")}</p>
          </div>
        </div>

        <div className={styles.panelsGrid}>
          {panels.map((panel, idx) => (
            <div
              key={idx}
              className={`${styles.panelCard} animate-scale-in`}
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <div className={styles.imgWrapper}>
                <img src={images[idx]} alt={panel.name} />
                <div className={styles.overlay}>
                  <div className={styles.iconCircle}>{icons[idx]}</div>
                  <h3>{panel.name}</h3>
                  <span>{panel.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <Link
            to={isArabic ? "/ar/services" : "/services"}
            className={styles.textLink}
          >
            {t("home.panelSolutions.link")} <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PanelSolutions;
