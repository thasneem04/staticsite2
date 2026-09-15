import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  Settings,
  Monitor,
  LayoutDashboard,
  Network,
  Radio,
  Wifi,
} from "lucide-react";
import styles from "./CoreServicesPreview.module.css";

const CoreServicesPreview = () => {
  const { t, i18n } = useTranslation();
  const servicesPath = i18n.language === "ar" ? "/ar/services" : "/services";

  const services = [
    {
      id: 1,
      title: t("home.coreServices.services.0.title"),
      desc: t("home.coreServices.services.0.desc"),
      icon: <Settings size={32} />,
    },
    {
      id: 2,
      title: t("home.coreServices.services.1.title"),
      desc: t("home.coreServices.services.1.desc"),
      icon: <Monitor size={32} />,
    },
    {
      id: 3,
      title: t("home.coreServices.services.2.title"),
      desc: t("home.coreServices.services.2.desc"),
      icon: <LayoutDashboard size={32} />,
    },
    {
      id: 4,
      title: t("home.coreServices.services.3.title"),
      desc: t("home.coreServices.services.3.desc"),
      icon: <Network size={32} />,
    },
    {
      id: 5,
      title: t("home.coreServices.services.4.title"),
      desc: t("home.coreServices.services.4.desc"),
      icon: <Radio size={32} />,
    },
    {
      id: 6,
      title: t("home.coreServices.services.5.title"),
      desc: t("home.coreServices.services.5.desc"),
      icon: <Wifi size={32} />,
    },
  ];

  return (
    <section className={`section-lg ${styles.servicesSection}`}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h4 className="text-secondary">{t("home.coreServices.eyebrow")}</h4>
          <h2>{t("home.coreServices.title")}</h2>
          <p>{t("home.coreServices.subtitle")}</p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`${styles.serviceCard} animate-fade-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={styles.cardNumber}>0{service.id}</div>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <Link to={servicesPath} className={styles.cardLink}>
                {t("home.coreServices.learnMore")} <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>

        <div className={styles.bottomCTA}>
          <Link to={servicesPath} className={styles.primaryBtnLarge}>
            {t("home.coreServices.viewAll")} <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoreServicesPreview;
