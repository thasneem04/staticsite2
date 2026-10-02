import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import styles from "./CompanyIntro.module.css";

const CompanyIntro = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className={`section-lg ${styles.introSection}`}>
      <div className={`container ${styles.introGrid}`}>
        <div className={styles.introContent}>
          <div className="animate-fade-up">
            <h4
              className="text-secondary"
              style={{
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              {t("home.companyIntro.eyebrow")}
            </h4>
            <h2 className="text-primary" style={{ marginBottom: "24px" }}>
              {t("home.companyIntro.title")}
            </h2>
            <p className={styles.leadText}>{t("home.companyIntro.lead")}</p>
            <p className={styles.subText}>{t("home.companyIntro.sub")}</p>

          <Link to={i18n.language === "ar" ? "/ar/about" : "/about"} className={styles.exploreLink}>
              {t("home.companyIntro.link")} <ChevronRight size={18} />
            </Link>
          </div>
        </div>

        <div className={styles.imageGrid}>
          <div className={`${styles.mainImage} animate-scale-in`}>
            <div className={styles.imgDeco}></div>
            <img src="/images/about.jpg" alt={t("images.about")} />
          </div>
          <div className={`${styles.floatingStats} animate-fade-up delay-300`}>
            <div className={styles.statItem}>
              <h3>{t("home.companyIntro.iso")}</h3>
              <span>{t("home.companyIntro.certified")}</span>
            </div>
            <div className={styles.statItem}>
              <h3>{t("home.companyIntro.ksa")}</h3>
              <span>{t("home.companyIntro.based")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;
