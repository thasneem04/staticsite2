import React from "react";
import { useTranslation } from "react-i18next";
import {
  Flame,
  Factory,
  Zap,
  Droplets,
  Cpu,
  Mountain,
  Building2,
  Warehouse,
} from "lucide-react";
import styles from "./Industries.module.css";

const Industries = () => {
  const { t } = useTranslation();
  const industries = [
    { name: t("home.industries.items.0"), icon: <Flame size={26} /> },
    { name: t("home.industries.items.1"), icon: <Factory size={26} /> },
    { name: t("home.industries.items.2"), icon: <Zap size={26} /> },
    { name: t("home.industries.items.3"), icon: <Droplets size={26} /> },
    { name: t("home.industries.items.4"), icon: <Cpu size={26} /> },
    { name: t("home.industries.items.5"), icon: <Mountain size={26} /> },
    { name: t("home.industries.items.6"), icon: <Building2 size={26} /> },
    { name: t("home.industries.items.7"), icon: <Warehouse size={26} /> },
  ];

  return (
    <section className={`section-dark ${styles.industriesSection}`}>
      <div className={styles.bgImage}></div>
      <div className={styles.overlay}></div>

      <div className={`container ${styles.content}`}>
        <div className={styles.header}>
          <div className="animate-fade-up">
            <h4 className="text-secondary">{t("home.industries.eyebrow")}</h4>
            <h2>{t("home.industries.title")}</h2>
            <div className={styles.accentLine}></div>
            <p>{t("home.industries.subtitle")}</p>
          </div>
        </div>

        <div className={styles.industryGrid}>
          {industries.map((ind, idx) => (
            <div
              key={idx}
              className={`${styles.industryItem} animate-fade-up`}
              style={{ animationDelay: `${idx * 60}ms` }}
            >
              <div className={styles.iconCircle}>{ind.icon}</div>
              <h3>{ind.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
