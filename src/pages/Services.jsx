import React from 'react';
import { Settings, Monitor, LayoutDashboard, Network, Radio, Wifi, Zap, Wrench, Thermometer, Cable, Cpu } from 'lucide-react';
import styles from './Services.module.css';

const Services = () => {
  const coreServices = [
    {
      id: 1,
      title: "PLC Automation Panels",
      desc: "Custom-engineered PLC panels with reliable components and clean wiring for precise control, seamless integration, and long-term performance. We use leading brands including Siemens, Allen-Bradley, Schneider Electric, and ABB.",
      icon: <Settings size={32} />
    },
    {
      id: 2,
      title: "SCADA & RTU System Development",
      desc: "Scalable SCADA & RTU solutions providing real-time monitoring, data acquisition, alarm management, and enhanced process visibility. Tailored to client requirements from standalone systems to enterprise-level deployments.",
      icon: <Monitor size={32} />
    },
    {
      id: 3,
      title: "HMI Design and Configuration",
      desc: "Intuitive and user-friendly HMI screens that provide actionable insights, simplify operations, and support better decision-making across the plant floor. We develop using FactoryTalk, WinCC, Wonderware, and Ignition platforms.",
      icon: <LayoutDashboard size={32} />
    },
    {
      id: 4,
      title: "Industrial Communication Networks",
      desc: "Robust communication architecture using industrial protocols — Profibus, Profinet, Modbus, Ethernet/IP, Foundation Fieldbus — to ensure high-speed and reliable data exchange across distributed systems.",
      icon: <Network size={32} />
    },
    {
      id: 5,
      title: "Remote Monitoring Solutions",
      desc: "Secure remote access and monitoring solutions that enable real-time visibility, reduced downtime, and improved operational control from anywhere in the world, using industry-standard encrypted communication.",
      icon: <Radio size={32} />
    },
    {
      id: 6,
      title: "Industrial IoT Integration",
      desc: "Connect devices and systems, collect critical operational data, and unlock advanced analytics for smarter, data-driven operations. We integrate IIoT platforms with existing plant assets and new greenfield projects.",
      icon: <Wifi size={32} />
    }
  ];

  const panelTypes = [
    { name: "PLC Panels", detail: "Siemens S7-300/400/1200/1500, Allen-Bradley, Schneider" },
    { name: "VFD / Drive Panels", detail: "Variable Frequency Drive panels for motor control" },
    { name: "DCS / ESD / F&G Cabinets", detail: "For process control, emergency shutdown and fire & gas" },
    { name: "MCC Panels", detail: "Motor Control Centres for industrial motor applications" },
    { name: "Marshalling Cabinets", detail: "DI/AI/AO/DO/RTD termination and marshalling" },
    { name: "Power Distribution Boards", detail: "LV PDB and MDB distribution panels" },
    { name: "Busbar Protection Panels", detail: "Protection relay panels for HV/LV systems" },
    { name: "Annunciator Panels", detail: "Audible and visual alarm annunciator systems" },
    { name: "Remote Terminal Units", detail: "RTU cabinets for SCADA and telemetry" },
    { name: "Network & Server Cabinets", detail: "Industrial network infrastructure racks" },
    { name: "Junction Boxes (ATEX)", detail: "Explosion-proof JBs and control stations" },
    { name: "Vibration Monitoring Cabinets", detail: "Machinery protection and vibration monitoring" },
  ];

  return (
    <div className={styles.servicesPage}>
      {/* Page Header with Background Image */}
      <div className={styles.pageHeader}>
        <div className={styles.pageHeaderBg} style={{ backgroundImage: "url('/images/header_services.jpg')" }} />
        <div className={styles.pageHeaderOverlay} />
        <div className={`container ${styles.pageHeaderContent}`}>
          <h1>Our Core Services</h1>
          <p>Smart automation solutions that improve operational efficiency</p>
        </div>
      </div>

      {/* Intro + Services List */}
      <section className="section-lg">
        <div className="container">
          <div className={styles.introGrid}>
            <div className={`${styles.introText} animate-fade-up`}>
              <h4 className="text-secondary" style={{ letterSpacing: '2px' }}>OUR EXPERTISE</h4>
              <h2 className="text-primary">PLC Automation & Control Systems</h2>
              <p>
                ACS designs, builds, and delivers smart automation solutions that improve operational efficiency, ensure reliability, and drive digital transformation across industries. Our engineering team brings deep expertise in PLC programming, system integration, and panel fabrication.
              </p>
              <p>
                From initial concept and design engineering through panel manufacture, Factory Acceptance Testing (FAT), field installation, testing, commissioning, and ongoing AMC support — we deliver complete turnkey automation solutions.
              </p>
              <img src="/images/services.jpg" alt="PLC Automation Panel" className={styles.introImage} />
            </div>

            <div className={`${styles.servicesList} animate-fade-up delay-200`}>
              {coreServices.map(service => (
                <div key={service.id} className={styles.serviceItem}>
                  <div className={styles.serviceIconWrapper}>{service.icon}</div>
                  <div className={styles.serviceContent}>
                    <h3>{service.id}. {service.title}</h3>
                    <p>{service.desc}</p>
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
            <h4 className="text-secondary" style={{ letterSpacing: '2px' }}>SCOPE OF EXPERTISE</h4>
            <h2>Engineered Panel Systems & Scope</h2>
            <p>Manufactured and assembled in our Dammam 2nd Industrial City facility to strict international quality standards.</p>
          </div>
          <div className={`${styles.panelGrid} animate-fade-up delay-200`}>
            {panelTypes.map((p, idx) => (
              <div key={idx} className={styles.panelCard}>
                <h4>{p.name}</h4>
                <p>{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Synergy Technology Capabilities & Engineering Services (PDF Page 04) */}
      <section className="section-lg">
        <div className="container">
          <div className={`${styles.sectionHeader} animate-fade-up`}>
            <h4 className="text-secondary" style={{ letterSpacing: '2px' }}>CAPABILITIES & SOLUTIONS</h4>
            <h2>Synergy Technology Engineering Capabilities</h2>
            <p>Delivering complete process automation from design drafting to advanced SIL-2 integration and reverse engineering.</p>
          </div>

          <div className={styles.capabilitiesGrid}>
            <div className={`${styles.capCol} animate-fade-up delay-100`}>
              <div className={styles.capHeader}>
                <Settings size={28} className="text-secondary" />
                <h3>Engineering Services</h3>
              </div>
              <ul className={styles.capList}>
                <li>Design engineering & drafting (AutoCAD) for Cabinets</li>
                <li>Engineering & drafting services for Vibration Monitoring</li>
                <li>PLC Engineering (SIL-2) and Integration Services</li>
                <li>DCS/F&G hardware Reverse Engineering for Yokogawa systems</li>
                <li>IO loading, Field JB mapping, cabinet design, wiring drawings, and loop drawings</li>
                <li>Fabrication and supply of operator consoles</li>
              </ul>
            </div>

            <div className={`${styles.capCol} animate-fade-up delay-200`}>
              <div className={styles.capHeader}>
                <Cpu size={28} className="text-primary" />
                <h3>Turnkey Solutions</h3>
              </div>
              <ul className={styles.capList}>
                <li>SIL-2 PLC on GE Intellution PLC platform</li>
                <li>F&G Mimic solutions based on OEM Partner DOMO</li>
                <li>System, marshalling, PDP design, sourcing, assembly wiring & dispatch solutions</li>
                <li>IO simulator design and supply</li>
                <li>Console design, procurement of console instruments, assembly and wiring</li>
                <li>Complete Hardware Engineering & Staging FAT</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Electrical & Instrumentation */}
      <section className="section-lg section-light">
        <div className="container">
          <div className={`${styles.sectionHeader} animate-fade-up`}>
            <h4 className="text-secondary" style={{ letterSpacing: '2px' }}>COMPREHENSIVE EXPERTISE</h4>
            <h2>Electrical & Instrumentation</h2>
            <p>Comprehensive E&I solutions tailored to meet our clients' most demanding project requirements.</p>
          </div>

          <div className={`${styles.eiGrid} animate-fade-up delay-200`}>
            <div className={styles.eiCard}>
              <Zap size={40} className="text-secondary" />
              <h3>High Voltage Electrical</h3>
              <p>We undertake complex HV electrical projects including switchgear replacement, cable pulling, and substation works for major clients such as Saudi Aramco and Saudi Electricity Company.</p>
              <ul>
                <li>13.4kV / 33kV Underground & Overhead Cable Works</li>
                <li>HV Switchgear Replacement & Testing</li>
                <li>Substation Installation & Commissioning</li>
                <li>Transformer Installation</li>
                <li>Power Plant to Substation Feeder Works</li>
              </ul>
            </div>
            <div className={styles.eiCard}>
              <Wrench size={40} className="text-secondary" />
              <h3>Low Voltage Electrical</h3>
              <p>Top-tier LV electrical services for industrial and commercial projects. We specialize in factories, healthcare facilities, warehouses, and industrial complexes.</p>
              <ul>
                <li>MDB / DB Panel Installation</li>
                <li>Cable Pulling & Termination</li>
                <li>UPS & Generator Installation</li>
                <li>Grounding & Lightning Protection</li>
                <li>Emergency & Normal Power Systems</li>
              </ul>
            </div>
            <div className={styles.eiCard}>
              <Thermometer size={40} className="text-secondary" />
              <h3>Instrumentation</h3>
              <p>Full instrumentation services including field instrument installation, calibration, loop checking and commissioning for process and control systems.</p>
              <ul>
                <li>Field Instrument Installation</li>
                <li>Control Valve Installation & Testing</li>
                <li>Instrument Loop Checking</li>
                <li>Calibration & Certification</li>
                <li>Hazardous Area Instrument Works (ATEX)</li>
              </ul>
            </div>
            <div className={styles.eiCard}>
              <Cable size={40} className="text-secondary" />
              <h3>Low Current Systems</h3>
              <p>High-quality low current system installations for residential, commercial, and industrial facilities across the Kingdom.</p>
              <ul>
                <li>Fire Alarm & Public Address Systems</li>
                <li>CCTV & Access Control</li>
                <li>Data, Telephone & Paging Systems</li>
                <li>Building Management Systems (BMS)</li>
                <li>SCADA Telemetry Networks</li>
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
              <h4 className="text-secondary" style={{ letterSpacing: '2px' }}>LIFECYCLE SUPPORT</h4>
              <h2>Annual Maintenance Contracts (AMC)</h2>
              <p>
                ACS offers comprehensive Annual Maintenance Contract services to ensure your automation and control systems continue to operate at peak performance. Our AMC programs are tailored to the specific needs of each client and facility.
              </p>
              <ul className={styles.amcList}>
                <li>Preventive maintenance schedules for all PLC, SCADA, and HMI systems</li>
                <li>24/7 emergency breakdown support</li>
                <li>Spare parts management and sourcing</li>
                <li>System health checks and performance reporting</li>
                <li>Software backup and version management</li>
                <li>On-site and remote support options</li>
              </ul>
            </div>
            <div className={styles.amcImage}>
              <img src="/images/amc_diagnostic.jpg" alt="ACS PLC Diagnostic & Testing" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

