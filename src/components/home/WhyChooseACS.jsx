import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Award, Factory, ShieldCheck, Clock, ArrowRight } from "lucide-react";
import styles from "./WhyChooseACS.module.css";

const WhyChooseACS = () => {
  const { t } = useTranslation();

  return (
    <section className={`section-lg ${styles.whySection}`}>
      <div className="container">
        <div className={styles.splitGrid}>
          <div className={styles.leftCol}>
            <p className={styles.eyebrow}>{t("home.whyChoose.eyebrow")}</p>
            <div className={styles.accentLine}></div>
            <h2>{t("home.whyChoose.title")}</h2>
            <p className={styles.leadPara}>{t("home.whyChoose.lead")}</p>
            <p className={styles.subPara}>{t("home.whyChoose.sub")}</p>
            <Link to="/about" className={styles.learnMoreBtn}>
              {t("home.whyChoose.link")} <ArrowRight size={18} />
            </Link>
          </div>

          <div className={styles.rightCol}>
            <div className={styles.featureCard}>
              <div className={styles.iconBox}>
                <Award size={26} />
              </div>
              <h3>{t("home.whyChoose.cards.0.title")}</h3>
              <p>{t("home.whyChoose.cards.0.desc")}</p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.iconBox}>
                <Factory size={26} />
              </div>
              <h3>{t("home.whyChoose.cards.1.title")}</h3>
              <p>{t("home.whyChoose.cards.1.desc")}</p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.iconBox}>
                <ShieldCheck size={26} />
              </div>
              <h3>{t("home.whyChoose.cards.2.title")}</h3>
              <p>{t("home.whyChoose.cards.2.desc")}</p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.iconBox}>
                <Clock size={26} />
              </div>
              <h3>{t("home.whyChoose.cards.3.title")}</h3>
              <p>{t("home.whyChoose.cards.3.desc")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseACS;
