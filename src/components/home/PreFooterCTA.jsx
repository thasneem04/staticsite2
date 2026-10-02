import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Mail, ArrowRight } from "lucide-react";
import styles from "./PreFooterCTA.module.css";

const PreFooterCTA = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className={styles.ctaSection}>
      <div className={`container ${styles.ctaContainer}`}>
        <div className={styles.ctaContent}>
          <div className={styles.iconBadge}>
            <Mail size={22} />
          </div>
          <div>
            <h2>{t("home.cta.title")}</h2>
            <p>{t("home.cta.subtitle")}</p>
          </div>
        </div>
        <div className={styles.actionCol}>
          <Link to={i18n.language === "ar" ? "/ar/contact" : "/contact"} className={styles.actionBtn}>
            {t("home.cta.button")} <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PreFooterCTA;
