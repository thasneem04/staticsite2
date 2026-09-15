import React from "react";
import { useTranslation } from "react-i18next";
import {
  ShieldCheck,
  HardDrive,
  Cpu,
  Radio,
  Network,
  Server,
  Zap,
  Target,
  Activity,
  Sliders,
  CheckCircle2,
} from "lucide-react";
import styles from "./ExpertiseGrid.module.css";

const ExpertiseGrid = () => {
  const { t } = useTranslation();
  const expertiseItems = [
    {
      no: "01",
      name: t("home.expertise.items.0"),
      icon: <ShieldCheck size={24} />,
    },
    {
      no: "02",
      name: t("home.expertise.items.1"),
      icon: <HardDrive size={24} />,
    },
    { no: "03", name: t("home.expertise.items.2"), icon: <Cpu size={24} /> },
    { no: "04", name: t("home.expertise.items.3"), icon: <Zap size={24} /> },
    {
      no: "05",
      name: t("home.expertise.items.4"),
      icon: <Network size={24} />,
    },
    { no: "06", name: t("home.expertise.items.5"), icon: <Server size={24} /> },
    { no: "07", name: t("home.expertise.items.6"), icon: <Radio size={24} /> },
    { no: "08", name: t("home.expertise.items.7"), icon: <Target size={24} /> },
    {
      no: "09",
      name: t("home.expertise.items.8"),
      icon: <Activity size={24} />,
    },
    {
      no: "10",
      name: t("home.expertise.items.9"),
      icon: <Sliders size={24} />,
    },
  ];

  return (
    <section className={`section-lg ${styles.expertiseSection}`}>
      <div className={`container ${styles.expertiseContainer}`}>
        <div className={styles.sectionHeader}>
          <h4 className="text-secondary">{t("home.expertise.eyebrow")}</h4>
          <h2>{t("home.expertise.title")}</h2>
          <div className={styles.accentLine}></div>
          <p>{t("home.expertise.summary")}</p>
        </div>

        <div className={styles.contentGrid}>
          <div className={`${styles.imageCol} animate-fade-in`}>
            <div className={styles.imageWrapper}>
              <img
                src="/images/tech_expertise.jpg"
                alt="DCS Marshalling Cabinet Wiring"
              />
              <div className={styles.imageOverlay}>
                <div className={styles.overlayText}>
                  <strong>{t("home.expertise.scopeBadge")}</strong>
                  <span>FAT Tested in Dammam</span>
                </div>
              </div>
            </div>

            <div className={styles.projectHighlightsBox}>
              <h4>{t("home.expertise.summaryBoxTitle")}</h4>
              <ul>
                <li>
                  <CheckCircle2 size={16} className="text-secondary" />{" "}
                  {t("home.expertise.highlights.0")}
                </li>
                <li>
                  <CheckCircle2 size={16} className="text-secondary" />{" "}
                  {t("home.expertise.highlights.1")}
                </li>
                <li>
                  <CheckCircle2 size={16} className="text-secondary" />{" "}
                  {t("home.expertise.highlights.2")}
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.gridWrapper}>
            <div className={styles.scopeBadge}>
              {t("home.expertise.scopeBadge")}
            </div>
            <div className={styles.grid}>
              {expertiseItems.map((item, index) => (
                <div
                  key={index}
                  className={`${styles.gridItem} animate-fade-up`}
                  style={{ animationDelay: `${index * 40}ms` }}
                >
                  <div className={styles.itemNo}>{item.no}</div>
                  <div className={styles.itemIcon}>{item.icon}</div>
                  <div className={styles.itemName}>{item.name}</div>
                </div>
              ))}
            </div>

            <div className={styles.calibNote}>
              <ShieldCheck size={20} className="text-primary" />
              <span>{t("home.expertise.calibration")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseGrid;
