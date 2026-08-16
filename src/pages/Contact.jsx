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
            <p className={styles.formSubtitle}>Fill out the form below and our engineering team will get back to you promptly.</p>
            
            <form className={styles.contactForm} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="Your Name or Company" required />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="name@company.com" required />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject / Inquiry Type</label>
                <input type="text" id="subject" placeholder="e.g. PLC Panel Design, FAT Staging, Switchgear Upgrade" required />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message">Project Requirements / RFQ Details</label>
                <textarea id="message" rows="5" placeholder="Please describe your automation, panel assembly, or E&I requirements..." required></textarea>
              </div>
              
              <button type="submit" className={styles.submitBtn}>
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Trust & Slogan Banner (PDF Page 13) */}
      <section className={`section-dark ${styles.sloganSection}`}>
        <div className="container">
          <div className={styles.sloganHeader}>
            <h4>BUILDING SMARTER INDUSTRIAL OPERATIONS TOGETHER</h4>
            <h2>COMPLETE AUTOMATION SOLUTIONS. RELIABLE PARTNER. LASTING IMPACT.</h2>
            <p>From concept and engineering to installation, commissioning, and long-term support, ACS delivers reliable automation and control solutions.</p>
          </div>

          <div className={styles.trustRow}>
            <div className={styles.trustItem}><span>✓</span> Quality Assured</div>
            <div className={styles.trustItem}><span>✓</span> Expert Engineering Team</div>
            <div className={styles.trustItem}><span>✓</span> End-to-End Solutions</div>
            <div className={styles.trustItem}><span>✓</span> Fast Response & Support</div>
            <div className={styles.trustItem}><span>✓</span> Trusted by Industries</div>
            <div className={styles.trustItem}><span>✓</span> Commitment to Excellence</div>
          </div>

          <div className={styles.bottomSlogan}>
            <strong>AUTO-CONTROL SYNERGY SERVICES (ACS)</strong>
            <span>AUTOMATION TODAY. SMARTER TOMORROW.</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

