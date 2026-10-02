import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Factory,
  Award,
  CheckCircle2,
} from "lucide-react";
import styles from "./Hero.module.css";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.hero}>
      <div className={styles.heroBg}></div>
      <div className={styles.heroOverlay}></div>

      <div className={`container ${styles.heroContent}`}>
        <div className={styles.textContent}>
          <div className={`${styles.badge} animate-fade-up`}>
            {t("home.hero.badge")}
          </div>
          <h1 className="animate-fade-up delay-100">{t("home.hero.title")}</h1>
          <p className={`${styles.heroDesc} animate-fade-up delay-200`}>
            {t("home.hero.desc")}
          </p>
          <div className={`${styles.heroBtns} animate-fade-up delay-300`}>
            <Link to="/services" className={styles.primaryBtn}>
              {t("home.hero.explore")} <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className={styles.secondaryBtn}>
              {t("home.hero.request")}
            </Link>
          </div>
        </div>

        <div className={`${styles.metricsRibbon} animate-fade-up delay-400`}>
          <div className={styles.metricItem}>
            <div className={styles.metricIcon}>
              <Factory size={22} />
            </div>
            <div className={styles.metricText}>
              <strong>2021</strong>
              <span>{t("home.hero.metricEstablished")}</span>
            </div>
          </div>
          <div className={styles.metricDivider}></div>
          <div className={styles.metricItem}>
            <div className={styles.metricIcon}>
              <Award size={22} />
            </div>
            <div className={styles.metricText}>
              <strong>100+</strong>
              <span>{t("home.hero.metricCapacity")}</span>
            </div>
          </div>
          <div className={styles.metricDivider}></div>
          <div className={styles.metricItem}>
            <div className={styles.metricIcon}>
              <ShieldCheck size={22} />
            </div>
            <div className={styles.metricText}>
              <strong>{t("home.hero.metricIso")}</strong>
              <span>9001 · 14001 · 45001</span>
            </div>
          </div>
          <div className={styles.metricDivider}></div>
          <div className={styles.metricItem}>
            <div className={styles.metricIcon}>
              <CheckCircle2 size={22} />
            </div>
            <div className={styles.metricText}>
              <strong>{t("home.hero.metricSafetyValue")}</strong>
              <span>{t("home.hero.metricSafety")}</span>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.scrollIndicator} animate-fade-in delay-500`}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
