import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { Globe } from "lucide-react";
import styles from "./LanguageSwitcher.module.css";

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

  const label =
    currentLang === "en" ? "Switch to Arabic" : "التبديل إلى الإنجليزية";

  return (
    <button
      type="button"
      className={styles.switcherBtn}
      onClick={toggleLanguage}
      aria-label={label}
      title={label}
    >
      <Globe size={20} strokeWidth={2} aria-hidden="true" />
    </button>
  );
};

export default LanguageSwitcher;
