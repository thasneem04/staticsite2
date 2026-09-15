import React from "react";
import { useTranslation } from "react-i18next";
import { CheckCircle, MapPin, Users, Calendar } from "lucide-react";
import styles from "./Projects.module.css";

const Projects = () => {
  const { t } = useTranslation();
  const projects = t("projects.showcase.items", { returnObjects: true });
  const panelSolutions = t("projects.panelSolutions.list", {
    returnObjects: true,
  });

  return (
    <div className={styles.projectsPage}>
      {/* Page Header with Background Image */}
      <div className={styles.pageHeader}>
        <div
          className={styles.pageHeaderBg}
          style={{ backgroundImage: "url('/images/header_projects.jpg')" }}
        />
        <div className={styles.pageHeaderOverlay} />
        <div className={`container ${styles.pageHeaderContent}`}>
          <h1>{t("projects.pageHeader.title")}</h1>
          <p>{t("projects.pageHeader.tagline")}</p>
        </div>
      </div>

      {/* Projects Showcase */}
      <section className="section-lg">
        <div className="container">
          <div className={`${styles.sectionHeader} animate-fade-up`}>
            <h4 className="text-secondary" style={{ letterSpacing: "2px" }}>
              {t("projects.sectionTitle")}
            </h4>
            <h2 className="text-primary">{t("projects.sectionTitle")}</h2>
            <p>{t("projects.sectionSummary")}</p>
          </div>

          {/* Featured Banner */}
          <div className={styles.featuredProject}>
            <div className={styles.featuredImageWrapper}>
              <img
                src="/images/projects.jpg"
                alt="Industrial Project Site"
                className={styles.featuredImage}
              />
            </div>
            <div className={styles.featuredContent}>
              <div className={styles.tag}>
                {t("projects.showcase.featured.tag")}
              </div>
              <h3>{t("projects.showcase.featured.title")}</h3>
              <p>{t("projects.showcase.featured.desc")}</p>
              <div className={styles.featuredStats}>
                <div>
                  <strong>{t("projects.showcase.featured.stat1.value")}</strong>
                  <span>{t("projects.showcase.featured.stat1.label")}</span>
                </div>
                <div>
                  <strong>{t("projects.showcase.featured.stat2.value")}</strong>
                  <span>{t("projects.showcase.featured.stat2.label")}</span>
                </div>
                <div>
                  <strong>{t("projects.showcase.featured.stat3.value")}</strong>
                  <span>{t("projects.showcase.featured.stat3.label")}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`${styles.projectCard} animate-fade-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={styles.projectMeta}>
                  <span className={styles.projectScope}>{project.scope}</span>
                  <span className={styles.projectLocation}>
                    <MapPin size={14} /> {project.location}
                  </span>
                </div>
                <h3>{project.title}</h3>
                <div className={styles.client}>
                  <Users size={14} /> {project.client}
                </div>
                <p>{project.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Panel Solutions */}
      <section className="section-lg section-dark">
        <div className={`container ${styles.panelsGrid}`}>
          <div className={`${styles.panelsText} animate-fade-up`}>
            <h4 className="text-secondary" style={{ letterSpacing: "2px" }}>
              {t("home.panelSolutions.eyebrow")}
            </h4>
            <h2>{t("home.panelSolutions.title")}</h2>
            <p>{t("projects.panelSummary")}</p>
            <p>{t("projects.panelDetail")}</p>
            <ul className={styles.panelList}>
              {panelSolutions.map((panel, idx) => (
                <li key={idx}>
                  <CheckCircle size={18} className="text-secondary" /> {panel}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.expertiseBox}>
            <h3>{t("projects.panelTitle")}</h3>
            <ul className={styles.expertiseList}>
              <li>{t("home.expertise.items.0")}</li>
              <li>{t("home.expertise.items.1")}</li>
              <li>{t("home.expertise.items.2")}</li>
              <li>{t("home.expertise.items.3")}</li>
              <li>{t("home.expertise.items.4")}</li>
              <li>{t("home.expertise.items.5")}</li>
              <li>{t("home.expertise.items.6")}</li>
              <li>{t("home.expertise.items.7")}</li>
              <li>{t("home.expertise.items.8")}</li>
              <li>{t("home.expertise.items.9")}</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
