import React from "react";
import { useTranslation } from "react-i18next";
import { Mail, Phone, MapPin, Building2, Factory } from "lucide-react";
import styles from "./Contact.module.css";
import SEO from "../components/SEO";

const Contact = () => {
  const { t, i18n } = useTranslation();
  const prefix = i18n.language === "ar" ? "/ar" : "";

  return (
    <div className={styles.contactPage}>
      <SEO title={t("seo.contactTitle")} description={t("seo.contactDesc")} path={`${prefix}/contact`} />
      {/* Page Header with Background Image */}
      <div className={styles.pageHeader}>
        <div
          className={styles.pageHeaderBg}
          style={{ backgroundImage: "url('/images/header_contact.jpg')" }}
        />
        <div className={styles.pageHeaderOverlay} />
        <div className={`container ${styles.pageHeaderContent}`}>
          <h1>{t("contact.pageHeader.title")}</h1>
          <p>{t("contact.pageHeader.tagline")}</p>
        </div>
      </div>

      <section className="section-lg">
        <div className={`container ${styles.contactGrid}`}>
          {/* Contact Info */}
          <div className={`${styles.contactInfo} animate-fade-up`}>
            <div className={styles.infoHeader}>
              <h4
                className="text-secondary"
                style={{ letterSpacing: "2px", marginBottom: "12px" }}
              >
                {t("contact.info.eyebrow")}
              </h4>
              <h2 className="text-primary">{t("contact.info.title")}</h2>
              <p>{t("contact.info.summary")}</p>
            </div>

            <div className={styles.infoCards}>
              <div className={styles.infoCard}>
                <div className={styles.iconWrapper}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4>{t("contact.form.email")}</h4>
                  <a href="mailto:RM@acsarabia.com">RM@acsarabia.com</a>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.iconWrapper}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4>{t("contact.form.subject")}</h4>
                  <a href="tel:+966564305884">+966 56430 5884</a>
                  <br />
                  <a href="tel:+966138167077">+966 13 816 7077</a>
                </div>
              </div>
            </div>

            <div className={styles.locations}>
              <h3 className="text-primary">{t("contact.locations.title")}</h3>

              <div className={styles.locationItem}>
                <Building2 size={24} className="text-secondary" />
                <div>
                  <h4>{t("contact.locations.headOffice")}</h4>
                  <address>
                    {t("footer.addressName")}
                    <br />
                    {t("footer.addressStreet2")}
                    <br />
                    {t("footer.addressStreet1")}
                    <br />
                    {t("footer.addressCountry")}
                  </address>
                </div>
              </div>

              <div className={styles.locationItem}>
                <Factory size={24} className="text-secondary" />
                <div>
                  <h4>{t("contact.locations.factory")}</h4>
                  <address>
                    {t("footer.addressStreet1")}
                    <br />
                    {t("footer.addressCountry")}
                  </address>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`${styles.formContainer} animate-fade-up delay-200`}>
            <h4
              className="text-secondary"
              style={{ letterSpacing: "2px", marginBottom: "12px" }}
            >
              {t("contact.form.eyebrow")}
            </h4>
            <h3>{t("contact.form.title")}</h3>
            <p className={styles.formSubtitle}>{t("contact.form.subtitle")}</p>

            <form
              className={styles.contactForm}
              onSubmit={(e) => e.preventDefault()}
            >
              <div className={styles.formGroup}>
                <label htmlFor="name">{t("contact.form.name")}</label>
                <input
                  type="text"
                  id="name"
                  placeholder={t("contact.form.namePlaceholder")}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">{t("contact.form.email")}</label>
                <input
                  type="email"
                  id="email"
                  dir="ltr"
                  placeholder={t("contact.form.emailPlaceholder")}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject">{t("contact.form.subject")}</label>
                <input
                  type="text"
                  id="subject"
                  placeholder={t("contact.form.subjectPlaceholder")}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">{t("contact.form.message")}</label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder={t("contact.form.messagePlaceholder")}
                  required
                ></textarea>
              </div>

              <button type="submit" className={styles.submitBtn}>
                {t("contact.form.submit")}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Trust & Slogan Banner (PDF Page 13) */}
      <section className={`section-dark ${styles.sloganSection}`}>
        <div className="container">
          <div className={styles.sloganHeader}>
            <h4>{t("contact.banner.title")}</h4>
            <h2>{t("contact.banner.subtitle")}</h2>
            <p>{t("contact.banner.copy")}</p>
          </div>

          <div className={styles.trustRow}>
            <div className={styles.trustItem}>
              <span>✓</span> {t("home.quality.check1")}
            </div>
            <div className={styles.trustItem}>
              <span>✓</span> {t("home.whyChoose.cards.0.title")}
            </div>
            <div className={styles.trustItem}>
              <span>✓</span> {t("home.whyChoose.cards.1.title")}
            </div>
            <div className={styles.trustItem}>
              <span>✓</span> {t("home.whyChoose.cards.2.title")}
            </div>
            <div className={styles.trustItem}>
              <span>✓</span> {t("home.industries.title")}
            </div>
            <div className={styles.trustItem}>
              <span>✓</span> {t("about.promise.title")}
            </div>
          </div>

          <div className={styles.bottomSlogan}>
            <strong>{t("contact.banner.bottom")}</strong>
            <span>{t("contact.banner.bottomTag")}</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
