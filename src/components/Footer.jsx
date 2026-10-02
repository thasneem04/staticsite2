import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Mail, Phone, MapPin, Award } from "lucide-react";
import styles from "./Footer.module.css";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  const isArabic = pathname === "/ar" || pathname.startsWith("/ar/");
  const localizedPath = (path) => (isArabic ? (path === "/" ? "/ar/" : `/ar${path}`) : path);

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.brandCol}>
          <div className={styles.logoBox}>
            <img
              src="/logo_acs_clean.png"
              alt={t("images.logo")}
              className={styles.footerLogo}
            />
          </div>
          <p className={styles.companyDesc}>{t("footer.companyDesc")}</p>
          <div className={styles.crBox}>
            <strong>{t("footer.cr")}</strong> 7023676492
          </div>
          <div className={styles.isoBadges}>
            <span>
              <Award size={14} /> ISO 9001:2015
            </span>
            <span>
              <Award size={14} /> ISO 14001:2015
            </span>
            <span>
              <Award size={14} /> ISO 45001:2018
            </span>
          </div>
        </div>

        <div className={styles.linkCol}>
          <h4>{t("footer.quickLinks")}</h4>
          <ul>
            <li>
              <Link to={localizedPath("/")}>{t("nav.home")}</Link>
            </li>
            <li>
              <Link to={localizedPath("/about")}>{t("nav.about")}</Link>
            </li>
            <li>
              <Link to={localizedPath("/services")}>{t("footer.engineeringServices")}</Link>
            </li>
            <li>
              <Link to={localizedPath("/projects")}>{t("footer.projectsPortfolio")}</Link>
            </li>
            <li>
              <Link to={localizedPath("/contact")}>{t("footer.contactEnquiry")}</Link>
            </li>
          </ul>
        </div>

        <div className={styles.linkCol}>
          <h4>{t("footer.coreDisciplines")}</h4>
          <ul>
            <li>
              <Link to={localizedPath("/services")}>{t("footer.plcScada")}</Link>
            </li>
            <li>
              <Link to={localizedPath("/services")}>{t("footer.controlPanel")}</Link>
            </li>
            <li>
              <Link to={localizedPath("/services")}>{t("footer.highVoltage")}</Link>
            </li>
            <li>
              <Link to={localizedPath("/services")}>{t("footer.fieldInstrumentation")}</Link>
            </li>
            <li>
              <Link to={localizedPath("/services")}>{t("footer.reverseEngineering")}</Link>
            </li>
            <li>
              <Link to={localizedPath("/services")}>{t("footer.amcCommissioning")}</Link>
            </li>
          </ul>
        </div>

        <div className={styles.contactCol}>
          <h4>{t("footer.ksaHeadquarters")}</h4>
          <div className={styles.contactItem}>
            <MapPin size={18} />
            <address>
              <strong>{t("footer.addressName")}</strong>
              <br />
              {t("footer.addressStreet1")}
              <br />
              {t("footer.addressStreet2")}
              <br />
              {t("footer.addressCountry")}
            </address>
          </div>
          <div className={styles.contactItem}>
            <Mail size={18} />
            <a href="mailto:RM@acsarabia.com">RM@acsarabia.com</a>
          </div>
          <div className={styles.contactItem}>
            <Phone size={18} />
            <a href="tel:+966564305884">+966 56 430 5884</a>
          </div>
          <div className={styles.contactItem}>
            <Phone size={18} />
            <a href="tel:+966138167077">+966 13 816 7077</a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={`container ${styles.bottomInner}`}>
          <p className={styles.copyrightText}>
            &copy; 2026 {i18n.language === "ar" ? `(${t("companyName")})` : t("companyName")}.{" "}
            {t("footer.rights")}
            <span className={styles.attributionDivider}>·</span>
            <span className={styles.poweredBy}>
              {t("footer.poweredBy")}{" "}
              <a
                href="https://mncsglobal.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                MNCsGlobal
              </a>
            </span>
          </p>
          <div className={styles.bottomLinks}>
            <span>{t("footer.addressCountry")}</span>
            <span>·</span>
            <span>{t("footer.vision2030")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
