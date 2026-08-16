import React from 'react';
import { Mail, Phone, MapPin, Building2, Factory } from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contactPage}>
      {/* Page Header with Background Image */}
      <div className={styles.pageHeader}>
        <div className={styles.pageHeaderBg} style={{ backgroundImage: "url('/images/header_contact.jpg')" }} />
        <div className={styles.pageHeaderOverlay} />
        <div className={`container ${styles.pageHeaderContent}`}>
          <h1>Get In Touch</h1>
          <p>We are here to help you with your automation needs</p>
        </div>
      </div>

      <section className="section-lg">
        <div className={`container ${styles.contactGrid}`}>
          {/* Contact Info */}
          <div className={`${styles.contactInfo} animate-fade-up`}>
            <div className={styles.infoHeader}>
              <h4 className="text-secondary" style={{ letterSpacing: '2px', marginBottom: '12px' }}>LET'S TALK</h4>
              <h2 className="text-primary">Contact Information</h2>
              <p>Reach out to us for project inquiries, technical support, or partnership opportunities.</p>
            </div>

            <div className={styles.infoCards}>
              <div className={styles.infoCard}>
                <div className={styles.iconWrapper}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:RM@acsarabia.com">RM@acsarabia.com</a>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.iconWrapper}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+966564305884">+966 56430 5884</a><br />
                  <a href="tel:+966138167077">+966 13 816 7077</a>
                </div>
              </div>
            </div>

            <div className={styles.locations}>
              <h3 className="text-primary">Our Locations</h3>
              
              <div className={styles.locationItem}>
                <Building2 size={24} className="text-secondary" />
                <div>
                  <h4>Head Office</h4>
                  <address>
                    Auto-Control Synergy Services (ACS)<br />
                    P.O. Box: 3926<br />
                    Dammam 34442<br />
                    Kingdom of Saudi Arabia
                  </address>
                </div>
              </div>

              <div className={styles.locationItem}>
                <Factory size={24} className="text-secondary" />
                <div>
                  <h4>Factory & Workshop</h4>
                  <address>
                    2nd Industrial City, Dammam<br />
                    Kingdom of Saudi Arabia
                  </address>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`${styles.formContainer} animate-fade-up delay-200`}>
            <h4 className="text-secondary" style={{ letterSpacing: '2px', marginBottom: '12px' }}>REQUEST A QUOTE</h4>
            <h3>Send us a Message</h3>
            <p className={styles.formSubtitle}>Fill out the form below and our team will get back to you promptly.</p>
            
            <form className={styles.contactForm} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="John Doe" required />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="john@company.com" required />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" placeholder="Project Inquiry" required />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="How can we help you?" required></textarea>
              </div>
              
              <button type="submit" className={styles.submitBtn}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
