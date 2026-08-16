import React from 'react';
import { CheckCircle2, Shield, Target, TrendingUp, Users, Award, Cpu, Factory, Zap } from 'lucide-react';
import styles from './About.module.css';

const About = () => {
  const clients = [
    "Saudi Aramco",
    "Saudi Electricity Company",
    "JHAH (John Hopkins Aramco Healthcare)",
    "Siemens",
    "SABIC",
    "Petro Rabigh",
    "Ma'aden",
    "Tasnee",
  ];

  return (
    <div className={styles.aboutPage}>
      {/* Page Header with Background Image */}
      <div className={styles.pageHeader}>
        <div className={styles.pageHeaderBg} style={{ backgroundImage: "url('/images/about.jpg')" }} />
        <div className={styles.pageHeaderOverlay} />
        <div className={`container ${styles.pageHeaderContent}`}>
          <h1>About ACS</h1>
          <p>Innovate. Integrate. Excel.</p>
        </div>
      </div>

      {/* Company Intro */}
      <section className="section-lg">
        <div className={`container ${styles.introGrid}`}>
          <div className={`${styles.introText} animate-fade-up`}>
            <h4 className="text-secondary" style={{ letterSpacing: '2px' }}>WHO WE ARE</h4>
            <h2 className="text-primary">Engineering Excellence</h2>
            <p>
              Auto-Control Synergy Services (ACS) is the system integration division of Redaa Developing Company (RDC), established in 2021 in the Kingdom of Saudi Arabia. We are a leading system integrator and a Saudi-based manufacturer and panel assembler of PLC/Drives-based Industrial Automation panels.
            </p>
            <p>
              We deliver complete end-to-end solutions for Automation, Control Systems, Instrumentation, Industrial Digitalization, Remote Monitoring and Management. With strong local execution capabilities and in-house engineering, ACS provides panel design engineering, assembling, FAT, field installations, testing & commissioning and AMC support for industrial projects across the Kingdom.
            </p>
            <p>
              ACS operates from its state-of-the-art workshop and panel fabrication facility located in the 2nd Industrial City, Dammam. Our factory is equipped with modern tooling and assembly infrastructure to support high-quality panel manufacturing for diverse industrial sectors.
            </p>
            <div className={styles.registration}>
              <strong>Commercial Registration (C.R.) No:</strong> 7023676492
            </div>
            <div className={styles.statsRow}>
              <div className={styles.stat}><span>2021</span><small>Established</small></div>
              <div className={styles.stat}><span>KSA</span><small>Based</small></div>
              <div className={styles.stat}><span>ISO</span><small>Certified</small></div>
              <div className={styles.stat}><span>E&I</span><small>Specialists</small></div>
            </div>
          </div>
          <div className={styles.introImage}>
            <img src="/images/facility.jpg" alt="ACS Panel Manufacturing Facility" />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-lg section-light">
        <div className={`container ${styles.mvGrid}`}>
          <div className={`${styles.mvCard} animate-fade-up delay-100`}>
            <div className={styles.mvIcon}><Target size={40} /></div>
            <h3>Our Mission</h3>
            <ul>
              <li><CheckCircle2 size={18} className="text-secondary" /> Expand operations through strategic partnerships with global partners.</li>
              <li><CheckCircle2 size={18} className="text-secondary" /> Meet community needs while promoting environmental sustainability and public safety.</li>
              <li><CheckCircle2 size={18} className="text-secondary" /> Facilitate partner investments and create lasting value.</li>
              <li><CheckCircle2 size={18} className="text-secondary" /> Deliver reliable automation solutions with zero-compromise on quality.</li>
            </ul>
            <p className={styles.mvSummary}>
              We aim to make a positive impact, drive growth, and deliver exceptional value to our stakeholders throughout the Kingdom and beyond.
            </p>
          </div>

          <div className={`${styles.mvCard} animate-fade-up delay-200`}>
            <div className={styles.mvIcon}><TrendingUp size={40} /></div>
            <h3>Our Vision</h3>
            <p>
              To be a leading integrated company with diversified and specialized activities in General Contracting, Trade, and Industry.
            </p>
            <p>
              We strive to be a prominent and influential presence in local, regional, and global markets. With multiple offices across the Kingdom, we are committed to meeting client needs with efficiency and excellence.
            </p>
            <p>
              ACS envisions becoming the foremost trusted partner for Industrial Automation and Electrical & Instrumentation solutions in Saudi Arabia.
            </p>
          </div>
        </div>
      </section>

      {/* Parent Company: Redaa Developing Company (RDC) Profile (PDF Page 06) */}
      <section className="section-lg">
        <div className="container">
          <div className={`${styles.sectionHeader} animate-fade-up`}>
            <h4 className="text-secondary" style={{ letterSpacing: '2px' }}>OUR PARENT COMPANY</h4>
            <h2>Redaa Developing Company (RDC)</h2>
            <div className={styles.accentLine}></div>
            <p>
              Redaa Developing Company Limited is a well-established organization with over 5 decades of experience in the Kingdom of Saudi Arabia. Rooted in development and innovation, RDC has expanded into diverse divisions, delivering excellence across multiple industries and disciplines.
            </p>
          </div>

          <div className={styles.parentGrid}>
            <div className={styles.parentCard}>
              <Factory size={28} className="text-primary" />
              <h4>Civil Construction</h4>
            </div>
            <div className={styles.parentCard}>
              <Cpu size={28} className="text-primary" />
              <h4>Industrial Mechanical</h4>
            </div>
            <div className={styles.parentCard}>
              <Zap size={28} className="text-primary" />
              <h4>Electrical & Instrumentation</h4>
            </div>
            <div className={styles.parentCard}>
              <Shield size={28} className="text-primary" />
              <h4>Operation & Maintenance</h4>
            </div>
            <div className={styles.parentCard}>
              <TrendingUp size={28} className="text-primary" />
              <h4>Trading Division</h4>
            </div>
            <div className={styles.parentCard}>
              <Users size={28} className="text-primary" />
              <h4>Project Support Services</h4>
            </div>
            <div className={styles.parentCard}>
              <Award size={28} className="text-primary" />
              <h4>Heavy Equipment Rental</h4>
            </div>
            <div className={styles.parentCard}>
              <CheckCircle2 size={28} className="text-primary" />
              <h4>Scaffolding Services</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Satisfaction Philosophy (PDF Page 09) */}
      <section className="section-lg section-light">
        <div className="container">
          <div className={`${styles.sectionHeader} animate-fade-up`}>
            <h4 className="text-secondary" style={{ letterSpacing: '2px' }}>CUSTOMER SATISFACTION</h4>
            <h2>Dedicated to Quality & Continuous Improvement</h2>
            <div className={styles.accentLine}></div>
            <p>
              Customer satisfaction is at the heart of everything we do. We are committed to delivering high-quality products and services that consistently meet and exceed our customers' expectations.
            </p>
          </div>

          <div className={styles.satisfactionGrid}>
            <div className={styles.satisfactionCard}>
              <Award size={36} className="text-secondary" />
              <h3>Quality & Excellence</h3>
              <p>Maintaining the highest manufacturing quality and continually refining our processes to exceed client expectations across all industrial sectors.</p>
            </div>
            <div className={styles.satisfactionCard}>
              <Users size={36} className="text-secondary" />
              <h3>People & Training</h3>
              <p>Conducting regular training sessions for all engineering and assembly staff, utilizing well-calibrated advanced machinery to manufacture custom solutions.</p>
            </div>
            <div className={styles.satisfactionCard}>
              <TrendingUp size={36} className="text-secondary" />
              <h3>Feedback & Improvement</h3>
              <p>Systematically recording customer feedback upon project completion to continually enhance engineering delivery and long-term client partnerships.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Commitments */}
      <section className="section-lg">
        <div className="container">
          <div className={`${styles.sectionHeader} animate-fade-up`}>
            <h4 className="text-secondary" style={{ letterSpacing: '2px' }}>OUR PROMISE</h4>
            <h2>Commitment to Excellence</h2>
            <p>Every project delivered to the highest standards of quality, safety, and performance.</p>
          </div>
          <div className={`${styles.commitmentsGrid} animate-fade-up delay-200`}>
            <div className={styles.commitmentCard}>
              <Shield size={32} className="text-primary" />
              <h4>Quality Assured</h4>
              <p>We follow rigorous quality standards and international best practices to ensure reliable, safe, and long-lasting solutions for every client.</p>
            </div>
            <div className={styles.commitmentCard}>
              <CheckCircle2 size={32} className="text-primary" />
              <h4>Safety First</h4>
              <p>Safety is at the core of everything we do — protecting people, assets, and the environment on every project site and in every facility.</p>
            </div>
            <div className={styles.commitmentCard}>
              <TrendingUp size={32} className="text-primary" />
              <h4>Performance Driven</h4>
              <p>We deliver solutions that measurably enhance productivity, reliability, and operational performance for our industrial clients.</p>
            </div>
            <div className={styles.commitmentCard}>
              <Users size={32} className="text-primary" />
              <h4>Client Success</h4>
              <p>Our success is measured by the success of our clients. We are committed to building long-term partnerships built on trust and results.</p>
            </div>
            <div className={styles.commitmentCard}>
              <Cpu size={32} className="text-primary" />
              <h4>In-House Engineering</h4>
              <p>Our team of experienced engineers provides end-to-end engineering from panel design through field commissioning with full in-house capability.</p>
            </div>
            <div className={styles.commitmentCard}>
              <Factory size={32} className="text-primary" />
              <h4>Local Manufacturing</h4>
              <p>Operating a state-of-the-art facility in Dammam's 2nd Industrial City, we assemble and test panels locally to support Vision 2030 goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications (PDF Page 10) */}
      <section className="section-lg section-dark">
        <div className="container">
          <div className={`${styles.sectionHeader} animate-fade-up`}>
            <h4 className="text-secondary" style={{ letterSpacing: '2px' }}>VALIDATED QUALITY</h4>
            <h2 style={{ color: 'white' }}>Our Certifications & Credentials</h2>
            <p style={{ color: 'rgba(255,255,255,0.9)' }}>ACS quality, environmental, and occupational safety standards are fully validated by accredited international bodies.</p>
          </div>
          <div className={styles.certGrid}>
            <div className={`${styles.certCard} animate-fade-up delay-100`}>
              <Award size={36} className="text-secondary" />
              <h4>ISO 9001:2015</h4>
              <p>Quality Management System for Design, Engineering, Integration & Assembly of DCS, ESD, F&G, PDB, IRP, RTU & PLC Control Panels.</p>
            </div>
            <div className={`${styles.certCard} animate-fade-up delay-150`}>
              <Award size={36} className="text-secondary" />
              <h4>ISO 14001:2015</h4>
              <p>Environmental Management System — demonstrating strict environmental sustainability and waste minimization in our manufacturing facility.</p>
            </div>
            <div className={`${styles.certCard} animate-fade-up delay-200`}>
              <Award size={36} className="text-secondary" />
              <h4>ISO 45001:2018</h4>
              <p>Occupational Health & Safety Management — ensuring world-class safety protocols and zero-incident working environments.</p>
            </div>
            <div className={`${styles.certCard} animate-fade-up delay-250`}>
              <Shield size={36} className="text-secondary" />
              <h4>Ministry of Commerce C.R.</h4>
              <p>Commercial Registration Certificate No. 7023676492 (Issued: 14/06/2021) — Registered for Industrial Automation & Control Systems in KSA.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Clients */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Trusted By Industry Leaders</h2>
            <p>We are proud to have worked with some of the most respected organizations in the Kingdom of Saudi Arabia.</p>
          </div>
          <div className={styles.clientsGrid}>
            {clients.map((client, idx) => (
              <div key={idx} className={styles.clientBadge}>{client}</div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

