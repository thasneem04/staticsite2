import React from 'react';
import { CheckCircle, MapPin, Users, Calendar } from 'lucide-react';
import styles from './Projects.module.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Jeddah Distribution Management Control Centre",
      client: "Saudi Electricity Company & Siemens",
      location: "Jeddah, KSA",
      scope: "Electrical, Low Voltage & Low Current Works",
      desc: "Full electrical and low current works for the Jeddah Distribution Management Control Centre. Total plot area of 4,680 sqm with a built-up area of 2,872 sqm. Works included complete electrical installation, low current systems including fire alarm, CCTV, access control, and BMS."
    },
    {
      id: 2,
      title: "Yanbu NGL — High Voltage Cable Replacement",
      client: "Saudi Aramco",
      location: "Yanbu Industrial City, KSA",
      scope: "High Voltage Electrical Works",
      desc: "Successfully completed a major HV electrical project involving the replacement of 25km of underground-to-overhead 13.4kV feeder cables from the power plant to the substation-specific switchgear. This critical project was delivered on schedule with no HSE incidents."
    },
    {
      id: 3,
      title: "LV Switchgear Upgrade at Building 54",
      client: "JHAH (John Hopkins Aramco Healthcare)",
      location: "Dhahran, KSA",
      scope: "Low Voltage Switchgear Replacement",
      desc: "Demolition of existing LV switchgear and installation of new switchgear with complete testing and commissioning. Works coordinated with Aramco POD and JHAH PMT. Project executed with full plant operational continuity maintained throughout the switchover."
    },
    {
      id: 4,
      title: "230V Panel Board Replacement Project",
      client: "JHAH (John Hopkins Aramco Healthcare)",
      location: "Dhahran, KSA",
      scope: "LV Panel Installation & Commissioning",
      desc: "Demolition of existing LV equipment, installation of dry-type transformers for power supply, and installation of normal and emergency 230V panel boards. Complete testing, commissioning, and power-up performed with full documentation and client handover."
    },
    {
      id: 5,
      title: "Industrial Automation Panel Supply — SABIC Plant",
      client: "SABIC",
      location: "Jubail Industrial City, KSA",
      scope: "PLC Panel Manufacture & FAT",
      desc: "Design, manufacture, and Factory Acceptance Testing of PLC-based automation panels for SABIC's petrochemical facility. Panels included Siemens S7-1500 PLC systems, integrated SCADA communication, and full instrumentation termination marshalling."
    },
    {
      id: 6,
      title: "DCS Marshalling Cabinet Supply",
      client: "Petro Rabigh",
      location: "Rabigh, KSA",
      scope: "DCS Cabinet Fabrication & FAT",
      desc: "Engineering, fabrication, and FAT of DCS Marshalling Cabinets (DI/AI/AO/DO/RTD) for Petro Rabigh refinery expansion. All cabinets built to ARAMCO engineering standards with full ATEX component compliance."
    }
  ];

  const panelSolutions = [
    "PLC Panels (Siemens, Allen-Bradley, Schneider)",
    "VFD / Variable Speed Drive Panels",
    "DCS / ESD / F&G System Cabinets",
    "Marshalling Cabinets (DI/AI/AO/DO/RTD)",
    "Busbar & Transformer Protection Panels",
    "Power Distribution Boards (PDB / MDB)",
    "Annunciator Panels",
    "Remote Terminal Unit (RTU) Cabinets",
    "Network & Server Cabinets",
    "Junction Boxes & Control Stations (ATEX)",
    "IRP Cabinets",
    "Vibration Monitoring System Cabinets",
  ];

  return (
    <div className={styles.projectsPage}>
      {/* Page Header with Background Image */}
      <div className={styles.pageHeader}>
        <div className={styles.pageHeaderBg} style={{ backgroundImage: "url('/images/header_projects.jpg')" }} />
        <div className={styles.pageHeaderOverlay} />
        <div className={`container ${styles.pageHeaderContent}`}>
          <h1>Projects & Expertise</h1>
          <p>Delivering high-quality automation and control system solutions across the Kingdom</p>
        </div>
      </div>

      {/* Projects Showcase */}
      <section className="section-lg">
        <div className="container">
          <div className={`${styles.sectionHeader} animate-fade-up`}>
            <h4 className="text-secondary" style={{ letterSpacing: '2px' }}>PROVEN TRACK RECORD</h4>
            <h2 className="text-primary">Notable Projects</h2>
            <p>ACS has a proven track record of successfully completing numerous large-scale and complex projects for Saudi Arabia's most prestigious clients.</p>
          </div>

          {/* Featured Banner */}
          <div className={styles.featuredProject}>
            <div className={styles.featuredImageWrapper}>
              <img src="/images/projects.jpg" alt="Industrial Project Site" className={styles.featuredImage} />
            </div>
            <div className={styles.featuredContent}>
              <div className={styles.tag}>Major Infrastructure</div>
              <h3>Large-Scale Industrial Installations Across the Kingdom</h3>
              <p>
                Auto-Control Synergy Services has partnered with industry leaders including Saudi Aramco, Saudi Electricity Company, SABIC, JHAH, Petro Rabigh, Siemens, and more — delivering complex electrical, instrumentation, and automation projects on time and to the highest quality standards.
              </p>
              <div className={styles.featuredStats}>
                <div><strong>25km+</strong><span>HV Cable Works</span></div>
                <div><strong>4,680m²</strong><span>Control Centre</span></div>
                <div><strong>Multiple</strong><span>Saudi Aramco Projects</span></div>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <div key={project.id} className={`${styles.projectCard} animate-fade-up`} style={{ animationDelay: `${index * 100}ms` }}>
                <div className={styles.projectMeta}>
                  <span className={styles.projectScope}>{project.scope}</span>
                  <span className={styles.projectLocation}><MapPin size={14} /> {project.location}</span>
                </div>
                <h3>{project.title}</h3>
                <div className={styles.client}><Users size={14} /> {project.client}</div>
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
            <h4 className="text-secondary" style={{ letterSpacing: '2px' }}>MANUFACTURING</h4>
            <h2>Our Panel Solutions</h2>
            <p>
              ACS manufactures and assembles a comprehensive range of custom control panels and cabinets at our state-of-the-art facility in Dammam's 2nd Industrial City. Every panel is built to client specifications, engineered to international standards, and fully tested before delivery.
            </p>
            <p>
              We support leading automation brands including Siemens, Allen-Bradley (Rockwell), Schneider Electric, ABB, and Yokogawa.
            </p>
            <ul className={styles.panelList}>
              {panelSolutions.map((panel, idx) => (
                <li key={idx}><CheckCircle size={18} className="text-secondary" /> {panel}</li>
              ))}
            </ul>
          </div>
          <div className={styles.expertiseBox}>
            <h3>Factory Capabilities</h3>
            <ul className={styles.expertiseList}>
              <li>Panel Design Engineering (AutoCAD Electrical / EPLAN)</li>
              <li>Panel Fabrication & Assembly</li>
              <li>Cable Dressing & Wire Ferrule Numbering</li>
              <li>Component Mounting & Testing</li>
              <li>Factory Acceptance Testing (FAT)</li>
              <li>PLC / HMI Programming & Configuration</li>
              <li>SCADA Integration & Loop Testing</li>
              <li>Final Documentation & As-Built Drawings</li>
              <li>Packaging & Logistics to Site</li>
              <li>Site Installation & SAT</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
