import React from "react";
import { useTranslation } from "react-i18next";
import { ShieldCheck } from "lucide-react";
import styles from "./StatementBanner.module.css";

const StatementBanner = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.statementSection}>
      <div className={styles.statementBg}></div>
      <div className={styles.statementOverlay}></div>

      <div className={`container ${styles.statementContent}`}>
        <div className={styles.iconCircle}>
          <ShieldCheck size={26} />
        </div>
        <h2>
          {t("home.statement.line1")}
          <span>{t("home.statement.line2")}</span>
        </h2>
      </div>
    </section>
  );
};

export default StatementBanner;
