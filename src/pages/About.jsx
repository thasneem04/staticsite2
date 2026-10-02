import React from "react";
import { useTranslation } from "react-i18next";
import {
  CheckCircle2,
  Shield,
  Target,
  TrendingUp,
  Users,
  Award,
  Cpu,
  Factory,
  Zap,
} from "lucide-react";
import styles from "./About.module.css";
import SEO from "../components/SEO";

const About = () => {
  const { t, i18n } = useTranslation();
  const prefix = i18n.language === "ar" ? "/ar" : "";
  const clients = t("about.clients.list", { returnObjects: true });
  const parentCompanyCards = t("about.parentCompany.cards", { returnObjects: true });

  return (
    <div className={styles.aboutPage}>
      <SEO title={t("seo.aboutTitle")} description={t("seo.aboutDesc")} path={`${prefix}/about`} />
      {/* Page Header with Background Image */}
      <div className={styles.pageHeader}>
        <div
          className={styles.pageHeaderBg}
          style={{ backgroundImage: "url('/images/about.jpg')" }}
        />
        <div className={styles.pageHeaderOverlay} />
        <div className={`container ${styles.pageHeaderContent}`}>
          <h1>{t("about.pageHeader.title")}</h1>
          <p>{t("about.pageHeader.tagline")}</p>
        </div>
      </div>

      {/* Company Intro */}
      <section className="section-lg">
        <div className={`container ${styles.introGrid}`}>
          <div className={`${styles.introText} animate-fade-up`}>
            <h4 className="text-secondary" style={{ letterSpacing: "2px" }}>
              {t("about.intro.eyebrow")}
            </h4>
            <h2 className="text-primary">{t("about.intro.title")}</h2>
            <p>{t("about.intro.p1")}</p>
            <p>{t("about.intro.p2")}</p>
            <p>{t("about.intro.p3")}</p>
            <div className={styles.registration}>
              <strong>{t("about.intro.cr")}</strong> 7023676492
            </div>
            <div className={styles.statsRow}>
              <div className={styles.stat}>
                <span>{t("about.intro.stat2021")}</span>
                <small>{t("about.intro.statEstablished")}</small>
              </div>
              <div className={styles.stat}>
                <span>{t("about.intro.statKsa")}</span>
                <small>{t("about.intro.statBased")}</small>
              </div>
              <div className={styles.stat}>
                <span>{t("about.intro.statIso")}</span>
                <small>{t("about.intro.statCertified")}</small>
              </div>
              <div className={styles.stat}>
                <span>{t("about.intro.statEi")}</span>
                <small>{t("about.intro.statSpecialists")}</small>
              </div>
            </div>
          </div>
          <div className={styles.introImage}>
            <img
              src="/images/facility.jpg"
              alt={t("images.about")}
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-lg section-light">
        <div className={`container ${styles.mvGrid}`}>
          <div className={`${styles.mvCard} animate-fade-up delay-100`}>
            <div className={styles.mvIcon}>
              <Target size={40} />
            </div>
            <h3>{t("about.mission.title")}</h3>
            <ul>
              <li>
                <CheckCircle2 size={18} className="text-secondary" />{" "}
                {t("about.mission.list1")}
              </li>
              <li>
                <CheckCircle2 size={18} className="text-secondary" />{" "}
                {t("about.mission.list2")}
              </li>
              <li>
                <CheckCircle2 size={18} className="text-secondary" />{" "}
                {t("about.mission.list3")}
              </li>
              <li>
                <CheckCircle2 size={18} className="text-secondary" />{" "}
                {t("about.mission.list4")}
              </li>
            </ul>
            <p className={styles.mvSummary}>{t("about.mission.summary")}</p>
          </div>

          <div className={`${styles.mvCard} animate-fade-up delay-200`}>
            <div className={styles.mvIcon}>
              <TrendingUp size={40} />
            </div>
            <h3>{t("about.vision.title")}</h3>
            <p>{t("about.vision.p1")}</p>
            <p>{t("about.vision.p2")}</p>
            <p>{t("about.vision.p3")}</p>
          </div>
        </div>
      </section>

      {/* Parent Company: Redaa Developing Company (RDC) Profile (PDF Page 06) */}
      <section className="section-lg">
        <div className="container">
          <div className={`${styles.sectionHeader} animate-fade-up`}>
            <h4 className="text-secondary" style={{ letterSpacing: "2px" }}>
              {t("about.parentCompany.eyebrow")}
            </h4>
            <h2>{t("about.parentCompany.title")}</h2>
            <div className={styles.accentLine}></div>
            <p>{t("about.parentCompany.summary")}</p>
          </div>

          <div className={styles.parentGrid}>
            {parentCompanyCards.map((card, index) => {
              const icons = [Factory, Cpu, Zap, Shield, TrendingUp, Users, Award, CheckCircle2];
              const Icon = icons[index % icons.length];
              return (
                <div className={styles.parentCard} key={`${index}-${card}`}>
                  <Icon size={28} className="text-primary" />
                  <h4>{card}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Customer Satisfaction Philosophy (PDF Page 09) */}
      <section className="section-lg section-light">
        <div className="container">
          <div className={`${styles.sectionHeader} animate-fade-up`}>
            <h4 className="text-secondary" style={{ letterSpacing: "2px" }}>
              {t("about.satisfaction.eyebrow")}
            </h4>
            <h2>{t("about.satisfaction.title")}</h2>
            <div className={styles.accentLine}></div>
            <p>{t("about.satisfaction.summary")}</p>
          </div>

          <div className={styles.satisfactionGrid}>
            <div className={styles.satisfactionCard}>
              <Award size={36} className="text-secondary" />
              <h3>{t("about.satisfaction.cards.0.title")}</h3>
              <p>{t("about.satisfaction.cards.0.desc")}</p>
            </div>
            <div className={styles.satisfactionCard}>
              <Users size={36} className="text-secondary" />
              <h3>{t("about.satisfaction.cards.1.title")}</h3>
              <p>{t("about.satisfaction.cards.1.desc")}</p>
            </div>
            <div className={styles.satisfactionCard}>
              <TrendingUp size={36} className="text-secondary" />
              <h3>{t("about.satisfaction.cards.2.title")}</h3>
              <p>{t("about.satisfaction.cards.2.desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Commitments */}
      <section className="section-lg">
        <div className="container">
          <div className={`${styles.sectionHeader} animate-fade-up`}>
            <h4 className="text-secondary" style={{ letterSpacing: "2px" }}>
              {t("about.promise.eyebrow")}
            </h4>
            <h2>{t("about.promise.title")}</h2>
            <p>{t("about.promise.summary")}</p>
          </div>
          <div
            className={`${styles.commitmentsGrid} animate-fade-up delay-200`}
          >
            <div className={styles.commitmentCard}>
              <Shield size={32} className="text-primary" />
              <h4>{t("about.promise.cards.0.title")}</h4>
              <p>{t("about.promise.cards.0.desc")}</p>
            </div>
            <div className={styles.commitmentCard}>
              <CheckCircle2 size={32} className="text-primary" />
              <h4>{t("about.promise.cards.1.title")}</h4>
              <p>{t("about.promise.cards.1.desc")}</p>
            </div>
            <div className={styles.commitmentCard}>
              <TrendingUp size={32} className="text-primary" />
              <h4>{t("about.promise.cards.2.title")}</h4>
              <p>{t("about.promise.cards.2.desc")}</p>
            </div>
            <div className={styles.commitmentCard}>
              <Users size={32} className="text-primary" />
              <h4>{t("about.promise.cards.3.title")}</h4>
              <p>{t("about.promise.cards.3.desc")}</p>
            </div>
            <div className={styles.commitmentCard}>
              <Cpu size={32} className="text-primary" />
              <h4>{t("about.promise.cards.4.title")}</h4>
              <p>{t("about.promise.cards.4.desc")}</p>
            </div>
            <div className={styles.commitmentCard}>
              <Factory size={32} className="text-primary" />
              <h4>{t("about.promise.cards.5.title")}</h4>
              <p>{t("about.promise.cards.5.desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications (PDF Page 10) */}
      <section className="section-lg section-dark">
        <div className="container">
          <div className={`${styles.sectionHeader} animate-fade-up`}>
            <h4 className="text-secondary" style={{ letterSpacing: "2px" }}>
              {t("about.certs.eyebrow")}
            </h4>
            <h2 style={{ color: "white" }}>{t("about.certs.title")}</h2>
            <p style={{ color: "rgba(255,255,255,0.9)" }}>
              {t("about.certs.summary")}
            </p>
          </div>
          <div className={styles.certGrid}>
            <div className={`${styles.certCard} animate-fade-up delay-100`}>
              <Award size={36} className="text-secondary" />
              <h4>{t("about.certs.cards.0.title")}</h4>
              <p>{t("about.certs.cards.0.desc")}</p>
            </div>
            <div className={`${styles.certCard} animate-fade-up delay-150`}>
              <Award size={36} className="text-secondary" />
              <h4>{t("about.certs.cards.1.title")}</h4>
              <p>{t("about.certs.cards.1.desc")}</p>
            </div>
            <div className={`${styles.certCard} animate-fade-up delay-200`}>
              <Award size={36} className="text-secondary" />
              <h4>{t("about.certs.cards.2.title")}</h4>
              <p>{t("about.certs.cards.2.desc")}</p>
            </div>
            <div className={`${styles.certCard} animate-fade-up delay-250`}>
              <Shield size={36} className="text-secondary" />
              <h4>{t("about.certs.cards.3.title")}</h4>
              <p>{t("about.certs.cards.3.desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Clients */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>{t("about.clients.title")}</h2>
            <p>{t("about.clients.summary")}</p>
          </div>
          <div className={styles.clientsGrid}>
            {clients.map((client, idx) => (
              <div key={idx} className={styles.clientBadge}>
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
