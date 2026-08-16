import React from 'react';
import { CheckCircle, MapPin, Users, Calendar } from 'lucide-react';
import styles from './Projects.module.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Design & Construction of Jeddah Distribution Management Control Centre",
      client: "Saudi Electricity Company & Siemens",
      location: "Jeddah, KSA",
      scope: "Electrical, Low Voltage & Low Current Works",
      desc: "Full electrical, low voltage, and low current execution for the Jeddah Distribution Management Control Centre. Total plot area of 4,680 sqm and built-up area of 2,872 sqm."
    },
    {
      id: 2,
      title: "Yanbu NGL — High Voltage Cable Replacement",
      client: "Saudi Aramco",
      location: "Yanbu, KSA",
      scope: "High Voltage Electrical Works",
      desc: "Successfully completed project involving high voltage cable works: replacing 25km underground to overhead 13.4kV feeder cables pulling from power plant to substation switchgear and transformer with testing, termination, and commissioning under Saudi Aramco POD supervision."
    },
    {
      id: 3,
      title: "Upgrade Low Voltage Switchgear at Build. 54 Dhahran Health Center",
      client: "JHAH (Johns Hopkins Aramco Healthcare)",
      location: "Dhahran, KSA",
      scope: "Low Voltage Switchgear Replacement",
      desc: "Demolition of existing switchgear as per approved shutdown plan, and supply/installation of new switchgear with complete testing and commissioning alongside Aramco POD and JHAH PMT."
    },
    {
      id: 4,
      title: "Provide 230V Panel Board Project",
      client: "JHAH (Johns Hopkins Aramco Healthcare)",
      location: "Dhahran, KSA",
      scope: "LV Panel Installation & Power Supply",
      desc: "Demolishing existing equipment to make way for Electrical Rooms, providing power supply through dry-type transformers, installing normal and emergency 230V panels, room lighting, and power for fire alarm panels per electrical codes."
    },
    {
      id: 5,
      title: "Civil Works for Installation of Capacitors Banks (13 Substations)",
      client: "SEC / Siemens",
      location: "Eastern Province, KSA",
      scope: "Substation Infrastructure & Civil Works",
      desc: "Comprehensive civil works and foundations for the installation and integration of capacitor banks across 13 electrical substations in the Eastern Province."
    },
    {
      id: 6,
      title: "FMS (Flow Meter Skid) Automation & Control",
      client: "Honeywell",
      location: "KSA",
      scope: "Flow Meter Skid Integration",
      desc: "Integration, instrumentation hook-up, wiring, and commissioning support for high-accuracy industrial Flow Meter Skids (FMS)."
    },
    {
      id: 7,
      title: "Excavation for FOC 10km & Cabinet Installation",
      client: "Detesd (I.T.O)",
      location: "FDT#7, AL-Khaledia, Dammam, KSA",
      scope: "Fiber Optic Infrastructure",
      desc: "10km FOC excavation, installation of cabinets, U-Gard's OBD's, M.H & H.H duct laying backfilling with concrete, milling/paving, and fiber splicing."
    },
    {
      id: 8,
      title: "Fiber Optic Infrastructure & Cabinet Installation",
      client: "I.T.C - CCS",
      location: "KSA",
      scope: "FOC Network Deployment",
      desc: "Excavation for FOC, installation of cabinets, U-Gard's OBD's, M.H & H.H duct laying, backfilling with concrete, milling/paving, and FOC termination/splicing."
    },
    {
      id: 9,
      title: "Dawiyat Telecom FOC Infrastructure Deployment",
      client: "Dawiyat Telecom - CCS",
      location: "KSA",
      scope: "Telecom FOC Infrastructure",
      desc: "Excavation for FOC, installation of cabinets, U-Gard's OBD's, duct laying, backfilling with concrete, milling and paving, and fiber optic splicing."
    },
    {
      id: 10,
      title: "STC National Guard Project FOC Deployment",
      client: "Ericsson",
      location: "Dammam, KSA",
      scope: "STC National Guard FOC Deployment",
      desc: "FOC excavation, cabinet installations, U-Gard's OBD's, duct laying with concrete backfill, milling and paving, and precision fiber splicing in M.H., H.H & OBD's."
    }
  ];

  const panelSolutions = [
    "PLC Panels (Siemens, Allen-Bradley, Schneider)",
    "Busbar Protection Panels",
    "VFD / Variable Frequency Drive Panels",
    "Transformer Protection Panels",
    "Annunciator Panels",
    "DCS / ESD / F&G System Cabinets",
    "Marshalling Cabinets (DI/AI/AO/DO/RTD)",
    "Power Distribution Cabinets (PDB)",
    "Network & Server Cabinets",
    "Remote Terminal Units (RTU)",
    "Junction Boxes & Control Stations (ATEX)",
    "IRP Cabinets",
    "Vibration Monitoring System Cabinets"
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
