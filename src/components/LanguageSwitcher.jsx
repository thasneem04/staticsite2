import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./LanguageSwitcher.module.css";

const EnglishFlag = () => (
  <svg viewBox="0 0 60 40" className={styles.flag} aria-hidden="true">
    <rect width="60" height="40" fill="#012169" />
    <path d="M0 0L60 40M60 0L0 40" stroke="#fff" strokeWidth="8" />
    <path d="M0 0L60 40M60 0L0 40" stroke="#C8102E" strokeWidth="4" />
    <path d="M0 20H60M30 0V40" stroke="#fff" strokeWidth="12" />
    <path d="M0 20H60M30 0V40" stroke="#C8102E" strokeWidth="6" />
  </svg>
);

const SaudiFlag = () => (
  <svg viewBox="0 0 60 40" className={styles.flag} aria-hidden="true">
    <rect width="60" height="40" fill="#006C35" />
    <path d="M20 14h22v12H20z" fill="#fff" opacity="0.96" />
    <path
      d="M18 11 l-2 1.5 1 2.5-2.4 1.8 2.7 1.2-1.2 2.6 2.5-1.3 1.5 2.4 1.2-2.5 2.7 1.2-1.2-2.6 2.5 1.3-1.4-2.4 2.6-1.2-2.6-1.3 1.4-2.4-2.5 1.3-1.2-2.5-2.7 1.2 1.2-2.6-2.5 1.3 1-2.5-2.6-1.7 2.4-1.5-1-2.5 2.6 1.3 1.3-2.4 2.5 1.3-.9 2.7z"
      fill="#fff"
      opacity="0.95"
    />
  </svg>
);

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const currentLang = /^\/ar(?:\/|$)/.test(location.pathname) ? "ar" : "en";

  const getLocalizedPath = (nextLang) => {
    const cleanPath = location.pathname.replace(/^\/ar(?=\/|$)/, "") || "/";
    if (nextLang === "ar") {
      return cleanPath === "/" ? "/ar/" : `/ar${cleanPath}`;
    }
    return cleanPath;
  };

  const toggleLanguage = () => {
    const nextLang = currentLang === "en" ? "ar" : "en";
    i18n.changeLanguage(nextLang);
    const nextPath = getLocalizedPath(nextLang);
    navigate(`${nextPath}${location.search}${location.hash}`, { replace: true });
  };

  return (
    <button
      type="button"
      className={styles.switcherBtn}
      onClick={toggleLanguage}
      aria-label={
        currentLang === "en" ? "Switch to Arabic" : "التبديل إلى الإنجليزية"
      }
    >
      <span
        className={`${styles.option} ${currentLang === "en" ? styles.active : styles.inactive}`}
      >
        <span className={styles.flagContainer}>
          <EnglishFlag />
        </span>
        <span className={styles.optionText}>EN</span>
      </span>
      <span
        className={`${styles.option} ${currentLang === "ar" ? styles.active : styles.inactive}`}
      >
        <span className={styles.flagContainer}>
          <SaudiFlag />
        </span>
        <span className={styles.optionText}>AR</span>
      </span>
    </button>
  );
};

export default LanguageSwitcher;
