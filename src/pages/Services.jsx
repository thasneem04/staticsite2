import React from "react";
import { useTranslation } from "react-i18next";
import {
  Settings,
  Monitor,
  LayoutDashboard,
  Network,
  Radio,
  Wifi,
  Zap,
  Wrench,
  Thermometer,
  Cable,
  Cpu,
} from "lucide-react";
import styles from "./Services.module.css";
import SEO from "../components/SEO";

const Services = () => {
  const { t, i18n } = useTranslation();
  const prefix = i18n.language === "ar" ? "/ar" : "";
  const coreServices = [
    {
      id: 1,
      key: "services.coreServices.items.0",
      icon: <Settings size={32} />,
    },
    {
      id: 2,
      key: "services.coreServices.items.1",
      icon: <Monitor size={32} />,
    },
    {
      id: 3,
      key: "services.coreServices.items.2",
      icon: <LayoutDashboard size={32} />,
    },
    {
      id: 4,
      key: "services.coreServices.items.3",
      icon: <Network size={32} />,
    },
    {
      id: 5,
      key: "services.coreServices.items.4",
      icon: <Radio size={32} />,
    },
    {
      id: 6,
      key: "services.coreServices.items.5",
      icon: <Wifi size={32} />,
    },
  ];

  const panelTypes = [
    { key: "services.panelTypes.0" },
    { key: "services.panelTypes.1" },
    { key: "services.panelTypes.2" },
    { key: "services.panelTypes.3" },
    { key: "services.panelTypes.4" },
    { key: "services.panelTypes.5" },
    { key: "services.panelTypes.6" },
    { key: "services.panelTypes.7" },
    { key: "services.panelTypes.8" },
    { key: "services.panelTypes.9" },
    { key: "services.panelTypes.10" },
    { key: "services.panelTypes.11" },
  ];

  return (
    <div className={styles.servicesPage}>
      <SEO title={t("seo.servicesTitle")} description={t("seo.servicesDesc")} path={`${prefix}/services`} />
      {/* Page Header with Background Image */}
      <div className={styles.pageHeader}>
        <div
          className={styles.pageHeaderBg}
          style={{ backgroundImage: "url('/images/header_services.jpg')" }}
        />
        <div className={styles.pageHeaderOverlay} />
        <div className={`container ${styles.pageHeaderContent}`}>
          <h1>{t("services.pageHeader.title")}</h1>
          <p>{t("services.pageHeader.tagline")}</p>
        </div>
      </div>

      {/* Intro + Services List */}
      <section className="section-lg">
        <div className="container">
          <div className={styles.introGrid}>
            <div className={`${styles.introText} animate-fade-up`}>
              <h4 className="text-secondary" style={{ letterSpacing: "2px" }}>
                {t("services.intro.eyebrow")}
              </h4>
              <h2 className="text-primary">{t("services.intro.title")}</h2>
              <p>{t("services.intro.p1")}</p>
              <p>{t("services.intro.p2")}</p>
              <img
                src="/images/services.jpg"
                alt={t("images.services")}
                className={styles.introImage}
              />
            </div>

            <div className={`${styles.servicesList} animate-fade-up delay-200`}>
              {coreServices.map((service) => (
                <div key={service.id} className={styles.serviceItem}>
                  <div className={styles.serviceIconWrapper}>
                    {service.icon}
                  </div>
                  <div className={styles.serviceContent}>
                    <h3>
                      {service.id}. {t(`${service.key}.title`)}
                    </h3>
                    <p>{t(`${service.key}.desc`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Panel Manufacturing & Scope of Expertise */}
      <section className="section-lg section-light">
        <div className="container">
          <div className={`${styles.sectionHeader} animate-fade-up`}>
            <h4 className="text-secondary" style={{ letterSpacing: "2px" }}>
              {t("services.panelScope.eyebrow")}
            </h4>
            <h2>{t("services.panelScope.title")}</h2>
            <p>{t("services.panelScope.summary")}</p>
          </div>
          <div className={`${styles.panelGrid} animate-fade-up delay-200`}>
            {panelTypes.map((p, idx) => (
              <div key={idx} className={styles.panelCard}>
                <h4>{t(`${p.key}.name`)}</h4>
                <p>{t(`${p.key}.detail`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Synergy Technology Capabilities & Engineering Services (PDF Page 04) */}
      <section className="section-lg">
        <div className="container">
          <div className={`${styles.sectionHeader} animate-fade-up`}>
            <h4 className="text-secondary" style={{ letterSpacing: "2px" }}>
              {t("services.capabilities.eyebrow")}
            </h4>
            <h2>{t("services.capabilities.title")}</h2>
            <p>{t("services.capabilities.summary")}</p>
          </div>

          <div className={styles.capabilitiesGrid}>
            <div className={`${styles.capCol} animate-fade-up delay-100`}>
              <div className={styles.capHeader}>
                <Settings size={28} className="text-secondary" />
                <h3>{t("services.capabilities.column1Title")}</h3>
              </div>
              <ul className={styles.capList}>
                <li>{t("services.capabilities.list.0")}</li>
                <li>{t("services.capabilities.list.1")}</li>
                <li>{t("services.capabilities.list.2")}</li>
                <li>{t("services.capabilities.list.3")}</li>
                <li>{t("services.capabilities.list.4")}</li>
                <li>{t("services.capabilities.list.5")}</li>
              </ul>
            </div>

            <div className={`${styles.capCol} animate-fade-up delay-200`}>
              <div className={styles.capHeader}>
                <Cpu size={28} className="text-primary" />
                <h3>{t("services.capabilities.column2Title")}</h3>
              </div>
              <ul className={styles.capList}>
                <li>{t("services.capabilities.list.6")}</li>
                <li>{t("services.capabilities.list.7")}</li>
                <li>{t("services.capabilities.list.8")}</li>
                <li>{t("services.capabilities.list.9")}</li>
                <li>{t("services.capabilities.list.10")}</li>
                <li>{t("services.capabilities.list.11")}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Electrical & Instrumentation */}
      <section className="section-lg section-light">
        <div className="container">
          <div className={`${styles.sectionHeader} animate-fade-up`}>
            <h4 className="text-secondary" style={{ letterSpacing: "2px" }}>
              {t("services.ei.eyebrow")}
            </h4>
            <h2>{t("services.ei.title")}</h2>
            <p>{t("services.ei.summary")}</p>
          </div>

          <div className={`${styles.eiGrid} animate-fade-up delay-200`}>
            <div className={styles.eiCard}>
              <Zap size={40} className="text-secondary" />
              <h3>{t("services.ei.cards.highVoltage.title")}</h3>
              <p>{t("services.ei.cards.highVoltage.desc")}</p>
              <ul>
                {t("services.ei.cards.highVoltage.items", {
                  returnObjects: true,
                }).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={styles.eiCard}>
              <Wrench size={40} className="text-secondary" />
              <h3>{t("services.ei.cards.lowVoltage.title")}</h3>
              <p>{t("services.ei.cards.lowVoltage.desc")}</p>
              <ul>
                {t("services.ei.cards.lowVoltage.items", {
                  returnObjects: true,
                }).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={styles.eiCard}>
              <Thermometer size={40} className="text-secondary" />
              <h3>{t("services.ei.cards.instrumentation.title")}</h3>
              <p>{t("services.ei.cards.instrumentation.desc")}</p>
              <ul>
                {t("services.ei.cards.instrumentation.items", {
                  returnObjects: true,
                }).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={styles.eiCard}>
              <Cable size={40} className="text-secondary" />
              <h3>{t("services.ei.cards.lowCurrent.title")}</h3>
              <p>{t("services.ei.cards.lowCurrent.desc")}</p>
              <ul>
                {t("services.ei.cards.lowCurrent.items", {
                  returnObjects: true,
                }).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AMC & Lifecycle Support */}
      <section className="section-lg section-dark">
        <div className="container">
          <div className={styles.amcContent}>
            <div className={`${styles.amcText} animate-fade-up`}>
              <h4 className="text-secondary" style={{ letterSpacing: "2px" }}>
                {t("services.amc.eyebrow")}
              </h4>
              <h2>{t("services.amc.title")}</h2>
              <p>{t("services.amc.summary")}</p>
              <ul className={styles.amcList}>
                {t("services.amc.list", { returnObjects: true }).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={styles.amcImage}>
              <img
                src="/images/amc_diagnostic.jpg"
                alt={t("images.diagnostics")}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
