import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  MapPin,
  Calendar,
  FileText,
  Building,
} from "lucide-react";
import styles from "./ProjectsShowcase.module.css";

const ProjectsShowcase = () => {
  const { t, i18n } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("all");

  const topProjectsData = t("home.projectsShowcase.tableData", { returnObjects: true });
  const featuredCards = t("home.projectsShowcase.featuredCards", { returnObjects: true });

  const filteredProjects =
    activeFilter === "all"
      ? topProjectsData
      : topProjectsData.filter(
          (p) =>
            p.customer.toLowerCase().includes(activeFilter.toLowerCase()) ||
            (p.category && p.category.toLowerCase().includes(activeFilter.toLowerCase())),
        );

  return (
    <section className={`section-lg ${styles.projectsSection}`}>
      <div className="container">
        {/* Section Header */}
        <div className={styles.header}>
          <div className="animate-fade-up">
            <h4 className="text-secondary">
              {t("home.projectsShowcase.eyebrow")}
            </h4>
            <h2>{t("home.projectsShowcase.title")}</h2>
            <div className={styles.accentLine}></div>
            <p>{t("home.projectsShowcase.subtitle")}</p>
          </div>
        </div>

        {/* Featured Case Study Visuals */}
        <div className={styles.projectsGrid}>
          {/* Project Card 1 */}
          <div
            className={`${styles.projectCard} ${styles.projectLarge} animate-fade-up delay-100`}
          >
            <div className={styles.imgWrapper}>
              <img
                src="/images/header_projects.jpg"
                alt={featuredCards[0]?.title}
              />
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.content}>
              <div className={styles.meta}>
                <span className={styles.clientBadge}>
                  {featuredCards[0]?.client}
                </span>
                <span className={styles.locationBadge}>
                  <MapPin size={13} /> {featuredCards[0]?.location}
                </span>
                <span className={styles.yearBadge}>
                  <Calendar size={13} /> {featuredCards[0]?.year}
                </span>
              </div>
              <h3>{featuredCards[0]?.title}</h3>
              <p>
                {featuredCards[0]?.ref} — {featuredCards[0]?.desc}
              </p>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className={`${styles.projectCard} animate-fade-up delay-200`}>
            <div className={styles.imgWrapper}>
              <img
                src="/images/electrical_hv.jpg"
                alt={featuredCards[1]?.title}
              />
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.content}>
              <div className={styles.meta}>
                <span className={styles.clientBadge}>{featuredCards[1]?.client}</span>
                <span className={styles.locationBadge}>
                  <MapPin size={13} /> {featuredCards[1]?.location}
                </span>
                <span className={styles.yearBadge}>
                  <Calendar size={13} /> {featuredCards[1]?.year}
                </span>
              </div>
              <h3>{featuredCards[1]?.title}</h3>
              <p>
                {featuredCards[1]?.ref} — {featuredCards[1]?.desc}
              </p>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className={`${styles.projectCard} animate-fade-up delay-300`}>
            <div className={styles.imgWrapper}>
              <img
                src="/images/tech_expertise.jpg"
                alt={featuredCards[2]?.title}
              />
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.content}>
              <div className={styles.meta}>
                <span className={styles.clientBadge}>
                  {featuredCards[2]?.client}
                </span>
                <span className={styles.locationBadge}>
                  <MapPin size={13} /> {featuredCards[2]?.location}
                </span>
                <span className={styles.yearBadge}>
                  <Calendar size={13} /> {featuredCards[2]?.year}
                </span>
              </div>
              <h3>{featuredCards[2]?.title}</h3>
              <p>
                {featuredCards[2]?.ref} — {featuredCards[2]?.desc}
              </p>
            </div>
          </div>
        </div>

        {/* Structured Engineering Project Directory Table */}
        <div className={styles.tableContainer}>
          <div className={styles.tableHeaderBar}>
            <div>
              <h3>{t("home.projectsShowcase.tableTitle")}</h3>
              <p>{t("home.projectsShowcase.tableSubtitle")}</p>
            </div>
            <div className={styles.filterTabs}>
              <button
                className={`${styles.tabBtn} ${activeFilter === "all" ? styles.tabActive : ""}`}
                onClick={() => setActiveFilter("all")}
              >
                {t("home.projectsShowcase.filterAll")}
              </button>
              <button
                className={`${styles.tabBtn} ${activeFilter === "honeywell" ? styles.tabActive : ""}`}
                onClick={() => setActiveFilter("honeywell")}
              >
                {t("home.projectsShowcase.filterHoneywell")}
              </button>
              <button
                className={`${styles.tabBtn} ${activeFilter === "schneider" ? styles.tabActive : ""}`}
                onClick={() => setActiveFilter("schneider")}
              >
                {t("home.projectsShowcase.filterSchneider")}
              </button>
              <button
                className={`${styles.tabBtn} ${activeFilter === "power" ? styles.tabActive : ""}`}
                onClick={() => setActiveFilter("power")}
              >
                {t("home.projectsShowcase.filterPower")}
              </button>
            </div>
          </div>

          <div className={styles.tableResponsiveWrapper}>
            <table className={styles.projectTable}>
              <thead>
                <tr>
                  <th>{t("home.projectsShowcase.years")}</th>
                  <th>{t("home.projectsShowcase.customer")}</th>
                  <th>{t("home.projectsShowcase.acsProjectNo")}</th>
                  <th>{t("home.projectsShowcase.sapProjectNo")}</th>
                  <th>{t("home.projectsShowcase.projectName")}</th>
                </tr>
              </thead>
              <tbody>
                {filteredProjects.map((proj) => (
                  <tr key={proj.sno}>
                    <td className={styles.yearCell}>
                      <strong>{proj.year}</strong>
                    </td>
                    <td className={styles.clientName}>
                      <div className={styles.clientCellInner}>
                        <Building size={14} className="text-secondary" />
                        <span>{proj.customer}</span>
                      </div>
                    </td>
                    <td className={styles.codeCell}>
                      <code>{proj.acsProjectNo}</code>
                    </td>
                    <td className={styles.sapCell}>
                      <span>{proj.customerSapNo}</span>
                    </td>
                    <td className={styles.projectNameCell}>
                      <strong>{proj.name}</strong>
                      <span className={styles.scopeText}>{proj.desc}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className={styles.bottomCTA}>
          <Link to={i18n.language === 'ar' ? '/ar/projects' : '/projects'} className={styles.primaryBtnLarge}>
            {t("home.projectsShowcase.explore")} <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
