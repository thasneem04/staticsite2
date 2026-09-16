import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isArabic = location.pathname === "/ar" || location.pathname.startsWith("/ar/");
  const localizedPath = (path) => (isArabic ? (path === "/" ? "/ar/" : `/ar${path}`) : path);
  const isActive = (path) => location.pathname === localizedPath(path);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : styles.topState}`}
    >
      <div className={styles.headerInner}>
        {/* Single ACS Brand Element: Hanging banner at top -> smoothly transforms to navbar logo */}
        <div className={styles.brandBanner}>
          <Link
            to={localizedPath("/")}
            className={styles.logoLink}
            aria-label="Auto-Control Synergy Services"
          >
            <img
              src="/logo_acs_clean.png"
              alt="Auto-Control Synergy Services"
              className={styles.logoImg}
            />
          </Link>
        </div>

        {/* Navigation Area */}
        <nav className={styles.navContainer}>
          <ul className={styles.navLinks}>
            <li>
              <Link
                to={localizedPath("/")}
                className={isActive("/") ? styles.activeLink : ""}
              >
                {t("nav.home")}
              </Link>
            </li>
            <li>
              <Link
                to={localizedPath("/about")}
                className={isActive("/about") ? styles.activeLink : ""}
              >
                {t("nav.about")}
              </Link>
            </li>
            <li>
              <Link
                to={localizedPath("/services")}
                className={isActive("/services") ? styles.activeLink : ""}
              >
                {t("nav.services")}
              </Link>
            </li>
            <li>
              <Link
                to={localizedPath("/projects")}
                className={isActive("/projects") ? styles.activeLink : ""}
              >
                {t("nav.projects")}
              </Link>
            </li>
            <li>
              <Link
                to={localizedPath("/contact")}
                className={isActive("/contact") ? styles.activeLink : ""}
              >
                {t("nav.contact")}
              </Link>
            </li>
          </ul>

          <div className={styles.navActions}>
            <span className={styles.desktopOnlySwitcher}><LanguageSwitcher /></span>
            <Link to={localizedPath("/contact")} className={styles.ctaButton}>
              {t("nav.cta")}
            </Link>
            <button
              className={styles.mobileToggle}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`${styles.mobileDrawer} ${isMobileMenuOpen ? styles.mobileOpen : ""}`}
      >
        <ul className={styles.mobileNavLinks}>
          <li>
            <Link
              to={localizedPath("/")}
              onClick={() => setIsMobileMenuOpen(false)}
              className={isActive("/") ? styles.activeLink : ""}
            >
              {t("nav.home")}
            </Link>
          </li>
          <li>
            <Link
              to={localizedPath("/about")}
              onClick={() => setIsMobileMenuOpen(false)}
              className={
                isActive("/about") ? styles.activeLink : ""
              }
            >
              {t("nav.about")}
            </Link>
          </li>
          <li>
            <Link
              to={localizedPath("/services")}
              onClick={() => setIsMobileMenuOpen(false)}
              className={
                isActive("/services") ? styles.activeLink : ""
              }
            >
              {t("nav.services")}
            </Link>
          </li>
          <li>
            <Link
              to={localizedPath("/projects")}
              onClick={() => setIsMobileMenuOpen(false)}
              className={
                isActive("/projects") ? styles.activeLink : ""
              }
            >
              {t("nav.projects")}
            </Link>
          </li>
          <li>
            <Link
              to={localizedPath("/contact")}
              onClick={() => setIsMobileMenuOpen(false)}
              className={
                isActive("/contact") ? styles.activeLink : ""
              }
            >
              {t("nav.contact")}
            </Link>
          </li>
        </ul>
        <div className={styles.mobileSwitcherWrapper}><LanguageSwitcher /></div>
        <div className={styles.mobileCtaWrapper}>
          <Link
            to={localizedPath("/contact")}
            onClick={() => setIsMobileMenuOpen(false)}
            className={styles.mobileCtaButton}
          >
            {t("nav.cta")}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
